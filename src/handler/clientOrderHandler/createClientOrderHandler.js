const createClientOrder = require(`../../controller/clientOrderController/createClientOrder`);

const createClientOrderHandler = async (req, res) => {
  try {
    const { ClientId, subtotal, total, discount, description, products, payments, state, aDate } =
      req.body;
    const date = !aDate ?  new Date().toISOString().slice(0, 10) : aDate;
    console.log(`La fecha es..... ${date}`);
    
    const response = await createClientOrder({
      ClientId,
      subtotal,
      total,
      discount,
      description,
      products,
      payments,
      date,
      state,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createClientOrderHandler;
