import Qr from "./qrcode";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
    <section>
        <h1>QR Generator</h1>
    <p>Enter the text you want to generate a <span id="highlight">QR Code</span> for.</p>
    <p><span id="info">Information</span> - Maximum input value can not exceed 2036 characters</p>
    </section>
  
    <div className="InputContainer">
    <input
      className="input"
        type="string"
        placeholder="Enter Value"
        maxLength={2036}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
      
      <Qr size={500} value={value} />

      <button className="button" ><span>Download</span></button>
    </>
  );
}

export default App;
