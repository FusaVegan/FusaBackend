const getAllClients = require(`../../controller/clientController/getAllClients`);
const getAllClientsHandler = async (req, res) => {
  try {
    const response = await getAllClients();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllClientsHandler;
