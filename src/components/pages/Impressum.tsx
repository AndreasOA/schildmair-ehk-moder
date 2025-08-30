import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import schildmairLogo from '@/assets/images/logo.png'

interface ImpressumProps {
  onBack: () => void
}

function Impressum({ onBack }: ImpressumProps) {
  return (
    <div className="min-h-screen bg-background">
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
            <Badge variant="secondary">Impressum</Badge>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Impressum
            </h1>
            <p className="text-lg text-muted-foreground">
              Rechtliche Informationen zu unserem Unternehmen
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
                  <p className="font-medium text-lg mb-4">EHK-SOWI Eisenwaren- Haus- u. Küchengeräte Großhandels GmbH</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Gärtnerstraße 9</p>
                    <p>A-4600 Wels</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Kontaktdaten</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📞 Telefon</h4>
                    <p className="text-muted-foreground">0043/7242/45129</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📠 Fax</h4>
                    <p className="text-muted-foreground">0043/7242/45129-19</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:col-span-2">
                    <h4 className="font-medium mb-2">✉️ E-Mail</h4>
                    <p className="text-muted-foreground">office@schildmair.at</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Unternehmensregister</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">🏢 Firmenbuchnummer</h4>
                    <p className="text-muted-foreground">FN 103173 a</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">🆔 UID-Nummer</h4>
                    <p className="text-muted-foreground">ATU25187703</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">📋 ERA</h4>
                    <p className="text-muted-foreground">51734</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">♻️ ARA</h4>
                    <p className="text-muted-foreground">20649</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:col-span-2">
                    <h4 className="font-medium mb-2">🌍 EORI</h4>
                    <p className="text-muted-foreground">ATEOS1000101484</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Haftungsausschluss</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-yellow-800">⚠️ Haftung für Inhalte</h4>
                    <p className="text-yellow-700 text-sm">
                      Alle Informationen werden sorgfältig recherchiert. Dennoch können wir keine rechtliche Garantie für die Richtigkeit geben. Wir übernehmen keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-800">🔗 Haftung für Links</h4>
                    <p className="text-blue-700 text-sm">
                      Bei externen Links übernehmen wir keine Verantwortung für die Richtigkeit und Legalität der Inhalte auf diesen Seiten. Der Inhalt von Webseiten, auf die von hier aus verwiesen wird, liegt in der alleinigen inhaltlichen Verantwortung der jeweiligen Betreiber.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Urheberrecht</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-medium mb-3 text-red-800">© Urheberrecht und Nutzungsrechte</h4>
                  <div className="space-y-3 text-red-700 text-sm">
                    <p>
                      Alle Texte, Adressen, Bilder und Grafiken unterliegen dem Urheberrecht und Gesetzen zum Schutz geistigen Eigentums. Alle Inhalte sind nur zur persönlichen Information bestimmt.
                    </p>
                    <p>
                      Jede weitergehende kommerzielle Verwendung, insbesondere die Speicherung in Datenbanken, Veröffentlichung, Vervielfältigung und jede Form von gewerblicher Nutzung sowie die Weitergabe an Dritte – auch in Teilen oder in überarbeiteter Form – ohne Zustimmung der Rechteinhaber ist untersagt.
                    </p>
                    <p>
                      Die Verwendung von Deep-Linking auf Inhalts- bzw. Produktebene sowie das Anzeigen von Inhalten dieser Seite innerhalb von Frame-Seiten ist genehmigungspflichtig.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Rechtliche Grundlage</h3>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-center text-muted-foreground font-medium">
                    Impressum nach § 5 ECG (E-Commerce-Gesetz)
                  </p>
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
