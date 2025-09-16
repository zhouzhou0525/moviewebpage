import axios from "axios";

export default axios.create({
  baseURL: "https://ungerminative-supersubtle-landen.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
