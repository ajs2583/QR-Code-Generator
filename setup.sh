#!/bin/bash

echo "🚀 Setting up the QR Code Generator..."

# Set up the backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

# Set up the frontend
cd frontend
npm install
cd ..

echo "✅ Setup complete! To run the app:"
echo "1️⃣ Start the backend: cd backend && source venv/bin/activate && python app.py"
echo "2️⃣ Start the frontend: cd frontend && npm run dev"
