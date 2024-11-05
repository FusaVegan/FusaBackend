const { Client } = require(`../../db`);

const getAllClients = async () => {
  const response = await Client.findAll();
  return response;
};

module.exports = getAllClients;
