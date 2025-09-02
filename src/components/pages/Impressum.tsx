import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import schildmairLogo from '@/assets/images/logo.png'
import { getImpressum } from '@/lib/content'

interface ImpressumProps {
  onBack: () => void
}

function Impressum({ onBack }: ImpressumProps) {
  const data = getImpressum()
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
              <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
              <CardDescription>
                Verantwortlich für den Inhalt dieser Website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Inhaber und Redaktion</h3>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-medium text-lg mb-4" data-sb-field-path="companyName">{data.companyName}</p>
                  <div className="space-y-2 text-muted-foreground" data-sb-field-path="addressLines">
                    {data.addressLines?.map((line, i) => <p key={i} data-sb-field-path={`.${i}`}>{line}</p>)}
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Kontaktdaten</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📞 Telefon</h4>
                    <p className="text-muted-foreground" data-sb-field-path="contacts.phone">{data.contacts?.phone}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📠 Fax</h4>
                    <p className="text-muted-foreground" data-sb-field-path="contacts.fax">{data.contacts?.fax}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:col-span-2">
                    <h4 className="font-medium mb-2">✉️ E-Mail</h4>
                    <p className="text-muted-foreground" data-sb-field-path="contacts.email">{data.contacts?.email}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Unternehmensregister</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">🏢 Firmenbuchnummer</h4>
                    <p className="text-muted-foreground" data-sb-field-path="registry.firmenbuchnummer">{data.registry?.firmenbuchnummer}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">🆔 UID-Nummer</h4>
                    <p className="text-muted-foreground" data-sb-field-path="registry.uid">{data.registry?.uid}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📋 ERA</h4>
                    <p className="text-muted-foreground" data-sb-field-path="registry.era">{data.registry?.era}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">♻️ ARA</h4>
                    <p className="text-muted-foreground" data-sb-field-path="registry.ara">{data.registry?.ara}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:col-span-2">
                    <h4 className="font-medium mb-2">🌍 EORI</h4>
                    <p className="text-muted-foreground" data-sb-field-path="registry.eori">{data.registry?.eori}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Haftungsausschluss</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-yellow-800">⚠️ Haftung für Inhalte</h4>
                    <p className="text-yellow-700 text-sm" data-sb-field-path="disclaimer.contentLiability">{data.disclaimer?.contentLiability}</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-800">🔗 Haftung für Links</h4>
                    <p className="text-blue-700 text-sm" data-sb-field-path="disclaimer.linksLiability">{data.disclaimer?.linksLiability}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Urheberrecht</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-medium mb-3 text-red-800">© Urheberrecht und Nutzungsrechte</h4>
                  <div className="space-y-3 text-red-700 text-sm" data-sb-field-path="copyright">{data.copyright}</div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Rechtliche Grundlage</h3>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-center text-muted-foreground font-medium" data-sb-field-path="legalBasis">{data.legalBasis}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Impressum
