import { cn } from "../../../utils";

const Button = ({ children, color, size }) => {
  const variants = {
    colors: {
      primary: "bg-gradient-to-br from-thirdYellow to-fourYellow",
      info: "g-gradient-to-br from-secondaryBlue to-white",
    },
    size: {
      big: "",
      medium: "py-2 px-4",
    },
  };

  return (
    <>
      <button className={cn("font-semibold", "rounded-[5px]", variants.colors[color], variants.size[size])}>{children}</button>
    </>
  );
};

export default Button;
