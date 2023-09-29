import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

export default function Footer(){
    //copied from https://flowbite.com/docs/components/footer/
    return(
        
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/logo.svg" className="h-8 mr-3" alt="UpStore Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UpStore</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Dialog>
                            <DialogTrigger asChild>
                                <a className="mr-4 hover:underline md:mr-6 ">Über diese Seite</a>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Über diese Seite</DialogTitle>
                                <DialogDescription>
                                    Diese Webanwendung dient als Portfolioleistung in der Vorlesung "Entwicklung verteilter Systeme - Webprogrammierung" der DHBW Karlsruhe für den Kurs WWI22B2.
                                    Trotz des Designs als Shop besteht nur die Möglichkeit, Produkte anzusehen und nach diesen zu suchen. Die Preise dienen nur der Inhaltsdarstellung, es können keine Kaufverträge über diese Website abgeschlossen werden.
                                </DialogDescription>
                                <DialogTitle className="pt-3">Quellen</DialogTitle>
                                <DialogDescription>
                                    Diese Website verwendet folgende Quellen:
                                    <ul className="pt-2">
                                        <li>
                                            <h4 className="text-sm font-medium leading-none"><a href="https://dummyjson.com/">DummyJSON</a></h4>
                                            <p className="text-sm text-muted-foreground">
                                            DummyJSON ist ein nützliches Tool, das Entwicklern ermöglicht, zufällige JSON-Daten zu generieren, um das Testen und die Entwicklung von Frontend- und Backend-Systemen zu erleichtern.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-sm font-medium leading-none pt-2"><a href="https://logoipsum.com/">Logoipsum</a></h4>
                                            <p className="text-sm text-muted-foreground">
                                            Logoipsum ist eine praktische Ressource für Entwickler und Designer, die temporäre Logos für Prototypen und Mockups benötigen, um Projekte visuell zu präsentieren.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-sm font-medium leading-none pt-2"><a href="https://flowbite.com/docs/components/footer/">Flowbite</a> (Footer-Design)</h4>
                                            <p className="text-sm text-muted-foreground">
                                            Flowbite liefert vorbereitete tailwindcss-Komponenten, welche mit geringem Aufwand leicht angepasst werden können und somit für z.B. Footer geeignet sind.
                                            </p>
                                        </li>
                                    </ul>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </li>
                    <li>
                        <Dialog>
                            <DialogTrigger asChild>
                                <a className="mr-4 hover:underline md:mr-6 ">Technische Details</a>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Technische Details</DialogTitle>
                                <DialogDescription>
                                    Verwendet wurden unter anderem folgende Frameworks:
                                    <ul className="pt-2">
                                        <li>
                                            <h4 className="text-sm font-medium leading-none"><a href="https://react.dev/">React (TypeScript)</a></h4>
                                            <p className="text-sm text-muted-foreground">
                                            Mit der starken Typisierung durch TypeScript wird React, eine Bibliothek für benutzerfreundliche Schnittstellen, zu einem robusten Werkzeug für skalierbare Webanwendungen.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-sm font-medium leading-none pt-2"><a href="https://nextjs.org/">next.js</a> (mit App-Router)</h4>
                                            <p className="text-sm text-muted-foreground">
                                            Next.js ermöglicht serverseitiges Rendering und statische Website-Generierung, was zu optimierter Performance und SEO-freundlichen Anwendungen führt.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-sm font-medium leading-none pt-2"><a href="https://ui.shadcn.com/">shadcn/ui</a></h4>
                                            <p className="text-sm text-muted-foreground">
                                            Ein weniger bekanntes, aber effizientes Framework, das hilft, benutzerdefinierte UI-Komponenten zu erstellen, und eine flexible Integration mit anderen Bibliotheken bietet.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-sm font-medium leading-none pt-2"><a href="https://tailwindcss.com/">tailwindcss</a></h4>
                                            <p className="text-sm text-muted-foreground">
                                            Ein Utility-First-CSS-Framework, das Entwicklern durch komponierbare Klassen eine schnelle Prototypenerstellung und maßgeschneiderte Designlösungen ermöglicht.
                                            </p>
                                        </li>
                                    </ul>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </li>
                    <li>
                    <Dialog>
                            <DialogTrigger asChild>
                                <a className="mr-4 hover:underline md:mr-6 ">Kontakt</a>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Kontakt</DialogTitle>
                                <DialogDescription>
                                    Diese Website dient als Portfolioleistung für eine DHBW-Vorlesung. Sie wurde erstellt von:
                                    <h4 className="text-sm font-medium leading-none pt-2"><a href="https://www.linkedin.com/in/tim-joscha-linsenmayer-903a29216/">Tim Joscha Linsenmayer</a></h4>
                                    <p className="text-sm text-muted-foreground">
                                        Hofwiesenweg 4, 68789 St. Leon-Rot
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Kontaktmöglichkeit: <a href="mailto://tim.linsenmayer@netze-bw.de">tim.linsenmayer@netze-bw.de</a>
                                    </p>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/tim-joscha-linsenmayer-903a29216/" className="hover:underline">Tim Linsenmayer</a>. Diese Website wurde im Rahmen der Vorlesung "Webprogrammierung" der DHBW Karlsruhe erstellt.</span>
        </div>
    </footer>


    )
}