# PopX — React UI Assignment

A pixel-perfect React JS implementation of the PopX mobile app interface, built from an Adobe XD design. The app features 4 screens with seamless navigation, centered in a 375×812 mobile frame on the webpage.

---

## 🔗 Links

- **Live Demo:** [your-netlify-or-vercel-link]
- **GitHub Repo:** [your-github-repo-link]
- **Design Reference:** [Adobe XD Design](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## 📱 Screens

| # | Screen | Route | Description |
|---|---|---|---|
| 1 | Landing | `/` | Welcome screen with Create Account and Login buttons |
| 2 | Sign Up | `/Signup` | Registration form with 5 fields and agency radio selector |
| 3 | Sign In | `/Signin` | Login form with email and password fields |
| 4 | Profile | `/Profile` | Account settings screen with user info |

---

## 🛠 Tech Stack

- **React JS** — UI library
- **React Router DOM** — client-side navigation
- **Tailwind CSS** — utility-first styling
- **Vite** — build tool

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Landing.jsx      # Welcome screen
│   ├── Signup.jsx       # Create account screen
│   ├── Signin.jsx       # Login screen
│   └── Profile.jsx      # Account settings screen
├── App.jsx              # Route definitions
└── main.jsx             # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/popx-app.git

# Navigate into the project
cd popx-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🏗 Build & Deploy

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 🎨 Design Decisions

- **375×812px fixed frame** — matches standard mobile screen dimensions from the XD design
- **Centered layout** — mobile frame is centered on the webpage using flexbox
- **Pixel-perfect values** — all spacing, font sizes, colors, and dimensions are taken directly from Adobe XD inspect panel
- **Floating labels** — input labels use absolute positioning to float above the input border
- **React Router** — all page transitions use `<Link>` for seamless client-side navigation, no page reloads

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Purple | `#6C25FF` | Primary buttons, labels |
| Purple (light) | `#6C25FF4B` | Secondary button |
| Background | `#F7F8F9` | Page and input background |
| Border | `#CBCBCB` | Input borders, dividers |
| Text | `#1D2226` | Primary text color |

---

## 📝 Notes

- This is a **UI-only** project — no backend or authentication is implemented
- Navigation simulates real app flow: Landing → Sign Up / Sign In → Profile
- All form inputs are uncontrolled except the agency radio buttons on the Sign Up screen