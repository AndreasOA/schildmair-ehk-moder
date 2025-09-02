import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import schildmairLogo from '@/assets/images/logo.png'
import { getDatenschutz } from '@/lib/content'

interface DatenschutzProps {
  onBack: () => void
}

function Datenschutz({ onBack }: DatenschutzProps) {
  const data = getDatenschutz()
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
              <CardTitle data-sb-field-path="title">{data.title}</CardTitle>
              <CardDescription>
                Ihre Privatsphäre ist uns wichtig.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div data-sb-field-path="sections">
                {data.sections?.map((s, i) => (
                  <div key={i} data-sb-field-path={`.${i}`}>
                    <h3 className="text-xl font-semibold mb-4" data-sb-field-path="heading">{s.heading}</h3>
                    <p className="text-muted-foreground mb-4" data-sb-field-path="body">{s.body}</p>
                  </div>
                ))}
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Welche Daten erfassen wir?</h3>
                <p className="text-muted-foreground mb-4">
                  Nachstehend erhalten Sie einen Überblick über die Daten, die wir erfassen können:
                </p>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">🔒 Nicht personenbezogene Daten</h4>
                    <p className="text-sm text-muted-foreground">
                      Nicht identifizierte und nicht identifizierbare Informationen, die Sie während des Registrierungsprozesses bereitstellen oder die über die Nutzung unserer Dienste gesammelt werden. Nicht personenbezogene Daten lassen keine Rückschlüsse darauf zu, von wem sie erfasst wurden. Nicht personenbezogene Daten, die wir erfassen, bestehen hauptsächlich aus technischen und zusammengefassten Nutzungsinformationen.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">👤 Personenbezogene Daten</h4>
                    <p className="text-sm text-muted-foreground">
                      Individuell identifizierbare Informationen, d. h. all jene, über die man Sie identifizieren kann oder mit vertretbarem Aufwand identifizieren könnte. Zu den personenbezogenen Daten, die wir über unsere Dienste erfassen, können Informationen gehören, die von Zeit zu Zeit angefordert werden, wie Namen, E-Mail-Adressen, Adressen, Telefonnummern, IP-Adressen und mehr. Wenn wir personenbezogene mit nicht personenbezogenen Daten kombinieren, werden diese, solange sie in Kombination vorliegen, von uns als personenbezogene Daten behandelt.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Wie sammeln wir Daten?</h3>
                <p className="text-muted-foreground mb-4">
                  Nachstehend sind die wichtigsten Methoden aufgeführt, die wir zur Sammlung von Daten verwenden:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Wir erfassen Daten bei der Nutzung unserer Dienste. Wenn Sie also unsere digitalen Assets besuchen und Dienste nutzen, können wir die Nutzung, Sitzungen und die dazugehörigen Informationen sammeln, erfassen und speichern.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Wir erfassen Daten, die Sie uns selbst zur Verfügung stellen, beispielsweise, wenn Sie über einen Kommunikationskanal direkt mit uns Kontakt aufnehmen (z. B. eine E-Mail mit einem Kommentar oder Feedback).
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Wir können, wie unten beschrieben, Daten aus Drittquellen erfassen.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    Wir erfassen Daten, die Sie uns zur Verfügung stellen, wenn Sie sich über einen Drittanbieter wie Facebook oder Google bei unseren Diensten anmelden.
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Warum erfassen wir diese Daten?</h3>
                <p className="text-muted-foreground mb-4">
                  Wir können Ihre Daten für folgende Zwecke verwenden:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um unsere Dienste zur Verfügung zu stellen und zu betreiben;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um unsere Dienste zu entwickeln, anzupassen und zu verbessern;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um auf Ihr Feedback, Ihre Anfragen und Wünsche zu reagieren und Hilfe anzubieten;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um Anforderungs- und Nutzungsmuster zu analysieren;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    für sonstige interne, statistische und Recherchezwecke;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um unsere Möglichkeiten zur Datensicherheit und Betrugsprävention verbessern zu können;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um Verstöße zu untersuchen und unsere Bedingungen und Richtlinien durchzusetzen sowie um dem anwendbarem Recht, den Vorschriften bzw. behördlichen Anordnungen zu entsprechen;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    um Ihnen Aktualisierungen, Nachrichten, Werbematerial und sonstige Informationen im Zusammenhang mit unseren Diensten zu übermitteln. Bei Werbe-E-Mails können Sie selbst entscheiden, ob Sie diese weiterhin erhalten möchten. Wenn nicht, klicken Sie einfach auf den Abmeldelink in diesen E-Mails.
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Cookies und ähnliche Technologien</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie unsere Dienste besuchen oder darauf zugreifen, autorisieren wir Dritte dazu, Webbeacons, Cookies, Pixel Tags, Skripte sowie andere Technologien und Analysedienste („Tracking-Technologien") einzusetzen. Diese Tracking-Technologien können es Dritten ermöglichen, Ihre Daten automatisch zu erfassen, um das Navigationserlebnis auf unseren digitalen Assets zu verbessern, deren Performance zu optimieren und ein maßgeschneidertes Nutzererlebnis zu gewährleisten, sowie zu Zwecken der Sicherheit und der Betrugsprävention.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Datenspeicherung und -schutz</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">📍 Wo speichern wir die Daten?</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Personenbezogene Daten können in den Vereinigten Staaten, in Irland, Südkorea, Taiwan, Israel und soweit für die ordnungsgemäße Bereitstellung unserer Dienste und/oder gesetzlich vorgeschrieben in anderen Rechtsordnungen gepflegt, verarbeitet und gespeichert werden.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">⏰ Wie lange werden die Daten vorgehalten?</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Wir bewahren die erfassten Daten so lange auf, wie es für die Bereitstellung unserer Dienste, zur Einhaltung unserer gesetzlichen und vertraglichen Verpflichtungen gegenüber Ihnen, zur Beilegung von Streitigkeiten und zur Durchsetzung unserer Vereinbarungen erforderlich ist.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🔐 Wie schützen wir die Daten?</h4>
                    <p className="text-muted-foreground text-sm">
                      Der Hosting-Dienst für unsere digitalen Assets stellt uns die Online-Plattform zur Verfügung, über die wir Ihnen unsere Dienste anbieten können. Ihre Daten werden auf sicheren Servern hinter einer Firewall gespeichert und wir bieten sicheren HTTPS-Zugriff auf die meisten Bereiche unserer Dienste.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Minderjährige</h3>
                <p className="text-muted-foreground mb-4">
                  Die Dienste sind nicht für Nutzer bestimmt, die noch nicht die gesetzliche Volljährigkeit erreicht haben. Wir werden wissentlich keine Daten von Kindern erfassen. Wenn Sie noch nicht volljährig sind, sollten Sie die Dienste nicht herunterladen oder nutzen und uns keine Informationen zur Verfügung stellen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir behalten uns das Recht vor, jederzeit einen Altersnachweis zu verlangen, damit wir überprüfen können, ob Minderjährige unsere Dienste nutzen. Für den Fall, dass wir Kenntnis davon erlangen, dass ein Minderjähriger unsere Dienste nutzt, können wir diesen Nutzern den Zugang zu unseren Diensten untersagen und ihn sperren, und wir können alle bei uns gespeicherten Daten über diesen Nutzer löschen.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Ihre Rechte (EU-Bürger)</h3>
                <p className="text-muted-foreground mb-4">
                  Als EU-Ansässiger können Sie:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    eine Bestätigung darüber verlangen, ob personenbezogene Daten verarbeitet werden, die Sie betreffen, oder nicht, und Zugriff auf Ihre gespeicherten personenbezogenen Daten sowie auf bestimmte Zusatzinformationen anfordern;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    den Erhalt von personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format verlangen;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    die Berichtigung Ihrer personenbezogenen Daten verlangen, die bei uns gespeichert sind;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    die Löschung Ihrer personenbezogenen Daten verlangen;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    der Verarbeitung Ihrer personenbezogenen Daten durch uns widersprechen;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, oder
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    eine Beschwerde bei einer Aufsichtsbehörde einreichen.
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Aktualisierungen der Datenschutzrichtlinie</h3>
                <p className="text-muted-foreground mb-4">
                  Wir können diese Datenschutzrichtlinie nach eigenem Ermessen von Zeit zu Zeit überarbeiten, die auf der Website veröffentlichte Version ist immer aktuell. Wir bitten Sie, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Bei wesentlichen Änderungen werden wir einen Hinweis dazu auf unserer Website veröffentlichen.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie allgemeine Fragen zu den Diensten oder den von uns über Sie erfassten Daten und deren Verwendung haben, kontaktieren Sie uns bitte unter:
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="font-medium">Schildmair EHK Sowi</p>
                  <p className="text-muted-foreground">Gärtnerstraße 9–11</p>
                  <p className="text-muted-foreground">4600 Wels, Österreich</p>
                  <p className="text-muted-foreground">E-Mail: office@schildmair.at</p>
                  <p className="text-muted-foreground">Telefon: +43 7242 45129</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Datenschutz
