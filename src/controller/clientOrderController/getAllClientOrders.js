const {ClientOrder} = require(`../../db`);

const getAllClientOrders = async (req, res) => {
    const response = await ClientOrder.findAll();
    return response;
}

module.exports = getAllClientOrders;