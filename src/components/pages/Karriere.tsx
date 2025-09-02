import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Mail, Phone } from 'lucide-react'
import schildmairLogo from '@/assets/images/logo.png'
import { getKarriere } from '@/lib/content'

interface KarriereProps {
  onBack: () => void
}

function Karriere({ onBack }: KarriereProps) {
  const data = getKarriere()
  return (
    <div className="min-h-screen bg-background" data-sb-object-id={`content/pages/${data.slug}.json`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft size={20} />
              </Button>
              <img 
                src={schildmairLogo} 
                alt="Schildmair Logo" 
                className="h-10 w-auto"
              />
            </div>
            <Badge variant="secondary" data-sb-field-path="title">{data.title}</Badge>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <span data-sb-field-path="title">{data.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              <span data-sb-field-path="intro">{data.intro}</span>
            </p>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle><h3 className="text-xl font-semibold" data-sb-field-path="title">{data.title}</h3></CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-6">Für unser Geschäft in Wels suchen wir <strong data-sb-field-path="positions">{data.positions.map(p => p.title).join(', ')}</strong>.</p>
                <p className="text-muted-foreground mb-6">Wenn Sie Spaß an der Arbeit haben sind Sie bei uns genau richtig.</p>
                
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Wir bieten:</h4>
                  <ul className="space-y-2 text-muted-foreground" data-sb-field-path="offerings">
                    {data.offerings?.map((o,i) => (
                      <li key={i} className="flex items-center" data-sb-field-path={`.${i}`}>
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Berufsanfänger als auch Berufserfahrene sind herzlich Willkommen.
                </p>
                <p className="text-lg font-medium text-primary mb-4">
                  Nutze Deine Chance und werde ein Teil unseres engagierten Teams
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Stellenausschreibungen</h3>
                <div className="space-y-4" data-sb-field-path="positions">
                  {data.positions?.map((p,i) => (
                    <Card className="border border-border" key={i} data-sb-field-path={`.${i}`}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2" data-sb-field-path="title">{p.title}</h4>
                        <p className="text-sm text-muted-foreground" data-sb-field-path="employment">{p.employment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Wir freuen uns auf Ihre Bewerbung.
                </p>
                <p className="text-muted-foreground mb-6" data-sb-field-path="contactPerson.name">
                  <strong>{data.contactPerson?.name}</strong> - Ihr Ansprechpartner für Bewerbungen
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild>
                    <a href="mailto:office@schildmair.at?subject=Bewerbung%20bei%20Schildmair&body=Sehr%20geehrter%20Herr%20Schildmair%2C%0A%0Ahiermit%20möchte%20ich%20mich%20bei%20Ihnen%20bewerben.%0A%0AMit%20freundlichen%20Grüßen">
                      <Mail className="mr-2" size={16} />
                      Bewerbung per E-Mail senden
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+43724245129">
                      <Phone className="mr-2" size={16} />
                      Rückfragen telefonisch
                    </a>
                  </Button>
                </div>
                
                <div className="mt-6 bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Kontaktdaten</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Mail className="mr-2" size={16} />
                      <span data-sb-field-path="contactPerson.email">{data.contactPerson?.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2" size={16} />
                      <span data-sb-field-path="contactPerson.phone">{data.contactPerson?.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center" data-sb-field-path="closingNote">{data.closingNote}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Karriere
