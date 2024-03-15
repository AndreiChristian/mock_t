import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import constants from "@/constants/constants";

export default function CheckoutScreen() {
  return <section className={`px-${constants.paddingSize}`} >
    <CustomCard>
      <h1 className="text-2xl" >Checkout</h1>
    </CustomCard>
    <CustomCard>
      <Label>Nume</Label>
      <Input placeholder="Andrei" className="rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
    </CustomCard>
    <CustomCard>
      <Label>Adresa</Label>
      <Input placeholder="Andrei" className="rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
    </CustomCard>
    <CustomCard>
      <Label>Numar de telefon</Label>
      <Input disabled={true} placeholder="Andrei" className="rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
    </CustomCard>
    <CustomCard>
      <Label>Adresa de email (optional) </Label>
      <Input placeholder="Andrei" className="rounded-none border-0 shadow-none border-b-2 border-b-card-foreground my-2" />
    </CustomCard>
    <CustomCard>
      <Label>Mentiuni (optional) </Label>
      <Textarea placeholder="Andrei" className=" border-card-foreground my-2" ></Textarea>
    </CustomCard>
    <CustomCard type="secondary" >
      <Button variant="ghost" className="text-5xl" >Plaseaza comanda</Button>
    </CustomCard>
  </section>
}
