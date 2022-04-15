import httpClient from "../http-common";

const upload = data => {
  return httpClient.post("/upload", data);
}

export default { upload };