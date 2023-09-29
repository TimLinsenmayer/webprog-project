"use client"
import ProductSearchSlider from "@/components/productSearchGrid"
import useSWR from "swr"
const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())

export default function Page({ params }: { params: { term: string } }){
    const URL = 'https://dummyjson.com/products/search?q='+params.term
    const { data, error } = useSWR(URL, fetcher)
    if (error) return <div>Fehler beim Laden!</div>
    if (!data) return (
        <div className="relative">
        Lade Suchergebnisse...
        </div>
    )
    return (
        <div className="flex-1">
            <div className="container">
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm mt-3 px-5 flex flex-col items-start gap-2 px-4 pt-8 md:pt-12 relative pb-4 md:pb-8 lg:pb-12' id='greeter'>
                    <h1 className='text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>Suchergebnis für: {params.term}</h1>
                    <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>{data.total} Ergebnisse gefunden.</p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                    <ProductSearchSlider data={data}/>
                </div>
                </div>
        </div>
    )
}