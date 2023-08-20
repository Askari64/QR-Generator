import QRCode from "react-qr-code";

function Qr(props: { size: number | undefined; value: string }) {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}
    >
      <QRCode
        size={props.size}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={props.value}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}

export default Qr;
