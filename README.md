# ◈ Vertex

> **The note-taking app that thinks at the speed of thought.**

Vertex is a modern, web-based note-taking application built for clarity and speed. Organize your ideas, capture fleeting thoughts, and build a personal knowledge base — all in a distraction-free, elegant workspace.

---

## ✦ Features

### 📝 Rich Note Editing
- Full **Markdown support** with live preview toggle
- Inline formatting: bold, italic, strikethrough, inline code, and more
- **Code blocks** with syntax highlighting for 30+ languages
- Drag-and-drop **image embedding** directly into notes
- Tables, checklists, and ordered/unordered lists

### 🗂️ Smart Organization
- **Notebooks** — group related notes into named collections
- **Tags** — assign multiple tags per note for cross-collection discovery
- **Pinned notes** — keep your most important notes always at the top
- **Starred notes** — bookmark notes for quick access from any view
- **Trash & recovery** — deleted notes are held for 30 days before permanent removal

### 🔍 Powerful Search
- **Full-text search** across all notes, notebooks, and tags in real time
- Filter by date created, date modified, notebook, or tag
- Highlight matching terms within search results
- Search history for quick re-runs of recent queries

### 🌲 Linked Thinking
- **Bidirectional links** — reference any note using `[[Note Title]]` syntax
- **Backlinks panel** — see every note that links to the current one
- **Graph view** — visualize the connections between your notes as an interactive node graph

### 🎨 Workspace Customization
- **Light / Dark / System** theme modes
- Four editor font choices: monospace, serif, sans-serif, and dyslexia-friendly
- Adjustable editor width: focused (680px), comfortable (860px), or full
- Custom accent color picker
- Toggle UI density between compact and spacious

### ☁️ Sync & Storage
- **Auto-save** — notes are saved as you type with no manual save required
- **Cloud sync** — notes are synced across all your devices in real time
- **Offline mode** — read and edit notes without an internet connection; changes sync when reconnected
- **Local-first storage** using IndexedDB for instant load times

### 📤 Export & Import
- Export individual notes or entire notebooks as:
  - **Markdown** (`.md`)
  - **Plain Text** (`.txt`)
  - **PDF**
  - **HTML**
- Import `.md` and `.txt` files directly into any notebook
- Bulk export as a `.zip` archive

### 🔒 Privacy & Security
- **End-to-end encryption** for notes marked as private
- **Passphrase-locked notes** — require a password to open sensitive notes
- Notes never leave your device unencrypted
- No ads, no tracking, no selling of your data

### 🤝 Collaboration *(Pro)*
- Share individual notes via a public read-only link
- Invite collaborators to a notebook with view or edit access
- **Real-time co-editing** powered by CRDTs (no conflicts, ever)
- Comment threads on any block within a note

### ⌨️ Keyboard-First Workflow
- Full keyboard navigation — no mouse required
- Command palette (`Cmd/Ctrl + K`) for every action in the app
- Vim keybindings toggle for power users
- Customizable shortcuts for your most-used actions

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher (or `pnpm` / `yarn`)
- A modern browser (Chrome 110+, Firefox 110+, Safari 16+, Edge 110+)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/vertex.git
cd vertex

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗺️ Roadmap

| Status | Feature |
|--------|---------|
| ✅ Done | Rich Markdown editor |
| ✅ Done | Notebooks & Tags |
| ✅ Done | Full-text search |
| ✅ Done | Dark mode |
| ✅ Done | Export to Markdown / PDF |
| 🔄 In Progress | Bidirectional links & Graph view |
| 🔄 In Progress | Real-time collaboration |
| 📋 Planned | Mobile app (iOS & Android) |
| 📋 Planned | Browser extension for web clipping |
| 📋 Planned | AI-powered note summarization |
| 📋 Planned | Calendar & daily notes view |
| 📋 Planned | Zapier / n8n integration |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Editor | CodeMirror 6 |
| State | Zustand |
| Storage | IndexedDB (Dexie.js) |
| Sync | Supabase Realtime |
| Auth | Supabase Auth |
| Bundler | Vite |
| Testing | Vitest + Playwright |

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

```bash
# Run tests
npm run test

# Run end-to-end tests
npm run test:e2e

# Lint
npm run lint
```

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a pull request

---

## 📄 License

Vertex is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with care · <a href="https://github.com/your-username/vertex">GitHub</a> · <a href="#">Docs</a> · <a href="#">Discord</a>
</p>
