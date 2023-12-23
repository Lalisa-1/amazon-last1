import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	// baseURL: "http://localhost:10000/",
	baseURL: "https://amazon-clone-by-lalisa.cyclic.app",
});

export default instance;
