const validateClientIdPost = (req, res, next) => {
  const { ClientId } = req.body;
  if (!ClientId)
    throw new Error(`Por favor enviar el ID del cliente que hizo la compra.`);
  next();
};
const validateClientOrderIdPost = (req, res, next) => {
  const { ClientOrderId } = req.body;
  if (!ClientOrderId) throw new Error(`Por favor enviar el ID de la compra.`);
  next();
};
const validateSubtotalPost = (req, res, next) => {
  const { subtotal } = req.body;
  if (!subtotal) throw new Error(`Por favor enviar el subtotal de la compra.`);
  next();
};
const validateTotalPost = (req, res, next) => {
  const { total } = req.body;
  if (!total) throw new Error(`Por favor enviar el valor total de la compra.`);
  next();
};
const validateProductsPost = (req, res, next) => {
  const { products } = req.body;
  if (!products)
    throw new Error(`Por favor enviar la lista de productos de la compra.`);
  next();
};
const validatePaymentsPost = (req, res, next) => {
  const { payments } = req.body;
  if (!payments)
    throw new Error(`Por favor enviar la lista de productos de la compra.`);
  next();
};

module.exports = {
  validateClientIdPost,
  validateClientOrderIdPost,
  validateSubtotalPost,
  validateTotalPost,
  validateProductsPost,
  validatePaymentsPost,
};
