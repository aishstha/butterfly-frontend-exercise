import http from "../utils/http";

export async function fetchInfo() {
  const url = "/info";
  const response = await http.get(url);

  return response;
}
