import { Icon } from "@iconify/react";
import Title from "../Title/Title";
import "./price.css";

const Price = () => {
  return (
    <section id="price" className="my-20">
      <div className="price-titles w-full text-center border border-red-500">
        <Title title={"Pilih Paket"} />
        <p className="text-primaryBlack text-opacity-[.8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque iusto officiis voluptate animi itaque eius?</p>
      </div>

      <div className="cards mt-10">
        <div className="card bg-cardClr w-[20rem] p-standart">
          <h2 className="text-primaryBlack text-center font-semibold text-xl">Paket 1</h2>
          <div className="card-features mt-10 flex flex-col gap-4">
            <div className="card-feature flex items-center gap-3">
              <Icon icon="material-symbols:check" className="price-icon" />
              <p>Vitae sagitis</p>
            </div>
            <div className="card-feature flex items-center gap-3">
              <Icon icon="material-symbols:check" className="price-icon" />
              <p>Vitae sagitis</p>
            </div>
            <div className="card-feature flex items-center gap-3">
              <Icon icon="material-symbols:check" className="price-icon" />
              <p>Vitae sagitis</p>
            </div>
            <div className="card-feature flex items-center gap-3">
              <Icon icon="material-symbols:check" className="price-icon" />
              <p>Vitae sagitis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;

// <Icon icon="material-symbols:check" />
