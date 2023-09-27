import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
    </Routes>

    // useRoutes([
    //   { path: '/', element: <Home /> }
    // ])
  )
}