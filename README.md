# 📚 BookHaven - Online Bookstore

A modern, responsive online bookstore built with Next.js, React, and Tailwind CSS. Features a beautiful UI with smooth animations, shopping cart functionality, and a curated collection of books across multiple categories.

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app) *(Deploy to Vercel and update this link)*

## ✨ Features

### 🏠 Home Page
- **Hero Section** - Eye-catching gradient banner with call-to-action
- **Featured Books** - Showcase of 4 handpicked books
- **Categories Grid** - 6 book categories with icons (Fiction, Mystery, Science, Romance, History, Technology)
- **New Arrivals** - Horizontal scrolling carousel of latest additions

### 📖 Books Catalog
- **Responsive Grid Layout** - Adapts from 1 to 4 columns based on screen size
- **Real-time Search** - Search books by title or author
- **Category Filter** - Filter books by category
- **Pagination** - 12 books per page with Previous/Next navigation
- **Hover Effects** - Cards lift and show shadow on hover

### 📕 Book Details
- **Responsive Layout** - Side-by-side on desktop, stacked on mobile
- **Complete Information** - Title, author, price, rating, stock status
- **Description Toggle** - Read More/Less functionality
- **Quantity Selector** - Adjust quantity with +/- buttons
- **Add to Cart** - Button with loading state animation
- **Related Books** - 4 similar books from the same category

### 🛒 Shopping Cart
- **Cart Management** - Add, update, and remove items
- **Quantity Controls** - Increase/decrease quantity per item
- **Price Calculation** - Auto-calculated subtotal, shipping, and total
- **Empty State** - Beautiful empty cart message with call-to-action
- **Checkout** - Checkout button with success notification

### 🎨 UI/UX Features
- **Smooth Animations** - Framer Motion for page transitions and interactions
- **Toast Notifications** - Real-time feedback for cart actions
- **Mobile Menu** - Slide-in navigation with smooth animations
- **Cart Badge** - Animated badge showing item count
- **Loading States** - Visual feedback during async operations
- **Responsive Design** - Optimized for mobile, tablet, and desktop

## 🛠️ Technology Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** React 19.2.3
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS 3.4.19
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **UI Components:** shadcn/ui

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cinematic-shelves-nextjs.git
   cd cinematic-shelves-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:3000
   ```

## 📁 Project Structure

```
cinematic-shelves-nextjs/
├── app/                    # Next.js App Router pages
│   ├── books/             # Books catalog and detail pages
│   ├── cart/              # Shopping cart page
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── BookCard.jsx      # Book card component
│   ├── Header.jsx        # Navigation header
│   ├── Footer.jsx        # Page footer
│   ├── HeroSection.jsx   # Hero banner
│   ├── FeaturedBooks.jsx # Featured books section
│   ├── CategoriesGrid.jsx # Categories display
│   ├── NewArrivals.jsx   # New arrivals carousel
│   └── StarRating.jsx    # Star rating display
├── context/              # React Context providers
│   └── CartContext.jsx   # Shopping cart state management
├── data/                 # Mock data
│   └── books.js          # Book catalog (24 books)
├── hooks/                # Custom React hooks
│   └── use-mobile.jsx    # Mobile detection hook
├── lib/                  # Utility functions
│   └── utils.js          # Helper functions
└── public/               # Static assets
```

## 🎯 Key Features Implementation

### State Management
- **React Context API** for global cart state
- **Custom Hook** (`useCart`) for cart operations
- **Local State** with useState for component-level state

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Adaptive layouts across all devices

### Animations
- Page load fade-in effects
- Card hover animations (scale + shadow)
- Button hover states
- Cart badge pop animation
- Mobile menu slide-in/out
- Loading spinners

### Code Quality
- Clean, organized folder structure
- Reusable components
- Proper React patterns (hooks, context)
- Meaningful variable names
- No console.logs in production

## 📊 Mock Data

The project includes 24 books across 6 categories:
- Fiction (5 books)
- Mystery (4 books)
- Science (4 books)
- Romance (4 books)
- History (4 books)
- Technology (3 books)

Each book includes:
- Title, author, year
- Category, description
- Price (in ₹), rating
- Stock status
- Cover image (Unsplash)
- Featured/New arrival flags

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Update README**
   - Add your live demo URL above

## 🎨 Design Highlights

- **Color Scheme:** Modern gradient accents with neutral tones
- **Typography:** Geist font family for clean, modern look
- **Spacing:** Consistent padding and margins
- **Shadows:** Cinematic shadows for depth
- **Transitions:** Smooth 300ms transitions throughout

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a portfolio/internship project. Feedback and suggestions are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as part of a Frontend Developer Intern challenge.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
