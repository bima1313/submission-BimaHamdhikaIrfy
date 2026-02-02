import * as THREE from "three";

export default function sphereCoordinate(index: number, totalData: number) {
  const vector = new THREE.Vector3();
  const object = new THREE.Object3D();
  const phi = Math.acos(-1 + (2 * index) / totalData);
  const theta = Math.sqrt(totalData * Math.PI) * phi;

  object.position.setFromSphericalCoords(20, phi, theta);

  vector.copy(object.position).multiplyScalar(2);

  object.lookAt(vector);

  return object;
}
