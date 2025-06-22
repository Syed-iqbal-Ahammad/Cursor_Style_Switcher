# Cursor Style Switcher

A modern, interactive web app to explore, preview, and copy CSS cursor styles. Built with **React**, **Vite**, and **CSS Modules**.

---

## 🖱️ Demo

https://github.com/Syed-iqbal-Ahammad/Cursor_Style_Switcher/raw/refs/heads/main/public/Cursor_Style_Switcher.mov

---

## 🚀 Features

- **Live Preview:** Instantly see how each CSS cursor style looks and behaves.
- **Search & Filter:** Quickly find cursors by name, description, or category.
- **Copy CSS:** One-click copy of the CSS code for any cursor style.
- **Theme Switcher:** Toggle between light and dark modes.
- **Persistent Selection:** Remembers your last selected cursor and theme.
- **Responsive Design:** Looks great on all devices.
- **Accessible:** Keyboard navigation and ARIA labels for usability.
- **Beautiful Animations:** Smooth transitions, shimmer, and glow effects.

---


## 📦 Project Structure

```
src/
  App.jsx                # Main app logic
  App.module.css         # App-level styles
  index.css              # Global and utility styles
  main.jsx               # Entry point
  assets/                # Static assets (images, icons, etc.)
  components/            # Reusable UI components
    CursorCard.jsx
    CursorCard.module.css
    CursorGrid.jsx
    CursorGrid.module.css
    CursorPreview.jsx
    CursorPreview.module.css
    Footer.jsx
    Footer.module.css
    Header.jsx
    Header.module.css
    SearchBar.jsx
    SearchBar.module.css
    ThemeProvider.jsx
    Toast.jsx
    Toast.module.css
  data/
    cursors.js                    # Cursor data and categories
  hooks/
    useLocalStorage.js            # Custom hook for persistent state
public/
  cursor.png                      # Favicon
  Cursor_Style_Switcher.mov       # Demo video
index.html                        # HTML template
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/Syed-iqbal-Ahammad/Cursor_Style_Switcher.git
cd Cursor_Style_Switcher
npm install
```

### Development

Start the local development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

### Linting

```sh
npm run lint
```

---

## 🧩 Key Components

- [`App.jsx`](src/App.jsx): Main application logic and state.
- [`Header`](src/components/Header.jsx): App title, theme switcher, GitHub link.
- [`Footer`](src/components/Footer.jsx): Credits and features.
- [`SearchBar`](src/components/SearchBar.jsx): Search and filter UI.
- [`CursorPreview`](src/components/CursorPreview.jsx): Live preview and copy/reset actions.
- [`CursorGrid`](src/components/CursorGrid.jsx): Grid of all cursor cards.
- [`CursorCard`](src/components/CursorCard.jsx): Individual cursor style card.
- [`ThemeProvider`](src/components/ThemeProvider.jsx): Theme context and persistence.
- [`Toast`](src/components/Toast.jsx): Notification popups.
- [`useLocalStorage`](src/hooks/useLocalStorage.js): Custom hook for persistent state.
- [`cursors.js`](src/data/cursors.js): List of all cursor styles and categories.

---

## 🎨 Theming

- Light and dark themes are supported.
- Theme is persisted using `localStorage`.
- Easily extendable via CSS variables in `index.css` and component modules.

---

## 🏷️ Cursor Data

All cursor styles and categories are defined in [`src/data/cursors.js`](src/data/cursors.js). Each cursor has:

- `id`: Unique identifier
- `name`: Display name
- `value`: CSS value
- `description`: Short description
- `category`: Category for filtering

---

## ♿ Accessibility

- All interactive elements are keyboard accessible.
- ARIA labels and roles are used for better screen reader support.

---

## 🙏 Credits

- [Lucide Icons](https://lucide.dev/) for beautiful SVG icons.
- [Vite](https://vitejs.dev/) for lightning-fast development.
- [React](https://react.dev/) for UI.

---

## 🌐 Links

- [Live Demo](https://cursor-style-switcher-rho.vercel.app/) 
- [GitHub Repo](https://github.com/Syed-iqbal-Ahammad/Cursor_Style_Switcher)

---

Enjoy exploring CSS cursors
