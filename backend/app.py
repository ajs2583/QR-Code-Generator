from flask import Flask, request, jsonify, send_from_directory
from qrcode_generator import create_qrcode
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


# CONSTANTS
QR_CODE_FOLDER = "static/qrcodes/"


@app.route("/generate_qr", methods=["POST"])
def qr_code():
    try:
        data = request.get_json()
        if "text" not in data:
            return jsonify({"error": "No text provided"}), 400

        user_input = data["text"]

        qr_filename = create_qrcode(user_input)

        qr_url = f"http://127.0.0.1:5000/{QR_CODE_FOLDER}{qr_filename}"

        return jsonify({"qr_code_url": qr_url}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/static/qrcodes/<filename>")
def serve_qr_code(filename):
    return send_from_directory(QR_CODE_FOLDER, filename)


@app.route("/download_qr/<filename>")
def download_qr(filename):
    return send_from_directory("static/qrcodes", filename, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
