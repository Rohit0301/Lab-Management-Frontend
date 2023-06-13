import axios from "axios";
const API_HOSTNAME = "http://127.0.0.1:8008/";

export const Request = async ({ method, endpoint, data, token }) => {
	return await axios({
		method,
		url: API_HOSTNAME + endpoint,
		headers: token
			? {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
			  }
			: {
					"Content-Type": "application/json",
			  },
		data,
	}).catch((err) => err.response);
};
