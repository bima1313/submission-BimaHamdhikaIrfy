import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import TableView from "./views/TableView";
import SphereView from "./views/SphereView";
import FelixView from "./views/FelixView";
import GridView from "./views/GridView";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  const [view, setView] = useState("Table");

  const renderView = () => {
    switch (view) {
      case "Table":
        return <TableView />;
      case "Sphere":
        return <SphereView />;
      case "Felix":
        return <FelixView />;
      case "Grid":
        return <GridView />;
      default:
        return <TableView />;
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Canvas camera={{ position: [0, 0, 40], fov: 70 }}>
          <color attach="background" args={["#050505"]} />
          {renderView()}
          <OrbitControls />
        </Canvas>
        <Menu isClick={setView} />
      </div>
    </>
  );
}

export default App;
