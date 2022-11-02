import axios from "axios";

const baseURL = "https://www.dnd5eapi.co/api/";

export default axios.create({
  baseURL,
});
