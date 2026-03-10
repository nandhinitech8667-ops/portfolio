from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running"

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    try:
        sender = "nandhinisakthi417@gmail.com"
        receiver = "nandhinisakthi417@gmail.com"

        msg = MIMEText(f"Name: {name}\nEmail: {email}\nMessage: {message}")
        msg["Subject"] = "Portfolio Contact"
        msg["From"] = sender
        msg["To"] = receiver

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender, "empzienscvvbvdlm")   # Gmail App Password
        server.send_message(msg)
        server.quit()

        return jsonify({"success": True}), 200

    except Exception as e:
        return jsonify({"success": False,"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)