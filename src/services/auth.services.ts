import { axiosInstance } from "@lib/axios";

// Login
export const authUserLogin = async (dataLogin: {
  username: string;
  password: string;
}) => {
  const { data } = await axiosInstance.post(
    "/auth/account",
    {},
    {
      auth: {
        username: dataLogin.username,
        password: dataLogin.password
      }
    }
  );
  return data;
};

// Logout
export const authUserLogout = async (token: string) => {
  const { data } = await axiosInstance.post("/logout", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

// Get Info Login in local storage
export const getInfoLogin = () => {
  const authorization = localStorage.getItem("authorization");
  const token = authorization ? JSON.parse(authorization).token : null;
  const username = authorization ? JSON.parse(authorization).username : null;
  const name = authorization ? JSON.parse(authorization).name : null;
  const noHp = authorization ? JSON.parse(authorization).noHp : null;
  return { authorization, username, name, token, noHp };
};
