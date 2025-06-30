# 🧠 Daily Mood Tracker

Track your daily moods, view summaries, and maintain emotional streaks!  
This full-stack application uses **React.js** for the frontend and **Express.js + MongoDB** for the backend.

---

## 📂 Project Structure

```
daily-mood-tracker/
├── client/             # Frontend (React + Vite)
├── server/             # Backend (Express + MongoDB)
└── README.md
```

---

## 🚀 Features

### ✅ User Authentication
- Register and login with phone and password
- Token-based authentication (JWT)

### 📅 Mood Tracking
- Submit your mood and an optional note daily
- One mood allowed per day

### 📊 Dashboard
- Weekly mood summary (bar chart)
- 🔥 Streak badge for consistent tracking (3+ days)

### 📜 History
- View mood logs with notes
- Soft delete or restore mood entries

---

## ⚙️ Setup Instructions

### 1️⃣ Backend (Express)

#### Prerequisites:
- Node.js
- MongoDB

#### Steps:
```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/moodtracker
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm run dev
```

---

### 2️⃣ Frontend (React + Vite)

#### Prerequisites:
- Node.js

#### Steps:
```bash
cd client
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Demo Credentials (Optional)

> You may register with any phone & password. No verification required.

---

## 🛡️ Tech Stack

| Frontend   | Backend       | Database | Auth         | Charts     |
|------------|---------------|----------|--------------|------------|
| React.js   | Express.js    | MongoDB  | JWT + bcrypt | Chart.js   |
| TailwindCSS| Mongoose ORM  |          |              |            |

---

## 🔐 Auth Flow

1. On registration/login, a JWT token is returned
2. Token is saved in `localStorage`
3. Protected routes validate the token on reload
4. Invalid tokens automatically logout the user

---

## 🧼 Best Practices

- Responsive design with Tailwind CSS
- Error handling for both frontend/backend
- Folder separation for scalability

---

## 🧑‍💻 Author

Developed by [Md.Muzahidul Islam](mailto:muzahidulisla.munna75@gmail.com)  
Frontend, backend, and UI/UX design — all done solo 💻

---

## 📸 Screenshots

| Dashboard with Chart | Streak Badge |
|----------------------|--------------|
| ![Dashboard](./assets/dashboard.png) | ![Streak](./assets/streak.png) |

---

## 📜 License

MIT License
