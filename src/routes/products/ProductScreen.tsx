import CustomCard from "@/components/custom/CustomCard"
import constants from "@/constants/constants"
import { Minus, Plus, ShoppingBagIcon } from "lucide-react"
import { useState } from "react"

export default function ProductScreen() {

  const [quantity, setQuantity] = useState(1)

  function increment() {
    setQuantity(q => q + 1)
  }

  function decremnt() {
    setQuantity(q => q - 1)
  }

  return <section className={`px-${constants.paddingSize}`}
  >
    <SmallHero />
    <LargeHero />
    <div className="w-full flex justify-between">
      <CustomCard>
        <div className="flex flex-col items-center gap-2" >
          <h1>Pret  </h1>
          <span className="font-bold text-xl " >128 lei</span>
        </div>
      </CustomCard >
      <CustomCard cancelMarginRight={true} type="secondary" >
        <div className="flex flex-col  items-center gap-2" >
          <ShoppingBagIcon className="stroke-card-foreground" />
          <div className="font-bold text-xl " >Adauga in cos</div>
        </div>
      </CustomCard>
    </div>
    <div className="w-full flex justify-between" >
      <CustomCard type="primary" >
        <div className="flex items-center justify-between " >
          {quantity >= 1 && <Minus className="stroke-card-foreground" onClick={decremnt} />}
          <h1 className="font-bold text-xl " >{quantity}</h1>
          <Plus className="stroke-card-foreground" onClick={increment} />
        </div>
      </CustomCard>
      <CustomCard cancelMarginRight={true} >
        <div className="flex flex-col items-center gap-2" >
          <h1>Total</h1>
          <span className="font-bold text-xl " >{quantity * 128}</span>
        </div>
      </CustomCard>
    </div>
    <CustomCard>
      <h1 className="text-lg font-bold" >Ingrediente</h1>
      <ol>
        <li>Carne</li>
        <li>Carne</li>
        <li>Carne</li>
        <li>Carne</li>
      </ol>
    </CustomCard>
  </section>
}

function LargeHero() {
  return (
    <div className="hidden lg:flex w-full flex-row justify-between" >
      <div className={`mr-${constants.cardMargin} h-full `}>
        <CustomCard type="primary" >
          <h1 className="text-xl lg:text-5xl font-grange" >Platou "Viata Sanatoasa" de 4 persoane </h1>
        </CustomCard>
        <CustomCard type="secondary" >
          <p className="text-xl lg:text-xl" >Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </CustomCard>
      </div>
      <img src="/images/hero.png" className={`w-1/2 aspect-square m-${constants.cardMargin} mr-0 rounded-${constants.cardBorderSize}`} />
    </div>
  )
}


function SmallHero() {
  return (
    <div className="lg:hidden" >
      <img src="/images/hero.png" className={`w-full aspect-square m-${constants.cardMargin} mr-0 rounded-${constants.cardBorderSize}`} />
      <div className="w-full flex-col lg:flex-row justify-between" >
        <CustomCard type="primary" >
          <h1 className="text-xl lg:text-5xl font-grange " >Platou "Viata Sanatoasa" de 4 persoane </h1>
        </CustomCard>
        <CustomCard type="secondary" >
          <p className="text-xl lg:text-xl" >Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </CustomCard>
      </div>
    </div>
  )
}
