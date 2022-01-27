import { a as api } from "../../../chunks/_api-16b5591a.js";
const patch = async (request) => {
  return api(request, `todos/${request.locals.userid}/${request.params.uid}`, {
    text: request.body.get("text"),
    done: request.body.has("done") ? !!request.body.get("done") : void 0
  });
};
const del = async (request) => {
  return api(request, `catering/${request.locals.userid}/${request.params.uid}`);
};
export { del, patch };
