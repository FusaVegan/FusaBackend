const getAllClientOrders = require(`../../controller/clientOrderController/getAllClientOrders`);

const getAllClientOrdersHandler = async (req, res) => {
    try {
        const response = await getAllClientOrders();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getAllClientOrdersHandler;