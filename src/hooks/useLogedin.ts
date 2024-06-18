import { getInfoLogin } from "@services/auth.services";
import { jwtDecode } from "jwt-decode";

const useLogedin = () => {
  const { authorization, token } = getInfoLogin();
  if (!authorization) {
    return false;
  }

  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("authorization");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export default useLogedin;
