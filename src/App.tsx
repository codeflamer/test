import { FC } from "react";

import FullInput from "./components/FullInput";
import SelectDrop from "./components/SelectDrop";
import Hint from "./components/Hint";
import Button from "./components/Button";
import { config } from "./config/contents";
import Icon from "./assets/info.svg";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="bg-background w-full min-h-screen text-white ">
      {/* <main className="max-w-[1130px] mx-auto pt-[10px] px-[25px]"> */}
      <main className="mx-auto pt-[50px] ">
        <h1 className="text-[31px] md:text-[48px] px-[25px] mx-auto md:max-w-[1130px]">
          Рассчитайте ипотеку быстро и просто
        </h1>
        <form className="mt-[32px] ">
          <div className="px-[25px] space-y-[32px] max-w-[1130px] mx-auto">
            <div className="md:grid md:grid-cols-3 gap-[60px]">
              <div className="space-y-[32px] md:flex-1">
                <div>
                  <FullInput label="Стоимость недвижимости" id="nediv" />
                </div>
                <div>
                  <FullInput
                    label="Первоначальный взнос"
                    id="znos"
                    Icon={Icon}
                    slider={true}
                  />
                  <Hint
                    content="Cумма финансирования:500,000 ₪ Процент финансирования:50%"
                    className="mt-[12px] mb-[32px]"
                  />
                </div>
              </div>
              {/* here */}
              {/* <div className="space-y-[32px] flex justify-between"> */}
              <div className="space-y-[32px] md:flex-1">
                <SelectDrop
                  label="Город покупки недвижимости"
                  options={config.Gorod}
                />
                <SelectDrop label="Тип недвижимости" options={config.Type} />
              </div>
              <div className="space-y-[32px] mt-[32px] md:mt-[0]">
                <SelectDrop
                  label="Когда вы планируете оформить ипотеку?"
                  options={config.Duration}
                />
                <SelectDrop
                  label="Вы уже владеете недвижимостью?"
                  options={config.Ownership}
                />
              </div>
            </div>
            {/* </div> */}

            <hr className="border-seperator" />

            <div className="space-y-[38px] md:space-y-0 md:grid md:grid-cols-3 md:gap-[60px]">
              <div className="">
                <FullInput label="Cрок" id="srok" slider={true} />
              </div>
              <div>
                <FullInput label="Ежемесячный платеж" id="srok" slider={true} />
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
