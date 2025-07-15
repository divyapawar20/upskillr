# 🎓 UpSkillr – Course Registration Portal

**UpSkillr** is a responsive, user-friendly course registration system where students can register for courses, view their registration history, and receive confirmation. It integrates a clean front-end, dynamic back-end, and MongoDB database for persistent storage.

---

## 🏁 Project Overview

- 📌 **Project Title**: UpSkillr – Course Registration Portal  
- 🚀 **Tech Stack**: HTML, CSS, JavaScript, Bootstrap, Node.js, Express, MongoDB (with Mongoose)
- 📁 **Folder Structure**: Public files (HTML, CSS) + Server files (Node.js) + MongoDB connectivity

---

## ✨ Features

- 📋 Student registration form with validation
- 📬 Email confirmation (if integrated)
- 📚 View registered student records
- 🧾 Success & History pages with confirmation
- 💾 MongoDB integration for data storage
- 🎨 Stylish front-end with background images and navbar

---

## 📸 Screenshots

> Add your screenshots to the GitHub repo (click “Add file → Upload files”), then update the image URLs below.

### 🏠 Home Page  
<img width="1903" height="897" alt="Screenshot 2025-07-15 201934" src="https://github.com/user-attachments/assets/1753cf00-70a1-449f-9736-9f7a0002987d" />

### 📝 Registration Page  
<img width="1876" height="915" alt="Screenshot 2025-07-15 201951" src="https://github.com/user-attachments/assets/def4384c-5971-4997-b528-181595a62bee" />

### ✅ Success Page  
<img width="1908" height="909" alt="Screenshot 2025-07-15 202016" src="https://github.com/user-attachments/assets/cd6bc614-1757-4414-8396-a979b61df926" />

### 📊 Dashboard with CRUD  
<img width="1893" height="931" alt="Screenshot 2025-07-15 202040" src="https://github.com/user-attachments/assets/7ced36e7-bef9-452e-9f9c-3e4c58d1a030" />


---

## ⚙️ How It Works

### 🗂 Data Storage

- Data is stored in **MongoDB Atlas** using **Mongoose schema**
- All student records are stored as documents in a `students` collection

Example student document in JSON:

```json
{
  "name": "Riya Sharma",
  "email": "riya@example.com",
  "course": "Web Development",
  "date": "2025-07-10"
}

🛠 Installation & Setup
📦 Prerequisites
Node.js v18+

MongoDB (local or Atlas)

Git (optional)

🧪 Steps
bash
Copy
Edit
# Clone the repo
git clone https://github.com/divyapawar20/upskillr.git
cd upskillr

# Install dependencies
npm install

# Set up environment variables
touch config.env
Add the following in config.env:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=3000
▶️ Run the Server
bash
Copy
Edit
node server.js
Now open your browser at:
🌐 http://localhost:3000
