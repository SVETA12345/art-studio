# Art studio

## Описание проекта

«Art studio» — это адаптивный сайт, который содержит информацию о художественной студии университета имени И. М. Губкина.

Сайт состоит из трёх страниц: главная, «О студии» и «Расписание и контакты». На странице «О студии» размещена галерея работ преподавателя: изображения листаются стрелками, а по клику открываются в полноэкранном попапе. Расписание занятий и контакты (телефон, адрес, карта) вынесены на отдельную страницу.

## Стек

- **React 18** — UI-библиотека
- **React Router 6** (`BrowserRouter`) — маршрутизация между страницами
- **Create React App** (`react-scripts` 5.0.1) — сборка, dev-сервер, ESLint-конфигурация
- **CSS Modules-подобная структура на БЭМ** — стили разложены по отдельным файлам в `src/blocks`
- **Inter** — локальные шрифты, подключены из `src/vendor/fonts`

Внешних UI-библиотек, сборщиков и CSS-фреймворков нет: только React и react-router.

## Требования

- **Node.js** ≥ 14 (проверено на 18.17.0)
- **npm** ≥ 6 (проверено на 9.6.7)

## Быстрый старт

```bash
npm install    # установка зависимостей
npm start      # запуск dev-сервера
```

Dev-сервер откроется на http://localhost:3006 — порт задан в скрипте `start` в `package.json`.

Приложение поддерживает hot reload — изменения в коде применяются автоматически.

## Скрипты

| Команда         | Описание                                                |
| --------------- | ------------------------------------------------------- |
| `npm start`     | Запуск dev-сервера на порту 3006                        |
| `npm run build` | Production-сборка в каталог `build/`                    |
| `npm test`      | Тесты в watch-режиме (React Testing Library + Jest)     |
| `npm run eject` | Извлечение конфигурации из `react-scripts` (необратимо) |

## Структура проекта

```
art-studio/
├── public/                    # Статика, отдаётся как есть
│   ├── index.html             # HTML-шаблон, точка входа
│   ├── manifest.json          # Метаданные PWA
│   └── offline.html
├── src/
│   ├── index.js               # Точка монтирования: ReactDOM + BrowserRouter
│   ├── index.css              # Глобальные стили
│   ├── App.js                 # Корневой компонент: Routes + Header + ImagePopup
│   ├── constants.js           # Список изображений для галереи
│   ├── reportWebVitals.js     # Сбор метрик производительности
│   ├── components/            # Компоненты React
│   │   ├── App.js             # Оболочка приложения и состояние попапа
│   │   ├── Header.js          # Шапка с навигацией
│   │   ├── Glavnay.js         # Главная страница
│   │   ├── Stydia.js          # Страница «О студии» + галерея
│   │   ├── Contacts.js        # Расписание, контакты, карта
│   │   └── ImagePopup.js      # Попап с просмотром изображения
│   ├── hooks/
│   │   └── useMediaQuery.js   # Хук для адаптивности через matchMedia
│   ├── blocks/                # БЭМ-блоки и их стили
│   │   ├── header/ contacts/ glavnay/ page/
│   │   └── place/ places/ popup/ stydia/
│   ├── images/                # Растровые изображения и SVG-иконки
│   └── vendor/
│       ├── normalize.css      # Сброс стилей
│       └── fonts/             # Inter (woff/woff2) + fonts.css
└── package.json
```

### Организация стилей

Стили следуют методологии БЭМ и вынесены из общих файлов в отдельные. Каждая папка блока содержит свой CSS-файл, а вложенные папки соответствуют модификаторам и элементам:

- `contacts/` — блок страницы контактов
- `contacts/__title/contacts__title.css` — элемент блока
- `popup/_opened/popup_opened.css` — модификатор состояния (открытый попап)
- `place/__img/_prepod/place__img_prepod.css` — модификатор элемента

Имена классов в разметке совпадают с именами файлов.

## Маршрутизация

Маршруты заданы в `src/components/App.js`:

| Путь        | Компонент  | Страница              |
| ----------- | ---------- | --------------------- |
| `/`         | `Glavnay`  | Главная               |
| `/info`     | `Stydia`   | О студии              |
| `/contacts` | `Contacts` | Расписание и контакты |

## Адаптивность

Десктопная и мобильная версии реализованы на CSS-медиазапросах. Для галереи дополнительно используется хук `src/hooks/useMediaQuery.js`: на ширине от 768px показываются сразу две работы и кнопки навигации, на меньших — одна работа без стрелок.

## Линтер

ESLint настроен через `eslintConfig` в `package.json` (пресеты `react-app` и `react-app/jest`). Проверить код вручную:

```bash
npx eslint src --ext .js,.jsx
```

Предупреждения также выводятся при запуске `npm start` и `npm run build`.

## Тесты

В проекте настроен Jest и React Testing Library (`src/setupTests.js`, `src/App.test.js`). Запуск:

```bash
npm test              # watch-режим
CI=true npm test      # однократный прогон
```

## Деплой

```bash
npm run build         # сборка в build/
```

Каталог `build/` содержит статические файлы и может размещаться на любом статическом хостинге. Для локальной проверки сборки:

```bash
npx serve -s build
```

Приложение использует `BrowserRouter`, поэтому сервер должен перенаправлять все неизвестные пути на `index.html`, иначе прямой переход на `/info` и `/contacts` вернёт 404.

## Известные проблемы

- В `public/index.html` подключается `./serviceworker.js`, но самого файла нет — регистрация service worker падает с 404 в консоли браузера. Либо добавьте файл, либо удалите блок `<script>` из `index.html`.
- Скрипт `start` использует Windows-синтаксис `set PORT=3006 && react-scripts start`, поэтому `npm start` не работает на macOS и Linux. Для кроссплатформенности замените на `cross-env PORT=3006 react-scripts start` (пакет `cross-env` уже установлен как зависимость).
- В `package.json` имя проекта осталось `"my-app"` — стоит заменить на `art-studio`.
- `public/manifest.json` содержит значения по умолчанию (`"name": "Create React App Sample"`).
- При сборке выводится предупреждение `caniuse-lite is outdated` — обновляется командой `npx update-browserslist-db@latest`.
- Сборка выводит предупреждение о ненайденной зависимости `@babel/plugin-proposal-private-property-in-object` в `babel-preset-react-app`. Это баг create-react-app; обходится добавлением пакета в `devDependencies`.
