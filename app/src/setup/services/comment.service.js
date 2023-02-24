import api from "./api.service";

const COMMENTS_ENDPOINT = "/comments";

const getAll = async () => {
  const response = await api.get(COMMENTS_ENDPOINT);
  return response.data;
};

const getOne = async (id) => {
  const response = await api.get(`${COMMENTS_ENDPOINT}/${id}`);
  return response.data;
};

const create = async (comment) => {
  const response = await api.post(COMMENTS_ENDPOINT, comment);
  return response.data;
};

const update = async (id, comment) => {
  const response = await api.put(`${COMMENTS_ENDPOINT}/${id}`, comment);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`${COMMENTS_ENDPOINT}/${id}`);
  return response.data;
};

const CommentService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

export default CommentService;
