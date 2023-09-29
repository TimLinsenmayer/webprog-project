
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function ProductCardLoad(){
    return (
        <Card className="w-[300px]">
            <div style={{ position: 'relative', overflow: 'hidden', height: '200px'}} className="rounded-tl-lg rounded-tr-lg">
                <Skeleton/>
            </div>
            <CardHeader>
            <Skeleton className="h-2 w-[100px] pb-1" />
            <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardFooter>
            <Skeleton className="h-2 w-[100px] pb-1" /> 
            </CardFooter>
        </Card>
        
    )
}