import http from "../utils/http";

export async function fetchQuestions(id) {
  const url = `/questions/?v=${id}`;
  const response = await http.get(url);

  return response;
}
