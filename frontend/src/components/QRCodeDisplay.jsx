import React, { useState } from "react";

function QRCodeDisplay({ qrCodeUrl }) {
  // State for user-defined filename
  const [fileName, setFileName] = useState("");

  // Extract the original filename from the qrCodeUrl
  const extractedFilename = qrCodeUrl.split("/").pop(); // Gets "randomstring.png"

  // Modify the URL to use Flask's /download_qr endpoint
  const downloadUrl = qrCodeUrl.replace("/static/qrcodes/", "/download_qr/");

  // Handle filename input change
  const handleInputChange = (event) => {
    setFileName(event.target.value);
  };

  // Function to fetch and download the QR code with the correct filename
  const downloadQRCode = async () => {
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();

      // Use user input filename, or fallback to the randomized filename
      const finalFilename = fileName.trim() ? `${fileName}.png` : extractedFilename;

      // Create a download link and trigger it
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = finalFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-lg font-bold mb-2">Generated QR Code</h2>
      <img src={qrCodeUrl} alt="QR Code" className="w-40 h-40 mx-auto" />

      {/* Input Field for Filename */}
      <input
        type="text"
        placeholder="Enter filename (optional)"
        value={fileName}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded w-full mt-3 text-center"
      />

      {/* Download Button */}
      <button
        onClick={downloadQRCode}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mt-3"
      >
        Download QR Code
      </button>
    </div>
  );
}

export default QRCodeDisplay;
