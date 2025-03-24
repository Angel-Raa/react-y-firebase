import { Navigate, Route, Routes } from "react-router";
import { Login } from "../page/login/Login";
import { Register } from "../page/sign/Register";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </>
  );
};
