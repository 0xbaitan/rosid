import axios from "axios";

const config = {
  openAiKey: process.env.REACT_APP_OPENAI_KEY,
  apiEndpoint: "http://localhost:3000",
};

const adapter = axios.create({
  validateStatus(_status) {
    return true;
  },
});
export { adapter };
export default config;
