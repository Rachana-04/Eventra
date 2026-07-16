# 🎉 Eventra – College Event Management System

A full-stack web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) to simplify and automate college event management. Eventra provides a centralized platform where students can discover and participate in events while administrators manage event approvals.

---

## 📌 Features

### 👨‍🎓 User Features
- User Registration & Login
- Secure Authentication using JWT
- Browse Approved Events
- Create New Events
- Upload Event Images
- Like Events
- View Upcoming Events in Calendar
- Dummy Payment Page for Paid Events
- Wallet to View Payment History
- Free & Paid Event Support

### 👨‍💼 Admin Features
- Admin Login
- View Pending Events
- Approve or Delete Events
- View Approved Events
- Manage Event Listings

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS
- Axios
- FullCalendar

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt Password Hashing
- Multer (Image Upload)

### Database
- MongoDB
- Mongoose

---

## 🏗️ Project Architecture

```
React Frontend
       │
       ▼
REST API (Express.js)
       │
       ▼
Node.js Backend
       │
       ▼
MongoDB Database
```

---

## 📂 Project Structure

```
CollegeEventManagement/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── api/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Eventra.git
```

### 2. Install Backend Dependencies

```bash
cd api
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the **api** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 5. Start Backend

```bash
cd api
npm start
```

---

### 6. Start Frontend

```bash
cd client
npm start
```

Open:

```
http://localhost:3000
```

---

## 📸 Screenshots

You can add screenshots here.

Example:

- Home Page
- Login Page
- Dashboard
- Admin Dashboard
- Calendar View
- Payment Page
- Wallet
- Event Creation Page

---

## 🔒 Authentication

- JWT Token Authentication
- bcrypt Password Hashing
- Protected Routes
- Role-Based Access (Admin & User)

---

## 💳 Payment Module

This project includes a **Dummy Payment System** developed for academic purposes.

Features:
- Payment Validation
- Payment Success Simulation
- Wallet Transaction History
- Paid & Free Event Support

---

## 📅 Calendar Module

Upcoming approved events are displayed using **FullCalendar**, allowing users to easily view event schedules.

---

## 📖 Future Enhancements

- Razorpay/Stripe Payment Integration
- Email Notifications
- QR Code Event Registration
- Attendance Tracking
- Certificate Generation
- Event Analytics Dashboard
- Mobile Application
- Real-time Notifications

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack MERN Development
- REST API Development
- MongoDB Database Design
- JWT Authentication
- Password Security using bcrypt
- Image Upload using Multer
- React State Management
- API Integration
- CRUD Operations

---

## 👩‍💻 Author

**Rachana V**

Master of Computer Applications (MCA)  
Dayananda Sagar College of Engineering, Bengaluru

### Connect with me

- LinkedIn: https://www.linkedin.com/in/rachana-v-1a3a36238/
- GitHub: https://github.com/Rachana-04

---

## 📄 License

This project is developed for **educational and learning purposes**.
