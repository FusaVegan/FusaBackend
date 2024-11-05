const { Client } = require(`../../db`);

const updateClient = async ({
  ClientId,
  timeTable,
  localName,
  zone,
  adress,
  managerName,
  phone,
  description,
}) => {
  let client = await Client.findByPk(ClientId);

  if (!client)
    throw new Error(
      `El cliente con ID ${ClientId} no existe en la base de datos.`
    );
  await Client.update(
    { timeTable, localName, zone, adress, managerName, phone, description },
    { where: { id: ClientId } }
  );
  client = await Client.findByPk(ClientId);

  return {
    message: `Se actualizo correctamente el cliente con ID ${ClientId}`,
    data: client,
  };
};

module.exports = updateClient;
