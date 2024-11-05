const { ClientOrder } = require(`../../db`);

const deleteClientOrder = async (ClientOrderId) => {
  const order = await ClientOrder.findByPk(ClientOrderId);
  if (!order)
    throw new Error(
      `La orden con ID ${ClientOrderId} no existe en la base de datos.`
    );
  await order.destroy();
  return `Se elimino la orden con ID ${ClientOrderId} exitosamente.`;
};

module.exports = deleteClientOrder;
