"use client";
import ProductCard from './productCard';

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

interface ProductProps {
    data: {
        products: Product[];
    };
}


export default function ProductSearchSlider({data}:ProductProps){
    return (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-y-5">
            {data.products.map((product: Product, i:number) => (
                <ProductCard key={i} product={product}/>
            ))}
        </div>
        
    )
}