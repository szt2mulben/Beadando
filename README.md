# 🎯 Webes Beadandó Projekt

[![Vite](https://img.shields.io/badge/Vite-^6.2-blueviolet)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev/)
[![Language](https://img.shields.io/badge/Language-JavaScript-yellow)](#technológiák)

---

## 📚 Tartalomjegyzék

- [Áttekintés](#áttekintés)
- [Projektszerkezet](#projektszerkezet)
- [Telepítés és futtatás](#telepítés-és-futtatás)
- [Technológiák](#technológiák)
- [Leírás a részekről](#leírás-a-részekről)

---

## 📖 Áttekintés

Ez a projekt egy webfejlesztési beadandó, amely a következőket tartalmazza:

- HTML5 és CSS3
- AJAX adatkezelés
- Objektumorientált JavaScript
- 2 különálló React alkalmazás:
  - Minigame App 🎮
  - Quiz App ❓

---

## 🗂️ Projektszerkezet

```text
/
├── minigame-app/      # React alapú minijáték
├── quiz-app/          # React alapú kvízjáték
├── Web/
│   └── index.html     # Statikus oldal adattáblázattal és AJAX példával
├── start.bat          # Indító fájl
└── README.md          # Dokumentáció (ez a fájl)
```

---

## 🚀 Telepítés és futtatás

### Követelmények

- [Node.js](https://nodejs.org/) (npm csomagkezelővel)
- Internetböngésző (pl. Chrome, Edge)

### Automatikus indítás

A projekt egyszerű indításához futtasd:

```bash
start.bat
```

Ez automatikusan:

- Elindítja a Minigame- és a Quiz-alkalmazásokat
- Megnyitja a `Web/index.html` oldalt böngészőben

### Kézi indítás

Manuális indításhoz:

```bash
# Minigame App
cd minigame-app
npm install
npm run dev

# Quiz App
cd ../quiz-app
npm install
npm run dev
```

---

## 🛠️ Technológiák

- **HTML5**, **CSS3**
- **JavaScript** (objektumorientált programozás)
- **AJAX** (`fetch` API-val)
- **React 18** (Vite alapú)
- **Vite 6** (gyors fejlesztői környezet)

---

## 🎮 Leírás a részekről

### Minigame App

> Egy gyors és szórakoztató mini játék React keretrendszerrel.

### Quiz App

> Egy több kérdésből álló kvízjáték pontszámítással.

### Statikus Weboldal (`index.html`)

- Adattáblázat megjelenítés
- AJAX adatlekérés
- Objektumorientált JavaScript példák

---

