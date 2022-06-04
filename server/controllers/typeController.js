const {Type} = require('../models/models');
const db = require('../db');

class TypeController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await Type.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll({attributes:['id','name']});
    return res.json(types);
  }
}

module.exports = new TypeController();