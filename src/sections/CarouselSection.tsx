import CustomCard from "@/components/custom/CustomCard";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function CarouselSection() {
  return (
    <CustomCard paddingSize={0} type="ghost" >
      <Carousel
        opts={{
          loop: true
        }}
        className="mx-auto box-border rounded-xl "
        plugins={[
          Autoplay({
            delay: 2500
          })]
        }
      >
        <CarouselContent className="rounded-xl" >
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <img src={`/images/locatie/TS(56).jpg`} className="rounded-xl object-center " />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </CustomCard>
  )
}
