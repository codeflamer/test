import { FC } from "react";
import { Input } from "./ui/Input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/Tooltip";
import { Slider } from "./ui/Slider";

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

        {Icon ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img src={Icon} className="ml-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-[270px] bg-hint px-[8px] py-[4px] rounded-md text-[14px] space-y-[20px] ">
                  <span className="block leading-5">
                    Основная квартира: у заемщика нет квартиры ставка
                    финансирования <br />
                    <span className="font-medium">Максимум до 75%</span>
                  </span>
                  <span className="block leading-5">
                    Альтернативная квартира: Для заемщика квартира, которую он
                    обязуется продать в течение двух лет ставка финансирования
                    <br />
                    <span className="font-bold">Максимум до 70%</span>
                  </span>
                  <span className="block leading-5">
                    Вторая квартира или выше: у заемщика уже есть ставка
                    финансирования квартиры
                    <br />
                    <span>Максимум до 50%</span>
                  </span>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : null}
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
