import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginButton from "../components/LoginButton";

export default function LoginPage() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-2 bg-transparent rounded-xl px-48 py-32">
        <h1 className="text-xl font-bold text-center mb-5">Welcome Back</h1>
        <GoogleOAuthProvider clientId={clientId}>
          <LoginButton />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
