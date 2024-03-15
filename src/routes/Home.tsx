import CustomCard from "@/components/custom/CustomCard";
import Title from "@/components/custom/Title";
import constants from "@/constants/constants";
import CarouselSection from "@/sections/CarouselSection";
import HeroSection from "@/sections/HeroSection";

export default function HomeRoute() {
  return <section className={`mx-${constants.paddingSize}`} >
    <HeroSection />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2" >
      <CarouselSection />
      <CustomCard><Title text="Galerie" /></CustomCard>
    </div>
  </section>
}
