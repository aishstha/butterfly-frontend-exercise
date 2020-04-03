import http from "../utils/http";

export async function fetchInfo(id) {
  const url = "/info";
  const response = await http.get(url);

  return response;
}
