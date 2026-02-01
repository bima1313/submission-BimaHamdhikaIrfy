import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Menu from "../components/Menu";
import GridView from "../views/GridView";
import HelixView from "../views/HelixView";
import SphereView from "../views/SphereView";
import TableView from "../views/TableView";
import { useLocation } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import usersService from "../services/usersService";
import type { UsersData } from "../models/dataUsers";

export default function HomePage() {
  const hasFetched = useRef(false);
  const [data, setData] = useState<UsersData>();
  const [view, setView] = useState("Table");
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await usersService(location.state);
      setData(response);
    };
    if (!hasFetched.current && location.state) {
      fetchData();
      hasFetched.current = true;
    }
  });
  const renderView = () => {
    switch (view) {
      case "Table":
        return <TableView usersData={data} />;
      case "Sphere":
        return <SphereView usersData={data} />;
      case "Helix":
        return <HelixView usersData={data} />;
      case "Grid":
        return <GridView usersData={data} />;
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
