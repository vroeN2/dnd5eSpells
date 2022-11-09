import axios from "axios";

const baseURL = "https://www.dnd5eapi.co";

export default axios.create({
  baseURL,
});
