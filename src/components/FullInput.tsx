import { FC } from "react";
import { Input } from "./ui/Input";

interface FullInputProps {
  label: string;
  id: string;
}

const FullInput: FC<FullInputProps> = ({ label, id }) => {
  return (
    <div>
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <Input
        type="text"
        id={id}
        placeholder="1,000,000"
        className="bg-inputBackground mt-[12px]"
      />
    </div>
  );
};

export default FullInput;
