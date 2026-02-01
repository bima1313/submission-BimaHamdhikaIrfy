import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Menu from "../components/Menu";
import GridView from "../views/GridView";
import HelixView from "../views/HelixView";
import SphereView from "../views/SphereView";
import TableView from "../views/TableView";
import { useLocation } from "react-router-dom";
import RedirectPage from "./RedirectPage";

export default function HomePage() {
  const [view, setView] = useState("Table");
  const location = useLocation();
  const renderView = () => {
    switch (view) {
      case "Table":
        return <TableView />;
      case "Sphere":
        return <SphereView />;
      case "Helix":
        return <HelixView />;
      case "Grid":
        return <GridView />;
      default:
        return <TableView />;
    }
  };
  return (
    <>
      {location.state != null ? (
        <div className="w-full h-screen bg-black">
          <Canvas camera={{ position: [0, 0, 40], fov: 70 }}>
            <color attach="background" args={["#050505"]} />
            {renderView()}
            <OrbitControls />
          </Canvas>
          <Menu isClick={setView} />
        </div>
      ) : (
        <RedirectPage />
      )}
    </>
  );
}
