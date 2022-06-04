const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users, Basket, Favorites } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h', }
  );
  /* 
    * Создаем токен, первое это что мы передаем из данных, 
    * второе это секретный ключ, он должен быть уникальный в процесс енв,
    * Третье это срок действия токена
  */
}

class userController {

  async registration(req, res, next) {
    const { firstName, secondName, lastName, email, password, phone,
      city, street, flat, index, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await Users.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5); // хеширование пароля, первое пароль, второе сколько раз будем хешировать
    const user = await Users.create({
      firstName, secondName, lastName, email, password: hashPassword,
      phone, city, street, flat, index, role
    });
    const basket = await Basket.create({ userId: user.id }); //Создаем корзинк для юзера
    const favorites = await Favorites.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role)
    console.log(favorites)
    return res.json({ token, basket: basket.id, role: user.role, fName: user.firstName, sName: user.secondName });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user && !password) {
      return next(ApiError.badRequest('Логин и пароль не может быть пустым'))
    }
    if (!user) {
      return next(ApiError.badRequest('Пользователя с таким email не существует'))
    }
    if (user && !password) {
      return next(ApiError.badRequest('Пароль не может быть пустым'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password); // хешируем введенный пароль и сравниваем с паролем из бд
    if (!comparePassword) {
      return next(ApiError.badRequest('Указан неверный пароль'));
    }
    const token = generateJwt(user.id, user.email, user.role);
    const favoriteId = await Favorites.findOne({ where: { userId: req.user.id } })
    const basket = await Basket.findOne({ where: { userId: req.user.id } })
    res.json({ token, basketId: basket.dataValues.id, favId: favoriteId.dataValues.id, role: user.role, fName: user.firstName, sName: user.secondName });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    const favoriteId = await Favorites.findOne({ where: { userId: req.user.id } })
    const basket = await Basket.findOne({ where: { userId: req.user.id } })
    return res.json({ token, basketId: basket.dataValues.id, favId: favoriteId.dataValues.id });
  }
}

module.exports = new userController();