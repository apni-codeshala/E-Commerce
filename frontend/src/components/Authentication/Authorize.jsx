import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";

function notify(message) {
  toast(message);
}

function RequireAuth({ allowedRoles }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  return isLoggedIn && allowedRoles.find((myrole) => myrole == role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    (() => {
      notify("Access Denied");
      return <Navigate to="/denied" />;
    })()
  ) : (
    (() => {
      notify("Login First");
      return <Navigate to="/login" />;
    })()
  );
}

export default RequireAuth;
