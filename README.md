# 180 Math

> **180 Math** is a premier educational mathematics and tutoring platform featuring interactive diagnostic testing engines, high-performance canvas particle physics, WCAG-compliant accessible design, and comprehensive curriculum offerings.

🌐 **Production Website:** [180math.com](https://180math.com/)

---

## 🌟 Key Features

- **Interactive Diagnostic Placement Test (`test.html`)**: Real-time evaluation engine assessing mastery across algebra, geometry, trigonometry, and calculus with instant feedback.
- **Physics-Driven Canvas Experience (`main.js`)**: Custom 2D particle simulation featuring dynamic mouse interactions, boundary collision detection, and mathematical symbol rendering.
- **Apple Dark Mode Aesthetic**: Luxury Midnight (`#0B0B33`) and Gold (`#E5BE85`) visual design language with subtle grain overlays and responsive spotlight card illumination.
- **Accessibility & Keyboard Navigation**: WCAG-compliant `:focus-visible` navigation states, full ARIA labelling, and screen-reader optimizations.
- **Standalone 3D Visualizer (`180math-poster/`)**: Interactive 3D starfield and poster component built with React, Three.js, and Vite.

---

## 📁 Repository Structure

```
180math/
├── index.html              # Main landing page with hero & interactive showcase
├── test.html               # Diagnostic test engine & scoring interface
├── program.html            # Course curriculums & tutoring programs
├── pricing.html            # Tuition tiers and program options
├── schedule.html           # Calendar, session timings, and availability
├── about.html              # Instructor backgrounds & teaching philosophy
├── contact.html            # Inquiry & consultation booking form
├── testimonials.html       # Student success stories & parent testimonials
├── faq.html                # Frequently asked questions & policies
├── main.js                 # Canvas particle physics, text scrambler, & UI logic
├── logo.png                # Official 180 Math brand asset
├── CNAME                   # Custom domain configuration (180math.com)
│
├── tests/                  # Jest unit test suite
│   ├── handleCollision.test.js    # Canvas boundary collision physics tests
│   ├── spawnParticle.test.js      # Particle initialization & lifecycle tests
│   ├── updateRects.test.js        # DOM layout bounding rect cache tests
│   └── scramble.test.js           # Character scrambler typography tests
│
└── 180math-poster/         # React + Three.js animated visualizer
    ├── src/                # Three.js starfield components
    ├── vite.config.js      # Vite build configuration
    └── package.json        # Subproject dependencies
```

---

## 🚀 Getting Started

### Local Preview
Because 180 Math is built with lightweight, zero-dependency static web standards, you can preview the website instantly using any local HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## 🧪 Testing

The repository contains a unit test suite testing critical physics and animation algorithms in `main.js`:

```bash
# Install test runner dependencies
npm install

# Run all unit tests with coverage
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 🎨 3D Poster Subproject

To explore or build the standalone 3D Three.js poster application:

```bash
cd 180math-poster
pnpm install # or npm install
npm run dev
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
