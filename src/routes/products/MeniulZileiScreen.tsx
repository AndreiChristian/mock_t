import CustomCard from "@/components/custom/CustomCard";
import Title from "@/components/custom/Title";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

export default function MeniulZileiScreen() {
  return (
    <section className={`px-10`}>
      <CustomCard type="ghost" >
        <Title text="Meniul Zilei" />
      </CustomCard>
      <div className="flex flex-col lg:flex-row " >
        <CustomCard>
          <h1 className="text-3xl mb-5" >Ciorba</h1>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Ciorba de burta</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Ciorba de perisoare</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-one" />
              <Label htmlFor="option-one">Ciorba de vacuta</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-four" id="option-one" />
              <Label htmlFor="option-one">Ciorba de legume </Label>
            </div>
          </RadioGroup>
        </CustomCard>
        <CustomCard>
          <h1 className="text-3xl mb-5" >Fel principal</h1>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </CustomCard>
      </div>
      <div className="flex flex-col lg:flex-row " >
        <CustomCard>
          <h1 className="text-3xl mb-5" >Desert</h1>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Placinta cu mere</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Placinta cu branza</Label>
            </div>
          </RadioGroup>
        </CustomCard>
        <CustomCard type="secondary" >
          <Title text="Adauga in cos" />
        </CustomCard>
      </div>
    </section>
  )
}
