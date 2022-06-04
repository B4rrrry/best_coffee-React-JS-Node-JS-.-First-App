const { Reviews} = require('../models/models');
const db = require('../db');

class reviewsController {
  
  async create(req, res) {
    const {name} = req.body;
    const type = await Reviews.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Reviews.findAll();
    return res.json(types);
  }
}

module.exports = new  reviewsController();