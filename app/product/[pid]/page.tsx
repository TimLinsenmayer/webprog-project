"use client"

import useSWR from "swr"
import ImageCard from "@/components/imageCard"
import StarRating from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import getCategoryInfo from "@/components/categories"
import ProductSlider from "@/components/productSlider";

const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())

export default function Page({ params }: { params: { pid: string } }){
    const URL = 'https://dummyjson.com/product/'+params.pid
    const { data, error } = useSWR(URL, fetcher)
    if (error) return <div>Fehler beim Laden!</div>
    if (!data) return (
        <div className="relative">
        Loading!
        </div>
    
    )
    return (
        <div className="flex-1">
            <div className="container">
                <div className='relative flex-col lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0 pt-4 gap-10 md:pr-10 md:pl-10'>
                    <div>
                        <ImageCard data={data}/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground pt-4 lg:pt-0">{data.brand}</p>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            {data.title}
                        </h2>
                        <StarRating rating={data.rating}/>
                        <div className="grid sm:flex items-center">
                        <div className="flex flex-row gap-4">
                            <div className="text-2xl font-bold pt-4">{data.price}€</div>
                            <div className="text-md font-bold pt-6 line-through text-red-700">{(data.price*(1+(data.discountPercentage/100))).toFixed(2).replace(".",",")}€</div>
                        </div>
                        <Button className="ml-auto">
                            <ShoppingBasket className="mr-2 h-4 w-4" />
                            Kaufen
                        </Button>
                        </div>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {data.description}
                        </p>
                        <Separator/>
                        <div className="flex items-center justify-between pt-4 pb-4">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                Unsere Empfehlungen
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                Ähnliche Produkte aus der Kategorie {getCategoryInfo(data.category)?.label}
                                </p>
                                
                            </div>
                            
                        </div>
                        <ProductSlider category={data.category}/>
                    </div>
                    </div>
            </div>
        </div>
        
    )
}