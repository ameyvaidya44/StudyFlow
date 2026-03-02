# 📚 StudyFlow

> AI-Powered Adaptive Learning Platform

StudyFlow is a modern, intelligent study assistant that helps students learn more efficiently through AI-generated quizzes, adaptive learning paths, and comprehensive analytics.

![StudyFlow Banner](https://img.shields.io/badge/StudyFlow-Learn%20Better-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🎯 Core Functionality
- **📤 Smart Upload** - Support for PDF, Word, Text files, and URLs
- **🤖 AI Quiz Generation** - Automatically create quizzes from your study materials
- **🧠 Adaptive Learning** - Intelligent question selection focusing on weak areas
- **📊 Analytics Dashboard** - Track progress with detailed performance insights
- **💬 AI Chatbot** - Ask questions about your uploaded materials
- **🗂️ Flashcards** - Generate and review flashcards for better retention
- **⏱️ Pomodoro Timer** - Built-in study timer with session tracking
- **🎯 Learning Paths** - Personalized study recommendations
- **👥 Compare Progress** - Compare your performance with peers

### 🎨 Modern UI/UX
- Clean, professional SaaS-style interface
- Smooth animations and transitions
- Responsive design (mobile-first)
- Gradient accents and modern color palette
- Glassmorphic effects and soft shadows

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ameyvaidya44/StudyFlow.git
cd StudyFlow
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure environment variables**

Create `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key
YOUTUBE_API_KEY=your_youtube_api_key
NODE_ENV=development
```

Create `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

5. **Start the development servers**

Backend:
```bash
cd backend
npm run dev
```

Frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

6. **Open your browser**
Navigate to `http://localhost:5173`

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - State management
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Multer** - File upload handling
- **Google Gemini AI** - AI-powered features
- **PDF-Parse** - PDF text extraction

## 📁 Project Structure

```
StudyFlow/
├── backend/
│   ├── src/
│   │   ├── middleware/      # Auth, error handling, file upload
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   └── services/        # Business logic
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/            # API client
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # State management
│   │   └── App.jsx
│   ├── .env.example
│   └── package.json
├── DESIGN_SYSTEM.md        # UI/UX guidelines
└── README.md
```

## 🎨 Design System

StudyFlow features a modern, professional design system inspired by leading SaaS products:

- **Color Palette**: Indigo/Violet gradients with neutral grays
- **Typography**: Inter font family with clear hierarchy
- **Spacing**: Consistent 4px-based scale
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth 200-300ms transitions
- **Border Radius**: 12-24px for modern feel

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete guidelines.

## 🔑 Key Features Explained

### AI Quiz Generation
Upload your study materials and let AI automatically generate relevant questions with multiple difficulty levels.

### Adaptive Learning
The system tracks your performance and focuses on topics where you need improvement, creating a personalized learning experience.

### Analytics Dashboard
Comprehensive insights including:
- XP points and study streaks
- Quiz performance metrics
- Topic-wise progress tracking
- Time spent studying
- Accuracy trends

### AI Chatbot
Ask questions about your uploaded materials and get instant, context-aware answers powered by AI.

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Content
- `POST /api/content/upload` - Upload study material
- `GET /api/content` - Get all user content
- `GET /api/content/:id` - Get specific content

### Quiz
- `POST /api/quiz/generate` - Generate quiz from content
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/history` - Get quiz history

### Analytics
- `GET /api/analytics/performance` - Get performance metrics
- `GET /api/analytics/progress` - Get topic progress

See individual route files for complete API documentation.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Amey Vaidya**
- GitHub: [@ameyvaidya44](https://github.com/ameyvaidya44)

## 🙏 Acknowledgments

- Google Gemini AI for powering intelligent features
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first approach
- The open-source community

## 📧 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Collaborative study groups
- [ ] Video content support
- [ ] Spaced repetition algorithm
- [ ] Gamification features
- [ ] Multi-language support
- [ ] Offline mode
- [ ] Browser extension

---

<div align="center">
  <strong>Made with ❤️ by Amey Vaidya</strong>
  <br>
  <sub>Star ⭐ this repository if you find it helpful!</sub>
</div>
