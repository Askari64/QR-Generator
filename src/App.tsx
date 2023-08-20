import Qr from "./qrcode"; // Import your QR code component
import { useState } from "react"; // Import the useState hook
import "./App.css"; // Import your CSS file
import html2canvas from "html2canvas"; // Import the html2canvas library

function App() {
  // State for holding the input value
  const [value, setValue] = useState("");

  // Function to handle downloading QR code as PNG
  const downloadQRAsPNG = () => {
    // Select the QR code container by class name
    const qrElement = document.querySelector(".qr-code") as HTMLElement;

    // Proceed if the QR code container is found
    if (qrElement) {
      // Use html2canvas to convert the QR code to a canvas
      html2canvas(qrElement).then((canvas) => {
        // Convert canvas to PNG data URL
        const pngData = canvas.toDataURL("image/png");

        // Create a link to trigger the download
        const link = document.createElement("a");
        link.href = pngData;
        link.download = "qr_code.png";
        link.click();
      });
    }
  };

  // Check if the input value is empty or only contains whitespace
  const isInputEmpty = value.trim() === "";

  return (
    <>
      {/* QR Generator section */}
      <section>
        <h1>QR Generator</h1>
        <p>
          Generate your never-expiring <span id="highlight">QR Code</span>
          <br />
          <span id="info">Information</span> - Maximum input value can not
          exceed 2036 characters
        </p>
      </section>

      {/* Input container */}
      <div className="InputContainer">
        <input
          className="input"
          type="string"
          placeholder="Enter Value"
          maxLength={2036}
          onChange={(e) => {
            setValue(e.target.value); // Update input value in state
          }}
        />
      </div>

      {/* QR code display */}
      <div className="qr-code">
        <Qr value={value} /> {/* Pass input value to QR code component */}
      </div>

      {/* Download button */}
      <button
        className="button"
        onClick={downloadQRAsPNG}
        disabled={isInputEmpty} // Disable button if input is empty
      >
        <span>Download</span>
      </button>
    </>
  );
}

export default App;
