const updateClientOrder = require(`../../controller/clientOrderController/updateClientOrder`);

const updateClientOrderHandler = async (req, res) => {
  try {
    const {
      ClientOrderId,
      subtotal,
      total,
      description,
      discount,
      products,
      date,
    } = req.body;
    const response = await updateClientOrder({
      ClientOrderId,
      subtotal,
      total,
      description,
      discount,
      products,
      date,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = updateClientOrderHandler;
