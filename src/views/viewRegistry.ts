import { Mode } from "../constants/Mode";
import GridView from "./GridView";
import HelixView from "./HelixView";
import SphereView from "./SphereView";
import TableView from "./TableView";
import TetrahedronView from "./TetrahedronView";

export const ViewMap = {
  [Mode.TABLE]: TableView,
  [Mode.SPHERE]: SphereView,
  [Mode.HELIX]: HelixView,
  [Mode.GRID]: GridView,
  [Mode.TETRAHEDRON]: TetrahedronView,
};
