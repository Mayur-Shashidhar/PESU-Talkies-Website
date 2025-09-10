# PESU Talkies Club Website

A modern, fully responsive **full-stack web application** for the PESU Talkies film club, featuring a React frontend and Express.js backend. This comprehensive platform showcases the club's activities, projects, domains, and leadership while providing interactive features for member engagement and recruitment.

---

## 🌐 Live Website
**Production URL:** https://pesu-talkies.vercel.app/ **

**Last Updated:** July 2025

---

## 🏗️ Project Architecture

This is a **full-stack application** with the following structure:
- **Frontend**: React.js SPA (Single Page Application)
- **Backend**: Express.js REST API server
- **Database**: File-based data storage (no external database required)
- **Email Service**: Nodemailer integration for contact forms
- **Deployment**: Frontend on Vercel, Backend deployable separately

---

## 🚀 Features & Effects (2025 Update)
- **Mobile & Desktop Responsive:** All pages and features adapt for mobile and laptop screens, including hamburger menu for navigation and fully visible posters.
- **AI Chatbot Assistant:** Interactive chatbot with unlimited free messages, comprehensive knowledge about PESU Talkies, and natural conversation capabilities.
- **Landing Page (Overview):** About the club, animated typewriter motto, club logo, and contact form with cycling animated title and emoji. Quotes section titled "From The Vault" with animated cycling quotes.
- **Heads Page:** Lists all Club Heads and Domain Heads, with detailed, animated profile cards for each (photo, vision, etc.).
- **Head Detail Animations:** Each head's photo is revealed with a vertical split animation (glass-like effect), and all details are styled for clarity and modernity.
- **Domains Page:** Overview of all 11 club domains, each with a detail page and description.
- **Projects Page:**
  - Showcases Short Films and Series, each with detail pages (release date, premise, links, crew/cast, etc.).
  - Short Films are displayed in a horizontal marquee with smooth, continuous scrolling animation.
  - **Neon Yellow Outline Effect:** All short film and series placards feature a modern neon yellow glowing outline on hover, for both the Overview and Projects pages.
  - **Marquee Pause/Resume:** Marquee scrolling automatically pauses when the user hovers over any placard and resumes when the cursor leaves, for improved interactivity.
  - When searching, matching short films and series are shown as individual cards in a horizontal row, with the same hover effects as the marquee.
  - Series cards now have the same expanding and neon yellow outline hover effect as short films.
  - All cards are clickable and navigate to their respective detail pages.
  - Responsive and visually consistent layout for both marquee and search results.
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

```
PESU-Talkies-Website/
├── README.md
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── pesu-logo.jpg
│   │   ├── pesu-talkies-logo.png
│   │   ├── robots.txt
│   │   ├── events/
│   │   │   ├── CINIFEST.jpg
│   │   │   ├── CINIQUIZZ.jpg
│   │   │   ├── POSTER CHRONICLES.jpg
│   │   ├── heads/
│   │   │   ├── Apurv.jpg
│   │   │   ├── Archi.jpg
│   │   │   ├── Baasanthi.jpg
│   │   │   ├── Bhanavi.jpg
│   │   │   ├── Jayaram.jpg
│   │   │   ├── Kushal.jpg
│   │   │   ├── Mayur.jpg
│   │   │   ├── Pratham.jpg
│   │   │   ├── Rishi.jpg
│   │   │   ├── Saumyaa.jpg
│   │   │   ├── Sharvani.jpg
│   │   │   ├── Somesh.jpg
│   │   │   ├── Sourish.jpg
│   │   │   ├── Vineeth.jpg
│   │   │   ├── Yatharth.jpg
│   │   ├── posters/
│   │   │   ├── Bhrame.jpg
│   │   │   ├── Ha.jpg
│   │   │   ├── Kid-Naf.jpg
│   │   │   ├── Last Page Preethi.jpg
│   │   │   ├── MISSED CONNECTIONS IN TAXI.jpg
│   │   │   ├── SAMARPANE.jpg
│   │   │   ├── Shadows.jpg
│   │   │   ├── The Devil's Lullaby.jpg
│   │   │   ├── VAM TV.jpg
│   └── src/
│       ├── Announcements.js
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── Chatbot.css
│       ├── Chatbot.js
│       ├── DomainDetail.js
│       ├── Domains.js
│       ├── FollowUs.js
│       ├── HeadDetail.js
│       ├── Heads.css
│       ├── Heads.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── Overview.css
│       ├── Overview.js
│       ├── Projects.js
│       ├── Projects.css
│       ├── Recruitments.js
│       ├── reportWebVitals.js
│       ├── SeriesDetail.js
│       ├── setupTests.js
│       ├── ShortFilmDetail.js
```

