"use client"
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Award,SmilePlus,Cookie,Bike,Glasses,Gem,ShoppingBag,Lightbulb,Watch,Footprints,Shirt,Armchair,Flower2,Check, ChevronsUpDown, LucideIcon} from 'lucide-react'
import React from 'react'
type category = {
    value: string
    label: string
    icon: LucideIcon
  }

const otherCategories : category[] = [
  {
    value: "fragrances",
    label: "Parfüme",
    icon: Award
  },
  {
    value: "skincare",
    label: "Gesichtspflege",
    icon: SmilePlus
  },
  {
    value: "groceries",
    label: "Lebensmittel",
    icon: Cookie
  },
  {
    value: "home-decoration",
    label: "Dekoration",
    icon: Flower2
  },
  {
    value: "furniture",
    label: "Möbel",
    icon: Armchair
  },
  {
    value: "mens-shirts",
    label: "Männerbekleidung",
    icon: Shirt
  },
  {
    value: "mens-shoes",
    label: "Männerschuhe",
    icon: Footprints
  },
  {
    value: "mens-watches",
    label: "Männeruhren",
    icon: Watch
  },
  {
    value: "tops",
    label: "Tops",
    icon: Shirt
  },
  {
    value: "womens-dresses",
    label: "Damenbekleidung",
    icon: Shirt
  },
  {
    value: "womens-shoes",
    label: "Damenschuhe",
    icon: Footprints
  },
  {
    value: "womens-watches",
    label: "Damenuhren",
    icon: Watch
  },
  {
    value: "womens-bags",
    label: "Damentaschen",
    icon: ShoppingBag
  },
  {
    value: "womens-jewellery",
    label: "Edelsteine",
    icon: Gem
  },
  {
    value: "sunglasses",
    label: "Sonnenbrillen",
    icon: Glasses
  },
  {
    value: "motorcycle",
    label: "Motorrad",
    icon: Bike
  },
  {
    value: "lighting",
    label: "Beleuchtung",
    icon: Lightbulb
  },
]

export default function CategorySelector(){
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [selected, setSelected] = React.useState<category|null>(null)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <Button
                variant="outline"
                size="sm"
                className="w-[230px] justify-between"
            >
                    {selected ? (
                    <>
                        <selected.icon className="mr-2 h-4 w-4 shrink-0" />
                        {selected.label}
                    </>
                    ) : (
                    <>Kategorie auswählen</>
                    )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
          <PopoverContent className="w-[230px] p-0">
            <Command>
              <CommandInput placeholder="Kategorien durchsuchen..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {otherCategories.map((category) => (
                  <CommandItem
                    key={category.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setSelected(category)
                      setOpen(false)
                    }}
                  >
                    <category.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        category.value === category?.value
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    />
                    {category.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )
}