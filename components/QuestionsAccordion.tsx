import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Wie kann ich meine Bestellung verfolgen?</AccordionTrigger>
          <AccordionContent>
          Sie können den Status Ihrer Bestellung überprüfen, indem Sie sich in Ihr Konto einloggen und zum Bereich &quot;Meine Bestellungen&quot; navigieren. Dort finden Sie alle relevanten Informationen sowie eine Tracking-Nummer, mit der Sie Ihre Sendung verfolgen können.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Wie kann ich einen Artikel zurückgeben oder umtauschen?</AccordionTrigger>
          <AccordionContent>
          Um einen Artikel zurückzugeben oder umzutauschen, besuchen Sie bitte den Abschnitt &quot;Retouren&quot; auf unserer Website. Dort finden Sie alle notwendigen Informationen und das Formular für die Rücksendung.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Wie lange dauert der Versand?</AccordionTrigger>
          <AccordionContent>
          Die Versanddauer kann variieren, je nachdem, wo Sie sich befinden. Die durchschnittliche Lieferzeit beträgt 3-5 Werktage. Bei internationalen Sendungen kann es jedoch länger dauern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Welche Zahlungsmethoden akzeptieren Sie?</AccordionTrigger>
          <AccordionContent>
          Wir akzeptieren eine Vielzahl von Zahlungsmethoden einschließlich Kreditkarten (Visa, MasterCard, American Express), PayPal, und Banküberweisungen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger>Ist es sicher, online auf Ihrer Website einzukaufen?</AccordionTrigger>
          <AccordionContent>
          Die Sicherheit Ihrer Daten ist uns sehr wichtig. Wir verwenden modernste Verschlüsselungstechnologien, um sicherzustellen, dass Ihre Transaktionen und persönlichen Informationen sicher sind.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }