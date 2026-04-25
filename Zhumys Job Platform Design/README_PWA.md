# 📱 BATYS.HUB - Progressive Web App

> Современная карьерная платформа для Актау, Казахстан

## 🚀 Быстрый старт

### 1. Создайте иконки

Используйте этот SVG для генерации иконок:

```svg
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0052FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00FFB9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#grad)"/>
  <text x="256" y="290" font-family="Inter" font-size="80" font-weight="900" text-anchor="middle" fill="white">BATYS</text>
  <text x="256" y="360" font-family="Inter" font-size="60" font-weight="900" text-anchor="middle" fill="#00FFB9">.HUB</text>
</svg>
```

**Онлайн генератор:** https://svgtopng.com/

Сохраните как:
- `public/icon-192.png` (192x192)
- `public/icon-512.png` (512x512)
- `public/icon-apple.png` (180x180)
- `public/icon-96.png` (96x96)

### 2. Активируйте Service Worker

```bash
mv public/sw-template.txt public/sw.js
```

### 3. Запустите приложение

```bash
pnpm install
pnpm dev
```

### 4. Протестируйте PWA

1. Откройте http://localhost:5173 в Chrome
2. Нажмите F12 → Application → Manifest
3. Кликните иконку "Install" в адресной строке
4. Приложение установится как native app!

## ✨ Возможности

- 📱 **Установка** - работает как нативное приложение на Android, iOS, Windows, Mac, Linux
- 💾 **Оффлайн режим** - просматривайте вакансии без интернета
- 🔔 **Push-уведомления** - получайте уведомления о новых вакансиях
- ⚡ **Быстрая загрузка** - мгновенный запуск благодаря кешированию
- 🎯 **Add to Home Screen** - ярлык на главном экране устройства

## 🎨 Дизайн

- **Цвета:** Темная тема с синим (#0052FF) и бирюзовым (#00FFB9)
- **Стиль:** Glassmorphism с blur эффектами
- **Шрифт:** Inter
- **Анимации:** Плавающие градиенты, пульсирующие элементы

## 📦 Структура компонентов

```
src/
├─ app/
│  ├─ App.tsx                    # Главный компонент
│  └─ components/
│     ├─ DualEntryHero.tsx       # Выбор: кандидат/работодатель
│     ├─ SearchBar.tsx           # Поиск по районам
│     ├─ AICareerLab.tsx         # ИИ инструменты (3 кредита/день)
│     ├─ JobFeed.tsx             # Лента вакансий
│     ├─ UsageCounter.tsx        # Счетчик ИИ кредитов
│     ├─ PricingModal.tsx        # Тарифы (Free/Pro)
│     ├─ LiveChatWidget.tsx      # ИИ чат ассистент
│     ├─ InstallPWA.tsx          # Промпт установки
│     ├─ OfflineBanner.tsx       # Индикатор оффлайн
│     ├─ Sidebar.tsx             # Десктоп меню
│     └─ MobileSidebar.tsx       # Мобильное меню
└─ pwa/
   └─ register-sw.ts             # PWA утилиты
```

## 🛠️ Технологии

- **React 18.3** - UI фреймворк
- **TypeScript** - типизация
- **Tailwind CSS v4** - стилизация
- **Vite** - сборщик
- **Lucide React** - иконки
- **Service Worker** - оффлайн + push
- **Web App Manifest** - PWA манифест

## 🌐 Деплой

### Vercel (рекомендуется)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm run build
# Загрузите dist/ в gh-pages branch
```

## 📱 Тестирование PWA

### Lighthouse Audit

1. DevTools (F12) → Lighthouse
2. Выберите "Progressive Web App"
3. Click "Generate report"
4. Цель: **90+ баллов**

### Оффлайн тест

1. DevTools → Network → Offline
2. Обновите страницу
3. Приложение должно работать!

### Установка на устройства

- **Android:** Chrome → Menu → "Install BATYS.HUB"
- **iOS:** Safari → Share → "Add to Home Screen"
- **Desktop:** Chrome → Address bar → Install icon

## 📚 Документация

- **PWA_SETUP.md** - Полная инструкция по PWA
- **CREATE_ICONS.md** - Создание иконок
- **DESIGN_SYSTEM.md** - Дизайн система
- **EXPORT_COMPONENTS.md** - Экспорт кода для AI

## 🔐 Безопасность

- ✅ HTTPS обязателен для PWA (автоматически на Vercel/Netlify)
- ✅ Content Security Policy
- ✅ Безопасное кеширование
- ✅ Push permissions required

## 🎯 Roadmap

- [x] PWA манифест
- [x] Service Worker
- [x] Оффлайн режим
- [x] Промпт установки
- [ ] Push-уведомления backend
- [ ] Background sync
- [ ] Periodic sync
- [ ] Web Share API
- [ ] Contact Picker API

## 📄 Лицензия

MIT License - создано с ❤️ для Актау

## 🤝 Контакты

**BATYS.HUB** - Западный карьерный хаб на базе ИИ

---

**Версия:** 1.0.0  
**Создано:** 2026-04-24  
**Последнее обновление:** 2026-04-24
