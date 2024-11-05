const { ClientOrder, Client } = require(`../../db`);

const updateClientOrder = async ({
  ClientOrderId,
  subtotal,
  total,
  description,
  discount,
  products,
  payments,
  state,
  date,
}) => {
  let order = await ClientOrder.findByPk(ClientOrderId);
  if (!order)
    throw new Error(
      `La orden de cliente con ID ${ClientOrderId} no existe en la base de datos`
    );
  const client = await Client.findByPk(order.ClientId);
  if (!client)
    throw new Error(
      `El cliente al cual la orden esta vinculada no existe en la base de datos. ID de cliente ${order.ClientId}`
    );
  await ClientOrder.update(
    { subtotal, total, description, discount, products, date, payments, state },
    { where: { id: ClientOrderId } }
  );
  order = ClientOrder.findByPk(ClientOrderId);
  return {
    message: `Se actualizo la orden con ID ${ClientOrderId} correctamente.`,
    data: order,
  };
};

module.exports = updateClientOrder;
