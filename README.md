# AI-Assisted Journal System

A full-stack application that allows users to write journal entries after immersive nature sessions and receive AI-generated emotional insights.

The system stores journal entries, analyzes emotions using an LLM, and provides insights into the user’s mental state over time.

---

# Features

* Write journal entries after nature sessions
* Store journal entries in a database
* AI emotion analysis using LLM
* View past journal entries
* Insights about emotional trends over time

---

# Tech Stack

### Frontend

* React (Vite)
* React Router
* TanStack Query
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### AI Integration

* Google Gemini API

---

# Project Structure

```
ai-journal-system
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   └── server.js
│
├── frontend
│   └── src
│       ├── api
│       ├── hooks
│       ├── components
│       ├── pages
│       └── layout
│
├── README.md
└── ARCHITECTURE.md
```

---

# API Endpoints

### Create Journal Entry

```
POST /api/journal
```

Example request:

```
{
 "userId": "123",
 "ambience": "forest",
 "text": "I felt calm today after listening to the rain."
}
```

---

### Get Journal Entries

```
GET /api/journal/:userId
```

Returns all journal entries for a user.

---

### Emotion Analysis

```
POST /api/journal/analyze
```

Example response:

```
{
 "emotion": "calm",
 "keywords": ["rain", "nature", "peace"],
 "summary": "User experienced relaxation during the forest session"
}
```

---

### Insights

```
GET /api/journal/insights/:userId
```

Example response:

```
{
 "totalEntries": 8,
 "topEmotion": "calm",
 "mostUsedAmbience": "forest",
 "recentKeywords": ["focus","nature","rain"]
}
```

---

# Setup Instructions

## 1. Clone Repository

```
git clone <repo-url>
cd ai-journal-system
```

---

# Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
GEMINI_API_KEY=your_api_key
```

Start backend:

```
npm run dev
```

---

# Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

Backend runs at:

```
http://localhost:5000
```

---

# Future Improvements

* authentication system
* Redis caching for LLM results
* rate limiting
* real-time emotion trends
* Docker deployment

---

# Author

Hiitesh Gour
