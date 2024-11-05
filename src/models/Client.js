const { DataTypes } = require(`sequelize`);

const ClientFunc = (sequelize) => {
  sequelize.define(
    "Client",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      timeTable: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      localName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "",
      },
      zone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "",
      },
      adress: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false,
      },
      managerName: {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: "",
      },
      phone: {
        type: DataTypes.ARRAY(
          DataTypes.JSON({
            number: {
              type: DataTypes.STRING(30),
              unique: true,
              allowNull: false,
            },
            name: {
              type: DataTypes.STRING(30),
              allowNull: true,
              defaultValue: ``,
            },
          })
        ),
        allowNull: true,
        defaultValue: [],
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = ClientFunc;