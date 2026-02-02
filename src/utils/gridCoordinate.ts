import * as THREE from "three";

export default function gridCoordinate(index: number) {
  const object = new THREE.Object3D();

  object.position.x = (index % 5) * 10 - 15;
  object.position.y = -(Math.floor(index / 5) % 4) * 8 + 12;
  object.position.z = Math.floor(index / 20) * 12 - 24;

  return object;
}
