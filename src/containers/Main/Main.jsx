import Price from "../../components/section/Price/Price";
import Services from "../../components/section/Services/Services";
import Testimonials from "../../components/section/Testimonials/Testimonials";

const Main = () => {
  return (
    <main className="p-standart">
      <Services />
      <Price />
      <Testimonials />
    </main>
  );
};

export default Main;
