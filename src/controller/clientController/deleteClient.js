const { Client, ClientOrder } = require(`../../db`);

const deleteClient = async (ClientId) => {
  const client = await Client.findByPk(ClientId);
  if (!client)
    throw new Error(
      `El cliente con ID ${ClientId} no existe en la base de datos.`
    );
  const orders = await ClientOrder.findAll({ where: { id: ClientId } }).filter((order) => order.payments.length == 0);
  orders.map(async (order) => await order.destroy());
  await client.destroy();

  return `Se elimino correctamente al cliente con ID ${ClientId} y todas las ordenes que no habian recibido pagos`;
};

module.exports = deleteClient;
