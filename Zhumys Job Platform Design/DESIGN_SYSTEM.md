# BATYS.HUB - Design System & Code Export

## 🎨 Design Overview

**Platform Name:** BATYS.HUB (Западный карьерный хаб на базе ИИ)
**Design Style:** Modern dark theme with futuristic glassmorphism
**Primary Purpose:** AI-powered job platform for Aktau, Kazakhstan

## 🎨 Color Palette

```css
/* Primary Colors */
--primary-blue: #0052FF;
--accent-teal: #00FFB9;
--dark-bg: #0A0E1A;
--card-bg: #151923;
--secondary-bg: #0F1420;

/* Text Colors */
--text-white: #FFFFFF;
--text-gray-300: #D1D5DB;
--text-gray-400: #9CA3AF;
--text-gray-500: #6B7280;

/* Border & Effects */
--border-color: rgba(255, 255, 255, 0.08);
--glow-blue: rgba(0, 82, 255, 0.3);
--glow-teal: rgba(0, 255, 185, 0.3);
```

## 🔤 Typography

**Font Family:** Inter
**Import:** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`

## ✨ Key Design Features

1. **Glassmorphism Effects**
   - `backdrop-filter: blur(20px)`
   - Semi-transparent backgrounds
   - Subtle borders with rgba colors

2. **Gradient Buttons**
   - `background: linear-gradient(to right, #0052FF, #00FFB9)`
   - Glowing shadows on hover
   - Scale animations on click

3. **Animated Elements**
   - Floating orbs with keyframe animations
   - Pulsing icons
   - Gradient borders with animation

4. **Card Design**
   ```css
   background: linear-gradient(135deg, rgba(21, 25, 35, 0.8) 0%, rgba(15, 20, 32, 0.6) 100%);
   backdrop-filter: blur(20px);
   border: 1px solid rgba(255, 255, 255, 0.1);
   border-radius: 24px;
   ```

## 📦 Component Structure

### 1. **Sidebar** (`/src/app/components/Sidebar.tsx`)
- Dark glassmorphic background
- Gradient active states (blue to teal)
- User profile section at bottom
- Navigation items with icons

### 2. **Hero Section** (`/src/app/components/DualEntryHero.tsx`)
- Animated floating gradient orbs
- Dual-entry toggle (Candidate vs Employer)
- Large BATYS.HUB logo with glow effect
- Dark gradient background

### 3. **Search Bar** (`/src/app/components/SearchBar.tsx`)
- Animated gradient border
- District dropdown (Мкр 1-15, Новый город, Центр, etc.)
- Quick filter buttons
- Glassmorphic styling

### 4. **AI Career Lab** (`/src/app/components/AICareerLab.tsx`)
Three cards:
- ИИ Конструктор Резюме (Resume Architect)
- Симулятор Собеседований (Interview Simulator)  
- Карьерный Навигатор (Career Path Explorer)

Features:
- Color-coded gradient icons
- Feature lists with bullet points
- Gradient CTA buttons

### 5. **Job Cards** (`/src/app/components/JobFeed.tsx`)
- Company logo with glassmorphic bg
- Job title, company, salary in ₸
- Location, type, remote badge
- Two CTAs: "Откликнуться" + "🔔 Уведомить о похожих" (Telegram)
- Hover glow effects

### 6. **Usage Counter** (`/src/app/components/UsageCounter.tsx`)
- Shows "3/3 кредита в день"
- Animated background gradients
- Progress bar with gradient fill
- "Безлимит" upgrade button

### 7. **Pricing Modal** (`/src/app/components/PricingModal.tsx`)
Two plans:
- **Бесплатный:** 0₸ (3 credits/day)
- **Pro:** 9,990₸/month (unlimited)

Features checkmarks with teal color
Dark glassmorphic background

### 8. **Live Chat Widget** (`/src/app/components/LiveChatWidget.tsx`)
- Floating bottom-right button
- Gradient background (blue to teal)
- Chat interface with suggestions
- Pulsing notification dot

## 🎭 CSS Animations

```css
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 🚀 Tech Stack

- **Framework:** React 18.3.1
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript

## 📋 Features List

### Candidate Mode:
- ✅ Job search with district filter (Мкр 1-15)
- ✅ AI Resume Builder (3 credits/day)
- ✅ Interview Simulator
- ✅ Career Path Explorer
- ✅ Telegram job notifications
- ✅ Live AI chat assistant

### Employer Mode:
- ✅ Post job vacancies
- ✅ View candidate applications
- ✅ Dashboard analytics

## 🎯 Key Interactions

1. **Hover Effects:**
   - Cards: border changes to teal glow
   - Buttons: shadow increase + scale 1.02
   - Icons: rotate or pulse animations

2. **Active States:**
   - Navigation: gradient background (blue→teal)
   - Selected mode: teal border + shadow
   - Buttons: scale 0.98 on click

3. **Transitions:**
   - Duration: 200-300ms
   - Easing: ease-in-out
   - Properties: all, transform, opacity

## 💾 How to Use This Design

### For AI Code Generators (v0, Bolt, Claude Artifacts):

**Prompt Template:**
```
Create a modern dark-themed job platform called BATYS.HUB with:

1. Color scheme: Dark background (#0A0E1A) with electric blue (#0052FF) and neon teal (#00FFB9) accents
2. Glassmorphism design with backdrop-blur effects
3. Components needed:
   - Dual-entry hero (candidate vs employer toggle)
   - Job search with district dropdown (Aktau microdistricts)
   - AI career tools cards (Resume Builder, Interview Sim, Career Navigator)
   - Job listing cards with Telegram notification button
   - Dark sidebar with gradient active states
   - Usage counter showing 3/3 credits per day
   - Pricing modal (Free vs Pro 9,990₸/month)
   - Floating AI chat widget

4. Animations: floating gradient orbs, pulsing icons, gradient borders
5. Typography: Inter font family
6. Responsive mobile-first design
7. Russian language UI

Use React + Tailwind CSS v4. Include gradient buttons (blue→teal), glassmorphic cards with blur(20px), and glowing hover effects.
```

## 📁 Project Structure

```
/src
  /app
    App.tsx (main entry, routing logic)
    /components
      Sidebar.tsx
      MobileSidebar.tsx
      DualEntryHero.tsx
      SearchBar.tsx
      AICareerLab.tsx
      UsageCounter.tsx
      JobFeed.tsx
      LiveChatWidget.tsx
      PricingModal.tsx
  /styles
    fonts.css (Inter font import)
    theme.css (color variables, animations)
```

## 🔧 Installation

```bash
# Install dependencies
pnpm install

# Required packages
pnpm add lucide-react motion tailwindcss@4.1.12
```

## 📱 Responsive Breakpoints

- Mobile: < 1024px (sidebar becomes hamburger menu)
- Desktop: >= 1024px (fixed sidebar visible)

---

**Created with:** Claude Code + Figma Make
**Version:** 1.0
**Last Updated:** 2026-04-24
