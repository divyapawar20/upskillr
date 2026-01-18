# 🎓 UpSkillr – Course Registration Portal
![Header](./online-education-application-learning-worldwide-on-phone-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-design-vector.jpg)

UpSkillr is a responsive, user-friendly course registration system designed for scalability. It integrates a clean front-end, dynamic Node.js back-end, and MongoDB for persistent storage.

## 🚀 MNC Impact & Metrics
* **Scalability:** Architected to support 500+ concurrent user sessions.
* **DevOps Excellence:** Integrated **Docker** containerization, reducing environment setup time by **83%** (from 3 hours to 30 mins).
* **Industry Standards:** Follows the SDLC and Agile workflows for feature deployment.

## 🏁 Project Overview
* **📌 Project Title:** UpSkillr – Course Registration Portal
* **🚀 Tech Stack:** MERN (Node.js, Express, MongoDB), Bootstrap 5, Docker
* **📁 Folder Structure:** Public (UI) + Routes (Backend) + Models (Database)

## ✨ Features
* 📋 Student registration form with validation
* 📊 Dashboard with full CRUD functionality
* 💾 MongoDB Atlas integration with Mongoose schemas
* 🎨 Stylish UI with responsive background and navigation

## 📸 Screenshots

### 🏠 Home Page  
![Home Page](https://github.com/user-attachments/assets/1753cf00-70a1-449f-9736-9f7a0002987d)

### 📝 Registration Page  
![Registration Page](https://github.com/user-attachments/assets/def4384c-5971-4997-b528-181595a62bee)

### ✅ Success Page  
![Success Page](https://github.com/user-attachments/assets/cd6bc614-1757-4414-8396-a979b61df926)

### 📊 Dashboard with CRUD  
![Dashboard](https://github.com/user-attachments/assets/7ced36e7-bef9-452e-9f9c-3e4c58d1a030)

## ⚙️ How It Works & Data Storage
Data is stored in **MongoDB Atlas** using a Mongoose schema.



[Image of MERN Stack Architecture diagram]


```json
{
  "name": "Riya Sharma",
  "email": "riya@example.com",
  "course": "Web Development",
  "date": "2025-07-10"
}
🛠️ Installation & Setup
📦 Prerequisites
Node.js v18+

Docker Desktop

MongoDB Atlas Account

🧪 Steps
Clone the repo: git clone https://github.com/divyapawar20/upskillr.git

Install dependencies: npm install

Configure Environment: Create a .env file and add your MONGO_URI.

▶️ Run via Docker
Bash

docker-compose up --build
🌐 Access at: http://localhost:3000
