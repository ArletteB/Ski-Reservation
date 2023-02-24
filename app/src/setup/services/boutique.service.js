import api from "./api.service";

const BOUTIQUES_ENDPOINT = "/boutiques";

const getAll = async () => {
  const response = await api.get(BOUTIQUES_ENDPOINT);
  return response.data;
};

const getOne = async (id) => {
  const response = await api.get(`${BOUTIQUES_ENDPOINT}/${id}`);
  return response.data;
};

const create = async (boutique) => {
  const response = await api.post(BOUTIQUES_ENDPOINT, boutique);
  return response.data;
};

const update = async (id, boutique) => {
  const response = await api.put(`${BOUTIQUES_ENDPOINT}/${id}`, boutique);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`${BOUTIQUES_ENDPOINT}/${id}`);
  return response.data;
};

const BoutiqueService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

export default BoutiqueService;
