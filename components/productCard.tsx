import { ShoppingBasket } from "lucide-react";
import { Product } from "./productSlider";
import { Button } from "./ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image"

interface ProductProps {
    product: Product;
}


export default function ProductCard({product}:ProductProps){
    const redirectURL = "/product/"+ product.id
    return (
        <a href={redirectURL} className="w-[300px]">
            <Card className="w-[300px]">
                <div style={{ position: 'relative', overflow: 'hidden', height: '200px'}} className="rounded-tl-lg rounded-tr-lg">
                    <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    />
                    </div>
                <CardHeader>
                    <div className='flex flex-row relative  lg:px-0 pt-0'>
                        <div className='flex-grow'>
                        <CardDescription>{product.brand}</CardDescription>
                        <CardTitle>{product.title}</CardTitle>
                        </div>
                        <div>
                            <div className="grow-0 rounded-full bg-blue-200 px-5 pt-2 pb-2 text-center ">
                            -{Math.round(product.discountPercentage)}%
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter>
                    <h3 className="text-lg font-medium align-middle flex-grow">{product.price}€</h3>
                    <Button>
                        <ShoppingBasket className="mr-2 h-4 w-4" />
                        Kaufen
                    </Button>
                </CardFooter>
        </Card>
        </a>
    )
}