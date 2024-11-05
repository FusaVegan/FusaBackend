const { Router } = require(`express`);

const getAllClientOrdersHandler = require(`../handler/clientOrderHandler/getAllClientOrdersHandler`);
const createClientOrderHandler = require(`../handler/clientOrderHandler/createClientOrderHandler`);
const updateClientOrderHandler = require(`../handler/clientOrderHandler/updateClientOrderHandler`);
const deleteClientOrderHandler = require(`../handler/clientOrderHandler/deleteClientOrderHandler`);

const {
  validateClientIdPost,
  validateClientOrderIdPost,
  validateSubtotalPost,
  validateTotalPost,
  validateProductsPost,
  validatePaymentsPost,
} = require(`../utils/middlewareClientOrder`);

const clientOrderRouter = Router();

clientOrderRouter.get(`/getAllClientOrders`, getAllClientOrdersHandler);
clientOrderRouter.post(
  `/createClientOrder`,
  [
    validateClientIdPost,
    validateSubtotalPost,
    validateTotalPost,
    validateProductsPost,
    validatePaymentsPost,
  ],
  createClientOrderHandler
);
clientOrderRouter.put(
  `/updateClientOrder`,
  validateClientOrderIdPost,
  updateClientOrderHandler
);
clientOrderRouter.delete(
  `/deleteClientOrder`,
  validateClientOrderIdPost,
  deleteClientOrderHandler
);

module.exports = clientOrderRouter;
