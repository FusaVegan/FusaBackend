require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

const UserFunc = require("./models/User");
const ProductFunc = require("./models/Product");
const OrderFunc = require("./models/Order");
const FavoriteFunc = require("./models/Favorite");
const ReviewFunc = require("./models/Review");
const TypeFunc = require("./models/Type");
const NewFunc = require("./models/New");
const StorageFunc = require("./models/Storage");
const ClientFunc = require("./models/Client");
const StockFunc = require("./models/Stock");
const ClientOrderFunc = require("./models/ClientOrder");
const MovementFunc = require(`./models/Movement`);

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

// con la autenticacion permito que los test corran de manera correcta

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Error al conectar la base de datos", error);
  }
};

connectToDataBase();

// sincornizacion de modelos

UserFunc(sequelize);
ProductFunc(sequelize);
OrderFunc(sequelize);
FavoriteFunc(sequelize);
ReviewFunc(sequelize);
TypeFunc(sequelize);
NewFunc(sequelize);
StorageFunc(sequelize);
ClientFunc(sequelize);
StockFunc(sequelize);
ClientOrderFunc(sequelize);
MovementFunc(sequelize);

const {
  User,
  Order,
  Product,
  Favorite,
  Review,
  Type,
  New,
  Storage,
  Client,
  Stock,
  ClientOrder,
  Movement,
} = sequelize.models;

// Users & orders
User.hasMany(Order, { timestamps: false });
Order.belongsTo(User, { timestamps: false });
// Clients & clients orders
Client.hasMany(ClientOrder, { timestamps: false });
ClientOrder.belongsTo(Client, { timestamps: false });
ClientOrder.hasMany(Movement, { timestamps: false });
Client.hasMany(Movement, { timestamps: false });
Movement.belongsTo(Client, { timestamps: false });
// Movements & storages
Movement.belongsTo(ClientOrder, { timestamps: false });
Storage.hasMany(Movement, { timestamps: false });
Movement.belongsTo(Storage, { timestamps: false });

Product.belongsTo(Type, { foreignKey: "TypeId", timestamps: false });
Product.hasMany(Review, { timestamps: false });
Type.hasMany(Product, { foreignKey: "TypeId", timestamps: false });

User.hasMany(Favorite);
Favorite.belongsTo(User, { foreignKey: "UserId" });
Favorite.belongsTo(Product, { foreignKey: "ProductId" });

User.hasMany(Review);
Review.belongsTo(User, { foreignKey: "UserId" });
Review.belongsTo(Product, { foreignKey: "ProductId" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
