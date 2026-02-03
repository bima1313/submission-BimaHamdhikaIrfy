import { Html } from "@react-three/drei";
import type { FC } from "react";

const Loading: FC = () => {
  return (
    <Html fullscreen={true}>
      <div className="w-full h-screen flex justify-center items-center bg-black select-none">
        <ul className="text-center">
          <div className="w-32 h-32 border-[16px] border-white border-t-detail rounded-full animate-spin"></div>
          <h1 className="mt-6 font-bold text-3xl text-white">Loading...</h1>
        </ul>
      </div>
    </Html>
  );
};

export default Loading;
