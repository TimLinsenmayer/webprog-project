"use client";
import useSWR from 'swr'
import { ScrollArea,ScrollBar } from "./ui/scroll-area";
import ProductCard from './productCard';
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

  interface CategoryProps {
    category: string;
}


export default function ProductSlider({category}:CategoryProps){
    const URL = 'https://dummyjson.com/products/category/'+category+'?limit=0'
    const { data, error } = useSWR(URL, fetcher)
    if (error) return <div>Fehler beim Laden!</div>
    if (!data) return (
        <div className="relative">
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
            <ProductCardLoad/><ProductCardLoad/><ProductCardLoad/><ProductCardLoad/><ProductCardLoad/>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
    
    )
    return (
        <div className="relative">
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
            {data.products.map((product: Product, i:number) => (
                <ProductCard key={i} product={product}/>
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
    )
}