import { axiosInstance } from "@lib/axios";

export const authUserLogin = async (dataLogin: object) => {
  const { data } = await axiosInstance.post("/login", dataLogin);
  return data;
};


export const authUserLogout = async (token: string) => {
	const { data } = await axiosInstance.post("/logout", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return data;
}