# # report_utils.py
# from fpdf import FPDF # type: ignore
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from email.mime.application import MIMEApplication

# def generate_pdf_report(user_name, prediction_result, output_path):
#     pdf = FPDF()
#     pdf.add_page()
#     pdf.set_font("Arial", size=14)
#     pdf.cell(200, 10, txt="Heart Disease Prediction Report", ln=True, align='C')
#     pdf.ln(10)
#     pdf.cell(200, 10, txt=f"Name: {user_name}", ln=True)
#     pdf.cell(200, 10, txt=f"Prediction Result: {prediction_result}", ln=True)
#     pdf.output(output_path)

# def send_email_with_attachment(receiver_email, subject, body, attachment_path):
#     sender_email = "your_email@gmail.com"
#     sender_password = "your_app_password"  # Use an app password

#     msg = MIMEMultipart()
#     msg['From'] = sender_email
#     msg['To'] = receiver_email
#     msg['Subject'] = subject
#     msg.attach(MIMEText(body, 'plain'))

#     with open(attachment_path, "rb") as f:
#         part = MIMEApplication(f.read(), _subtype="pdf")
#         part.add_header('Content-Disposition', 'attachment', filename="Heart_Report.pdf")
#         msg.attach(part)

#     with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
#         server.login(sender_email, sender_password)
#         server.send_message(msg)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from werkzeug.utils import secure_filename
# from reportlab.pdfgen import canvas
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.application import MIMEApplication
# from email.mime.text import MIMEText
# import os

# app = Flask(__name__)
# CORS(app)

# UPLOAD_FOLDER = "uploads"
# REPORT_FOLDER = "reports"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(REPORT_FOLDER, exist_ok=True)

# def dummy_predict(file_path):
#     return "Abnormal", 87.5, "Signs of possible arrhythmia"

# def generate_pdf(email, status, confidence, description, filepath):
#     c = canvas.Canvas(filepath)
#     c.setFont("Helvetica", 14)
#     c.drawString(50, 800, "ECG Prediction Report")
#     c.setFont("Helvetica", 12)
#     c.drawString(50, 760, f"Email: {email}")
#     c.drawString(50, 740, f"Status: {status}")
#     c.drawString(50, 720, f"Confidence: {confidence}%")
#     c.drawString(50, 700, f"Description: {description}")
#     c.save()

# def send_email_with_attachment(to_email, subject, body, attachment_path):
#     from_email = "your_email@gmail.com"
#     password = "your_app_password"  # Use an app password

#     msg = MIMEMultipart()
#     msg["From"] = from_email
#     msg["To"] = to_email
#     msg["Subject"] = subject

#     msg.attach(MIMEText(body, "plain"))

#     with open(attachment_path, "rb") as f:
#         part = MIMEApplication(f.read(), Name=os.path.basename(attachment_path))
#         part['Content-Disposition'] = f'attachment; filename="{os.path.basename(attachment_path)}"'
#         msg.attach(part)

#     with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
#         server.login(from_email, password)
#         server.send_message(msg)

# @app.route('/predict', methods=['POST'])
# def predict():
#     file = request.files['file']
#     email = request.form['email']

#     filename = secure_filename(file.filename)
#     file_path = os.path.join(UPLOAD_FOLDER, filename)
#     file.save(file_path)

#     status, confidence, description = dummy_predict(file_path)

#     report_path = os.path.join(REPORT_FOLDER, f"{email}_report.pdf")
#     generate_pdf(email, status, confidence, description, report_path)

#     send_email_with_attachment(
#         to_email=email,
#         subject="Your ECG Report",
#         body=f"Your prediction is: {status} ({confidence}%). Description: {description}",
#         attachment_path=report_path
#     )

#     return jsonify({
#         "status": status,
#         "confidence": confidence,
#         "description": description
#     })

# if __name__ == "__main__":
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from werkzeug.utils import secure_filename
# from reportlab.pdfgen import canvas
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.application import MIMEApplication
# from email.mime.text import MIMEText
# import os

# app = Flask(__name__)
# CORS(app)

# UPLOAD_FOLDER = "uploads"
# REPORT_FOLDER = "reports"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(REPORT_FOLDER, exist_ok=True)

