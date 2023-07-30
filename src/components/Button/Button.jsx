import { cn } from "../../../utils";

const Button = ({ children, color, size, className }) => {
  const variants = {
    colors: {
      primary: "bg-gradient-to-br from-thirdYellow to-fourYellow",
      info: "bg-gradient-to-br from-secondaryBlue to-thirdBlue",
    },
    size: {
      big: "",
      medium: "py-2 px-4",
    },
  };

  return (
    <>
      <button className={cn("font-semibold", "rounded-[5px]", className, variants.colors[color], variants.size[size])}>{children}</button>
    </>
  );
};

Button.defaultProps = {
  colors: "primary",
  size: "medium",
};

export default Button;
