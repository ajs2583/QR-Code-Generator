import React, { useState } from "react";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  // State to store the QR code URL
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      
      {/* QR Code Input Form */}
      <QRCodeForm setQrCodeUrl={setQrCodeUrl} />

      {/* QR Code Display */}
      {qrCodeUrl && <QRCodeDisplay qrCodeUrl={qrCodeUrl} />}
      
    </div>
  );
}

export default App;
