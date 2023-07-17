import Title from "../../Title/Title";
import userImg from "../../../assets/user-img.png";
import Icons1 from "../../../assets/Haruki Icons-1.svg";
import Icons2 from "../../../assets/Haruki Icons-2.svg";
import Icons3 from "../../../assets/Haruki Icons-3.svg";
import Icons4 from "../../../assets/Haruki Icons-4.svg";

const Services = () => {
  const cards = [
    {
      title: "Materi Update",
      img: Icons1,
    },
    {
      title: "Akses Selamanya",
      img: Icons2,
    },
    {
      title: "Sertifikat Kompeten",
      img: Icons3,
    },
    {
      title: "Pengajar Berpengalaman",
      img: Icons4,
    },
  ];

  return (
    <section id="services">
      <Title title={"Layanan Kami Dalam Membantu Anda"} className="lg:w-[27ch]" />
      <div className="services-contents flex flex-col lg:flex-row justify-between mt-10">
        <figure className="w-full lg:w-[50%] flex">
          <img src={userImg} alt={`${userImg} pict`} className="block max-w-full max-[640px]:mx-auto" />
        </figure>
        <div className="right-container lg:w-[50%] grid grid-cols-2  gap-5 justify-between">
          {cards.map((card, index) => {
            return (
              <div className="card" key={index}>
                <figure className="bg-secondaryYellow py-4  w-[4rem] flex rounded-md">
                  <img src={card.img} alt="" className="block max-w-full mx-auto" />
                </figure>
                <div className="card-titles mt-4">
                  <h2 className="text-primaryBlack">{card.title}</h2>
                  <p className="text-primaryBlack text-opacity-[.8]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus veniam tempora quas voluptate fugiat!.</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
