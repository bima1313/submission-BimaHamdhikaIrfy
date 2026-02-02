import * as THREE from "three";

export default function helixCoordinate(index: number, totalData: number) {
  const halfData = totalData / 2;
  const relativeIndex = index % halfData;
  const vector = new THREE.Vector3();

  const theta = relativeIndex * 0.175;
  const y = -(relativeIndex * 0.8) + 18.666;

  const object = new THREE.Object3D();

  if (index < halfData) {
    object.position.setFromCylindricalCoords(20, theta, y);
  } else {
    object.position.setFromCylindricalCoords(20, theta + Math.PI, y);
  }

  vector.x = object.position.x * 2;
  vector.y = object.position.y;
  vector.z = object.position.z * 2;

  object.lookAt(vector);

  return object;
}
