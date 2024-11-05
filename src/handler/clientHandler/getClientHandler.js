const getClient = require(`../../controller/clientController/getClient`);

const getClientHandler = async (req, res) => {
  try {
    const { ClientId } = req.query;
    const response = await getClient(ClientId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getClientHandler;
