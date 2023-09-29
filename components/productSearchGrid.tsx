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


export default function ProductSearchSlider({data}){
    return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.products.map((product: Product) => (
                <ProductCard product={product}/>
            ))}
        </div>
        
    )
}