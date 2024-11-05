const validateClientIdPost = (req, res, next) => {
  const { ClientId } = req.body;
  if (!ClientId) throw new Error(`Por favor enviar el ID del cliente.`);
  next();
};

const validateAdressPost = (req, res, next) => {
  const { adress } = req.body;
  if (!adress)
    throw new Error(`Por favor enviar una direccion para el cliente.`);
  next();
};

const validatePhonePost = (req, res, next) => {
  const { phone } = req.body;
  if (!phone)
    throw new Error(`Por favor enviar al menos 1 telefono para el cliente.`);
  next();
};
const validateStatePost = (req, res, next) => {
  const { state } = req.body;
  if (!state)
    throw new Error(`Por favor enviar el estado inicial del cliente.`);
  next();
};

module.exports = {
  validateClientIdPost,
  validateStatePost,
  validateAdressPost,
  validatePhonePost,
};
