# 🫀 ECG Arrhythmia Detection and Classification Web App

A full-stack web application powered by deep learning to predict and classify ECG arrhythmia conditions from uploaded ECG images. Users receive real-time predictions and automatically generated medical-style reports via email.

---

## 🚀 Features

- ✅ Upload ECG images for analysis
- 🧠 Deep learning model to predict arrhythmia types (e.g., Atrial Fibrillation)
- 📬 Auto-generated ECG analysis report sent to user email
- 📈 Confidence score and condition details included
- 💻 Fast, responsive React frontend
- ⚡ FastAPI backend with email integration and error handling

---

## 🧠 Deep Learning Model

- Trained on annotated ECG datasets
- Image-based arrhythmia classification
- Integrated with FastAPI for inference
- Outputs:
  - Status (Normal/Abnormal)
  - Predicted Condition
  - Confidence %
  - Description, Symptoms, Treatment (from dictionary)

---

## 🧰 Tech Stack

### Frontend
- React (TypeScript)
- Tailwind CSS
- Axios (for API requests)

### Backend
- Python
- FastAPI
- Uvicorn
- smtplib + EmailMessage
- dotenv
- Pillow / OpenCV (for image processing, if used)
- Torch/Keras/TensorFlow (for deep learning model)

---

## 📁 Project Structure