# # Function for generating dummy prediction (you can replace it with your model prediction)
# def dummy_predict(file_path):
#     # Dummy prediction logic
#     return "Abnormal", 87.5, "Signs of possible arrhythmia"

# # Function to generate PDF report
# def generate_pdf(email, status, confidence, description, filepath):
#     c = canvas.Canvas(filepath)
#     c.setFont("Helvetica", 14)
#     c.drawString(50, 800, "ECG Prediction Report")
#     c.setFont("Helvetica", 12)
#     c.drawString(50, 760, f"Email: {email}")
#     c.drawString(50, 740, f"Status: {status}")
#     c.drawString(50, 720, f"Confidence: {confidence}%")
#     c.drawString(50, 700, f"Description: {description}")
#     c.save()

# # Function to send email with attachment
# def send_email_with_attachment(to_email, subject, body, attachment_path):
#     from_email = "your_email@gmail.com"
#     password = os.getenv("GMAIL_APP_PASSWORD")  # Load password from environment variable

#     msg = MIMEMultipart()
#     msg["From"] = from_email
#     msg["To"] = to_email
#     msg["Subject"] = subject

#     msg.attach(MIMEText(body, "plain"))

#     with open(attachment_path, "rb") as f:
#         part = MIMEApplication(f.read(), Name=os.path.basename(attachment_path))
#         part['Content-Disposition'] = f'attachment; filename="{os.path.basename(attachment_path)}"'
#         msg.attach(part)

#     try:
#         with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
#             server.login(from_email, password)
#             server.send_message(msg)
#     except Exception as e:
#         raise ValueError(f"Error sending email: {str(e)}")

# # API endpoint for prediction and sending the report
# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400

#     file = request.files['file']
#     email = request.form.get('email')

#     if not email:
#         return jsonify({"error": "Email is required"}), 400

#     if file.filename == '':
#         return jsonify({"error": "No file selected"}), 400

#     try:
#         filename = secure_filename(file.filename)
#         file_path = os.path.join(UPLOAD_FOLDER, filename)
#         file.save(file_path)

#         # Dummy prediction, replace with actual prediction logic
#         status, confidence, description = dummy_predict(file_path)

#         # Generate PDF report
#         report_path = os.path.join(REPORT_FOLDER, f"{email}_report.pdf")
#         generate_pdf(email, status, confidence, description, report_path)

#         # Send the report via email
#         send_email_with_attachment(
#             to_email=email,
#             subject="Your ECG Report",
#             body=f"Your prediction is: {status} ({confidence}%). Description: {description}",
#             attachment_path=report_path
#         )

#         # Return prediction results
#         return jsonify({
#             "status": status,
#             "confidence": confidence,
#             "description": description
#         })

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)

#//---------------------------------------------------------------
# from fastapi import FastAPI, UploadFile, Form
# from fastapi.responses import JSONResponse
# from pydantic import EmailStr
# import shutil
# import smtplib
# from email.message import EmailMessage

# app = FastAPI()

# @app.post("/predict")
# async def predict(file: UploadFile, email: EmailStr = Form(...)):
#     # Save uploaded file
#     with open("temp_ecg.jpg", "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     # Simulated prediction
#     result = {
#         "status": "abnormal",
#         "confidence": 87,
#         "condition": "Atrial Fibrillation",
#         "description": "Irregular and often rapid heart rhythm.",
#     }

#     # Email report
#     send_email_report(email, result)

#     return JSONResponse(content=result)

# def send_email_report(to_email: str, result: dict):
#     msg = EmailMessage()
#     msg["Subject"] = "ECG Report"
#     msg["From"] = "your@example.com"
#     msg["To"] = to_email
#     msg.set_content(
#         f"""ECG Prediction Report:

# Status: {result['status']}
# Confidence: {result['confidence']}%
# Condition: {result['condition']}
# Description: {result['description']}

# This is an AI-generated result. Please consult a doctor for confirmation."""
#     )

#     with smtplib.SMTP("smtp.gmail.com", 587) as server:
#         server.starttls()
#         server.login("your@example.com", "your-app-password")
#         server.send_message(msg)

