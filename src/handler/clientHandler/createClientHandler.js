const createClient = require(`../../controller/clientController/createClient`);

const createClientHandler = async (req, res) => {
  try {
    const {
      timeTable,
      localName,
      zone,
      adress,
      managerName,
      phone,
      description,
      state,
      aDate,
    } = req.body;
    
    let date;

    !aDate ? date = new Date().toISOString().slice(0, 10) :  date = aDate;
    const response = await createClient({
      timeTable,
      localName,
      zone,
      adress,
      managerName,
      phone,
      description,
      state,
      date,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createClientHandler;
