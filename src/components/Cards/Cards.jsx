const Cards = ({ title, img }) => {
  return (
    <>
      <div className="card">
        <figure className="bg-secondaryYellow p-standart w-[5rem]">
          <img src={img} alt={`${img} pict`} className="block max-w-full" />
        </figure>
        <div className="card-titles">
          <h2 className="text-primaryBlack">{title}</h2>
          <p className="text-primaryBlack text-opacity-[.6]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus veniam tempora quas voluptate fugiat! Ipsam repellendus repudiandae sed quod accusantium.</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
