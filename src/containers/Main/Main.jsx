import Price from "../../components/section/Price/Price";
import Services from "../../components/section/Services/Services";
import Testimonials from "../../components/section/Testimonials/Testimonials";
import JoinWithUs from "../../components/section/joinWithUs/JoinWithUs";

const Main = () => {
  return (
    <main className="p-standart">
      <Services />
      <Price />
      <Testimonials />
      <JoinWithUs />
    </main>
  );
};

export default Main;
