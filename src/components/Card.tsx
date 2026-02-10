import { useLayoutEffect, useRef, type FC } from "react";
import { Html } from "@react-three/drei";
import type { Group, Object3DEventMap } from "three";
import gsap from "gsap";
import * as THREE from "three";
import type { UserData } from "../models/dataUsers";
import clsx from "clsx";
import { Currency } from "../constants/Currency";
import { Mode } from "../constants/Mode";

interface props {
  index: number;
  userData: UserData;
  mode: string;
  coordinateFunc: () => THREE.Object3D<Object3DEventMap>;
}
const Card: FC<props> = ({ userData, index, mode, coordinateFunc }) => {
  const ref = useRef<Group<Object3DEventMap>>(null!);
  const currency = userData.net_worth.slice(1);
  const remove_comma = currency.split(",").join("");
  const net_worth = parseFloat(remove_comma);
  useLayoutEffect(() => {
    const targetPosition = new THREE.Vector3();
    const targetRotation = new THREE.Euler(0, 0, 0);

    if (mode === Mode.TABLE) {
      const initialPosition = new THREE.Vector3().add({
        x: Math.random() * 500 - 250,
        y: Math.random() * 500 - 250,
        z: Math.random() * 500 - 250,
      });
      ref.current.position.add(initialPosition);
    }
    const object = coordinateFunc();

    targetPosition.copy(object.position);
    targetRotation.copy(object.rotation);

    gsap.to(ref.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1.5,
      ease: "power1.inOut",
      delay: index * 0.005,
    });
    gsap.to(ref.current.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 1.5,
      ease: "power1.inOut",
      delay: index * 0.005,
    });
  }, [index, mode, coordinateFunc]);
  return (
    <group key={index} ref={ref}>
      <Html transform>
        <div
          className={clsx(
            "w-[120px] h-[160px] ml-6 border cursor-pointer select-none",
            {
              "bg-nw-red-neon ml-6 nw-red-shadow border-nw-red-side nw-red-hover":
                net_worth < Currency.$100K,
              "bg-nw-orange-neon ml-6 nw-orange-shadow border-nw-orange-side nw-orange-hover":
                net_worth > Currency.$100K && net_worth < Currency.$200K,
              "bg-nw-green-neon ml-6 nw-green-shadow border-nw-green-side nw-green-hover":
                net_worth > Currency.$200K,
            },
          )}
        >
          <div className="flex justify-between mx-4 pt-4 text-white text-[6px] font-semibold">
            <h1>{userData.country}</h1>
            <h1>{userData.age}</h1>
          </div>
          <div className="w-full h-full text-center mt-1 text-white">
            <div className="w-full flex justify-center">
              <img
                className="w-[88px] h-[88px] rounded-xs pointer-events-none"
                src={userData.photo}
                alt={`${userData.name} Photo`}
              />
            </div>
            <div className="mt-[2px] flex justify-center">
              <ul className="w-[88px]">
                <li className="text-[9px] font-bold">{userData.name}</li>
                <li className="text-[6px]">{userData.interest}</li>
              </ul>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default Card;
