# 🛒 DigiTools — Premium Digital Products Store

A fully responsive React-based e-commerce platform for premium digital tools, built with modern frontend technologies.

![DigiTools Banner](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 🌐 Live Site

🔗 **[View Live →](https://fahimuntasin.github.io/Assignment-6)**

---

## 📸 Preview

> A modern digital product marketplace with cart functionality, product filtering, and smooth UI interactions.

---

## ✨ Features

### 🛍️ Product System
- 8 premium digital products with tags *(Best Seller, Popular, New)*
- 3-column responsive product grid
- Each card shows: icon, name, price, features, tag badge
- **"Buy Now"** button changes to **"Added to Cart ✓"** on click

### 🛒 Cart Functionality
- Add products to cart with one click
- Live cart count in Navbar badge
- Remove individual items from cart
- Total price calculation
- **Proceed to Checkout** clears entire cart

### 🔔 Toast Notifications *(React-Toastify)*
- ✅ Added to cart
- ❌ Removed from cart
- ⚠️ Already in cart warning
- 🎉 Checkout success

### 📐 UI Sections
- **Navbar** — Sticky with live cart count
- **Banner** — Hero with image and CTA buttons
- **Stats** — 50K+ Users, 200+ Tools, 4.9 Rating
- **Products / Cart Toggle** — Switch between views
- **Steps** — 3-step onboarding section
- **Pricing** — Starter / Pro / Enterprise tiers
- **CTA** — Full-width call to action
- **Footer** — Links and social icons

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | UI component framework |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Pre-built UI components |
| **React-Toastify** | Toast notifications |
| **React Icons** | Social & UI icons |
| **Lucide React** | Clean icon set |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with cart badge
│   ├── Banner.jsx        # Hero section
│   ├── Stats.jsx         # Stats bar
│   ├── MainSection.jsx   # Products + Cart toggle
│   ├── ProductCard.jsx   # Individual product card
│   ├── CartItem.jsx      # Cart item row
│   ├── Steps.jsx         # 3-step section
│   ├── Pricing.jsx       # Pricing tiers
│   ├── Cta.jsx           # CTA section
│   └── Footer.jsx        # Footer with social links
├── components/
│   └── Products.jsx      # Product data array
└── App.jsx               # Root with cart state
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/fahimuntasin/Assignment-6.git

# Navigate to project
cd Assignment-6

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📦 NPM Packages Used

```bash
npm install react-toastify
npm install react-icons
npm install lucide-react
```

---

## 👨‍💻 Author

**Fahimun Tasin**
- GitHub: [@fahimuntasin](https://github.com/fahimuntasin)
- Building: Full-stack web apps, SaaS products & AI tools 🚀

---

*Built with ❤️ from Bangladesh 🇧🇩*
