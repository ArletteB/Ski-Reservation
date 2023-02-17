import api from "./api.service";

const POSTS_ENDPOINT = "/posts";

const getAll = async () => {
  const response = await api.get(POSTS_ENDPOINT);
  console.log(response);
  return response.data;
};

const getOne = async (id) => {
  const response = await api.get(`${POSTS_ENDPOINT}/${id}`);
  return response.data;
};

const create = async (post) => {
  const response = await api.post(POSTS_ENDPOINT, post);
  return response.data;
};

const update = async (id, post) => {
  const response = await api.put(`${POSTS_ENDPOINT}/${id}`, post);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`${POSTS_ENDPOINT}/${id}`);
  return response.data;
};

const PostService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

export default PostService;
