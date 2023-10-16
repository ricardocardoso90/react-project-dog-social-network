import { useContext } from "react"
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

// import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ProtectRoute({ children }) {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) {
    return children;
  } else if (login === false) {
    return navigate('/login');
  } else {
    return <></>
  }

  // return login ? children : navigate('/login');
}