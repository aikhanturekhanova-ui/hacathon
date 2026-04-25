# 📱 BATYS.HUB - Progressive Web App (PWA)

## ✅ Что добавлено:

### 1. Service Worker (`/public/sw.js`)
- ✅ Кеширование статических ресурсов
- ✅ Оффлайн режим работы
- ✅ Push-уведомления
- ✅ Background sync для отложенных откликов
- ✅ Автоматическое обновление

### 2. Web App Manifest (`/public/manifest.json`)
- ✅ Иконки для всех платформ
- ✅ Название и описание
- ✅ Цвета темы
- ✅ Shortcuts (быстрые действия)
- ✅ Share target API

### 3. Новые компоненты:

#### InstallPWA (`/src/app/components/InstallPWA.tsx`)
- Показывает промпт установки приложения
- Автоматически скрывается после установки
- Красивый баннер с преимуществами

#### OfflineBanner (`/src/app/components/OfflineBanner.tsx`)
- Показывает статус подключения
- Уведомляет когда оффлайн/онлайн
- Автоматически исчезает через 3 секунды

#### PWA Utils (`/src/pwa/register-sw.ts`)
- Регистрация service worker
- Управление установкой
- Проверка статуса (PWA/Web)
- Слушатели онлайн/оффлайн

## 🚀 Возможности PWA:

### ✨ Установка
- Приложение можно установить на:
  - 📱 Android (Chrome, Edge)
  - 🍎 iOS (Safari - Add to Home Screen)
  - 💻 Windows (Edge, Chrome)
  - 🍏 macOS (Safari, Chrome)
  - 🐧 Linux (Chrome, Firefox)

### 🔔 Push-уведомления
- Уведомления о новых вакансиях
- Напоминания о откликах
- Обновления статуса заявок

### 💾 Оффлайн работа
- Просмотр сохраненных вакансий
- Создание откликов (синхронизируются при подключении)
- Кеширование посещенных страниц

### ⚡ Быстрая загрузка
- Мгновенный запуск
- Кеширование ресурсов
- Предзагрузка контента

## 📦 Необходимые иконки:

Создайте следующие иконки и поместите в `/public/`:

```
/public/
  icon-192.png   (192x192px) - для Android
  icon-512.png   (512x512px) - для качественного отображения
  icon-apple.png (180x180px) - для iOS
  icon-96.png    (96x96px)   - badge для уведомлений
```

### Генерация иконок:

#### Вариант 1: Онлайн генераторы
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

#### Вариант 2: Используйте логотип
```bash
# С помощью ImageMagick
convert logo.png -resize 192x192 public/icon-192.png
convert logo.png -resize 512x512 public/icon-512.png
convert logo.png -resize 180x180 public/icon-apple.png
convert logo.png -resize 96x96 public/icon-96.png
```

#### Вариант 3: Figma/Canva
Создайте квадратное изображение с:
- Фон: градиент #0052FF → #00FFB9
- Текст: "BATYS.HUB" белым цветом
- Размер: 512x512px
- Экспортируйте в нужных размерах

## 🛠️ Установка и деплой:

### Локальная разработка:
```bash
# Приложение уже работает как PWA
npm run dev
# или
pnpm dev
```

### Production деплой:

#### Vercel:
```bash
vercel --prod
```

#### Netlify:
```bash
netlify deploy --prod
```

#### GitHub Pages:
```bash
npm run build
# Загрузите dist/ в gh-pages branch
```

## 📋 Checklist для полноценного PWA:

- ✅ Service Worker зарегистрирован
- ✅ Manifest.json создан
- ⏳ Иконки (нужно создать)
- ✅ HTTPS (автоматически на Vercel/Netlify)
- ✅ Responsive дизайн
- ✅ Оффлайн страница
- ✅ Установочный промпт
- ✅ Индикатор оффлайн режима

## 🎯 Как протестировать:

### Chrome DevTools:
1. Откройте DevTools (F12)
2. Перейдите в Application
3. Проверьте:
   - Service Workers (должен быть активен)
   - Manifest (проверьте все поля)
   - Cache Storage (должны быть закешированные файлы)

### Lighthouse:
1. DevTools → Lighthouse
2. Выберите "Progressive Web App"
3. Запустите audit
4. Цель: 90+ баллов

### Тест установки:
1. Откройте в Chrome/Edge
2. Кликните на иконку установки в адресной строке
3. Или используйте меню → "Install BATYS.HUB"
4. Приложение появится на рабочем столе/в меню

### Тест оффлайн:
1. DevTools → Network
2. Включите "Offline"
3. Обновите страницу
4. Приложение должно работать

## 🔐 Безопасность:

- ✅ Service Worker работает только на HTTPS
- ✅ Кеш обновляется автоматически
- ✅ Старые версии кеша удаляются
- ✅ Push-уведомления требуют разрешения

## 📱 Функции по платформам:

### Android:
- ✅ Полная установка как нативное приложение
- ✅ Push-уведомления
- ✅ Add to Home Screen
- ✅ Shortcuts

### iOS (Safari):
- ✅ Add to Home Screen
- ⚠️ Push-уведомления (ограничены)
- ✅ Standalone mode
- ⚠️ Service Worker (ограничения)

### Desktop (Windows/Mac/Linux):
- ✅ Установка через браузер
- ✅ Push-уведомления
- ✅ Shortcuts
- ✅ Оконный режим

## 🎨 Кастомизация:

### Изменить цвета темы:
Отредактируйте `/public/manifest.json`:
```json
{
  "theme_color": "#0052FF",
  "background_color": "#0A0E1A"
}
```

### Добавить shortcuts:
```json
{
  "shortcuts": [
    {
      "name": "Ваш шорткат",
      "url": "/path",
      "icons": [...]
    }
  ]
}
```

### Настроить кеширование:
Отредактируйте `/public/sw.js`:
```javascript
const STATIC_ASSETS = [
  '/',
  '/ваш-файл.js'
];
```

## 🚀 Готово к использованию!

Приложение BATYS.HUB теперь:
- 📱 Устанавливается на любое устройство
- 💾 Работает оффлайн
- ⚡ Загружается мгновенно
- 🔔 Отправляет уведомления
- 🎯 Выглядит как нативное приложение

---

**Следующий шаг:** Создайте иконки и задеплойте на production!