---
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

### **Frontend Stack**
- **React 19.1.0** - Modern component-based UI framework
- **React Router DOM 7.7.0** - Client-side routing and navigation
- **React Icons 5.5.0** - Scalable icon library
- **AOS 2.3.4** - Animate On Scroll library for smooth animations
- **Framer Motion 12.23.6** - Advanced animations and gestures
- **GSAP 3.13.0** - High-performance animations
- **Custom CSS** - Responsive design with glassmorphism effects

### **Backend Stack**
- **Express.js 5.1.0** - Fast, unopinionated web framework
- **Nodemailer 7.0.5** - Email sending functionality
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware
- **dotenv 17.2.0** - Environment variables management
- **Node.js** - JavaScript runtime environment

### **Deployment & DevOps**
- **Vercel** - Frontend hosting and deployment
- **Git** - Version control
- **npm** - Package management

---

## ⚙️ Backend API Details

The backend server (`backend/server.js`) provides:

### **Contact Form API**
- **Endpoint**: `POST /api/contact`
- **Port**: 5000 (development)
- **Functionality**:
  - Receives contact form submissions from the frontend
  - Sends email notifications to club administrators (`pesutalkies@pes.edu`)
  - Sends auto-reply confirmation to users
  - Handles email delivery errors gracefully

### **Chatbot API**
- **Endpoint**: `POST /api/chatbot`
- **Port**: 5000 (development)
- **Functionality**:
  - Processes user messages and returns intelligent responses
  - Comprehensive knowledge base about PESU Talkies (50+ responses)
  - Handles project information, domain details, team profiles, recruitment, events
  - Natural conversation capabilities with casual greetings and responses
  - Smart matching algorithm with priority-based response selection
  - Unlimited free messages with no external dependencies

### **Email Configuration**
- **Service**: Gmail SMTP
- **Authentication**: Environment variables (`EMAIL_USER`, `EMAIL_PASS`)
- **Features**:
  - Professional email templates
  - Automated responses
  - Error handling and logging

### **API Response Format**
```json
{
  "success": true/false,
  "message": "Status message"
}
```

### **Environment Variables Required**
```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-specific-password
```

---