# #------------------------------------------------------------------

# # from fastapi import FastAPI, UploadFile, Form, HTTPException
# # from fastapi.responses import JSONResponse
# # from fastapi.middleware.cors import CORSMiddleware
# # from pydantic import EmailStr
# # import shutil
# # import smtplib
# # from email.message import EmailMessage
# # from typing import Optional

# # app = FastAPI()

# # # Add CORS middleware
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # @app.post("/predict")
# # async def predict(
# #     file: UploadFile,
# #     email: EmailStr = Form(...)
# # ):
# #     try:
# #         # Save uploaded file
# #         with open("temp_ecg.jpg", "wb") as buffer:
# #             shutil.copyfileobj(file.file, buffer)

# #         # Simulated prediction - replace with your actual model
# #         result = {
# #             "status": "abnormal",
# #             "confidence": 87,
# #             "condition": "Atrial Fibrillation",
# #             "description": "Irregular and often rapid heart rhythm.",
# #         }

# #         # Send email report
# #         await send_email_report(email, result)

# #         return JSONResponse(content=result)
        
# #     except Exception as e:
# #         raise HTTPException(status_code=500, detail=str(e))

# # async def send_email_report(to_email: str, result: dict):
# #     try:
# #         msg = EmailMessage()
# #         msg["Subject"] = "Your ECG Analysis Report"
# #         msg["From"] = "ecg-service@example.com"
# #         msg["To"] = to_email
        
# #         # HTML email content
# #         msg.set_content(f"""
# # ECG Analysis Results:

# # Condition: {result.get('condition', 'N/A')}
# # Confidence: {result.get('confidence', 'N/A')}%
# # Description: {result.get('description', '')}

# # Please consult with a healthcare professional for proper diagnosis.
# # """)
        
# #         msg.add_alternative(f"""\
# # <html>
# #   <body>
# #     <h2>ECG Analysis Report</h2>
# #     <p><strong>Condition:</strong> {result.get('condition', 'N/A')}</p>
# #     <p><strong>Confidence:</strong> {result.get('confidence', 'N/A')}%</p>
# #     <p><strong>Description:</strong> {result.get('description', '')}</p>
# #     <p><em>This is an automated analysis. Please consult with a healthcare professional for proper diagnosis.</em></p>
# #   </body>
# # </html>
# # """, subtype="html")

# #         # Configure your SMTP settings here
# #         with smtplib.SMTP("smtp.example.com", 587) as server:
# #             server.starttls()
# #             server.login("your_username", "your_password")
# #             server.send_message(msg)
            
# #     except Exception as e:
# #         print(f"Failed to send email: {e}")
# #         # Don't fail the whole request if email fails


# from fastapi import FastAPI, UploadFile, Form, HTTPException, BackgroundTasks
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import EmailStr
# import shutil
# import smtplib
# from email.message import EmailMessage
# import os
# from dotenv import load_dotenv
# from typing import Optional
# import logging
# # from dotenv import load_dotenv
# # import os

# # Configure logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# # Load environment variables
# load_dotenv()

# app = FastAPI(title="ECG Analysis API",
#              description="API for analyzing ECG images and sending reports via email",
#              version="1.0.0")

# # CORS Configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # For production, specify your frontend URLs
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Email Configuration
# SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
# SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
# SMTP_USERNAME = os.getenv("SMTP_USERNAME")
# SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
# FROM_EMAIL = os.getenv("FROM_EMAIL", SMTP_USERNAME)
# EMAIL_ENABLED = os.getenv("EMAIL_ENABLED", "true").lower() == "true"

# # Heart Conditions Data (can be moved to separate file)
# HEART_CONDITIONS = {
#     "atrial_fibrillation": {
#         "name": "Atrial Fibrillation",
#         "description": "Irregular and often rapid heart rhythm",
#         "common_causes": ["High blood pressure", "Heart disease", "Age-related changes"],
#         "symptoms": ["Palpitations", "Weakness", "Shortness of breath"],
#         "treatment": ["Medications", "Cardioversion", "Ablation therapy"],
#     },
#     "normal": {
#         "name": "Normal Sinus Rhythm",
#         "description": "Regular heart rhythm with normal ECG patterns",
#         "common_causes": [],
#         "symptoms": [],
#         "treatment": [],
#     }
# }

