const { Client } = require(`../../db`);
const getClient = async (ClientId) => {
  const client = await Client.findByPk(ClientId);
  return client;
};

module.exports = getClient;
