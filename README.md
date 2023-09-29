<h1 align="center">
  <a href="https://dh-web.tim.it.com/">
    <img src="https://raw.githubusercontent.com/TimLinsenmayer/webprog-project/master/docs/images/%C3%9Cbersicht.png" alt="Logo">
  </a>
</h1>

<div align="center">
  UpShop - ein DummyJSON-Shop
</div>

<details open="open">
<summary>Inhalt</summary>

- [Über dieses Projekt](#todo)
  - [Gebaut mit...](#todo)
- [Installation & Start](#todo)
  - [Alternativ (gehostete Version)](#todo)
- [Hinweise](#todo)


</details>

---

## Über dieses Projekt

<table>
<tr>
<td>

Diese Webanwendung dient als Portfolioleistung in der Vorlesung "Entwicklung verteilter Systeme - Webprogrammierung" der DHBW Karlsruhe für den Kurs WWI22B2. Trotz des Designs als Shop besteht nur die Möglichkeit, Produkte anzusehen und nach diesen zu suchen. Die Preise dienen nur der Inhaltsdarstellung, es können keine Kaufverträge über diese Website abgeschlossen werden.

(Daten-) Grundlage der Webanwendung ist [DummyJSON](https://dummyjson.com/), welche die Produkte (100!) über eine simple REST-API zur Verfügung stellt. Diese Requests werden auf Clientseite (`"use client";`) ausgeführt, es wird kaum serverseitig gerendert. Dies erlaubt unter anderem auch die Netzwerkanalyse über DevTools.

Hauptfunktionalitäten des **UpShops**:

- moderner, TailwindCSS-verwendender CSS-Syntax (shadcn/ui)
- Responsive Design (mobile, tablet, desktop)
- Verwendung des next.js-App-Routers
- gefilterte Ergebnisse auf der Startseite (+ Dropdownauswahl für "weitere" Produktkategorien)
- Suchfunktion
- Produkt-Detailansicht
</td>
</tr>
</table>

### Gebaut mit...

- [React (TS)](https://react.dev/)
- [next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Flowbite](https://flowbite.com/)
- [tailwindcss](https://tailwindcss.com/)

## Installation & Start

Die Installation des Projektes folgt gängigen next.js-Projekten und verwendet somit npm. Zwingend erforderlich sind folgende Packages (in aktuellster Version):

```sh
sudo apt install -y nodejs npm
```
Nach dem Klonen der Repo müssen im root-Verzeichnis des Projekts (`/webprog-project`) folgende Befehle ausgeführt werden:

```sh
npm install
npm run build
npm start
```

Der Shop kann unter http://localhost:3000 aufgerufen werden.

### Alternativ (gehostete Version)
Bis auf weiteres ist dieses Projekt auch unter https://dh-web.tim.it.com/ zu erreichen. Es ändert sich nichts an der Bedienung der Website.

Die Einrichtung der notwendigen Infrastruktur unterscheidet sich hierbei nur geringfügig, es wird ein DigitalOcean Droplet (Ubuntu) mit Nginx eingesetzt.

> Sollte der Server nicht erreichbar sein, bitte mich kontaktieren - i.d.R. hilft ein Reboot.



## Hinweise

<details>
<summary>Fehler: 'className' does not exist on type 'DialogPortalProps'</summary>

In manchen Builds tritt dieser Fehler auf (`npm run build`). Dieser stammt aus den Dialog-Popups (Footer).
Dieses Fehlerbild ist bekannt und wird [bereits als öffentliches Issue von shadcn/ui gelistet](https://github.com/shadcn-ui/ui/issues/1595).

</details>
<details>
<summary>Fehler: Npm install cannot find module 'semver'</summary>

Dieser Fehler entsteht durch eine veraltete Node.js-Version - bitte aktualisieren!

</details>
