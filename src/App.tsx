import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  House, 
  Scissors, 
  ShoppingCart, 
  Users, 
  Car,
  GraduationCap,
  Facebook,
  Instagram,
  Menu,
  X
} from '@phosphor-icons/react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: Wrench,
      title: 'Eisenwaren & Werkzeug',
      description: 'Zuverlässiger Partner für Werkzeug, kleine Eisenwaren, Baubedarf, Elektrotechnik und Gartengeräte'
    },
    {
      icon: House,
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
    'Bosch', 'Makita', 'DeWalt', 'Festool', 'Metabo', 'Hilti',
    'WMF', 'Fissler', 'Zwilling', 'KitchenAid', 'Braun', 'Siemens',
    'Gardena', 'Husqvarna', 'Stihl', 'Kärcher', 'Weber', 'Petromax'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded font-bold text-lg">
                Schildmair
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Leistungen
                </a>
                <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Über uns
                </a>
                <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Kontakt
                </a>
                <Button>Onlineshop</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Über uns
              </a>
              <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Kontakt
              </a>
              <div className="px-3 py-2">
                <Button className="w-full">Onlineshop</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Seit Generationen Ihr vertrauenswürdiger Partner
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Schildmair</span> EHK Sowi
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ihr vertrauenswürdiger Fachhandel für Eisenwaren & Haushaltsbedarf in Wels
            </p>
            <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto">
              Bei uns finden Sie alles — von Profi-Werkzeugen bis hin zu hochwertigen Küchenhelfern. 
              Traditioneller Familienbetrieb mit modernem Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <ShoppingCart className="mr-2" size={20} />
                Zum Onlineshop
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <MapPin className="mr-2" size={20} />
                Besuchen Sie uns
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
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

      {/* Target Groups */}
      <section className="py-20 bg-muted/20">
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

      {/* Partner Brands */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Unsere Markenpartner
            </h2>
            <p className="text-lg text-muted-foreground">
              Qualität durch bewährte Marken und langjährige Partnerschaften
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerBrands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-foreground font-medium text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Über Schildmair
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Als traditioneller Familienbetrieb in Wels stehen wir seit Generationen für Qualität, 
                Fachkompetenz und Verlässlichkeit. Unser Motto "Der Eisenwarenhändler Ihres Vertrauens" 
                ist nicht nur ein Versprechen, sondern gelebte Tradition.
              </p>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
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

                <div className="flex items-center">
                  <Car className="text-accent mr-3" size={20} />
                  <span className="text-sm">Gratis Parkplätze verfügbar</span>
                </div>
              </CardContent>
            </Card>

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
                  <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Facebook className="mr-2" size={16} />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="mr-2" size={16} />
                      Instagram
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full">
                    <Mail className="mr-2" size={16} />
                    E-Mail schreiben
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2" size={16} />
                    Anrufen
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
              <div className="bg-primary-foreground text-primary px-4 py-2 rounded font-bold text-lg inline-block mb-4">
                Schildmair
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Ihr vertrauenswürdiger Fachhandel für Eisenwaren & Haushaltsbedarf in Wels. 
                Tradition trifft auf moderne Services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Instagram size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Schnellzugriffe</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Leistungen</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">Über uns</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Onlineshop</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Karriere</a></li>
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