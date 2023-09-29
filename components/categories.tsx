
import {Award,SmilePlus,Cookie,Bike,Glasses,Gem,ShoppingBag,Lightbulb,Watch,Footprints,Shirt,Armchair,Flower2, LucideIcon, Smartphone, Laptop} from 'lucide-react'


type category = {
    value: string
    label: string
    icon: LucideIcon
 }
const categories: category[] = [
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
      {
        value: "smartphones",
        label: "Smartphones",
        icon: Smartphone
      },
      {
        value: "laptops",
        label: "Laptops",
        icon: Laptop
      },
]

function getCategoryInfo(value: any): category | null {
    const category = categories.find(cat => cat.value === value);
    if (category) {
        return { value: category.value, label: category.label, icon: category.icon };
    }
    return null;
}

export default getCategoryInfo;