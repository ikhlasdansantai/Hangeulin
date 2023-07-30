import Title from "../../Title/Title";
import "./price.css";
import PriceCard from "../../Cards/priceCard";
import Button from "../../Button/Button";

const Price = () => {
  const paket1Datas = ["Vitae sagittis", "uri sukaeti", "param gesai", "cacukaci", "with u", "kecap"];

  const paket2Datas = ["Vitae sagittis", "uri sukaeti", "param gesai", "cacukaci", "with u", "kecap", "Talking To the moon"];

  return (
    <section id="price" className="my-20">
      <div className="price-titles w-full text-center">
        <Title title={"Pilih Paket"} />
        <p className="text-primaryBlack text-opacity-[.8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque iusto officiis voluptate animi itaque eius?</p>
      </div>

      <div className="cards-wrappers mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 lg:items-center ">
        <div className="bg-secondCream card-features  flex flex-col my-10 py-10 sm:my-0 rounded-3xl">
          <h2 className="text-primaryBlack text-center font-semibold text-3xl mb-4">Paket 1</h2>
          {paket1Datas.map((data, index) => (
            <PriceCard key={index} primary={false} datas={[data]} colors={"primary"} />
          ))}
          <Button children={"Beli Kelas"} color={"primary"} className={"mx-auto mt-6"} />
        </div>

        <div className="bg-secondaryYellow card-features flex flex-col py-10 rounded-3xl">
          <h2 className="text-primaryBlack text-center font-semibold text-3xl mb-4">Paket 2</h2>
          {paket2Datas.map((data, index) => (
            <PriceCard key={index} primary={false} datas={[data]} colors={"secondary"} />
          ))}
          <Button children={"Beli Kelas"} color={"info"} className={"mx-auto mt-6 text-white"} />
        </div>

        <div className="bg-secondCream card-features flex flex-col my-10 py-10 sm:my-0 rounded-3xl">
          <h2 className="text-primaryBlack text-center font-semibold text-3xl mb-4">Paket 3</h2>
          {paket1Datas.map((data, index) => (
            <PriceCard key={index} primary={false} datas={[data]} colors={"primary"} />
          ))}
          <Button children={"Beli Kelas"} color={"primary"} className={"mx-auto mt-6 "} />
        </div>
      </div>
    </section>
  );
};

export default Price;