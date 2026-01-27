# import smtplib
# from email.message import EmailMessage
# import os
# from dotenv import load_dotenv

# # Load environment variables from .env
# load_dotenv()

# # Configuration
# SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
# SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
# SMTP_USERNAME = os.getenv("SMTP_USERNAME")
# SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
# FROM_EMAIL = os.getenv("FROM_EMAIL", SMTP_USERNAME)

# # Recipient (use your own email to test)
# TO_EMAIL = "pradeepkumar37477@gmail.com"  # <-- Change this to your test email

# # Fake result data for testing
# result = {
#     "status": "abnormal",
#     "confidence": 91,
#     "condition": "Atrial Fibrillation",
#     "description": "Irregular rhythm detected"
# }

# # Create the message
# msg = EmailMessage()
# msg["Subject"] = f"ECG Report: {result['condition']}"
# msg["From"] = FROM_EMAIL
# msg["To"] = TO_EMAIL

# # Text content
# msg.set_content(f"""
# ECG Analysis Report:

# Status: {result['status']}
# Confidence: {result['confidence']}%
# Condition: {result['condition']}
# Description: {result['description']}

# Please consult a healthcare professional.
# """)

# # HTML content
# msg.add_alternative(f"""\
# <html>
#   <body>
#     <h2 style="color: #2563eb;">ECG Analysis Report</h2>
#     <p><strong>Status:</strong> {result['status']}</p>
#     <p><strong>Confidence:</strong> {result['confidence']}%</p>
#     <p><strong>Condition:</strong> {result['condition']}</p>
#     <p><strong>Description:</strong> {result['description']}</p>
#     <p style="color: #6b7280;"><em>This is an automated report. Not a substitute for medical advice.</em></p>
#   </body>
# </html>
# """, subtype='html')

# # Try sending email
# try:
#     with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=10) as server:
#         server.starttls()
#         server.login(SMTP_USERNAME, SMTP_PASSWORD)
#         server.send_message(msg)
#         print(f"✅ Email sent to {TO_EMAIL}")
# except smtplib.SMTPAuthenticationError as e:
#     print(f"❌ Authentication Error: {e}")
# except smtplib.SMTPException as e:
#     print(f"❌ SMTP Error: {e}")
# except Exception as e:
#     print(f"❌ General Error: {e}")