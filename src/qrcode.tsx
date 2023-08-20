import QRCode from "react-qr-code";

function Qr(props: { value: string}) {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}
    >
      <QRCode
        style={{ height: "auto", maxWidth: "100%", width: "auto" }}
        value={props.value}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}

export default Qr;
