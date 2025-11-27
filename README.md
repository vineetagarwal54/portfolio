# Portfolio - Vineet Agarwal

Modern, responsive portfolio website showcasing full-stack development, AI engineering, and cloud expertise. Built with React, Vite, Tailwind CSS, and integrated with Google Analytics and Vercel Analytics.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Performance**: Image lazy loading, code splitting, optimized builds
- **Analytics**: Google Analytics 4 + Vercel Analytics integration
- **Contact Form**: Web3Forms integration with rate limiting (3 messages/week)
- **Dark Mode**: System preference detection with manual toggle
- **Animations**: Framer Motion for smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 6
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form**: Web3Forms API
- **Analytics**: Google Analytics 4, Vercel Analytics
- **SEO**: React Helmet Async
- **Email**: EmailJS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/vineetagarwal54/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add your environment variables to `.env`:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
VITE_GA4_MEASUREMENT_ID=your_ga4_measurement_id
```

5. Run development server:
```bash
npm run dev
```
## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization

1. **Content**: Edit `src/constants/index.js`
2. **Styling**: Modify `src/styles/theme.css`
3. **Components**: Update files in `src/components/`
4. **SEO**: Edit `src/components/SEO.jsx`

## 📧 Contact Form Rate Limiting

- **Limit**: 3 messages per week per user
- **Storage**: Client-side localStorage
- **Reset**: Rolling 7-day window

## 👨‍💻 Author

**Vineet Agarwal**
- LinkedIn: [@vineet-agarwal-540abc](https://www.linkedin.com/in/vineet-agarwal-540abc/)
- GitHub: [@vineetagarwal54](https://github.com/vineetagarwal54)
- Email: vineetagarwal540@gmail.com
