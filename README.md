# Campus Lost & Found

Campus Lost & Found is a full-stack MERN web application that helps college students report, search, and claim lost or found items through a centralized and secure platform.

The project focuses on real-world backend functionality such as authentication, access control, image uploads, and database design, making it suitable as a production-ready portfolio project.


## 🎯 Why This Project?

Lost and found systems in colleges are often informal and inefficient.
This project was built to solve a real campus problem while practicing
secure backend development, authentication workflows, and file handling
in a full-stack environment.


## 🚀 Features

- Student authentication using JWT
- Protected dashboard for logged-in users
- Add lost or found items with image upload support
- Search and filter items across the platform
- Authorization enforced so users can edit or delete only their own items
- Claim found items via a contact form
- Secure handling of credentials using environment variables



## 🧠 Project Architecture

The application follows a standard client–server architecture:

- The **frontend** is built with React (Vite) and communicates with the backend via REST APIs.
- The **backend** is developed using Node.js and Express, handling authentication, item management, and claims.
- **MongoDB Atlas** is used for persistent data storage.
- **Cloudinary** is used to store and serve uploaded images efficiently.
- **JWT middleware** secures protected routes and enforces user access control.



## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES Modules)
- Basic CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- JWT Authentication

### Other Tools & Libraries
- Cloudinary (image uploads)
- Multer (multipart/form-data handling)
- bcryptjs (password hashing)
- dotenv (environment variable management)



## 🔄 Application Flow

1. User logs in and receives a JWT token.
2. Token is used to access protected routes such as the dashboard.
3. Users can add lost or found items along with images.
4. Images are uploaded to Cloudinary and URLs are stored in MongoDB.
5. Other users can search items and submit claims.
6. Claims are saved in the database for review and user coordination.



## ▶️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Cloudinary account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SahayaAngelS/campus-lost-found.git
   
2.Start the backend server:

cd server
npm install
npm start

3.Start the frontend:

cd client
npm install
npm run dev

🔐 Demo Credentials
Email: student@test.com
Password: 123456

📌 Future Enhancements


Admin dashboard for claim verification

Email notifications for item claims

Improved UI/UX using a CSS framework
