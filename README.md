# Esep — лендинг для бухгалтерских фирм

Отдельный маркетинговый лендинг Esep, адресованный **бухгалтерским фирмам и аутсорс-бухгалтерам**.
Дизайн-система 1:1 с основным B2B-лендингом (business.esepkz.com): Next.js 14 + Tailwind + Framer Motion, палитра navy/sky/green, шрифт Inter, эффекты glass / aurora. Без изображений — все мокапы на CSS/SVG.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # прод-сборка
```

## Структура

- `app/` — layout, страница, глобальные стили, иконки
- `components/` — секции лендинга:
  - `Hero` · `Marquee` · `Problem` · `Solution`
  - `Cabinet` — **мокап мульти-кабинета** (список клиентов + карточка клиента с формами)
  - `Services` — возможности (910/200/300, зарплаты, OCR, импорт Kaspi…)
  - `Custom` — «под ваши требования» (доработка модулей под фирму)
  - `Process` · `Partnership` · `Security` · `FAQ` · `CTA` · `Footer`

## Контакт

WhatsApp / тел.: +7 705 991 47 89 (`77059914789`).
Цены на странице не публикуются — обсуждаются на демо.

## Деплой

Vercel (`vercel.json`, framework: nextjs). Репозиторий: `esep.landing3`.
