import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function ProtectedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
