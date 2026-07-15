# 🧠 Interview IQ — AI-Powered Mock Interview Platform

> Practice interviews like they're real. Get scored, get better.

Interview IQ is a full-stack web application that lets you simulate real job interviews using AI. You pick a role, choose your experience level, upload your resume (optional), and the AI asks you 5 tailored questions — just like a real interviewer would. It evaluates your answers on confidence, communication, and correctness, then gives you a detailed report with scores and actionable feedback.

Built this because interview prep felt either too generic or too expensive. This makes it personal and smart.

---

## ✨ What It Does

- **Role-based question generation** — You tell it your job title and experience level, it generates relevant questions. No generic stuff.
- **Resume-aware interviews** — Upload your PDF resume and the AI reads it, then asks questions about your actual projects and skills.
- **HR & Technical modes** — Pick between behavioral/soft-skill questions or deep technical ones based on what you need to practice.
- **Timed questions** — Each question has a time limit (easy: 60s, medium: 90s, hard: 120s). Just like a real interview.
- **AI scoring** — After each answer, the AI evaluates it across 3 dimensions: Confidence, Communication, and Correctness. Scores 0–10 each.
- **Detailed report** — At the end you get a full breakdown with per-question scores, feedback, and charts. You can download it as a PDF.
- **Interview history** — All your past sessions are saved. Track your progress over time with analytics.
- **Credits system** — Each interview costs 50 credits. Buy more with Razorpay (UPI, cards, etc). Free credits on signup too.
- **Google auth** — Sign in with Firebase Google auth, no passwords needed.

---

## 🛠️ Tech Stack

### Frontend
| Tool | Why |
|------|-----|
| **React 19** | UI framework |
| **Vite 7** | Fast dev server and bundler |
| **Tailwind CSS v4** | Utility-first styling |
| **Redux Toolkit** | Global state (user, credits) |
| **React Router v7** | Client-side routing |
| **Framer Motion** | Smooth page & component animations |
| **Firebase** | Google OAuth authentication |
| **Recharts** | Performance analytics charts |
| **React Circular Progressbar** | Score display rings |
| **jsPDF + jspdf-autotable** | PDF report downloads |
| **Axios** | HTTP requests to backend |
| **React Icons** | Icon library |

### Backend
| Tool | Why |
|------|-----|
| **Node.js + Express 5** | REST API server |
| **MongoDB + Mongoose** | Database for users, interviews, payments |
| **OpenRouter API** | AI model for question generation and answer evaluation |
| **pdfjs-dist** | Parses uploaded PDF resumes on the server |
| **Multer** | Handles PDF file uploads |
| **Razorpay** | Payment gateway for credits |
| **JWT** | Auth tokens stored in HTTP-only cookies |
| **cookie-parser** | Parses cookies on incoming requests |
| **dotenv** | Environment variable management |

---

## 📁 Project Structure

```
Interview IQ/
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Landing page with features showcase
│   │   │   ├── Auth.jsx           # Login / Signup page
│   │   │   ├── InterviewPage.jsx  # Main interview flow container
│   │   │   ├── InterviewReport.jsx # Report page (after interview)
│   │   │   ├── InterviewHistory.jsx # Past interviews list
│   │   │   └── Pricing.jsx        # Credits pricing page
│   │   ├── components/
│   │   │   ├── Step1SetUp.jsx     # Role, experience, resume setup
│   │   │   ├── Step2Interview.jsx # Live Q&A with timer
│   │   │   ├── Step3Report.jsx    # Final score + charts + PDF
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AuthModel.jsx      # Auth popup modal
│   │   │   └── Timer.jsx          # Countdown timer component
│   │   ├── redux/                 # Redux store and slices
│   │   └── utils/                 # Helper functions
│   └── package.json
│
└── server/                    # Node.js + Express backend
    ├── controllers/
    │   ├── auth.controller.js     # Google auth, JWT token logic
    │   ├── interview.controller.js # Core interview logic (generate, submit, finish)
    │   ├── payment.controller.js  # Razorpay order + verification
    │   └── user.controller.js     # User profile
    ├── models/
    │   ├── user.model.js          # User schema (name, email, credits)
    │   ├── interview.model.js     # Interview + questions schema
    │   └── payment.model.js       # Payment records
    ├── routes/
    │   ├── auth.route.js
    │   ├── interview.route.js
    │   ├── payment.route.js
    │   └── user.route.js
    ├── services/
    │   ├── openRouter.service.js  # AI API wrapper (OpenRouter)
    │   └── razorpay.service.js    # Razorpay SDK init
    ├── middlewares/               # JWT auth middleware
    ├── config/                    # DB connection
    └── index.js                  # Express server entry
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- OpenRouter API key (free tier available at [openrouter.ai](https://openrouter.ai))
- Razorpay account (for payment features)
- Firebase project with Google auth enabled

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/interview-iq.git
cd interview-iq
```

### 2. Set up the server
```bash
cd server
npm install
```

Create a `.env` file in `/server`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the server:
```bash
npm run dev
```

### 3. Set up the client
```bash
cd ../client
npm install
```

Create a `.env` file in `/client`:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_BACKEND_URL=http://localhost:8000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the client:
```bash
npm run dev
```

Visit `http://localhost:5173` — you're good to go.

---

## 🎯 How an Interview Works

```
1. Sign in with Google
        ↓
2. Step 1 — Setup
   → Enter your job role (e.g. "React Developer")
   → Pick experience level (Fresher / 1-3 years / 3-5 years / 5+ years)
   → Choose mode: HR or Technical
   → (Optional) Upload your resume PDF
        ↓
3. AI generates 5 questions
   → 2 easy → 2 medium → 1 hard
   → Resume-aware if uploaded
   → Costs 50 credits
        ↓
4. Step 2 — Live Interview
   → Answer each question within the time limit
   → Timer counts down per question
   → AI evaluates your answer immediately after submission
        ↓
5. Step 3 — Report
   → Final score out of 10
   → Breakdown: Confidence | Communication | Correctness
   → Per-question feedback
   → Charts via Recharts
   → Download as PDF
```

---

## 💳 Credits System

| Plan | Credits | Price |
|------|---------|-------|
| Starter | 200 credits | ₹99 |
| Pro | 500 credits | ₹199 |
| Premium | 1200 credits | ₹399 |

Each interview costs **50 credits**. New users get some free credits to try it out.

Payments are processed through Razorpay. HMAC-SHA256 signature verification is done server-side before crediting the user.

---

## 🔐 Auth Flow

- Google sign-in via Firebase on the frontend
- Firebase ID token sent to backend
- Backend verifies token, creates/finds user in MongoDB
- JWT issued and stored in an HTTP-only cookie
- All protected routes check the JWT via middleware

---

## 📊 AI Scoring Breakdown

Each answer is scored on:

| Dimension | What it checks |
|-----------|---------------|
| **Confidence** | How clear, direct, and assured the answer sounds |
| **Communication** | Language quality, structure, and clarity |
| **Correctness** | Accuracy and relevance of the technical/behavioral content |

Final score = average of the three (rounded to nearest whole number).

Feedback is 10–15 words, written in natural human language. Not robotic.

---

## 🤝 Contributing

Got ideas or found a bug? Feel free to open an issue or a PR. This is a personal project but collaboration is always welcome.

---

## 📄 License

MIT — use it however you want.

---

*Built with too much caffeine and genuine frustration with bad interview prep tools.* ☕
