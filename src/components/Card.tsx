import { useLayoutEffect, useRef, type FC } from "react";
import type { Periodic } from "../data/model/Periodic";
import { Html } from "@react-three/drei";
import type { Group, Object3DEventMap } from "three";
import gsap from "gsap";
import * as THREE from "three";
interface props {
  index: number;
  periodicItem: Periodic;
  totalData?: number;
  mode: string;
}
const Card: FC<props> = ({ periodicItem, index, totalData = 0, mode }) => {
  const ref = useRef<Group<Object3DEventMap>>(null!);

  useLayoutEffect(() => {
    const targetPosition = new THREE.Vector3();
    const targetRotation = new THREE.Euler(0, 0, 0);

    if (mode === "Table") {
      const initialPosition = new THREE.Vector3().add({
        x: Math.random() * 500 - 250,
        y: Math.random() * 500 - 250,
        z: Math.random() * 500 - 250,
      });
      ref.current.position.add(initialPosition);
      targetPosition.set(
        (periodicItem.posX - 9) * 4,
        -(periodicItem.posY - 5.5) * 5,
        0,
      );
      targetRotation.set(0, 0, 0);
    } else if (mode === "Sphere") {
      const vector = new THREE.Vector3();
      const object = new THREE.Object3D();
      const phi = Math.acos(-1 + (2 * index) / totalData);
      const theta = Math.sqrt(totalData * Math.PI) * phi;

      object.position.setFromSphericalCoords(20, phi, theta);

      vector.copy(object.position).multiplyScalar(2);

      object.lookAt(vector);

      targetPosition.copy(object.position);
      targetRotation.copy(object.rotation);
    } else if (mode === "Helix") {
      const vector = new THREE.Vector3();
      const theta = index * 0.175 + Math.PI;
      const y = -(index * 0.3) + 7.03125;

      const object = new THREE.Object3D();

      object.position.setFromCylindricalCoords(20, theta, y);

      vector.x = object.position.x * 2;
      vector.y = object.position.y;
      vector.z = object.position.z * 2;

      object.lookAt(vector);
      targetPosition.copy(object.position);
      targetRotation.copy(object.rotation);
    } else if (mode === "Grid") {
      const object = new THREE.Object3D();

      object.position.x = (index % 5) * 10 - 15;
      object.position.y = -(Math.floor(index / 5) % 5) * 10 + 15;
      object.position.z = Math.floor(index / 25) * 15 - 30;

      targetPosition.copy(object.position);
      targetRotation.copy(object.rotation);
    }
    gsap.to(ref.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1.5,
      ease:"power1.inOut",
      delay: index * 0.005,
    });
    gsap.to(ref.current.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 1.5,
      ease:"power1.inOut",
      delay: index * 0.005,
    });
  }, [index, mode, periodicItem.posX, periodicItem.posY, totalData]);
  return (
    <group key={index} ref={ref}>
      <Html transform>
        <div className="w-[120px] h-[160px] bg-neon ml-6 custom-box-shadow border-side-neon border on-hover cursor-pointer select-none">
          <div className="flex justify-end pr-4 pt-4">
            <h1 className="items-end text-detail text-xs">{index}</h1>
          </div>
          <div className="w-full h-full flex justify-center text-center pt-1 text-detail">
            <ul className="text-xs">
              <li className="text-6xl font-bold pb-4 text-symbol custom-text-shadow">
                {periodicItem.symbol}
              </li>
              <li>{periodicItem.name}</li>
              <li>{periodicItem.value}</li>
            </ul>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default Card;
