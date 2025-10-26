# 🌙 Lunacal Assignment - Interactive Widget Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, interactive widget dashboard featuring smooth animations and elegant design**

[Live Demo](#) • [Features](#features) • [Installation](#installation) • [Tech Stack](#tech-stack)

</div>

---

## ✨ Features

### 🎯 Tab Widget
- **Smooth Tab Transitions** - Animated tab switching with Framer Motion
- **Dynamic Content** - Three sections: About Me, Experiences, and Recommended
- **Modern UI** - Glassmorphic design with custom shadows and gradients
- **Responsive Layout** - Adapts seamlessly to different screen sizes

### 🖼️ Gallery Widget
- **Image Carousel** - Smooth horizontal scrolling with navigation controls
- **Hover Effects** - Images scale and rotate with grayscale-to-color transition
- **Add Images** - Dynamic image addition functionality
- **Navigation Feedback** - Active state indicators on arrow buttons
- **3D Perspective** - Subtle depth effects for enhanced visual appeal

### 🎨 Design Highlights
- Custom dark theme with `#363C43` primary background
- Inset shadows and glassmorphism effects
- Plus Jakarta Sans and Poppins typography
- Micro-interactions and smooth animations
- Pixel-perfect implementation from design specs

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/donthireddysaivarshini/lunacal-assignment-saivarshini.git

# Navigate to project directory
cd lunacal-assignment-saivarshini

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18.3.1** | UI component library |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Lucide React** | Modern icon library |

---

## 📁 Project Structure

```
lunacal-assignment-saivarshini/
├── src/
│   ├── components/
│   │   ├── TabWidget.tsx       # Interactive tab component
│   │   └── GalleryWidget.tsx   # Image gallery carousel
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── vite.config.ts           # Vite configuration
```

---

## 🎯 Component Details

### TabWidget
The tab widget features three main sections with smooth animated transitions:
- **About Me** - Personal introduction and background
- **Experiences** - Professional journey and achievements
- **Recommended** - Insights and recommendations

**Key Features:**
- Framer Motion `layoutId` for smooth tab indicator animation
- Spring physics for natural motion (stiffness: 500, damping: 30)
- Hover states with opacity transitions
- Custom shadow effects and rounded corners

### GalleryWidget
An interactive image gallery with horizontal scrolling:
- Displays 3 images at a time with smooth carousel navigation
- Grayscale filter with color reveal on hover
- Scale and rotation animations on hover
- Add new images dynamically
- Navigation controls with active state feedback

**Key Features:**
- 3D perspective transforms
- Image error handling with fallback
- Disabled state management for navigation buttons
- Custom gradient backgrounds and shadows

---

## 🎨 Design System

### Colors
```css
Primary Background: #363C43
Secondary Background: #171717
Active Tab: #28292F
Text Primary: #FFFFFF
Text Secondary: #A3ADB2
Border Accent: #96BEE7
```

### Typography
- **Headings:** Poppins, Semi-bold, 20px
- **Body Text:** Plus Jakarta Sans, Regular, 20px
- **Line Height:** 100%
- **Letter Spacing:** 0%

---

## 📦 Build & Deploy

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy!

---

## 🌟 Features Implementation

- ✅ Responsive design for all screen sizes
- ✅ TypeScript for type safety
- ✅ Smooth animations with Framer Motion
- ✅ Custom UI components from scratch
- ✅ No external UI libraries (custom implementation)
- ✅ Performance optimized with Vite
- ✅ Clean, maintainable code structure
- ✅ Accessibility considerations

---

## 👨‍💻 About the Developer

**Donthireddy Sai Varshini**  
AI-native Frontend & Full Stack Developer

- 🎓 B.Tech in Computer Science (IoT)
- 💼 Experience with React, Next.js, and AI integration
- 🌱 Currently exploring modern web technologies
- 📍 Based in Hyderabad, India

---

## 📄 License

This project was created as an assignment for Lunacal.

---

## 🤝 Connect

- GitHub: [@donthireddysaivarshini](https://github.com/donthireddysaivarshini)
- Portfolio: [Donthireddy Saivarshini's Portfolio](https://full-stack-developer-portfolio-nu.vercel.app/)

---

<div align="center">

**Made with ❤️ and lots of ☕**

⭐ Star this repo if you found it helpful!
