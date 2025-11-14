# Historic Tours of Texas - Modern Redesign

A modern, elegant recreation of the Historic Tours of Texas website with responsive design, clean aesthetics, and enhanced user experience.

## 🎨 Design Features

- **Modern Typography**: Lato and Ubuntu font families with clean, readable text
- **Color Palette**: Historic Texas-inspired colors
  - Primary: Deep Ruby Red `#8B0000`
  - Secondary: Creamy Beige `#F4E4BC`
  - Accent: Dark Slate Gray `#2F4F4F`
  - Highlight: Old Gold `#D4AF37`
- **Responsive Design**: Mobile-first approach with comprehensive mobile optimization
- **Smooth Animations**: Hover effects, transitions, and scroll reveals
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation

## 📁 Project Structure

```
├── index.html               # Homepage with hero section and testimonials
├── tours.html               # Tour listings with filtering functionality
├── about.html               # About page with team and company story
├── blog.html                # Blog with category filtering
├── contact.html             # Contact form with FAQ
├── css/
│   ├── index.css            # Homepage styles
│   ├── tours.css            # Tours page styles
│   ├── about.css            # About page styles
│   ├── blog.css             # Blog page styles
│   └── contact.css          # Contact/FAQ page styles
├── js/
│   └── script.js            # Interactive functionality
└── images/
    ├── logo.png             # Main logo
    └── logo.svg             # Alternate logo format
```

## 🚀 Features

### Navigation
- Sticky header with smooth scroll effects
- Mobile-responsive hamburger menu
- Active page indicators
- Smooth scroll to sections

### Homepage
- Auto-playing hero slider with manual controls
- Featured tours showcase
- Testimonials carousel
- Call-to-action sections
- Scroll reveal animations

### Tours Page
- Filterable tour categories
- Detailed tour cards with ratings
- Tour information grid
- Interactive filtering system

### About Page
- Company story and timeline
- Team member profiles
- Statistics showcase
- Customer testimonials

### Blog Page
- Category-based filtering
- Featured article layout
- Author information
- Newsletter subscription

### Contact Page
- Comprehensive contact form
- FAQ accordion
- Multiple contact methods
- Form validation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern features, Grid, Flexbox, Variables
- **JavaScript ES6+**: Modern JavaScript functionality
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins typography

## 🎯 Key Functionality

### Interactive Elements
- Hero image slider with auto-play
- Tour/blog filtering system
- FAQ accordion
- Form validation with error handling
- Newsletter subscription
- Image lightbox gallery
- Smooth scroll navigation

### Performance Features
- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Mobile-first responsive design

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Focus states for all interactive elements
- Screen reader friendly
- High contrast colors

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ - Full grid layouts
- **Tablet**: 768px-1199px - Adjusted grids and spacing
- **Mobile**: <768px - Single column, stacked layouts

## 🎨 CSS Architecture

- **CSS Variables**: Consistent theming and easy customization
- **BEM Methodology**: Organized class naming
- **Mobile First**: Progressive enhancement
- **Component Based**: Reusable design patterns

## 🔧 Customization

### Colors
Edit CSS variables in `:root`:
```css
:root {
    --primary-color: #1B4332;
    --secondary-color: #95D5B2;
    --accent-color: #FAFAF5;
    /* ... */
}
```

### Typography
Font weights and sizes are controlled via CSS variables for easy adjustment.

### Animations
Animation durations and easing functions are centralized for consistency.

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

## 📝 Notes

- All images use placeholder paths - replace with actual images
- Forms are client-side only - add backend integration
- Blog posts are static - integrate with CMS for dynamic content
- Tour data is hardcoded - connect to database for live data
- Each page has its own dedicated CSS file for better organization and maintainability
- Deprecated styles.css file has been removed; all styling is now page-specific

## 🌟 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari 12+, Chrome Mobile 60+)

## 📄 License

This project is a recreation/demo. Original content and branding belong to Historic Tours of Texas.

---

**Built with modern web standards for an exceptional user experience** 🤠
