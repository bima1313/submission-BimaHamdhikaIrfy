import type { Dispatch, FC, SetStateAction } from "react";

const buttonName = ["Table", "Sphere", "Helix", "Grid"];
interface props {
  isClick: Dispatch<SetStateAction<string>>;
}
const Menu: FC<props> = ({ isClick }) => {
  return (
    <div className="w-full  text-center absolute top-[93%] z-[100000000]">
      <ul className="flex gap-2 justify-center">
        {buttonName.map((button, index) => {
          return (
            <button
              key={index}
              className="border border-detail uppercase text-detail px-4 hover:bg-menu cursor-pointer transition-all"
              onClick={() => isClick(button)}
            >
              {button}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
