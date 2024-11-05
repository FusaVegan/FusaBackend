const updateClient = require(`../../controller/clientController/updateClient`);
const updateClientHandler = async (req, res) => {
  try {
    const {
      ClientId,
      timeTable,
      localName,
      zone,
      adress,
      managerName,
      phone,
      description,
    } = req.body;
    const response = await updateClient({
      ClientId,
      timeTable,
      localName,
      zone,
      adress,
      managerName,
      phone,
      description,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = updateClientHandler;
