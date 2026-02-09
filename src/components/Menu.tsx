import type { Dispatch, FC, SetStateAction } from "react";
import { Mode } from "../constants/Mode";

const buttonName = [
  Mode.TABLE,
  Mode.SPHERE,
  Mode.HELIX,
  Mode.GRID,
  Mode.TETRAHEDRON,
];
interface props {
  isClick: Dispatch<SetStateAction<string>>;
}
const Menu: FC<props> = ({ isClick }) => {
  return (
    <>
      <div className="w-full text-center absolute top-[93%] z-[100000000]">
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
      <div className="w-full absolute top-[93%] z-[1000000] flex justify-end gap-3 pr-8">
        <span className="uppercase text-white">low</span>
        <div className="w-[232px] h-4 bg-linear-to-r from-red-custom via-orange-custom to-green-custom mt-[5px] rounded-md"></div>
        <span className="uppercase text-white">high</span>
      </div>
    </>
  );
};

export default Menu;
