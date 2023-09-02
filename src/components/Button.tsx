import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-yellowish text-black rounded-[8px] px-[16px] py-[12px] w-full hover:opacity-80 transition-all duration-150 md:w-fit "
    >
      {title}
    </button>
  );
};

export default Button;
