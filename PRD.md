# Schildmair EHK Sowi - Modern Company Landing Page

A modern, trustworthy landing page for Austria's traditional family-owned hardware and household goods retailer that showcases their comprehensive product range and establishes their credibility as "Der Eisenwarenhändler Ihres Vertrauens" (Your trusted hardware dealer).

**Experience Qualities**: 
1. Professional - Clean, organized presentation that reflects decades of business expertise
2. Trustworthy - Traditional values combined with modern accessibility and transparency  
3. Comprehensive - Complete overview of services, products, and company information in one place

**Complexity Level**: Content Showcase (information-focused)
The website primarily presents company information, services, and contact details with minimal interactive features beyond navigation and contact forms.

## Essential Features

### Hero Section with Company Introduction
- **Functionality**: Prominent display of company name, tagline, and core value proposition
- **Purpose**: Immediately communicate trust, tradition, and comprehensive service offerings
- **Trigger**: Page load
- **Progression**: Visual impact → Company tagline → Brief service overview → Call-to-action
- **Success criteria**: Visitors understand the company's role and trustworthiness within 5 seconds

### Product Categories Overview  
- **Functionality**: Clear presentation of main product lines (hardware, household goods, tools, garden equipment)
- **Purpose**: Help customers quickly identify relevant products and services
- **Trigger**: Scrolling past hero section
- **Progression**: Category icons → Brief descriptions → Visual examples → Links to detailed information
- **Success criteria**: Users can identify their needs and find relevant product categories

### Services & Specialties Section
- **Functionality**: Highlight unique services like lawnmower service, grilling courses, and online shopping channels
- **Purpose**: Differentiate from competitors and showcase added value
- **Trigger**: User scrolling through main content
- **Progression**: Service discovery → Details → Benefits → Contact for more information
- **Success criteria**: Users understand additional value beyond basic product sales

### Contact & Location Information
- **Functionality**: Complete contact details, opening hours, address, and parking information
- **Purpose**: Enable easy customer contact and store visits
- **Trigger**: Need for contact information or location details
- **Progression**: Contact need → Information discovery → Contact method selection → Action completion
- **Success criteria**: Users can successfully contact the store or plan a visit

### Partner Brand Logos Display
- **Functionality**: Visual showcase of brand partnerships and product quality indicators
- **Purpose**: Build trust through association with known, quality brands
- **Trigger**: User seeking product quality validation
- **Progression**: Brand recognition → Quality association → Increased trust → Purchase consideration
- **Success criteria**: Enhanced credibility and trust in product quality

## Edge Case Handling
- **Mobile Navigation**: Responsive hamburger menu for smaller screens
- **Slow Internet**: Progressive loading with skeleton screens for images
- **Missing Brand Logos**: Placeholder spaces that don't break layout
- **Long German Text**: Proper text wrapping and hyphenation for lengthy German compound words
- **Contact Form Errors**: Clear validation messages in German

## Design Direction
The design should feel established and trustworthy like a traditional Austrian business, while appearing modern and accessible for contemporary customers - balancing heritage craftsmanship aesthetics with clean, professional digital presentation.

## Color Selection
Complementary (opposite colors) - Using the traditional Austrian business colors of deep red and blue from the company logo, balanced with warm neutrals to create a trustworthy, professional atmosphere.

- **Primary Color**: Deep Red (oklch(0.45 0.15 25)) - Represents tradition, reliability, and Austrian heritage
- **Secondary Colors**: Steel Blue (oklch(0.55 0.12 240)) for trust and professionalism, Warm Gray (oklch(0.85 0.02 60)) for neutrality
- **Accent Color**: Golden Yellow (oklch(0.75 0.15 85)) - Highlights calls-to-action and important information
- **Foreground/Background Pairings**: 
  - Background (White #FFFFFF): Dark Gray text (oklch(0.2 0.01 60)) - Ratio 15.8:1 ✓
  - Primary Red (oklch(0.45 0.15 25)): White text (oklch(0.98 0 0)) - Ratio 8.2:1 ✓
  - Steel Blue (oklch(0.55 0.12 240)): White text (oklch(0.98 0 0)) - Ratio 5.1:1 ✓
  - Accent Yellow (oklch(0.75 0.15 85)): Dark Gray text (oklch(0.2 0.01 60)) - Ratio 12.4:1 ✓

## Font Selection
Professional and readable typography that conveys both tradition and modernity, using Inter for its excellent legibility and contemporary feel while maintaining the seriousness appropriate for a B2B hardware retailer.

- **Typographic Hierarchy**: 
  - H1 (Company Name): Inter Bold/48px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/32px/normal spacing  
  - H3 (Subsections): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Small Text (Contact): Inter Regular/14px/normal spacing

## Animations
Subtle and professional animations that enhance usability without appearing flashy - appropriate for a traditional business audience that values substance over style.

- **Purposeful Meaning**: Gentle hover effects on interactive elements and smooth scrolling between sections communicate quality and attention to detail
- **Hierarchy of Movement**: Logo and hero elements receive priority, followed by service cards, with minimal animation on supporting content

## Component Selection
- **Components**: Card components for service offerings, Button for calls-to-action, Badge for highlighting specialties, Separator for section divisions
- **Customizations**: Custom hero banner component, brand logo grid component, contact information card with Austrian address formatting
- **States**: Hover effects on service cards and buttons, active states for navigation, focus states for accessibility
- **Icon Selection**: Phosphor icons for services (Wrench, House, Phone, etc.), social media icons for Facebook/Instagram links
- **Spacing**: Generous whitespace using Tailwind's spacing scale (p-8, gap-6, etc.) for professional appearance
- **Mobile**: Mobile-first responsive design with stacked layouts on smaller screens, collapsible navigation, touch-friendly button sizes