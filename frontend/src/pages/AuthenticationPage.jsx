import Authentication from "../components/Authentication";
import AuthenticationHomeLogo from "../assets/login-logo.png";

const AuthenticationPage = () => {
  return (
    <div className="flex justify-evenly w-[100vw] h-[100vh] items-center bg-gray-700 pl-40">
      <img src={AuthenticationHomeLogo} />
      <Authentication />
    </div>
  );
};

export default AuthenticationPage;
