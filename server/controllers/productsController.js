const uuid = require('uuid');
const path = require('path');
const { Products, Rubrics } = require('../models/models');
const { Type } = require('../models/models.js')
const ApiError = require('../error/ApiError');
const db = require('../db');

class productsController {

  async create(req, res, next) {
    try {
      const { name, forWhatId, typeId, rubricId,
        description, acidity, density, for250g,
        for1000g, price, forMilk, forTurk, forMachine,
        forHorn } = req.body;
      console.log(req.body)
      const { img } = req.files;

      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const type = await Products.create({
        name, forWhatId, typeId, rubricId, description, acidity,
        density, for250g, for1000g, price, forMilk, forTurk,
        forMachine, forHorn, img: fileName
      });
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { forWhat, rubricid, limit, page } = req.query;
    console.log(req.query)
    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;
    let products;
    let query = `select "products"."id", "products"."name","products"."img", "products"."description","products"."acidity","products"."density",
    "products"."for250g","products"."for1000g","products"."forMilk","products"."forTurk","products"."forMachine",
    "products"."forHorn","rubrics"."name" as "rubrics","types"."name" as "types", "forWhats"."name" as "forWhat"
    from "products" left join "rubrics" on "products"."rubricId" = "rubrics"."id"
            left join "types" on  "products"."typeId" = "types"."id"
      left join "forWhats" on "products"."forWhatId" = "forWhats"."id"`;
    if (!forWhat && !rubricid) {
      products = await db.query(`${query} offset ${offset} limit ${limit}`)
    }
    if (forWhat && !rubricid) {
      products = await db.query(`${query} where "forWhatId" = ${forWhat} offset ${offset} limit ${limit}`)
    }
    if (!forWhat && rubricid) {
      products = await db.query(`${query} where "rubricId" = ${rubricid} offset ${offset} limit ${limit}`)
    }
    if (forWhat && rubricid) {
      products = await db.query(`${query} where "rubricId" = ${rubricid} and "forWhatId" = ${forWhat} offset ${offset} limit ${limit}`)
    }
    return res.json(products);
  }

  async getOne(req, res) {
    console.log(Type)
    const { id } = req.params;
    const product = await db.query(`select "products"."name","products"."img", "products"."description","products"."acidity","products"."density",
    "products"."for250g","products"."for1000g","products"."forMilk","products"."forTurk","products"."forMachine",
    "products"."forHorn","rubrics"."name","types"."name"
    from "products" inner join "rubrics" on "products"."rubricId" = "rubrics"."id"
            inner join "types" on  "products"."typeId" = "types"."id"
            where "products"."id" = ${id}`)
    return res.json(product)
  }

}

module.exports = new productsController();