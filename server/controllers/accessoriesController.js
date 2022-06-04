const uuid = require('uuid');
const path = require('path');
const { Accessories } = require('../models/models');
const ApiError = require('../error/ApiError');
const db = require('../db');

class accessoriesController {

  async create(req, res, next) {
    try {
      const { name, rubricId,
        description, price } = req.body;
      console.log(req.body)
      const { img } = req.files;

      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const type = await Accessories.create({
        name, rubricId, description,
        price, img: fileName
      });
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { rubricId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;
    let accessories;
    if (!rubricId) {
      accessories = await Accessories.findAndCountAll({ limit, offset })
    }
    if (rubricId) {
      accessories = await Accessories.findAndCountAll({ where: { rubricId }, limit, offset })
    }
    return res.json(accessories);
  }

  async getOne(res, req) {
    const { id } = req.params;
    const accessories = await Accessories.findOne({ where: { id } })
    return res.json(accessories)
  }

}

module.exports = new accessoriesController();