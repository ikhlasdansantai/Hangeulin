import React from "react";
import { Icon } from "@iconify/react";

export default function PriceCard({ datas, colors }) {
  const color = {
    primary: "bg-secondaryYellow",
    secondary: "bg-white",
  };

  return (
    <div className="card p-standart">
      <div className="card-feature flex items-center gap-3">
        <figure className="icon-container">
          <Icon icon="material-symbols:check" className={`${color[colors]} price-icon text-black rounded-full text-4xl p-1`} />
        </figure>
        <p>{datas}</p>
      </div>
    </div>
  );
}

PriceCard.defaultProps = {
  colors: "primary",
};
