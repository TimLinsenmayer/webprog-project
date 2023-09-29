import { ShoppingBasket } from "lucide-react";
import { Product } from "./productSlider";
import { Button } from "./ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio";


export default function ProductCardAlt({product}:Product){
    const redirectURL = "/product/"+ product.id
    return (
        <a href={redirectURL}>
            <Card className="h-[100px]">
            <div className="flex-1">
                <div className="container">      

                    <div className='flex flex-column relative items-center align-center lg:px-0 pt-0'>
                        <div>
                        <CardDescription>{product.brand}</CardDescription>
                        <CardTitle>{product.title}</CardTitle>
                        </div>
                        <CardFooter>
                            <h3 className="text-lg font-medium align-middleflex-grow">{product.price}€</h3>
                            <Button>
                                <ShoppingBasket className="mr-2 h-4 w-4" />
                                Kaufen
                            </Button>
                        </CardFooter>

                    </div>
                </div>
            </div>
                           
        </Card>
        </a>
    )
}