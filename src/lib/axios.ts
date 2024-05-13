import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://laravel-11.test/api"
})