# QR Code Generator

A simple **QR Code Generator** built with **Flask** (backend) and **React** (frontend).

## Features
- Generate QR codes from user input
- Download QR codes with a custom filename
- Automatically delete old QR codes to prevent clutter

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ajs2583/qr-code-generator.git
cd qr-code-generator
```

### 2. Run the Setup Script
For macOS/Linux users:
```bash
./setup.sh
```
For Windows users:
```batch
setup.bat
```

### 3. Start the App
After setup, run:
```bash
# Start the backend
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python app.py

# Start the frontend
cd frontend
npm run dev
```

---

## Folder Structure
```
QR_Code_Generator/
│── backend/
│   ├── app.py
│   ├── qrcode_generator.py
│   ├── static/qrcodes/
│── frontend/
│   ├── src/components/
│   ├── public/
│── setup.sh (Setup for macOS/Linux)
│── setup.bat (Setup for Windows)
│── .gitignore
│── README.md
│── requirements.txt
```

---

## Usage
1. Open the React app in your browser (`http://127.0.0.1:5173`).
2. Enter text or a URL in the input field.
3. Click **"Generate QR Code"**.
4. The QR code will be displayed.
5. Optionally, enter a custom filename and click **"Download QR Code"**.
6. The file will be downloaded with the chosen filename.

---

## Technologies Used
- **Backend**: Flask, Flask-CORS, qrcode
- **Frontend**: React, TailwindCSS, Axios
- **Dependencies Managed With**: `pip` (Python), `npm` (Node.js)

---

## Contributing
If you’d like to contribute, feel free to submit a pull request.

---

## License
This project is open-source under the MIT License.

