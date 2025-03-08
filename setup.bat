@echo off
echo 🚀 Setting up the QR Code Generator...

:: Set up the backend
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
cd ..

:: Set up the frontend
cd frontend
npm install
cd ..

echo ✅ Setup complete!
echo 1️⃣ Start the backend: cd backend && venv\Scripts\activate && python app.py
echo 2️⃣ Start the frontend: cd frontend && npm run dev
pause
