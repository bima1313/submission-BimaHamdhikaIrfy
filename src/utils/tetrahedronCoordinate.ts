import * as THREE from "three";
import type { UserData } from "../models/dataUsers";

export default function tetrahdronCoordinate(userData: UserData) {
  const object = new THREE.Object3D();
  const scale = 5;
  const floor = scale * 3;
  const posZ = userData.posZ ?? 0;
  switch (userData.faces) {
    case 1:
      object.position.set(
        userData.posX * scale,
        -(userData.posY - 5.5) * scale,
        (posZ + 0.5) * scale,
      );
      object.rotation.set(0, -0.785, 0);
      object.rotateX(-0.3925);
      break;
    case 2:
      object.position.set(
        userData.posX * scale,
        -(userData.posY - 5.5) * scale,
        -(posZ + 0.2) * scale,
      );
      object.rotation.set(0, 3.925, 0);
      object.rotateX(-0.3925);
      break;
    case 3:
      object.position.set(
        (userData.posX - 0.5) * scale,
        -(userData.posY - 5.5) * scale,
        -(posZ - 0.2) * scale,
      );
      object.rotation.set(0, 1.57, 0);
      object.rotateX(-0.3925);
      break;
    case 4:
      object.position.set(
        (posZ - 4) * scale,
        -floor,
        -(userData.posX - 0.25) * scale,
      );
      object.rotation.set(1.57, 3.14, -1.54);
      break;
    default:
      object.position.set(
        (userData.posX - 9) * scale,
        -(userData.posY - 5.5) * 5,
        0,
      );
      object.rotation.set(0, 0, 0);
      break;
  }
  return object;
}
