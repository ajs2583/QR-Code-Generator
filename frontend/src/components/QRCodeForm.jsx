import React, { useState } from "react";
import axios from "axios";

function QRCodeForm({ setQrCodeUrl }) {
  // State for user input
  const [inputText, setInputText] = useState("");
  // State for loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to send request to Flask
  const generateQRCode = async () => {
    // Validate input
    if (!inputText.trim()) {
      setError("Please enter text or a URL.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send POST request to Flask API
      const response = await axios.post("http://127.0.0.1:5000/generate_qr", {
        text: inputText,
      });

      // Update the QR code URL state in App.jsx
      setQrCodeUrl(response.data.qr_code_url);
    } catch (err) {
      setError("Failed to generate QR code. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">Enter Text or URL</h2>
      
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type here..."
        className="border border-gray-300 p-2 rounded w-full mb-3"
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={generateQRCode}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate QR Code"}
      </button>
    </div>
  );
}

export default QRCodeForm;
