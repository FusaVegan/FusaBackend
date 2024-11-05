const { Router } = require(`express`);
const getAllClientsHandler = require(`../handler/clientHandler/getAllClientsHandler`);
const createClientHandler = require(`../handler/clientHandler/createClientHandler`);
const updateClientHandler = require(`../handler/clientHandler/updateClientHandler`);
const deleteClientHandler = require(`../handler/clientHandler/deleteClientHandler`);

const {
  validateClientIdPost,
  validateAdressPost,
  validatePhonePost,
  validateStatePost,
} = require(`../utils/middlewareClient`);

const clientRouter = Router();

clientRouter.get(`/getAllClients`, getAllClientsHandler);
clientRouter.post(
  `/createClient`,
  [validateAdressPost, validatePhonePost, validateStatePost],
  createClientHandler
);

clientRouter.put(`/updateClient`, validateClientIdPost, updateClientHandler);
clientRouter.delete(`/deleteClient`, validateClientIdPost, deleteClientHandler);

module.exports = clientRouter;
