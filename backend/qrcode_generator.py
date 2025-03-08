import qrcode
import random
import string
import os
import time

# CONSTANTS
MIN_LENGTH = 8
MAX_LENGTH = 12
FILE_PATH = "static/qrcodes/"
EXPIRATION_TIME = 24 * 3600 

def create_qrcode(data):
    # Ensure the directory exists
    os.makedirs(FILE_PATH, exist_ok=True)

    # Generate a random filename
    length = random.randint(MIN_LENGTH, MAX_LENGTH)
    str_characters = string.ascii_letters + string.digits
    generated_string = "".join(random.choice(str_characters) for _ in range(length))
    file_name = f"{generated_string}.png"

    # Construct full file path
    file_path = os.path.join(FILE_PATH, file_name)

    # Generate and save the QR code
    img = qrcode.make(data)
    img.save(file_path)

    return file_name  

def clear_old_qrcodes():
    current_time = time.time()

    for filename in os.listdir(FILE_PATH):
        file_path = os.path.join(FILE_PATH, filename)
        if os.path.isfile(file_path):
            file_age = current_time - os.path.getmtime(file_path)
            if file_age > EXPIRATION_TIME:
                os.remove(file_path)