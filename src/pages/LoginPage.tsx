import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Path } from "../routes/routePath";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-2 bg-transparent rounded-xl px-48 py-32">
        <h1 className="text-xl font-bold text-center mb-5">Welcome Back</h1>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <GoogleLogin
            theme="filled_blue"
            shape="rectangular"
            onSuccess={(credentials) => {
              navigate(Path.dashboardPath, { state: credentials });
            }}
            onError={() => {
              console.log("err = ");
            }}
          ></GoogleLogin>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
