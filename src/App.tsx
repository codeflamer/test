import { FC } from "react";

import FullInput from "./components/FullInput";
import SelectDrop from "./components/SelectDrop";
import Hint from "./components/Hint";
import Button from "./components/Button";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="bg-background w-full min-h-screen text-white ">
      {/* <main className="max-w-[1130px] mx-auto pt-[10px] px-[25px]"> */}
      <main className="mx-auto pt-[10px] ">
        <h1 className="text-[31px] md:text-[48px] px-[25px] mx-auto md:max-w-[1130px]">
          Рассчитайте ипотеку быстро и просто
        </h1>
        <form className="mt-[32px] ">
          <div className="px-[25px] space-y-[32px] max-w-[1130px] mx-auto">
            <div>
              <div className="space-y-[32px]">
                <div>
                  <FullInput label="Стоимость недвижимости" id="nediv" />
                </div>
                <div>
                  <FullInput label="Первоначальный взнос" id="znos" />
                  <Hint
                    content="Cумма финансирования:500,000 ₪ Процент финансирования:50%"
                    className="mt-[12px] mb-[32px]"
                  />
                </div>
              </div>
              {/* here */}
              <div className="space-y-[32px]">
                <div className="space-y-[32px]">
                  <SelectDrop label="Город покупки недвижимости" />
                  <SelectDrop label="Тип недвижимости" />
                </div>
                <div className="space-y-[32px]">
                  <SelectDrop label="Когда вы планируете оформить ипотеку?" />
                  <SelectDrop label="Вы уже владеете недвижимостью?" />
                </div>
              </div>
            </div>

            <hr className="border-seperator" />

            <div className="space-y-[38px] ">
              <div>
                <FullInput label="Cрок" id="srok" />
              </div>
              <div>
                <FullInput label="Ежемесячный платеж" id="srok" />
                <Hint content="Увеличьте ежемесячный платеж и переплачивайте меньше" />
              </div>
            </div>
          </div>
          {/* <hr className="mt-2" /> */}
          <div className="bg-footer px-[20px] py-[24px] border-t-seperator mt-[24px] md:flex justify-end">
            <Button title="Продолжить" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
