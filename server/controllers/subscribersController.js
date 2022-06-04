const { Subscribers } = require('../models/models');
const db = require('../db');
const ApiError = require('../error/ApiError');

class SubscribersController {

  async create(req, res, next) {
    const { email } = req.body;
    const sub = await Subscribers.findOne({ where: { email } })
    if (sub) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const type = await Subscribers.create({ email });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Subscribers.findAll();
    return res.json(types);
  }
}

module.exports = new SubscribersController();