import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  posts: `${API}/posts`,
  comments: `${API}/comments`,
}
