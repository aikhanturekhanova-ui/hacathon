# BATYS.HUB - Complete Component Code Export

## 📦 All Components Ready for Copy-Paste

### 1. Main App Component

**File:** `src/app/App.tsx`

```typescript
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { DualEntryHero } from './components/DualEntryHero';
import { AICareerLab } from './components/AICareerLab';
import { UsageCounter } from './components/UsageCounter';
import { JobFeed } from './components/JobFeed';
import { LiveChatWidget } from './components/LiveChatWidget';
import { PricingModal } from './components/PricingModal';
import { Sidebar } from './components/Sidebar';
import { MobileSidebar } from './components/MobileSidebar';
import { SearchBar } from './components/SearchBar';

export default function App() {
  const [userMode, setUserMode] = useState<'candidate' | 'employer'>('candidate');
  const [showPricing, setShowPricing] = useState(false);
  const [aiCreditsLeft, setAiCreditsLeft] = useState(3);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <Sidebar
        userMode={userMode}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <MobileSidebar
        userMode={userMode}
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          setMobileMenuOpen(false);
        }}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="lg:pl-64">
        <div className="lg:hidden sticky top-0 z-40 bg-[#0F1420] border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-xl">
          <h1 className="text-xl font-black text-white">
            BATYS<span className="text-[#00FFB9]">.HUB</span>
          </h1>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        <DualEntryHero userMode={userMode} onModeChange={setUserMode} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {activeSection === 'dashboard' && (
            <>
              <UsageCounter
                creditsLeft={aiCreditsLeft}
                totalCredits={3}
                onUpgrade={() => setShowPricing(true)}
              />
              {userMode === 'candidate' && <SearchBar />}
              {userMode === 'candidate' && (
                <AICareerLab
                  onUseCredit={() => setAiCreditsLeft(Math.max(0, aiCreditsLeft - 1))}
                  creditsLeft={aiCreditsLeft}
                />
              )}
              <JobFeed userMode={userMode} />
            </>
          )}

          {activeSection === 'jobs' && (
            <div className="rounded-3xl p-8 border border-white/10" style={{background: 'linear-gradient(135deg, rgba(21, 25, 35, 0.8) 0%, rgba(15, 20, 32, 0.6) 100%)', backdropFilter: 'blur(20px)'}}>
              <h2 className="text-3xl font-bold text-white mb-4">
                {userMode === 'candidate' ? 'Мои отклики' : 'Мои вакансии'}
              </h2>
              <p className="text-gray-400">
                {userMode === 'candidate'
                  ? 'Здесь будут отображаться все ваши отклики на вакансии.'
                  : 'Здесь будут отображаться все ваши опубликованные вакансии.'}
              </p>
            </div>
          )}
        </div>
      </div>

      <LiveChatWidget />
      {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
    </div>
  );
}
```

---

### 2. Theme CSS

**File:** `src/styles/theme.css`

```css
:root {
  --font-size: 16px;
  --background: #0A0E1A;
  --foreground: #FFFFFF;
  --card: #151923;
  --card-foreground: #FFFFFF;
  --primary: #0052FF;
  --primary-foreground: #ffffff;
  --secondary: #00FFB9;
  --secondary-foreground: #0A0E1A;
  --muted: #1E2330;
  --muted-foreground: #9CA3AF;
  --accent: #00FFB9;
  --accent-foreground: #0A0E1A;
  --border: rgba(255, 255, 255, 0.08);
  --radius: 1rem;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

---

### 3. Fonts CSS

**File:** `src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## 🎨 Design Tokens for AI Generators

### Color Palette
```json
{
  "colors": {
    "primary": "#0052FF",
    "secondary": "#00FFB9",
    "background": {
      "dark": "#0A0E1A",
      "card": "#151923",
      "sidebar": "#0F1420"
    },
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#9CA3AF",
      "muted": "#6B7280"
    }
  }
}
```

### Spacing & Borders
```json
{
  "borderRadius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "spacing": {
    "card": "24px",
    "section": "32px"
  }
}
```

---

## 📝 Copy-Paste Prompt for AI Generators

