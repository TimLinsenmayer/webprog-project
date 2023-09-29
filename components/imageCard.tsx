import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image"
import { Card } from "./ui/card";
import React from "react";
import { Product } from "./productSlider";

interface ProductProps {
    data: Product
}

export default function ImageCard({data}:ProductProps){
    const [imageId, setValue] = React.useState(data.thumbnail)
    return (
        <div>
            <AspectRatio ratio={16 / 9}>
            <Image
                                src={imageId}
                                alt={data.title}
                                fill={true}
                                className="rounded-md object-cover"
                                />
            </AspectRatio>
            <Card className="mt-4 place-content-center">
                <div className="flex space-x-4 px-4 pb-4 pt-4 place-content-center">
                    {data.images.map((image: string, index:number) => (
                    <div className="overflow-hidden rounded-md">
                    <Image
                    src={image}
                    alt={data.title + " Bild #"+index}
                    width={70}
                    height={70}
                    className="h-auto w-auto object-cover transition-all hover:scale-105 portrait cursor-pointer rounded-md"
                    onClick={()=>setValue(image)}
                    />
                    </div>
                    ))}
                </div>
            </Card>
        </div>


    )
}