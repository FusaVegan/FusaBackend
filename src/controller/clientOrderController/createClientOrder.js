const { ClientOrder, Client } = require(`../../db`);

const createClientOrder = async ({
  ClientId,
  subtotal,
  total,
  discount,
  description,
  products,
  date,
  payments,
  state,
}) => {
  const client = await Client.findByPk(ClientId);
  if (!client) throw new Error(`No existe el cliente con ID = ${ClientId}`);
  const response = await ClientOrder.create({
    subtotal,
    total,
    discount,
    description,
    products,
    payments,
    state,
    date,
  });
  await response.setClient(ClientId);
  return { message: `Se creo el pedido del cliente`, data: response };
};

module.exports = createClientOrder;
