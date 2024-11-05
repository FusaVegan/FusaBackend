const { DataTypes } = require(`sequelize`);

const ClientOrderFunc = (sequelize) => {
  sequelize.define("ClientOrder", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0,
    },
    state:{
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: `Pendiente`,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ``,
    },
    products: {
      type: DataTypes.ARRAY(
        DataTypes.JSON({
          id: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          unitPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          count: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        })
      ),
      allowNull: false,
    },
    payments: {
      type: DataTypes.ARRAY(
        DataTypes.JSON({
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: new Date().toISOString().slice(0, 10),
          },
          allowNull: false,
        })

      ),
      allowNull: true,
      defaultValue: [],
    },
    cod: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {timestamps: false});
};

module.exports = ClientOrderFunc;
