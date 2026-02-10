import * as THREE from "three";
import type { UserData } from "../models/dataUsers";

export default function tableCoordinate(userData: UserData) {
  const object = new THREE.Object3D();
  object.position.set((userData.posX - 9) * 4, -(userData.posY - 5.5) * 5, 0);
  object.rotation.set(0, 0, 0);

  return object;
}
