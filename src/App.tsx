import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Home,
  Scissors,
  ShoppingCart,
  Users,
  Car,
  GraduationCap,
  Facebook,
  Instagram,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'

// Import page components
import Karriere from '@/components/pages/Karriere'
import Datenschutz from '@/components/pages/Datenschutz'
import Impressum from '@/components/pages/Impressum'
import schildmairLogo from '@/assets/images/logo.png'
import frontStore from '@/assets/images/front_gr.jpg'
import backStore from '@/assets/images/back_gr.jpg'
import productB1 from '@/assets/images/b1.png'
import productB2 from '@/assets/images/b2.png'
import productB3 from '@/assets/images/b3.png'
import productB6 from '@/assets/images/b6.png'
import productB7 from '@/assets/images/b7.png'

// Company logos
import stihlLogo from '@/assets/companies/2560px_Stihl_Logo_svg_acdfede2b1.png'
import fellerLogo from '@/assets/companies/29166.png'
import feinLogo from '@/assets/companies/FEIN_RGB.svg.png'
import metaboLogo from '@/assets/companies/images_metabo.png'
import boschLogo from '@/assets/companies/images.png'
import kitchenaidLogo from '@/assets/companies/Kitchenaid_logo.svg.png'
import kranzleLogo from '@/assets/companies/Kranzle-Logo.webp'
import bbqKitchenLogo from '@/assets/companies/Logo_BBQ Kitchen_hoch.png'
import kelomatLogo from '@/assets/companies/Logo-Riese-Kelomat-GmbH_4c.png'
import makitaLogo from '@/assets/companies/makita.png'
import milwaukeeLogo from '@/assets/companies/Milwaukee_Logo.svg'
import napoleonLogo from '@/assets/companies/napoleon-logo-rgb-standard.jpg'
import petromaxLogo from '@/assets/companies/Petromax.webp'
import ritzenhoffLogo from '@/assets/companies/RitzenhoffBreker.png'
import rottnerLogo from '@/assets/companies/rottner-tresor-logo-web-big.jpg'
import rukoLogo from '@/assets/companies/ruko_400px.jpg'
import schullerLogo from '@/assets/companies/Schuller_Eh_klar_GmbH_lo1.jpg'
import solaLogo from '@/assets/companies/sola_inverted.png'
import staedterLogo from '@/assets/companies/Staedter_Logo_4c_NEU_141111.jpg'
import leCreusetLogo from '@/assets/companies/store_Le Creuset20220822161200.png'
import tormekLogo from '@/assets/companies/tormek.png'
import victorinoxLogo from '@/assets/companies/victorinox.png'
import wmfLogo from '@/assets/companies/WMF-Logo.svg.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'karriere' | 'datenschutz' | 'impressum'>('home')

  // Handle page navigation
  const handlePageChange = (page: 'home' | 'karriere' | 'datenschutz' | 'impressum') => {
    setCurrentPage(page)
    setMobileMenuOpen(false) // Close mobile menu when navigating
  }

  // Render the appropriate page
  if (currentPage === 'karriere') {
    return <Karriere onBack={() => handlePageChange('home')} />
  }
  if (currentPage === 'datenschutz') {
    return <Datenschutz onBack={() => handlePageChange('home')} />
  }
  if (currentPage === 'impressum') {
    return <Impressum onBack={() => handlePageChange('home')} />
  }

  const services = [
    {
      icon: Wrench,
      title: 'Eisenwaren & Werkzeug',
      description: 'Zuverlässiger Partner für Werkzeug, kleine Eisenwaren, Baubedarf, Elektrotechnik und Gartengeräte'
    },
    {
      icon: Home,
      title: 'Küchen- & Haushaltsartikel',
      description: 'Umfangreiches Sortiment von Küchenmaschinen, Elektrokleingeräten, Kochgeschirr und Geschirr'
    },
    {
      icon: Scissors,
      title: 'Rasenmäher-Service',
      description: 'Professioneller Service und Wartung für Ihre Gartengeräte'
    },
    {
      icon: GraduationCap,
      title: 'Seminare & Kurse',
      description: 'Grillkurse und weitere praktische Seminare für unsere Kunden'
    }
  ]

  const targetGroups = [
  { icon: Users, title: 'Privatkunden', description: 'Für alle Haushalts- und Gartenbedürfnisse' },
  { icon: Wrench, title: 'Handwerker', description: 'Professionelles Werkzeug und Materialien' },
  { icon: ShoppingCart, title: 'Industrie & Gewerbe', description: 'Spezielle Kanäle und Großmengen' }
  ]

  const partnerBrands = [
    { name: 'Stihl', logo: stihlLogo },
    { name: 'Feller', logo: fellerLogo },
    { name: 'FEIN', logo: feinLogo },
    { name: 'Metabo', logo: metaboLogo },
    { name: 'Bosch', logo: boschLogo },
    { name: 'KitchenAid', logo: kitchenaidLogo },
    { name: 'Kränzle', logo: kranzleLogo },
    { name: 'BBQ Kitchen', logo: bbqKitchenLogo },
    { name: 'Kelomat', logo: kelomatLogo },
    { name: 'Makita', logo: makitaLogo },
    { name: 'Milwaukee', logo: milwaukeeLogo },
    { name: 'Napoleon', logo: napoleonLogo },
    { name: 'Petromax', logo: petromaxLogo },
    { name: 'Ritzenhoff & Breker', logo: ritzenhoffLogo },
    { name: 'Rottner', logo: rottnerLogo },
    { name: 'RUKO', logo: rukoLogo },
    { name: 'Schüller', logo: schullerLogo },
    { name: 'SOLA', logo: solaLogo },
    { name: 'Städter', logo: staedterLogo },
    { name: 'Le Creuset', logo: leCreusetLogo },
    { name: 'Tormek', logo: tormekLogo },
    { name: 'Victorinox', logo: victorinoxLogo },
    { name: 'WMF', logo: wmfLogo }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={schildmairLogo} 
                alt="Schildmair Logo" 
                className="h-12 sm:h-10 w-auto max-w-none"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Leistungen
                </a>
                <a href="#gallery" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Geschäft
                </a>
                <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Über uns
                </a>
                <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Kontakt
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      Onlineshop
                      <ChevronDown className="ml-1" size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <a href="https://www.sowi-shop.at/c/aktion" target="_blank" rel="noopener noreferrer" className="w-full">
                        Allgemeiner Webshop
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="https://eshop.schildmair.at/" target="_blank" rel="noopener noreferrer" className="w-full">
                        Industrie & Gewerbe Shop
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="lg"
                className="p-4 h-auto w-auto"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X 
                    size={48}
                    style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }}
                  />
                ) : (
                  <Menu 
                    size={48}
                    style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#services" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Leistungen
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Geschäft
              </a>
              <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Über uns
              </a>
              <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Kontakt
              </a>
              <div className="px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">
                      Onlineshop
                      <ChevronDown className="ml-1" size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    <DropdownMenuItem asChild>
                      <a href="https://www.sowi-shop.at/c/aktion" target="_blank" rel="noopener noreferrer" className="w-full">
                        Allgemeiner Webshop
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="https://eshop.schildmair.at/" target="_blank" rel="noopener noreferrer" className="w-full">
                        Industrie & Gewerbe Shop
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Job Opening Banner */}
      <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Users size={20} className="hidden sm:block" />
                <span className="text-sm font-medium">
                  🚀 Wir suchen Verstärkung! 
                  <span className="hidden sm:inline"> Verkäufer, Servicetechniker & Reinigungskraft gesucht</span>
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground border border-secondary-foreground/20 hover:border-primary transition-all text-xs px-4 py-1.5 font-medium"
                onClick={() => handlePageChange('karriere')}
              >
                Jetzt bewerben
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Seit Generationen Ihr vertrauenswürdiger Partner
            </Badge>
            <div className="flex justify-center mb-6">
              <img 
                src={schildmairLogo} 
                alt="Schildmair EHK Sowi Logo" 
                className="sm:h-28 w-auto h-auto"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              EHK Sowi
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ihr vertrauenswürdiger Fachhandel für Eisenwaren & Haushaltsbedarf in Wels
            </p>
            <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto">
              Bei uns finden Sie alles — von Profi-Werkzeugen bis hin zu hochwertigen Küchenhelfern. 
              Traditioneller Familienbetrieb mit modernem Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="text-lg px-8">
                    <ShoppingCart className="mr-2" size={20} />
                    Zum Onlineshop
                    <ChevronDown className="ml-2" size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
                  <DropdownMenuItem asChild>
                    <a href="https://www.sowi-shop.at/c/aktion" target="_blank" rel="noopener noreferrer" className="w-full">
                      <ShoppingCart className="mr-2" size={16} />
                      Allgemeiner Webshop
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://eshop.schildmair.at/" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Wrench className="mr-2" size={16} />
                      Industrie & Gewerbe Shop
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="#contact">
                  <MapPin className="mr-2" size={20} />
                  Besuchen Sie uns
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="pt-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Unsere Markenpartner
            </h2>
            <p className="text-lg text-muted-foreground">
              Qualität durch bewährte Marken und langjährige Partnerschaften
            </p>
          </div>
        </div>

        {/* Moving Logo Strip - Full Width */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-infinite-scroll space-x-8 w-max">
              {/* First set of logos */}
              {partnerBrands.map((brand, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-8 w-48 h-32 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <img 
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerBrands.map((brand, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-8 w-48 h-32 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <img 
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Third set for extra seamless loop */}
              {partnerBrands.map((brand, index) => (
                <div 
                  key={`third-${index}`} 
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-8 w-48 h-32 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <img 
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hochwertige Produkte und Services für Privat, Handwerk und Gewerbe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <service.icon size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Zusätzliche Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Car className="text-accent mx-auto mb-4" size={40} />
                <h4 className="font-semibold mb-2">Gratis Parkplatz</h4>
                <p className="text-sm text-muted-foreground">Kostenlose Parkplätze direkt vor dem Geschäft</p>
              </div>
              <div className="text-center">
                <ShoppingCart className="text-accent mx-auto mb-4" size={40} />
                <h4 className="font-semibold mb-2">Onlineshopping</h4>
                <p className="text-sm text-muted-foreground">Webshop, Industrie- und Gewerbekanal</p>
              </div>
              <div className="text-center">
                <GraduationCap className="text-accent mx-auto mb-4" size={40} />
                <h4 className="font-semibold mb-2">Events & Seminare</h4>
                <p className="text-sm text-muted-foreground">Grillkurse und weitere Veranstaltungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/20 scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Unser Geschäft
            </h2>
            <p className="text-lg text-muted-foreground">
              Besuchen Sie uns vor Ort und erleben Sie unser umfangreiches Sortiment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images for store */}
            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={frontStore}
                alt="Schildmair Geschäftsfront"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Geschäftsfront</h3>
                <p className="text-sm text-muted-foreground">Unsere Geschäftsräume in der Gärtnerstraße</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={productB1}
                alt="Werkzeugabteilung"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Werkzeugabteilung</h3>
                <p className="text-sm text-muted-foreground">Professionelles Werkzeug für jeden Bedarf</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={productB2}
                alt="Haushaltsabteilung"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Haushaltsabteilung</h3>
                <p className="text-sm text-muted-foreground">Hochwertige Küchen- und Haushaltsartikel</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={productB6}
                alt="Rasenmäher & Werkzeug"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Rasenmäher & Reparatur-Service</h3>
                <p className="text-sm text-muted-foreground">Professionelle Reparatur und Wartung von Gartengeräten</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={productB7}
                alt="Gläser & Geschirr"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Gläser & Geschirr-Kollektion</h3>
                <p className="text-sm text-muted-foreground">Umfangreiche Auswahl an Gläsern für jeden Anlass</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={backStore}
                alt="Parkplatz"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Gratis Parkplatz</h3>
                <p className="text-sm text-muted-foreground">Kostenlose Parkplätze direkt vor dem Geschäft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Für wen wir da sind
            </h2>
            <p className="text-lg text-muted-foreground">
              Maßgeschneiderte Lösungen für verschiedene Zielgruppen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <group.icon size={56} className="text-secondary mx-auto mb-4" />
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{group.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20 scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src={schildmairLogo} 
                alt="Schildmair Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Als traditioneller Familienbetrieb in Wels stehen wir seit Generationen für Qualität, 
              Fachkompetenz und Verlässlichkeit. Unser Motto "Der Eisenwarenhändler Ihres Vertrauens" 
              ist nicht nur ein Versprechen, sondern gelebte Tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Von hochwertigen Werkzeugen über Haushaltsartikel bis hin zu modernem Onlineshopping 
                - wir verbinden Tradition mit Innovation für optimalen Kundenservice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-3">✓</Badge>
                  <span>Traditioneller Familienbetrieb</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-3">✓</Badge>
                  <span>Fachkundige Beratung</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-3">✓</Badge>
                  <span>Umfassendes Sortiment</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-3">✓</Badge>
                  <span>Moderner Service</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Unser Versprechen</h3>
              <blockquote className="text-xl italic text-center text-primary font-medium">
                "Der Eisenwarenhändler Ihres Vertrauens"
              </blockquote>
              <p className="text-center text-muted-foreground mt-4">
                Qualität, Fachkompetenz und Verlässlichkeit in allem was wir tun.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Unsere Geschichte
            </h3>
            
            <div className="relative">
              {/* Timeline line - hidden on mobile, shown on lg+ */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-px w-0.5 bg-primary h-full"></div>
              {/* Mobile timeline line - shown on mobile only */}
              <div className="lg:hidden absolute left-6 w-0.5 bg-primary h-full"></div>
              
              <div className="space-y-8 lg:space-y-12">
                {/* 1936 */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1936</Badge>
                            <CardTitle className="text-lg">Gründung</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Gründung durch Herrn Schildmair Franz. Das Unternehmen handelte mit natürlichem Mineralwasser und Jodsalz. 
                              Die gewerbliche Eintragung erfolgte am 22.07.1936.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <Card className="ml-auto max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit ml-auto">1936</Badge>
                          <CardTitle className="text-lg">Gründung</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Gründung durch Herrn Schildmair Franz. Das Unternehmen handelte mit natürlichem Mineralwasser und Jodsalz. 
                            Die gewerbliche Eintragung erfolgte am 22.07.1936.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>

                {/* 1945 */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1945</Badge>
                            <CardTitle className="text-lg">Neustart nach dem Krieg</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Nach der Heimkehr aus dem Krieg wurde die neue Firma Schildmair gegründet, die sich mit dem Verkauf von 
                              landwirtschaftlichen Sommer- und Wintergeräten beschäftigte. Entwicklung zum österreichweiten Großhandel.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8">
                      <Card className="max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit">1945</Badge>
                          <CardTitle className="text-lg">Neustart nach dem Krieg</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Nach der Heimkehr aus dem Krieg wurde die neue Firma Schildmair gegründet, die sich mit dem Verkauf von 
                            landwirtschaftlichen Sommer- und Wintergeräten beschäftigte. Entwicklung zum österreichweiten Großhandel.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* 1965 */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1965</Badge>
                            <CardTitle className="text-lg">Erstes Handelsgeschäft</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Gründung des Handelsgeschäftes für Eisenwaren mit Farbenabteilung und Haushaltswaren 
                              in der Grieskirchner Straße 3 im Oktober 1965.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <Card className="ml-auto max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit ml-auto">1965</Badge>
                          <CardTitle className="text-lg">Erstes Handelsgeschäft</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Gründung des Handelsgeschäftes für Eisenwaren mit Farbenabteilung und Haushaltswaren 
                            in der Grieskirchner Straße 3 im Oktober 1965.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>

                {/* 1971 */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1971</Badge>
                            <CardTitle className="text-lg">Übernahme durch Kurt Schildmair</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Übernahme durch Herrn Schildmair Kurt.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8">
                      <Card className="max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit">1971</Badge>
                          <CardTitle className="text-lg">Übernahme durch Kurt Schildmair</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Übernahme durch Herrn Schildmair Kurt.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* 1978-1982 Expansion */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1978-1982</Badge>
                            <CardTitle className="text-lg">Expansion</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Übernahme der Maxglaner Eisenhandlung in Salzburg (1978), der Firma Schrems in Salzburg (1980) 
                              und der Firma Brunbauer in Linz-Urfahr (1982). Übersiedlung zur Grieskirchner Straße 6.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <Card className="ml-auto max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit ml-auto">1978-1982</Badge>
                          <CardTitle className="text-lg">Expansion</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Übernahme der Maxglaner Eisenhandlung in Salzburg (1978), der Firma Schrems in Salzburg (1980) 
                            und der Firma Brunbauer in Linz-Urfahr (1982). Übersiedlung zur Grieskirchner Straße 6.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>

                {/* 1988 */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1988</Badge>
                            <CardTitle className="text-lg">Nächste Generation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Eintritt von Herrn Schildmair Viktor in das Familienunternehmen.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8">
                      <Card className="max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit">1988</Badge>
                          <CardTitle className="text-lg">Nächste Generation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Eintritt von Herrn Schildmair Viktor in das Familienunternehmen.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* 1991-1998 Modernisierung */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">1991-1998</Badge>
                            <CardTitle className="text-lg">Modernisierung</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Errichtung der Küchenboutique (1991). Erwerb des ehemaligen Elektrolux-Objektes in der Gärtnerstraße 
                              mit 9.000 m² Gesamtfläche (1997) und Umbau auf 1.000m² Verkaufsfläche (1998).
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <Card className="ml-auto max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit ml-auto">1991-1998</Badge>
                          <CardTitle className="text-lg">Modernisierung</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Errichtung der Küchenboutique (1991). Erwerb des ehemaligen Elektrolux-Objektes in der Gärtnerstraße 
                            mit 9.000 m² Gesamtfläche (1997) und Umbau auf 1.000m² Verkaufsfläche (1998).
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>

                {/* 2009-2015 Spezialisierung */}
                <div className="relative lg:flex lg:items-center">
                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start">
                      <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background mt-2"></div>
                      <div className="ml-12">
                        <Card>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">2009-2015</Badge>
                            <CardTitle className="text-lg">Service-Erweiterung</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Übernahme der Firma GaMo Kleinmotorgeräte mit Werkstatt (2009). 
                              2015 wurde diese Zweigstelle in die Gärtnerstraße übersiedelt.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:items-center lg:w-full">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="flex-1 pl-8">
                      <Card className="max-w-md">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit">2009-2015</Badge>
                          <CardTitle className="text-lg">Service-Erweiterung</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Übernahme der Firma GaMo Kleinmotorgeräte mit Werkstatt (2009). 
                            2015 wurde diese Zweigstelle in die Gärtnerstraße übersiedelt.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kontakt & Standort
            </h2>
            <p className="text-lg text-muted-foreground">
              Besuchen Sie uns in Wels oder kontaktieren Sie uns direkt
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="text-primary mr-3" size={24} />
                  Unser Standort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Adresse</h4>
                  <p className="text-muted-foreground">
                    Gärtnerstraße 9–11<br />
                    4600 Wels, Österreich
                  </p>
                </div>
                
                <Separator />

                <div className="flex items-center">
                  <Car className="text-accent mr-3" size={20} />
                  <span className="text-sm">Gratis Parkplätze verfügbar</span>
                </div>

                <Separator />

                {/* Interactive Map */}
                <div>
                  <h4 className="font-semibold mb-3">Standort auf der Karte</h4>
                  <div className="w-full h-64 bg-muted/30 rounded-lg overflow-hidden relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.123456789!2d14.030123!3d48.161234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4771f4a123456789%3A0x123456789abcdef0!2sG%C3%A4rtnerstra%C3%9Fe%209-11%2C%204600%20Wels%2C%20Austria!5e0!3m2!1sde!2sat!4v1234567890123!5m2!1sde!2sat"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Schildmair Standort Gärtnerstraße 9-11, 4600 Wels"
                      className="w-full h-full"
                    ></iframe>
                    <div className="absolute inset-0 bg-transparent pointer-events-none border-2 border-border rounded-lg"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Kontaktieren Sie uns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">+43 7242 45129</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Fax</p>
                      <p className="text-muted-foreground">+43 7242 45129-30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-muted-foreground">office@schildmair.at</p>
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Clock className="text-primary mr-2" size={20} />
                    Öffnungszeiten
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Montag - Freitag:</span>
                      <span>08:00-12:00 & 14:00-18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag:</span>
                      <span>08:30-12:00</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.facebook.com/schildmair/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2" size={16} />
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.instagram.com/schildmair_wels/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2" size={16} />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="mailto:office@schildmair.at">
                      <Mail className="mr-2" size={16} />
                      E-Mail schreiben
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+43724245129">
                      <Phone className="mr-2" size={16} />
                      Anrufen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={schildmairLogo} 
                  alt="Schildmair Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Ihr vertrauenswürdiger Fachhandel für Eisenwaren & Haushaltsbedarf in Wels. 
                Tradition trifft auf moderne Services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://www.facebook.com/schildmair/" target="_blank" rel="noopener noreferrer">
                    <Facebook size={20} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://www.instagram.com/schildmair/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={20} />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Schnellzugriffe</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Leistungen</a></li>
                <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Geschäft</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">Über uns</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
                <li><a href="https://www.sowi-shop.at/c/aktion" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Allgemeiner Webshop</a></li>
                <li><a href="https://eshop.schildmair.at/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Industrie & Gewerbe Shop</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button 
                    onClick={() => handlePageChange('impressum')}
                    className="hover:text-primary-foreground transition-colors text-left"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('datenschutz')}
                    className="hover:text-primary-foreground transition-colors text-left"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('karriere')}
                    className="hover:text-primary-foreground transition-colors text-left"
                  >
                    Karriere
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 Schildmair EHK Sowi. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App