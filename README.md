🎓 UpSkillr – Course Registration Portal

UpSkillr is a responsive, user-friendly course registration system where students can register for courses, view their registration history, and receive confirmation. It integrates a clean front-end, dynamic back-end, and MongoDB database for persistent storage.

🏁 Project Overview

📌 Project Title: UpSkillr – Course Registration Portal
🚀 Tech Stack: HTML, CSS, JavaScript, Bootstrap, Node.js, Express, MongoDB (with Mongoose)
📁 Folder Structure: Public files (HTML, CSS) + Server files (Node.js) + MongoDB connectivity

✨ Features

📋 Student registration form with validation
📬 Email confirmation (if integrated)
📚 View registered student records
🧾 Success & History pages with confirmation
💾 MongoDB integration for data storage
🎨 Stylish front-end with background images and navbar

📸 Screenshots

Add your screenshots to the GitHub repo (click “Add file → Upload files”), then update the image URLs below.

🏠 Home Page

📝 Registration Page

✅ Success Page

📊 Dashboard with CRUD

⚙️ How It Works

🗂 Data Storage

Data is stored in MongoDB Atlas using Mongoose schema
All student records are stored as documents in a students collection
Example student document in JSON:
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
Git

🧪 Steps
# Clone the repo
# Install dependencies
npm install

Edit .env file:
MONGO_URI=your_mongodb_example_string
PORT=3000

▶️ Run the Server
node server.js

Now open your browser at:
🌐 http://localhost:3000
One small tip to avoid this in the future:
Before you click "Commit changes" on GitHub, always look at the "Preview" tab. It will show you exactly what the README will look like before you save it.

Now that your project is back to normal, would you like me to help you prepare for a mock interview for a Software Engineer Intern role, focusing on your MERN stack or Cybersecurity experience?
