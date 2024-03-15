import CustomCard from "@/components/custom/CustomCard";

export default function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2" >
        <CustomCard type="primary" ><h1 className="text-5xl lg:text-7xl font-grange" >Taverna Drobeta</h1></CustomCard>
        <CustomCard paddingSize={0} cancelMarginRight={true} ><img src="/images/locatie/TS(68).jpg" className="rounded-xl" /></CustomCard>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2" >
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
      </div>
    </div>
  )
}

function TextCard() {
  return (
    <CustomCard >
      <h2 className="text-xl mb-5">Lorem</h2>
      <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
    </CustomCard>
  )
}
