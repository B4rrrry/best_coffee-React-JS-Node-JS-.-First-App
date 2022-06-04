const { ForWhat} = require('../models/models');
const db = require('../db');

class ForWhatController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await ForWhat.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await ForWhat.findAll();
    return res.json(types);
  }
}

module.exports = new  ForWhatController();