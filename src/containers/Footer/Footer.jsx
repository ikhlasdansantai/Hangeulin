import React from "react";
import Button from "../../components/Button/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-creamClr px-[1.5rem] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      <div className="div">
        <h2 className="font-semibold text-3xl text-secondaryBlue">
          Hangeul<span className="text-pink">In</span>
        </h2>
        <p className="mt-5 text-paragraphClr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia asperiores impedit cupiditate voluptatum molestiae facere minus, consequuntur a earum! Ad!</p>
      </div>
      <div>
        <h2 className="text-lg">Legalitas</h2>
        <p className="text-paragraphClr mt-5">Kebijakan privasi</p>
        <p className="text-paragraphClr mt-2">Persyaratan Layanan</p>
      </div>
      <div>
        <h2 className="text-lg">Jelajahi</h2>
        <p className="text-paragraphClr mt-5">Kursus</p>
        <p className="text-paragraphClr mt-2">Beasiswa</p>
        <p className="text-paragraphClr mt-2">Tour</p>
      </div>
      <div>
        <h2 className="text-lg">Perusahaan</h2>
        <p className="text-paragraphClr mt-5">Hubungi Kami</p>
        <p className="text-paragraphClr mt-2">Tentang Kami</p>
      </div>
      <div>
        <h2 className="text-lg">Newsletter</h2>
        <p className="text-paragraphClr mt-5">Dapatkan Pembaruan yang menarik dari kami</p>
        <div className="input mt-3">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="email Anda" className="py-3 px-3 w-full" />
        </div>
        <Button children={"Subscribe"} color={"info"} className={"text-white mt-5"} />
      </div>
    </footer>
  );
}
