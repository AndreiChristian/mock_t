import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import constants from "@/constants/constants";

export default function CheckoutScreen() {
  return <section className={`box-border overflow-hidden  px-${constants.paddingSize}`} >
    <CustomCard type="ghost" >
      <h1 className="text-5xl" >Checkout</h1>
    </CustomCard>
    <div className="box-border w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4 " >
      <CustomCard>
        <Label className="text-xl" >Nume</Label>
        <Input placeholder="Andrei" className=" text-xl rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
      </CustomCard>
      <CustomCard>
        <Label className="text-xl" >Adresa</Label>
        <Input placeholder="Andrei" className=" text-xl rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
      </CustomCard>
      <CustomCard>
        <Label className="text-xl" >Numar de telefon</Label>
        <Input disabled={true} placeholder="Andrei" className=" text-xl rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
      </CustomCard>
      <CustomCard>
        <Label className="text-xl">Adresa de email (optional) </Label>
        <Input placeholder="Andrei" className="text-xl rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
      </CustomCard>
      <CustomCard>
        <Label className="text-xl">Mentiuni (optional) </Label>
        <Textarea placeholder="Andrei" className="text-xl border-card-foreground my-2" ></Textarea>
      </CustomCard>
    </div>
    <CustomCard type="secondary" >
      <Button variant="ghost" className="text-xl lg:text-5xl hover:underline" >Plaseaza comanda</Button>
    </CustomCard>
  </section>
}
