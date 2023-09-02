import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/Tooltip";

interface ToolTipContainerProps {
  Icon?: string;
}

const ToolTipContainer: FC<ToolTipContainerProps> = ({ Icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={(e) => e.preventDefault()}>
          <img src={Icon} className="ml-2" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="w-[270px] bg-hint px-[8px] py-[4px] rounded-md text-[14px] space-y-[20px] ">
            <span className="block leading-5">
              Основная квартира: у заемщика нет квартиры ставка финансирования{" "}
              <br />
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
  );
};

export default ToolTipContainer;
