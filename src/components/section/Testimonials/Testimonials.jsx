import React from "react";
import Title from "../../Title/Title";
import userBig from "../../../assets/testimonials-img.png";
import userSmall from "../../../assets/testimonials-small-img.png";
import userMedium from "../../../assets/testimonials-medium-img.png";
import liz from "../../../assets/liz.jpeg";

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col lg:flex-row justify-between items-center  lg:py-40">
      <div className="titles lg:w-1/2">
        <Title title={"Apa yang member kami katakan"} className={"sm:w-[20ch]"} />
        <p className="text-paragraphClr mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dignissimos, debitis vitae molestias error eveniet sint reiciendis modi beatae consectetur minus. Minima, maxime commodi? Itaque accusamus odit totam inventore
          facilis maiores quisquam sit quaerat, recusandae, labore dignissimos veniam a facere explicabo nulla est porro enim voluptatibus dicta? Molestias, quibusdam officia."
        </p>
        <div className="user-card flex gap-5 items-center mt-10">
          <figure className="w-[4rem] rounded-full overflow-hidden border-2 border-thirdYellow">
            <img src={liz} alt="lizIMG" className="block max-w-full" height="100%" width="100%" />
          </figure>
          <div className="user-details">
            <h2 className="font-semibold">Davis Franci</h2>
            <p className="text-[#474747]">Palembang, Sumatera Selatan</p>
          </div>
        </div>
      </div>
      <figure className="lg:w-[30rem] mt-10 mr-auto lg:m-0 border-2 border-thirdYellow p-10 sm:p-14 rounded-full relative">
        <img src={userBig} alt="userIMG" height="100%" width="100%" className="block max-w-full" />
        <img src={userSmall} alt="userIMG" className="w-[3rem] absolute -left-2 bottom-12 min-[425px]:left-3 min-[678px]:left-10" height="100%" width="100%" />
        <img src={userMedium} alt="userIMG" className="w-[4.5rem] absolute -right-2 top-2 min-[425px]:right-0 min-[425px]:top-12 min-[678px]:right-5" height="100%" width="100%" />
      </figure>
    </section>
  );
}
