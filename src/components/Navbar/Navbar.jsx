import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const ulMenus = ["Kursus", "Beasiswa", "Travel", "Layanan Kami"];

  const [isChecked, setIsChecked] = useState(false);
  const myRef = useRef(null);

  const handleChange = (event) => {
    if (event.target.checked === true) {
      myRef.current.classList.add("active");
    } else {
      myRef.current.classList.remove("active");
      setIsChecked(false);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spanElements = [];

  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      spanElements.push(<span key={i} className="block w-[65%] ml-auto h-[3px] bg-black rounded-sm"></span>);
    }
    spanElements.push(<span key={spanElements} className="block w-full h-[3px] bg-black rounded-sm"></span>);
  }

  return (
    <nav className={`py-[1.5rem] px-[1.5rem] fixed z-50 max-[640px]:bottom-0 left-0 right-0 w-full min-[640px]:top-0 max-[640px]:bg-white ${isScrolled ? "bg-white" : ""}`}>
      <div className="wrappers min-[1400px]:w-[90rem] mx-auto">
        <div className="desktop hidden min-[640px]:flex justify-between items-center">
          <h2 className="font-bold text-primaryBlack text-3xl">
            Hangeul<span className="text-secondaryYellow">in</span>
          </h2>
          <ul className="w-[24rem] justify-between text-primaryBlack mx-auto flex">
            {ulMenus.map((ulMenu, index) => {
              return <li key={index}>{ulMenu}</li>;
            })}
          </ul>
          <div className="button-wrappers hidden min-[800px]:flex gap-5">
            <button type="submit" className="bg-gradient-to-br from-thirdYellow to-fourYellow px-[1rem] py-[.8rem] text-primaryBlack font-medium rounded-[5px]">
              Masuk
            </button>
            <button type="submit">Daftar</button>
          </div>
          <div className="button-wrappers flex min-[810px]:hidden gap-5">
            <Icon icon="ep:user-filled" className="" />
          </div>
        </div>
        <div className="mobile flex justify-between items-center min-[640px]:hidden bg-white">
          <h2 className="font-bold text-primaryBlack text-3xl">
            Hangeul<span className="text-secondaryYellow">in</span>
          </h2>
          <label className="fries-menu flex flex-col justify-between w-[30px] h-[25px] relative ">
            <input id="checkbox" type="checkbox" className="scale-125 opacity-0 absolute top-0 bottom-0 left-0 right-0 z-100 cursor-pointer" onChange={(e) => handleChange(e)} />
            {spanElements}
          </label>
        </div>
        <ul id="nav-mobile" ref={myRef} className={`-z-20 ${(isChecked, "bg-white")}`}>
          {ulMenus.map((ulMenu, index) => (
            <li key={index}>
              <a href={`#${ulMenu}`} className="font-semibold">
                {ulMenu}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// nav  className="py-[1.5rem] px-[1.5rem] fixed max-[640px]:bottom-0 left-0 right-0  w-full mx-auto md:top-0 z-[9999999999999]"
//     <div className="mobile md:hidden">
{
  /* <h2 className="font-bold text-primaryBlack text-5xl lg:w-[50%]">
Hangeul<span className="text-secondaryYellow">in</span>
</h2>
<label className="fries-menu flex flex-col justify-between w-[30px] h-[25px] relative">
<input id="checkbox" type="checkbox" className="scale-125 opacity-0 absolute top-0 bottom-0 left-0 right-0 z-10" onChange={(e) => handleChange(e)} />
<span className="block w-full h-[3px] bg-black rounded-sm"></span>
<span className="block w-[65%] ml-auto h-[3px] bg-black rounded-sm"></span>
<span className="block w-full h-[3px] bg-black rounded-sm"></span>
</label>
</div> */
}
