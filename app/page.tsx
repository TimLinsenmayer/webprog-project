"use client"
import { AccordionDemo } from '@/components/QuestionsAccordion'
import CustomCategory from '@/components/customCategory'
import ProductSlider from '@/components/productSlider'
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-dropdown-menu'

export default function Home() {
  return (
    <div className="flex-1">
      <div className="container">
        <div className='rounded-lg border bg-card text-card-foreground shadow-sm mt-3 px-5 flex flex-col items-start gap-2 px-4 pt-8 md:pt-12 relative pb-4 md:pb-8 lg:pb-12' id='greeter'>
          <h1 className='text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>Herbst-Sale</h1>
          <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>Jetzt unsere Herbst-Schnäppchen entdecken!</p>
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Smartphones
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <ProductSlider category="smartphones"/>
        <div className="flex items-center justify-between pt-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Laptops
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <ProductSlider category="laptops"/>
        <CustomCategory/>
        <div className='container relative pb-5 pt-5 lg:h-[500px] bg-slate-400 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 rounded-md'>
          <div className='pl-1 pt-4 lg:pl-10 lg:pt-0'>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Wir sind
          </h3>
          <div className="flex items-center" >
                    <img src="/logo.svg" width="50" height="50" className="d-inline-block align-top" alt=""/>
                    <h1 className="ml-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">UpStore</h1>
          </div>
          <p className="text-l pt-5 text-muted-foreground">
            <em>Dein</em> moderner Onlineshop für den täglichen Bedarf.
          </p>
          </div>
          <div className='pr-10'>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Häufig gestellte Fragen
            </h3>
            <AccordionDemo/>
          </div>
        </div>
      </div>
    </div>
  )
}
