# Forgea Landing Page

A beautiful, responsive landing page for Forgea - a platform that helps engineers get hired by letting them build real-world projects.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and hover effects
- **Waitlist Form**: Connected to FormSubmit for email collection
- **SEO Optimized**: Proper metadata and semantic HTML

## 📋 Sections

1. **Hero Section**: Logo, tagline, and primary CTA
2. **Problem Section**: Highlights the struggle for junior developers
3. **Solution Section**: 3 key benefits with icons
4. **Projects Section**: Showcases real-world projects to build
5. **Waitlist Form**: Email collection with success state
6. **Footer**: Social links and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: FormSubmit integration
- **Icons**: Heroicons (SVG)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd web
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Hero.tsx          # Hero section
│       ├── Problem.tsx       # Problem section
│       ├── Solution.tsx      # Solution section
│       ├── Projects.tsx      # Projects showcase
│       ├── WaitlistForm.tsx  # Email collection form
│       └── Footer.tsx        # Footer component
├── public/                   # Static assets
└── package.json
```

## 🔧 Configuration

### Form Integration

The waitlist form is currently configured to use FormSubmit. To set up your own email collection:

1. Replace the FormSubmit URL in `WaitlistForm.tsx`:

```typescript
const response = await fetch('https://formsubmit.co/your-email@example.com', {
```

2. Or integrate with other services like:
   - Mailchimp
   - ConvertKit
   - Loops
   - Custom API endpoint

### Customization

- **Colors**: Update Tailwind classes in components
- **Content**: Modify text content in each component
- **Images**: Replace placeholder images in `public/` directory
- **Social Links**: Update URLs in `Footer.tsx`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎨 Design System

### Colors

- Primary: Blue gradient (`from-blue-600 to-indigo-600`)
- Secondary: Gray scale for text and backgrounds
- Accent: Green for success states

### Typography

- Headings: Bold, large text with proper hierarchy
- Body: Readable font sizes with good line height
- Buttons: Rounded, with hover effects

### Spacing

- Consistent padding and margins using Tailwind's spacing scale
- Proper section separation with `py-20`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times
- SEO-friendly structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ for Forgea
