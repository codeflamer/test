import { FC } from "react";
import Warning from "../assets/warning.svg";
import { cn } from "../lib/utils";

interface HintProps {
  content: string;
  className?: string;
}

const Hint: FC<HintProps> = ({ content, className }) => {
  return (
    <div
      className={cn(
        "w-full bg-tipBg mt-2 rounded-[4px] flex px-[12px] py-[6px] space-x-[6px]",
        className
      )}
    >
      <div>
        <img
          src={Warning}
          title="Hint"
          className=" flex items-center hover:cursor-pointer h-[16px] w-[16px] "
        />
      </div>
      <span className="text-[12px]">{content}</span>
    </div>
  );
};

export default Hint;
