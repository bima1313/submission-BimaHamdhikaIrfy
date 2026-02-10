import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Menu from "../components/Menu";
import { useLocation } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import usersService from "../services/usersService";
import Loading from "../components/Loading";
import type { ServiceResponse } from "../models/generic";
import EmptyView from "../views/EmptyView";
import ErrorView from "../views/ErrorView";
import { Mode } from "../constants/Mode";
import { ViewMap } from "../views/viewRegistry";

export default function HomePage() {
  const hasFetched = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [serviceResponse, setServiceResponse] = useState<ServiceResponse>();
  const [view, setView] = useState(Mode.TABLE);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await usersService(location.state);
      setServiceResponse(response);
      setIsLoading(false);
    };
    if (!hasFetched.current && location.state) {
      fetchData();
      hasFetched.current = true;
    }
  });
  const renderView = () => {
    const usersData = serviceResponse?.data;
    const items = usersData?.items ?? [];
    if (serviceResponse?.error != null) {
      return <ErrorView error={serviceResponse.error} />;
    }
    if (!usersData || items.length == 0) {
      return <EmptyView />;
    }
    const ActiveView = ViewMap[view];
    return <ActiveView usersData={usersData} />;
  };
  return (
    <>
      {location.state != null ? (
        <div className="w-full h-screen bg-black">
          <Canvas camera={{ position: [0, 0, 40], fov: 70 }}>
            <color attach="background" args={["#050505"]} />
            {isLoading ? <Loading /> : renderView()}
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
