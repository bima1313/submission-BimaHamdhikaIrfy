import * as THREE from "three";
import type { UserData } from "../models/dataUsers";
import type { RefObject } from "react";

export default function tableCoordinate(
  userData: UserData,
  ref: RefObject<THREE.Group<THREE.Object3DEventMap>>,
  targetPosition: THREE.Vector3,
  targetRotation: THREE.Euler,
) {
  const initialPosition = new THREE.Vector3().add({
    x: Math.random() * 500 - 250,
    y: Math.random() * 500 - 250,
    z: Math.random() * 500 - 250,
  });
  ref.current.position.add(initialPosition);
  targetPosition.set((userData.posX - 9) * 4, -(userData.posY - 5.5) * 5, 0);
  targetRotation.set(0, 0, 0);

  return { position:targetPosition, rotation:targetRotation };
}
