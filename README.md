# PESU Talkies Club Website

A modern, fully responsive web application for the PESU Talkies film club, built with React. This site showcases the club's activities, projects, domains, and leadership, and provides a platform for new members to connect and join.

---

## Website Link : https://pesu-talkies-website.vercel.app/

---

## 🚀 Features & Effects (2025 Update)
- **Mobile & Desktop Responsive:** All pages and features adapt for mobile and laptop screens, including hamburger menu for navigation and fully visible posters.
- **Landing Page (Overview):** About the club, animated typewriter motto, club logo, and contact form with cycling animated title and emoji. Quotes section titled "From The Vault" with animated cycling quotes.
- **Heads Page:** Lists all Club Heads and Domain Heads, with detailed, animated profile cards for each (photo, vision, etc.).
- **Head Detail Animations:** Each head's photo is revealed with a vertical split animation (glass-like effect), and all details are styled for clarity and modernity.
- **Domains Page:** Overview of all 11 club domains, each with a detail page and description.
- **Projects Page:** Showcases Short Films and Series, each with detail pages (release date, premise, links, crew/cast, etc.).
- **Short Film & Series Detail Pages:**
  - Each project has a poster with animated reveal and is fully visible on mobile.
  - Crew and Cast sections for each film/series (including VAM TV, SHADOWS, THE DEVIL'S LULLABY, MISSED CONNECTIONS IN TAXI, SAMARPANE, etc.).
  - Teaser and Watch links for films.
  - "Premise" replaces "Plot" for all films/series.
- **Recruitments Page:** Info and forms for joining the club (placeholder).
- **Announcements Page:** Button in navbar, animated entry, informal club updates.
- **Follow Us Page:**
  - Social links (Instagram, YouTube, LinkedIn, X) as icons using `react-icons`.
  - All icons have a white rounded background and black icon by default, turning yellow on hover with a black background (for LinkedIn, YouTube, X) or yellow icon (for Instagram).
  - All icons are visually consistent and interactive, with animation effects.
- **Modern UI/UX:**
  - Yellow/black color scheme, responsive layout, and consistent branding.
  - **Sticky Navbar:** Always visible at the top, with a glassmorphism (frosted glass) effect when scrolling.
  - **Hamburger Menu:** On mobile, nav links are hidden behind a hamburger icon next to the PES University logo.
  - **Navbar Hover Effects:** Underline animates from center, text scales up, and color changes based on scroll position.
  - **Footer:** Always visible at the bottom of every page.
  - **Back to Top Button:** Present above the footer on all scrollable pages, with animated hover effect matching Send Message button.
  - **AOS Scroll Animations:** Used throughout for smooth, modern transitions.
  - **All code is commented for maintainability.**

---

## 🗂️ Project Structure

- `src/`
  - `App.js` — Main app, navigation, and routing (with hamburger menu logic)
  - `Overview.js` — Landing page (about, motto, contact form, domains, animated quotes, events, From The Vault)
  - `Heads.js` — Club Heads and Domain Heads listing
  - `HeadDetail.js` — Detail page for each head (with animated photo reveal)
  - `Domains.js` — List of all domains
  - `DomainDetail.js` — Detail page for each domain
  - `Projects.js` — Short Films and Series overview (with animated posters, correct order, and mobile scaling)
  - `ShortFilmDetail.js` — Detail page for each short film (premise, crew/cast, teaser/watch links, animated poster)
  - `SeriesDetail.js` — Detail page for each series (premise, crew/cast, animated poster)
  - `Recruitments.js` — Recruitment info (placeholder)
  - `Announcements.js` — Announcements page (animated entry)
  - `FollowUs.js` — Social media links (Instagram, YouTube, LinkedIn, X; animated icons)
  - `App.css`, `Overview.css`, `Heads.css` — Styling (responsive, animated, mobile-friendly)
  - `logo.svg`, `pesu-talkies-logo.png`, `pesu-logo.jpg` — Club logos
  - All files have function-level comments for maintainability.

---

## 🛠️ Technologies Used
- **React** (with Create React App)
- **React Router** for navigation
- **AOS** (Animate On Scroll) for scroll animations
- **react-icons** for crisp, scalable social icons
- **Custom CSS** for modern, responsive design and all effects
- **Express** (backend for contact form)
- **Nodemailer** (for sending emails)

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd pesu-talkies
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

---

## 🧭 Main Pages & Routes
- `/` — Overview (About, Motto, Domains, Contact)
- `/heads` — Heads (Club & Domain Heads)
- `/heads/:slug` — Head detail page (with animated photo reveal)
- `/domains` — Domains list
- `/domains/:slug` — Domain detail page
- `/projects` — Projects (Short Films & Series)
- `/projects/short-films/:slug` — Short Film detail
- `/projects/series/:slug` — Series detail
- `/recruitments` — Recruitment info
- `/announcements` — Announcements
- `/follow-us` — Social links (with interactive icons)

---

## 🎨 Customization & Branding
- **Colors:** Yellow (`#FFD600`) and black/dark backgrounds for strong contrast and club identity.
- **Logo:** Located in `public/pesu-talkies-logo.png` and used throughout the site. Additional logo in `public/pesu-logo.jpg`.
- **Animations:**
  - AOS is used for smooth scroll-in effects on all main sections.
  - Head photos use a vertical split reveal animation.
  - Project posters use a horizontal curtain reveal animation and are fully visible on mobile.
  - Navbar uses glassmorphism and animated underline/scale effects.
  - Social icons use react-icons and custom hover effects.
  - Back to Top button uses animated hover effect.
- **Hamburger Menu:** On mobile, nav links are hidden behind a hamburger icon next to the PES University logo.
- **All code is commented for maintainability.**

---

## 🚀 Deployment

### Deploying to Vercel

You can easily deploy this React app to [Vercel](https://vercel.com/) for free. Here’s how:

#### **Method 1: Using the Vercel Web Dashboard**
1. Go to [https://vercel.com/import](https://vercel.com/import) and import your GitHub/GitLab/Bitbucket repo.
2. Set the **Framework Preset** to `Create React App` (Vercel will auto-detect this).
3. For the build command, use: `npm run build`
4. For the output directory, use: `build`
5. Click **Deploy** and wait for your site to go live!

#### **Method 2: Using Vercel CLI**
1. Install Vercel CLI globally (if you haven’t):
   ```bash
   npm install -g vercel
   ```
2. In your project directory, run:
   ```bash
   vercel
   ```
3. Answer the prompts (set build command to `npm run build` and output directory to `build` if asked).
4. Your site will be deployed and you’ll get a live URL.

**Note:**
- You can set up automatic deployments from your Git repository for continuous deployment.
- For custom domains, connect your domain in the Vercel dashboard.

---

### Deploying to Render

1. Go to [https://render.com/](https://render.com/) and sign up/log in.
2. Click **New Web Service** and connect your GitHub repo.
3. Set the **Build Command** to `npm run build`.
4. Set the **Publish Directory** to `build`.
5. Choose a name, region, and click **Create Web Service**.
6. Render will build and deploy your app. You’ll get a live URL when it’s done.

---

### Deploying to Netlify

1. Go to [https://app.netlify.com/](https://app.netlify.com/) and sign up/log in.
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub repo and select it.
4. Set the **Build Command** to `npm run build`.
5. Set the **Publish Directory** to `build`.
6. Click **Deploy site**. Netlify will build and deploy your app, and you’ll get a live URL.

**Tip:**
- For custom domains, connect your domain in the Netlify or Render dashboard.
- Both platforms support automatic deploys from your Git repository.

---

## 🤝 Contributing
- Pull requests are welcome! Please open an issue first to discuss major changes.
- For club content updates (films, heads, domains), edit the relevant arrays in the respective component files.
- All code is commented for maintainability and clarity.

---

## 📬 Contact
- For questions, suggestions, or to join PESU Talkies, use the contact form on the Overview page or reach out via the social links on the Follow Us page.
- Backend contact form is integrated and sends emails to the club and auto-replies to users.

---

## 📄 License
This project is for PESU Talkies club use. For other uses, please contact the club.