# async def send_email_report(to_email: str, result: dict):
#     """Send ECG analysis report via email with error handling and retries"""
#     if not EMAIL_ENABLED:
#         logger.warning("Email sending is disabled (EMAIL_ENABLED=false)")
#         return

#     try:
#         msg = EmailMessage()
#         msg["Subject"] = f"ECG Report: {result.get('condition', 'Analysis Result')}"
#         msg["From"] = FROM_EMAIL
#         msg["To"] = to_email

#         # Text version
#         text_content = f"""
# ECG Analysis Report:

# Status: {result.get('status', 'N/A')}
# Confidence: {result.get('confidence', 0)}%
# Condition: {result.get('condition', 'Not specified')}
# Description: {result.get('description', '')}

# Recommendations:
# - Consult with a cardiologist
# - Follow up with your primary care physician
# - Monitor for symptoms like chest pain or dizziness

# Note: This automated report is not a substitute for professional medical advice.
# """

#         # HTML version
#         html_content = f"""
# <!DOCTYPE html>
# <html>
# <head>
#     <style>
#         body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
#         .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
#         .header {{ color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px; }}
#         .result {{ background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }}
#         .footer {{ font-size: 0.9em; color: #7f8c8d; margin-top: 20px; }}
#     </style>
# </head>
# <body>
#     <div class="container">
#         <h1 class="header">ECG Analysis Report</h1>
#         <div class="result">
#             <p><strong>Status:</strong> {result.get('status', 'N/A')}</p>
#             <p><strong>Confidence:</strong> {result.get('confidence', 0)}%</p>
#             <p><strong>Condition:</strong> {result.get('condition', 'Not specified')}</p>
#             <p><strong>Description:</strong> {result.get('description', '')}</p>
#         </div>
#         <h3>Recommendations:</h3>
#         <ul>
#             <li>Consult with a cardiologist</li>
#             <li>Follow up with your primary care physician</li>
#             <li>Monitor for symptoms like chest pain or dizziness</li>
#         </ul>
#         <div class="footer">
#             <p><em>Note: This automated report is not a substitute for professional medical advice.</em></p>
#         </div>
#     </div>
# </body>
# </html>
# """

#         msg.set_content(text_content)
#         msg.add_alternative(html_content, subtype="html")

#         with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
#             server.starttls()
#             server.login(SMTP_USERNAME, SMTP_PASSWORD)
#             server.send_message(msg)
#             logger.info(f"Email successfully sent to {to_email}")

#     except Exception as e:
#         logger.error(f"Failed to send email to {to_email}: {str(e)}")
#         # Consider implementing retry logic here

# @app.post("/predict")
# async def analyze_ecg(
#     background_tasks: BackgroundTasks,
#     file: UploadFile,
#     email: EmailStr = Form(...)
# ):
#     """Endpoint for ECG analysis with email reporting"""
#     try:
#         # Save the uploaded file temporarily
#         file_path = f"temp_{file.filename}"
#         with open(file_path, "wb") as buffer:
#             shutil.copyfileobj(file.file, buffer)

#         # Here you would normally call your ML model
#         # For demo purposes, we'll simulate a result
#         result = {
#             "status": "abnormal",
#             "confidence": 91,
#             "condition": "Atrial Fibrillation",
#             "description": "The ECG shows irregular rhythm and absent P waves.",
#             "details": HEART_CONDITIONS.get("atrial_fibrillation")
#         }

#         # Add email sending to background tasks
#         background_tasks.add_task(send_email_report, email, result)

#         # Clean up the temporary file
#         if os.path.exists(file_path):
#             os.remove(file_path)

#         return JSONResponse(content=result)

#     except Exception as e:
#         logger.error(f"ECG analysis failed: {str(e)}")
#         raise HTTPException(status_code=500, detail="Error processing ECG image")

# @app.get("/health")
# async def health_check():
#     """Endpoint for service health check"""
#     return {"status": "healthy", "email_enabled": EMAIL_ENABLED}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

