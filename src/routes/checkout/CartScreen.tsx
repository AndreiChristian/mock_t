import CustomCard from "@/components/custom/CustomCard";
import Title from "@/components/custom/Title";
import constants from "@/constants/constants";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartScreen() {
  return (
    <section className={`box-border px-${constants.paddingSize}`} >
      <CustomCard type="primary"  >
        <Title text="Cos" ></Title>
      </CustomCard>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="flex flex-row justify-between " >
        <CustomCard  >
          <div className="h-full flex flex-col items-center gap-2" >
            <Title text="Total" />
            <Title text="385" />
          </div>
        </CustomCard>
        <CustomCard cancelMarginRight={true} type="primary" >
          <Link to={"/checkout"} >
            Continua
          </Link>
        </CustomCard>
      </div>
    </section>
  )
}

function CartItem() {
  return (
    <div className="flex flex-row justify-between flex-wrap " >
      <CustomCard cancelMarginRight={true} >
        <h1 className="text-3xl font-grange" >Ciorba de peste</h1>
        <p>Vreau acest produs sa fie extrem de bine sarat</p>
      </CustomCard>
      <div className="w-full flex flex-row justify-between" >
        <CustomCard>
          <div className="h-full flex items-center justify-between " >
            <Minus className="stroke-card-foreground" />
            <h1 className="font-bold text-xl " >2121 buc</h1>
            <Plus className="stroke-card-foreground" />
          </div>
        </CustomCard>
        <CustomCard cancelMarginRight={true} type="secondary" >
          <div className="h-full flex flex-col items-center gap-2" >
            <h1>Total</h1>
            <span className="font-bold text-xl " >1213</span>
          </div>
        </CustomCard>
      </div>
    </div>
  )
}
