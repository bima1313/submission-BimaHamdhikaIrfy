import { useGoogleLogin } from "@react-oauth/google";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../routes/routePath";

const LoginButton: FC = () => {
    const navigate = useNavigate();
  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/spreadsheets",
    onSuccess: (tokenResponse) => {
         navigate(Path.dashboardPath,{state: tokenResponse.access_token})
    },
  });
  return (
    <button
      className="bg-black h-10 flex items-center-safe mt-4 rounded-full"
      onClick={() => login()}
    >
      <div className="ml-3 mr-[10px] w-9 h-9 rounded-full flex items-center justify-center">
        <img className="w-5 h-5" src="public\Google_logo.svg" />
      </div>
      <span className="text-base mr-3 text-white">Sign in with Google</span>
    </button>
  );
};

export default LoginButton;