#-----------------------------------------------------------


# from fastapi import FastAPI, UploadFile, Form, HTTPException, BackgroundTasks
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import EmailStr
# import shutil
# import smtplib
# from email.message import EmailMessage
# import os
# from dotenv import load_dotenv
# import logging

# # Configure logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# # Load environment variables
# load_dotenv()

# app = FastAPI(title="ECG Analysis API", description="Analyze ECG and email report", version="1.0.0")

# # CORS setup
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Email configuration
# SMTP_SERVER = os.getenv("SMTP_SERVER")
# SMTP_PORT = int(os.getenv("SMTP_PORT"))
# SMTP_USERNAME = os.getenv("SMTP_USERNAME")
# SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
# FROM_EMAIL = os.getenv("FROM_EMAIL")
# EMAIL_ENABLED = os.getenv("EMAIL_ENABLED", "true").lower() == "true"

# # Conditions data
# HEART_CONDITIONS = {
#     "atrial_fibrillation": {
#         "name": "Atrial Fibrillation",
#         "description": "Irregular and often rapid heart rhythm",
#         "common_causes": ["High blood pressure", "Heart disease", "Age-related changes"],
#         "symptoms": ["Palpitations", "Weakness", "Shortness of breath"],
#         "treatment": ["Medications", "Cardioversion", "Ablation therapy"],
#     },
#     "normal": {
#         "name": "Normal Sinus Rhythm",
#         "description": "Regular heart rhythm with normal ECG patterns",
#         "common_causes": [],
#         "symptoms": [],
#         "treatment": [],
#     }
# }

# # Email sending function
# async def send_email_report(to_email: str, result: dict):
#     if not EMAIL_ENABLED:
#         logger.warning("Email sending is disabled (EMAIL_ENABLED=false)")
#         return

#     try:
#         logger.info(f"Preparing to send email to {to_email}...")
#         msg = EmailMessage()
#         msg["Subject"] = f"ECG Report: {result.get('condition', 'Analysis Result')}"
#         msg["From"] = FROM_EMAIL
#         msg["To"] = to_email

#         text_content = f"""
# ECG Analysis Report:

# Status: {result.get('status')}
# Confidence: {result.get('confidence')}%
# Condition: {result.get('condition')}
# Description: {result.get('description')}

# Recommendations:
# - Consult a cardiologist
# - Monitor for symptoms
# - Not a substitute for professional advice
# """
#         html_content = f"""\
#         <html>
#         <body>
#             <h2>ECG Report</h2>
#             <p><strong>Status:</strong> {result.get('status')}</p>
#             <p><strong>Confidence:</strong> {result.get('confidence')}%</p>
#             <p><strong>Condition:</strong> {result.get('condition')}</p>
#             <p><strong>Description:</strong> {result.get('description')}</p>
#             <p><em>This is an automated report. Not a substitute for medical diagnosis.</em></p>
#         </body>
#         </html>
#         """

#         msg.set_content(text_content)
#         msg.add_alternative(html_content, subtype="html")

#         with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
#             server.starttls()
#             logger.info("Connecting to SMTP server...")
#             server.login(SMTP_USERNAME, SMTP_PASSWORD)
#             logger.info("SMTP login successful.")
#             server.send_message(msg)
#             logger.info(f"Email sent to {to_email}")

#     except Exception as e:
#         logger.error(f"Failed to send email: {e}")

# @app.post("/predict")
# async def analyze_ecg(
#     background_tasks: BackgroundTasks,
#     file: UploadFile,
#     email: EmailStr = Form(...)
# ):
#     try:
#         file_path = f"temp_{file.filename}"
#         with open(file_path, "wb") as buffer:
#             shutil.copyfileobj(file.file, buffer)

#         result = {
#             "status": "abnormal",
#             "confidence": 91,
#             "condition": "Atrial Fibrillation",
#             "description": "The ECG shows irregular rhythm and absent P waves.",
#             "details": HEART_CONDITIONS["atrial_fibrillation"]
#         }

#         background_tasks.add_task(send_email_report, email, result)

