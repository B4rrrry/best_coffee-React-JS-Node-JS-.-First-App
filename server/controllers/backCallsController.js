const { BackCalls } = require('../models/models');
const db = require('../db');

class backCallsController {

  async create(req, res) {
    const { name, phone } = req.body;
    const type = await BackCalls.create({ name, phone, status:'Не обработано' });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await BackCalls.findAll();
    return res.json(types);
  }
}

module.exports = new backCallsController();