import Navbar from "../../components/Navbar/Navbar";
import building from "../../assets/building.svg";
import "./header.css";
import Button from "../../components/Button/Button";

const Header = () => {
  return (
    <header className="relative ">
      <Navbar />
      <div className="bg-tl rounded-[50%] w-[15rem] h-[15rem] absolute left-[-10rem] top-[-10rem] min-[1400px]:left-[-20rem] min-[1400px]:top-[-19rem]  opacity-[.6] -z-10"></div>
      <div className="header-contents py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center lg:py-28 gap-6 ">
        <div className="titles md:w-[50%] ">
          <h2 className="title text-center text-3xl sm:text-left text-primaryBlack md:text-4xl lg:text-5xl xl:text-[3.3rem] lg:leading-tight md:w-[16ch] font-bold">
            Solusi <span className="text-primaryBlue">Terbaik</span> Untuk Belajar Bahasa Korea
          </h2>
          <p className="text-center my-6 sm:text-left md:w-[35ch] leading-relaxed text-primaryBlack text-opacity-[.8]">Kursus online gratis yang menyediakan beragam fasilitas dan dapat membantu dalam mengasah kemampuan berbahasa koreamu</p>
          <Button color={"primary"} size={"medium"} children={"Gabung Sekarang"} />
        </div>
        <figure className="flex md:w-[50%]">
          <img src={building} alt="building img" className="max-w-full block ml-auto" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
