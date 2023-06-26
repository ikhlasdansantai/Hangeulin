const Title = ({ title, className }) => {
  return (
    <>
      <h2 className={`text-primaryBlack text-2xl lg:text-4xl font-semibold ${className}`}>{title}</h2>
    </>
  );
};

export default Title;
