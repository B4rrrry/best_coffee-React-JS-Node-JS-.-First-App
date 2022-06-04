const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  secondName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  flat: { type: DataTypes.STRING, allowNull: false },
  index: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Products = sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  acidity: { type: DataTypes.INTEGER, allowNull: true },
  density: { type: DataTypes.INTEGER, allowNull: true },
  for250g: { type: DataTypes.INTEGER, allowNull: true },
  for1000g: { type: DataTypes.INTEGER, allowNull: true },
  price: { type: DataTypes.STRING, allowNull: true },
  forMilk: { type: DataTypes.BOOLEAN, allowNull: true },
  forTurk: { type: DataTypes.BOOLEAN, allowNull: true },
  forMachine: { type: DataTypes.BOOLEAN, allowNull: true },
  forHorn: { type: DataTypes.BOOLEAN, allowNull: true },
});

const Accessories = sequelize.define('accessories', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.STRING, allowNull: true },
});

const Subscribers = sequelize.define('subscribers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false }
});

const BackCalls = sequelize.define('back_calls', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

const Reviews = sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false, },
  date: { type: DataTypes.DATE, allowNull: false, }
})

const Orders = sequelize.define('orders', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalPrice: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false, },
  status: { type: DataTypes.BOOLEAN, defaultValue: false }
})

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.FLOAT, allowNull: false }
})

const Comments = sequelize.define('comments', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false, },
})

const OrdersDetails = sequelize.define('orders_details', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, },
  price: { type: DataTypes.INTEGER, allowNull: false }
})

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProducts = sequelize.define('basket_products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  weight: { type: DataTypes.INTEGER, allowNull: false, },
  count: { type: DataTypes.INTEGER, allowNull: false, },
  price: { type: DataTypes.INTEGER, allowNull: false }
})

const Favorites = sequelize.define('favorites', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const FavoritesProducts = sequelize.define('favorites_products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const ForWhat = sequelize.define('forWhat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
})

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
})

const Rubrics = sequelize.define('rubrics', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
})

ForWhat.hasOne(Products);
Products.belongsTo(ForWhat);

Type.hasOne(Products);
Products.belongsTo(Type);

Rubrics.hasOne(Products);
Products.belongsTo(Rubrics);

Rubrics.hasOne(Accessories);
Accessories.belongsTo(Rubrics);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Products.hasMany(Rating);
Rating.belongsTo(Products);

Users.hasMany(Rating);
Rating.belongsTo(Users);

Products.hasMany(Comments);
Comments.belongsTo(Products);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Orders.hasMany(OrdersDetails);
OrdersDetails.belongsTo(Orders);

Products.hasMany(OrdersDetails);
OrdersDetails.belongsTo(Products);

Users.hasOne(Basket);
Basket.belongsTo(Users);

Products.hasMany(BasketProducts);
BasketProducts.belongsTo(Products);

Basket.hasMany(BasketProducts);
BasketProducts.belongsTo(Basket);

Users.hasOne(Favorites);
Favorites.belongsTo(Users);

Products.hasMany(FavoritesProducts);
FavoritesProducts.belongsTo(Products);

Favorites.hasMany(FavoritesProducts);
FavoritesProducts.belongsTo(Favorites);

module.exports = {
  Users,
  Products,
  Subscribers,
  BackCalls,
  Reviews,
  Orders,
  Rating,
  Comments,
  OrdersDetails,
  Basket,
  BasketProducts,
  Favorites,
  FavoritesProducts,
  ForWhat,
  Type,
  Rubrics,
  Accessories
}