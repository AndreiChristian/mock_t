import CustomCard from "@/components/custom/CustomCard";
import Title from "@/components/custom/Title";
import constants from "@/constants/constants";
import { Link } from "react-router-dom";

export default function OverviewScreen() {
  return (
    <>
      <section className={`mx-${constants.paddingSize}`} >
        <CustomCard type="ghost" >
          <Title text="Produsele noastre" />
        </CustomCard>
        <div className="box-border grid grid-cols-1 md:grid-cols-2 gap-2  " >
          <CustomCard type="primary"  >
            <a href="#restaurant" className="text-lg hover:underline transition duration-300" > Din meniul restaurantului</a>
          </CustomCard>
          <CustomCard cancelMarginRight={true} type="primary" >
            <a href="#livrare" className="text-lg hover:underline transition duration-300">Speciale pentru livrare</a>
          </CustomCard>
        </div>
      </section>
      <div className={`mx-${constants.paddingSize}`}>
        <CustomCard type="ghost" >
          <Title text="Restaurant" ></Title>
        </CustomCard>
      </div>
      <section id="restaurant" className={`box-border flex flex-row flex-wrap gap-1 items-center justify-center`} >
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </section>
      <div className={`mx-${constants.paddingSize}`}>
        <CustomCard type="secondary" >
          <Title text="Special pt livrare" ></Title>
        </CustomCard>
      </div>
      <section id="livrare" className={`box-border flex flex-row flex-wrap gap-1 items-center justify-center`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  )
}

function ProductCard() {
  return (
    <div className="w-[30%] lg:w-[19%] " >
      <Link to="/" className="text-3xl pt-4 " >
        <CustomCard paddingSize={2} >
          <img
            className="object-cover w-full aspect-square rounded-lg "
            src="../../../public/images/locatie/TS(49).jpg" />
          <h1 className="text-3xl pt-4 " >Ciorbe</h1>
        </CustomCard>
      </Link>
    </div>
  )
}