## ⚡ Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### **Full Stack Setup**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayur-Shashidhar/PESU-Talkies-Website.git
   cd PESU-Talkies-Website
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   
   # Create .env file with email credentials
   echo "EMAIL_USER=your-email@gmail.com" > .env
   echo "EMAIL_PASS=your-app-password" >> .env
   
   # Start backend server (runs on port 5000)
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   
   # Start React development server (runs on port 3000)
   npm start
   ```

4. **Access the application:**
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend API**: [http://localhost:5000](http://localhost:5000)
   - **Chatbot**: Available on all frontend pages (bottom-right chat icon)

### **Development Workflow**
- Backend and frontend run independently
- Backend serves API endpoints for contact form and chatbot
- Frontend makes API calls to backend for email functionality and chatbot responses
- Both servers support hot reloading during development
- Chatbot requires backend server running for full functionality

---

## � AI Chatbot Feature

### **Overview**
The PESU Talkies website includes a custom-built AI chatbot assistant that provides unlimited free conversations about the club. The chatbot appears as a floating chat button in the bottom-right corner of every page.

### **Chatbot Capabilities**
- **Comprehensive Knowledge Base**: 50+ intelligent responses covering all aspects of PESU Talkies
- **Project Information**: Detailed summaries of all 8 short films and web series
- **Domain Details**: Information about all 11 club domains and their heads
- **Team Profiles**: Details about club leadership and team members
- **Recruitment Guidance**: How to join the club and application process
- **Event Information**: Details about CINIFEST, CINIQUIZZ, POSTER CHRONICLES
- **Contact Information**: All social media links and contact methods
- **Natural Conversations**: Handles greetings, casual chat, thanks, goodbyes

### **Technical Implementation**
- **Frontend**: React component (`Chatbot.js`) with sleek black/yellow UI
- **Backend**: Express.js API endpoint (`/api/chatbot`) with intelligent response matching
- **No External Dependencies**: Completely custom solution with no third-party AI services
- **Unlimited Messages**: No usage limits or API costs
- **Smart Matching**: Priority-based response algorithm ensuring most relevant answers

### **Chatbot Response Categories**
1. **Specific Projects**: KID-NAF, BHRAME, HA, LAST PAGE PREETHI, VAM TV, THE DEVIL'S LULLABY, SAMARPANE, SHADOWS, MISSED CONNECTIONS IN TAXI
2. **Club Information**: About, motto, domains, team structure
3. **Conversational**: Greetings, identity questions, casual chat, emotions
4. **Practical**: How to join, contact info, social media, events
5. **Help & Navigation**: Website guidance and general assistance

### **User Experience Features**
- **Floating Toggle Button**: Always accessible chat icon with "AI" badge
- **Professional Interface**: PESU Talkies branding with club logo
- **Real-time Messaging**: Instant responses with typing indicators
- **Quick Suggestions**: Predefined buttons for common questions
- **Message History**: Persistent conversation within session
- **Mobile Responsive**: Optimized for all screen sizes
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for line breaks

### **API Integration**
```javascript
// Frontend API call example
const response = await fetch('http://localhost:5000/api/chatbot', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: userMessage,
    userId: 'web-user-' + Date.now()
  })
});
```

### **Response Examples**
- **"Tell me about KID-NAF"** → Returns thriller synopsis with cast/crew details
- **"How to join PESU Talkies"** → Provides step-by-step recruitment guidance  
- **"Who leads the Direction domain"** → Returns "Somesh heads our Direction domain!"
- **"What events do you organize"** → Lists CINIFEST, CINIQUIZZ, POSTER CHRONICLES
- **"How are you?"** → Natural conversational response encouraging club exploration

---

## �🧭 Main Pages & Routes
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

## 🚀 Deployment

### **Current Deployment Status**
- **Frontend**: Deployed on Vercel at https://pesu-talkies-website.vercel.app/
- **Backend**: Can be deployed separately to services like Railway, Render, or Heroku

### **Frontend Deployment (Vercel)**

#### **Method 1: Vercel Dashboard**
1. Fork/clone the repository to your GitHub account
2. Go to [https://vercel.com](https://vercel.com) and import your repository
3. Configure build settings:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Deploy and get your live URL

#### **Method 2: Vercel CLI**
```bash
cd frontend
npm install -g vercel
vercel --prod
```

### **Backend Deployment Options**

#### **Railway Deployment**
1. Create account at [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
4. Deploy from the `backend` directory

#### **Render Deployment**
1. Create account at [Render.com](https://render.com)
2. Create new Web Service from your repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables in Render dashboard

#### **Heroku Deployment**
```bash
cd backend
heroku create your-app-name
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
git push heroku main
```

### **Full Stack Deployment Considerations**
- Update API endpoints in frontend to point to deployed backend URL
- Ensure CORS is properly configured for production domains
- Set up proper error logging and monitoring
- Consider using a process manager like PM2 for backend stability

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

## 🆕 2025 UI/UX & Feature Updates

- **Neon Yellow Footer Line:** Added a pulsing neon yellow line above the footer on every page for a modern, film-inspired look.
- **Animated Particle Background:** Overview page features floating, glowing particles for a cinematic effect.
- **Quotes & Contact Section:** Removed background boxes for a cleaner look; contact section title has a neon effect (emoji excluded).
- **Pagination for Short Films:** Projects page now has dynamic, futuristic pagination with arrows, page numbers, and smooth slide/fade animations. Number of titles per page is configurable.
- **Glassmorphism & Futuristic UI:** Navbar and controls use glassy, modern effects; pagination controls are compact and visually enhanced.
- **AOS Animations:** All scroll animations reinitialized for reliability after reloads.
- **Domain Detail Routing Fix:** Domain detail pages now reliably show content after reload, with slug normalization and AOS animation.
- **Code Quality:** Unused variables removed, ESLint warnings addressed.
- **Responsive Design:** All new features are fully mobile-friendly and tested on multiple devices.

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

### **Development Guidelines**
- Pull requests are welcome! Please open an issue first to discuss major changes.
- Follow the existing code style and structure
- Test your changes thoroughly on both mobile and desktop
- Update documentation if you add new features

### **Content Updates**
For club content updates, edit the relevant data arrays in these files:
- **Short Films**: Update `shortFilms` array in `frontend/src/Projects.js`
- **Team Members**: Update `domainHeads` and `clubHeads` arrays in `frontend/src/Heads.js`
- **Domains**: Update `domains` array in `frontend/src/Domains.js`
- **Quotes**: Update `quotes` array in `frontend/src/Overview.js`

### **Adding New Features**
- Follow React best practices and hooks
- Use AOS for scroll animations
- Maintain the yellow/black color scheme
- Ensure mobile responsiveness
- Add proper error handling
- Include comments for maintainability

### **Code Structure**
- All components are well-commented for maintainability
- CSS follows BEM-like naming conventions
- Responsive design is mobile-first
- Environment variables are used for sensitive data

---

## 📊 Project Statistics

### **Current Content (July 2025)**
- **8 Short Films** showcased with individual detail pages
- **1 Web Series** (MISSED CONNECTIONS IN TAXI)
- **15+ Team Members** with profile pages and animations
- **11 Club Domains** with descriptions
- **3 Major Events** highlighted with posters
- **4+ Social Media Platforms** integrated

### **Technical Metrics**
- **Frontend**: 15+ React components
- **Responsive Design**: Mobile & desktop optimized
- **Performance**: Optimized images and lazy loading
- **SEO**: Semantic HTML and meta tags
- **Accessibility**: ARIA labels and keyboard navigation

---

## 📬 Contact & Support

### **For General Inquiries**
- **Website Contact Form**: Use the contact form on the Overview page (automated email system)
- **Official Email**: pesutalkies@pes.edu
- **Auto-Reply**: All contact form submissions receive automated confirmations

### **Social Media**
- **Instagram**: [@pesutalkies](https://instagram.com/pesutalkies?igshid=NGExMmI2YTkyZg==)
- **YouTube**: [@PESU_TALKIES](https://www.youtube.com/@PESU_TALKIES)
- **LinkedIn**: [PESU Talkies](https://in.linkedin.com/company/pesu-talkies)
- **X (Twitter)**: Follow us for latest updates

### **Technical Support**
- **Repository Issues**: Create issues on GitHub for bug reports
- **Feature Requests**: Use GitHub discussions for new feature ideas
- **Development Questions**: Contact the development team through the repository

### **Club Membership**
- Visit the **Recruitments** page for joining information
- Follow our social media for recruitment announcements
- Attend club events and workshops for networking opportunities

---



## 📄 License
This project is for PESU Talkies club use. For other uses, please contact the club.
