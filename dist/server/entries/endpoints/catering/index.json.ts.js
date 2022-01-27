import { a as api } from "../../../chunks/_api-16b5591a.js";
const get = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`);
  if (response.status === 404) {
    return { body: [] };
  }
  return response;
};
const post = async (request) => {
  const response = await api(request, `catering/${request.locals.userid}`, {
    text: request.body.get("text")
  });
  return response;
};
export { get, post };
