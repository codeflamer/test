import { FC } from "react";
import { Input } from "./ui/Input";

import { Slider } from "./ui/Slider";
import ToolTipContainer from "./ToolTipContainer";

interface FullInputProps {
  label: string;
  id: string;
  Icon?: string;
  slider?: boolean;
}

const FullInput: FC<FullInputProps> = ({ label, id, Icon, slider = false }) => {
  return (
    <div>
      <label
        className="font-medium flex space-x-3 cursor-pointer items-center"
        htmlFor={id}
      >
        {label}
        {Icon ? <ToolTipContainer Icon={Icon} /> : null}
      </label>
      <Input
        type="text"
        id={id}
        placeholder="1,000,000"
        className="bg-inputBackground mt-[12px] px-[24px] py-[12px] border-inputBorder font-normal"
      />
      {slider && (
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          className="bg-yellowish cursor-pointer"
        />
      )}
    </div>
  );
};

export default FullInput;
