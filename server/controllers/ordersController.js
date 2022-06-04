const { Orders} = require('../models/models');
const db = require('../db');

class ordersController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await Orders.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Orders.findAll();
    return res.json(types);
  }
}

module.exports = new  ordersController();