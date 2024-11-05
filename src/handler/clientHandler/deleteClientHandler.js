const deleteClient = require(`../../controller/clientController/deleteClient`);

const deleteClientHandler = async (req, res) => {
  try {
    const { ClientId } = req.body;
    const response = await deleteClient(ClientId);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = deleteClientHandler;
