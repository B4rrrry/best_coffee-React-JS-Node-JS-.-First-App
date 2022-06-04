const { Comments} = require('../models/models');
const db = require('../db');

class commentsController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await Comments.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Comments.findAll();
    return res.json(types);
  }
}

module.exports = new  commentsController();