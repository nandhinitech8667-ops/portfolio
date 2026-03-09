from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")

@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.json
    name = data["name"]
    email = data["email"]
    message = data["message"]

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(EMAIL, PASSWORD)

        subject = f"Portfolio Contact from {name}"
        body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"

        msg = f"Subject: {subject}\n\n{body}"

        server.sendmail(EMAIL, EMAIL, msg)
        server.quit()

        return jsonify({"success": True})

    except Exception as e:
        print("EMAIL ERROR:", e)
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)