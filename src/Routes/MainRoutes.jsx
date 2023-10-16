import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { User } from "../Pages/User/User";
import { ProtectRoute } from "../Components/Helpers/ProtectedRoute";
import { Photo } from "../Components/Photo/Photo/Photo";
import { NotFound } from "../Components/NotFound/NotFound";
import { UserProfile } from "../Pages/User/UserProfile/UserProfile";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route path="conta/*"
        element={
          <ProtectRoute>
            <User />
          </ProtectRoute>
        }
      />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}