# 🚀 Ultimate Guide: How to Publish your Website

Hey! Since you're starting out, I've broken this down into simple, "don't-miss-a-step" instructions. Follow these, and your client will be able to see your work in no time.

---

## 🛠️ Phase 1: Push your Code to GitHub
GitHub is where your code lives. Think of it as "Google Drive for Devs."

1.  **Create a Repository**:
    - Go to [GitHub.com](https://github.com/) and log in.
    - Click the **"+"** icon in the top right -> **New repository**.
    - Name it `urban-gym-website`.
    - Keep it **Public** (so clients can see it) and click **Create repository**.

2.  **Connect your VS Code to GitHub**:
    - Open your terminal in VS Code (make sure you are in the `urban-gym-website` folder).
    - Run these commands one by one:
    ```bash
    # 1. Add all your changes
    git add .

    # 2. Save your changes with a note
    git commit -m "feat: complete professional fitness website"

    # 3. Connect to your new GitHub project (Replace YOUR_NAME with your GitHub name!)
    git remote add origin https://github.com/YOUR_NAME/urban-gym-website.git

    # 4. Upload the code!
    git push -u origin main --force
    ```
    *(Note: We use `--force` here just once to make sure your restored files overwrite any "accidental" deletes on GitHub).*

---

# 🚀 Final Deployment Guide (Vercel Only)

Since we are now using **Email Notifications** instead of a database, your deployment is incredibly simple and **100% Free**.

---

## 🏎️ Step 1: Push your latest code to GitHub
Run these commands in your VS Code terminal:
```bash
git add .
git commit -m "feat: professional email system ready"
git push origin main
```

---

## 🧠 Step 2: Deploy the Backend (The "Brain")
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New** > **Project** and import your `urban-gym-website` repo.
3.  **Project Name**: `urbanfit-api`
4.  **Root Directory**: Click "Edit" and select the **`api`** folder.
5.  **Environment Variables**:
    -   `EMAIL_USER` = your email (`hashenshehara4@gmail.com`)
    -   `EMAIL_PASS` = your app password (`mquikyflfqplulga`)
6.  Click **Deploy**. 
7.  **Copy the URL** Vercel gives you (e.g., `https://urbanfit-api.vercel.app`).

---

## 🎨 Step 3: Deploy the Frontend (The "Face")
1.  Go back to your Vercel Dashboard.
2.  Click **Add New** > **Project** and import the same repo again.
3.  **Project Name**: `urbanfit-lanka`
4.  **Root Directory**: Click "Edit" and select the **`frontend/urbanfit-frontend`** folder.
5.  **Environment Variables**:
    -   `VITE_API_URL` = paste the **Backend URL** from Step 2.
6.  Click **Deploy**.

---

## ✅ You are done!
- Your website is live.
- Your email system is active.
- There are no databases to manage.
- It costs you **$0.00**.

Go show your client! 🏋️‍♂️🚀🔥
