import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WtwIDXwtP8NQTI-ESeRbRzh6JgC8QQgbu8MeQBhWbw8",
  },
});
