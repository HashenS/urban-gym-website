# 🏋️‍♂️ UrbanFit Lanka

> **Train Smart. Stay Strong. Level Up.**
> A premium, high-performance website built for UrbanFit Lanka's gym and fitness services.

![Project Status](https://img.shields.io/badge/Status-Live-success)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Vercel-blueviolet)

## ✨ Features

- **🎨 Premium Aesthetic**: Custom dark-mode UI with "Glassmorphism" effects and neon accents.
- **⚡ Super Fast**: Built with **Vite + React** for instant page loads and smooth transitions.
- **📧 Serverless Email System**: Contact form powered by **Nodemailer** (No database required).
  - Sends a professional HTML email to the admin.
  - Optional "Send me a copy" receipt for the user.
- **🎬 Scroll-Video Hero**: Advanced frame-by-frame video scrubbing animation on the home page.
- **📱 100% Responsive**: Perfectly optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, ScrollReveal.js, CSS3 Variables.
- **Backend (API)**: Node.js, Express, Nodemailer.
- **Deployment**: Vercel (Frontend & Backend).

## 🚀 How to Run Locally

### 1. Clone the project
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/urban-gym-website.git
cd urban-gym-website
```

### 2. Frontend Setup
```bash
cd frontend/urbanfit-frontend
npm install
npm run dev
```

### 3. Backend Setup (For Emails)
```bash
cd api
npm install
# Create a .env file with:
# PORT=5000
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
npm start
```

## 🌍 Deployment

This project is deployed on **Vercel** with a serverless architecture.

- **Frontend**: Deployed via Vite preset.
- **Backend**: Deployed as Serverless Functions (`api/` folder).

---
© 2024 UrbanFit Lanka. All rights reserved.
