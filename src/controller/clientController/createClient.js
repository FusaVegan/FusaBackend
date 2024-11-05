const { Client } = require(`../../db`);

const createClient = async ({
  timeTable,
  localName,
  zone,
  adress,
  managerName,
  phone,
  description,
  date,
  state,
}) => {
  const aux = await Client.findOne({ where: { adress } });
  if (aux) throw new Error(`El cliente en la direccion ${adress} ya existe.`);
  const newClient = await Client.create({
    timeTable,
    localName,
    zone,
    adress,
    managerName,
    phone,
    description,
    date,
    state,
  });
  return newClient;
};

module.exports = createClient;
