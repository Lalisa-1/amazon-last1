import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "http://localhost:10000/",
});

export default instance;
