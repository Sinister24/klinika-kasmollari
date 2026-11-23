# Klinika Kasmollari — Vite + React + TypeScript Setup

Projekti zyrtar i uebsajtit për **Klinika Kasmollari** në Pogradec, Shqipëri, i ndërtuar me stack modern:
- ⚡ **Vite** — Build tool ultra i shpejtë
- ⚛️ **React 18 & TypeScript** — Arkitekturë e plotë modulare dhe tipizim strikt
- 🎨 **Tailwind CSS** — Dizajn modern, palette mjekësore (Medical Teal `#00A896`, Slate `#0F172A`)
- 🎬 **Framer Motion** — Animacione fluide dhe tranzicione të buta
- 💎 **Lucide React** — Ikona minimale dhe elegante
- 🌊 **Lenis** — Smooth scroll me performancë të lartë
- 🎉 **Canvas Confetti** — Efekt festiv konfetash pas dërgimit të formularit të rezervimit
- 🌍 **Sistem Shumëgjuhësh (5 Gjuhë)** — Shqip (SQ), English (EN), Italiano (IT), Deutsch (DE), Español (ES)

---

## 📁 Struktura e Projektit

```
klinika-kasmollari/
├── public/
│   └── images/                     # Të gjitha fotot origjinale të klinikës
├── src/
│   ├── components/
│   │   ├── TopBar.tsx              # Shiriti i sipërm (orari, adresa, Instagram)
│   │   ├── Navbar.tsx              # Navigimi sticky glassmorphic + zgjedhja e gjuhës
│   │   ├── Hero.tsx                # Hero section me foto nate, statistika & CTAs
│   │   ├── Highlights.tsx          # 4 pikat kryesore të sigurisë dhe teknologjisë
│   │   ├── About.tsx               # Historia & foto reale kirurgjie/stomatologjie
│   │   ├── Services.tsx            # 6 kartat e shërbimeve me emrat e mjekëve
│   │   ├── Team.tsx                # Profilet e Dr. Ylli, Dr. Lorena & Dr. Enea
│   │   ├── Cases.tsx               # Rastet klinike Para & Pas (Zirkon, Faseta)
│   │   ├── HappyPatients.tsx       # Muri me fotot e pacientëve të lumtur
│   │   ├── DentalTourism.tsx       # Paketa e turizmit dentar në Pogradec
│   │   ├── Testimonials.tsx        # Vlerësimet me 5 yje nga pacientët
│   │   ├── ContactSection.tsx      # Formular rezervimi, orari, Google Maps embed
│   │   ├── BookingModal.tsx        # Dritarja pop-up e rezervimit me konfeta
│   │   ├── FloatingActions.tsx     # Butoni pulsues i WhatsApp & thirrjes direkte
│   │   └── Footer.tsx              # Lidhjet e shpejta, mjekët, rrjetet sociale
│   ├── context/
│   │   └── LanguageContext.tsx     # Provider i gjuhëve dhe ndërrimi në kohë reale
│   ├── translations/
│   │   └── index.ts                # Fjalori me përkthimet për SQ, EN, IT, DE, ES
│   ├── types/
│   │   └── index.ts                # Përkufizimet e tipave TypeScript
│   ├── App.tsx                     # Komponenti kryesor
│   ├── main.tsx                    # Entry point me konfigurimin e Lenis
│   └── index.css                   # Stilet globale dhe rregullimet e Tailwind
├── index.html                      # HTML root me fontin Plus Jakarta Sans
├── package.json                    # Varësitë dhe skriptet
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Si ta nisni projektin

1. **Instaloni varësitë:**
   ```bash
   npm install
   # ose me pnpm:
   pnpm install
   ```

2. **Nisni serverin lokal të zhvillimit:**
   ```bash
   npm run dev
   # ose:
   pnpm run dev
   ```
   Serveri do të hapet automatikisht në: `http://localhost:3000`

3. **Për të krijuar versionin e prodhimit (Build):**
   ```bash
   npm run build
   ```
