const { Rubrics} = require('../models/models');
const db = require('../db');

class RubricsController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await Rubrics.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Rubrics.findAll({attributes:['id','name']});
    return res.json(types);
  }
}

module.exports = new RubricsController();