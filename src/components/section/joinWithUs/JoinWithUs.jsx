import React from "react";
import Title from "../../Title/Title";
import Button from "../../Button/Button";

export default function JoinWithUs() {
  return (
    <section id="joinWithUs" className="my-20 py-14 px-10 bg-thirdYellow rounded-lg flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/2">
        <Title title={"Siap Bergabung"} />
        <p className="text-paragraphClr mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo error quia sequi velit ex, veritatis enim sed voluptatum esse dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, sequi.
        </p>
      </div>
      <Button children={"Gabung Sekarang"} color={"info"} className={"text-white"} />
    </section>
  );
}