Use this prompt with v0.dev, Bolt.new, or Claude Artifacts:

```
Build a dark-themed job platform called BATYS.HUB using React + Tailwind CSS v4:

DESIGN SYSTEM:
- Background: #0A0E1A (dark)
- Primary: #0052FF (electric blue)
- Secondary: #00FFB9 (neon teal)  
- Font: Inter
- Style: Glassmorphism with backdrop-blur(20px)
- Gradients: linear-gradient(to right, #0052FF, #00FFB9)

COMPONENTS:

1. Hero Section:
   - Animated floating gradient orbs (keyframe float)
   - Large "BATYS.HUB" logo (BATYS in white, .HUB in #00FFB9)
   - Subtitle: "Западный карьерный хаб на базе ИИ"
   - Dual toggle: "Ищу работу" | "Ищу сотрудников"
   - Active state: border 2px #00FFB9 + gradient bg

2. Sidebar (Desktop):
   - Dark glassmorphic: rgba(15, 20, 32, 0.95) + blur(20px)
   - Nav items: Главная, Мои отклики, Карьерная лаборатория, Уведомления, Сообщения, Настройки
   - Active: gradient bg (blue→teal) + white text
   - User profile at bottom with avatar

3. Search Bar:
   - Glassmorphic card with animated gradient border
   - Search input + District dropdown (Мкр 1-15, Новый город, Центр, Промзона)
   - Quick filters: "Удаленно", "Полный день", "Гибкий график"
   - Button: "Найти вакансии" with gradient bg

4. Usage Counter:
   - Title: "Осталось ИИ кредитов сегодня"
   - Display: "3 / 3 в день"
   - Animated floating gradient background
   - Progress bar with gradient fill
   - Button: "Безлимит" (gradient blue→teal)

5. AI Career Lab (3 cards):
   Cards:
   a) ИИ Конструктор Резюме - Icon: FileText - Color: blue
   b) Симулятор Собеседований - Icon: Video - Color: purple  
   c) Карьерный Навигатор - Icon: TrendingUp - Color: green
   
   Each card:
   - Glassmorphic bg
   - Gradient icon (16x16 rounded)
   - 3 feature bullets
   - CTA: "Запустить" or "Обновить тариф" (gradient)

6. Job Cards:
   - Company emoji logo with glassmorphic bg
   - Job title (hover: text-[#00FFB9])
   - Company, location, salary (₸), type
   - Remote badge (green)
   - Two buttons:
     * "Откликнуться" (gradient)
     * "🔔 Уведомить о похожих" (Telegram icon, teal border pill)

7. Live Chat Widget:
   - Floating button: bottom-right, gradient bg, pulsing dot
   - Chat window: 400x500px, dark glassmorphic
   - Header: "ИИ Карьерный Ассистент" + online badge
   - 3 suggestion buttons
   - Input field + send button

8. Pricing Modal:
   - Backdrop: black/50 blur
   - Header: gradient blue→teal
   - 2 plans side-by-side:
     * Бесплатный: 0₸ (3 credits/day, basic features)
     * Pro: 9,990₸/month (unlimited, all features)
   - Popular badge on Pro
   - Checkmarks: teal for included, gray X for excluded

INTERACTIONS:
- Hover: border glow, scale 1.02, shadow increase
- Active: scale 0.98, shadow decrease  
- Transitions: 200-300ms ease-in-out
- Icons: pulse/rotate on hover

ANIMATIONS:
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

Mobile: hamburger menu (top-right), slide-in sidebar

Language: Russian UI
```

---

## 📂 Quick Export Commands

```bash
# Zip entire project
zip -r batys-hub-export.zip src/ public/ package.json

# Export only components
tar -czf components-only.tar.gz src/app/components/

# Copy all TSX files to clipboard (Mac)
find src/app/components -name "*.tsx" -exec cat {} \; | pbcopy
```

---

**Ready to copy-paste into:**
- ✅ v0.dev
- ✅ Bolt.new  
- ✅ Claude Artifacts
- ✅ GitHub Copilot
- ✅ Cursor AI
- ✅ Replit

---

*Generated: 2026-04-24 | Version: 1.0*
