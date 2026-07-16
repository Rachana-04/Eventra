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
---


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



---

## 👩‍💻 Author

**Rachana V**




This project is developed for **educational and learning purposes**.