#         if os.path.exists(file_path):
#             os.remove(file_path)

#         return JSONResponse(content=result)

#     except Exception as e:
#         logger.error(f"Prediction failed: {e}")
#         raise HTTPException(status_code=500, detail="Error analyzing ECG image")

# @app.get("/health")
# def health_check():
#     return {"status": "healthy", "email_enabled": EMAIL_ENABLED}


#==============================================


from fastapi import FastAPI, UploadFile, Form, HTTPException, BackgroundTasks
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
import shutil
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv
import logging
from typing import Optional

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = FastAPI(
    title="ECG Analysis API",
    description="API for analyzing ECG images and sending reports",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email Configuration
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
FROM_EMAIL = os.getenv("FROM_EMAIL", SMTP_USERNAME)
EMAIL_ENABLED = os.getenv("EMAIL_ENABLED", "true").lower() == "true"

# Heart Conditions Data
HEART_CONDITIONS = {
    "atrial_fibrillation": {
        "name": "Atrial Fibrillation",
        "description": "Irregular heart rhythm",
        "common_causes": ["High blood pressure", "Heart disease"],
        "symptoms": ["Palpitations", "Fatigue"],
        "treatment": ["Medications", "Cardioversion"],
    },
    "normal": {
        "name": "Normal Rhythm",
        "description": "Regular heart rhythm",
        "common_causes": [],
        "symptoms": [],
        "treatment": [],
    }
}

async def send_email_report(to_email: str, result: dict) -> bool:
    """Send ECG report email with error handling"""
    if not EMAIL_ENABLED:
        logger.warning("Email sending is disabled via config")
        return False

    try:
        msg = EmailMessage()
        msg["Subject"] = f"ECG Report: {result.get('condition', 'Results')}"
        msg["From"] = FROM_EMAIL
        msg["To"] = to_email

        # Text version
        text_content = f"""
ECG Analysis Report:

Status: {result.get('status', 'N/A')}
Confidence: {result.get('confidence', 0)}%
Condition: {result.get('condition', 'Not specified')}
Description: {result.get('description', '')}

Please consult a healthcare professional.
"""
        # HTML version
        html_content = f"""<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
<h2 style="color: #2563eb;">ECG Analysis Report</h2>
<div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
<p><strong>Status:</strong> {result.get('status', 'N/A')}</p>
<p><strong>Confidence:</strong> {result.get('confidence', 0)}%</p>
<p><strong>Condition:</strong> {result.get('condition', 'Not specified')}</p>
<p><strong>Description:</strong> {result.get('description', '')}</p>
</div>
<p style="color: #6b7280; font-size: 0.9em;">
<em>This is an automated report. Not a substitute for medical advice.</em>
</p>
</body>
</html>"""

        msg.set_content(text_content)
        msg.add_alternative(html_content, subtype="html")

        # SMTP connection with timeout
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
            logger.info(f"Email sent to {to_email}")
            return True

    except smtplib.SMTPException as e:
        logger.error(f"SMTP Error: {str(e)}")
    except Exception as e:
        logger.error(f"Email Error: {str(e)}")
    
    return False

@app.post("/predict")
async def analyze_ecg(
    background_tasks: BackgroundTasks,
    file: UploadFile,
    email: EmailStr = Form(...)
):
    """Endpoint for ECG analysis with email reporting"""
    try:
        # Save file temporarily
        file_path = f"temp_{file.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Generate result (replace with actual model)
        result = {
            "status": "abnormal",
            "confidence": 91,
            "condition": "Atrial Fibrillation",
            "description": "Irregular rhythm detected",
            "details": HEART_CONDITIONS["atrial_fibrillation"]
        }

        # Queue email sending
        background_tasks.add_task(send_email_report, email, result)

        # Clean up
        if os.path.exists(file_path):
            os.remove(file_path)

        return JSONResponse(content=result)

    except Exception as e:
        logger.error(f"Analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Error processing ECG")

@app.get("/health")
async def health_check():
    """Service health endpoint"""
    return {
        "status": "running",
        "email_enabled": EMAIL_ENABLED,
        "smtp_server": SMTP_SERVER
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)