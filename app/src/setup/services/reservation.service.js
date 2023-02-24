import api from "./api.service";

const RESERVATIONS_ENDPOINT = "/reservations";

const getAll = async () => {
  const response = await api.get(RESERVATIONS_ENDPOINT);
  return response.data;
};

const getOne = async (id) => {
  const response = await api.get(`${RESERVATIONS_ENDPOINT}/${id}`);
  return response.data;
};

const create = async (reservation) => {
  const response = await api.post(RESERVATIONS_ENDPOINT, reservation);
  return response.data;
};

const update = async (id, reservation) => {
  const response = await api.put(`${RESERVATIONS_ENDPOINT}/${id}`, reservation);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`${RESERVATIONS_ENDPOINT}/${id}`);
  return response.data;
};

const ReservationService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

export default ReservationService;
