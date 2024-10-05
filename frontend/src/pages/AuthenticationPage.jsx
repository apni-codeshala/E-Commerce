import AuthenticationHomeLogo from "../assets/login-logo.png";

const AuthenticationPage = ({ Page }) => {
  return (
    <div className="flex justify-evenly w-[100vw] h-[100vh] items-center bg-gray-700">
      <img src={AuthenticationHomeLogo} className="pl-40" />
      {Page && <Page />}
    </div>
  );
};

export default AuthenticationPage;
