"use client";
import useSWR from 'swr'
import { ScrollArea,ScrollBar } from "./ui/scroll-area";
import ProductCardAlt from './productCardAlt';
import ProductCardLoad from './productCardLoading';
const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())

export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }


export default function ProductSliderAlt({category}){
    const URL = 'https://dummyjson.com/products/category/'+category+'?limit=0'
    const { data, error } = useSWR(URL, fetcher)
    if (error) return <div>Fehler beim Laden!</div>
    if (!data) return (
        <div>
        Loading
        </div>
    
    )
    return (
        <div className="relative">
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
            {data.products.map((product: Product) => (
                <ProductCardAlt product={product}/>
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
    )
}