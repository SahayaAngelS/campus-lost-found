Campus Lost & Found

Campus Lost & Found is a full-stack MERN web application designed to help college students report, search, and claim lost or found items through a centralized, secure, and structured platform.
The project emphasizes real-world backend engineering practices including authentication, authorization, secure file handling, REST API design, and cloud storage integration, making it suitable as a production-ready portfolio project.

Project Motivation

Lost and found processes in many campuses are informal, unstructured, and inefficient. Students often rely on word of mouth or social media posts, which leads to delays and unsuccessful recoveries.
This project addresses that gap by providing a structured digital system where students can securely report and track lost or found items while ensuring proper access control and data management.

Key Features

Student authentication using JWT
Protected dashboard for authenticated users
Add lost or found items with image upload support
Search and filter functionality across all items
Authorization rules allowing users to edit or delete only their own posts
Claim mechanism through a contact form
Secure management of credentials using environment variables

System Architecture

The application follows a standard client–server architecture.
The frontend is built using React (Vite) and communicates with the backend through REST APIs.
The backend is developed using Node.js and Express, handling authentication, item management, and claim processing.
MongoDB Atlas is used for persistent data storage.
Cloudinary is used to store and serve uploaded images efficiently.
JWT middleware secures protected routes and enforces user-level access control.

Technology Stack

Frontend

React (Vite)
JavaScript (ES Modules)
CSS

Backend

Node.js
Express.js
MongoDB Atlas with Mongoose
JWT Authentication

Supporting Tools and Libraries

Cloudinary for image uploads
Multer for handling multipart/form-data
bcryptjs for password hashing
dotenv for environment variable management

Application Workflow

A user logs in and receives a JWT token.
The token is used to access protected routes such as the dashboard.
Users can add lost or found items along with images.
Images are uploaded to Cloudinary, and their URLs are stored in MongoDB.
Other users can search for items and submit claims.
Claims are stored in the database for further coordination between users.

Getting Started

Prerequisites

Node.js installed
MongoDB Atlas account
Cloudinary account

Installation

Clone the repository:
git clone https://github.com/SahayaAngelS/campus-lost-found.git

Start the backend server:

cd server
npm install
npm start


Start the frontend:

cd client
npm install
npm run dev

Demo Credentials

Email: student@test.com
Password: 123456

Future Enhancements

Admin dashboard for claim verification
Email notifications for item claims
Improved UI/UX using a modern CSS framework
