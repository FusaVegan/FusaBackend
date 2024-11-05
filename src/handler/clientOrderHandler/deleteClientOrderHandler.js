const deleteClientOrder = require(`../../controller/clientOrderController/deleteClientOrder`);

const deleteClientOrderHandler = async (req, res) => {
  try {
    const { ClientOrderId } = req.body;
    const response = await deleteClientOrder(ClientOrderId);
    res.status(204).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = deleteClientOrderHandler;
