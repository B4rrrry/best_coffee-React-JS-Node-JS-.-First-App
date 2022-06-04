const { BasketProducts } = require('../models/models');
const db = require('../db');

class basketController {

  async create(req, res) {
    console.log(req.body)
    const { productId, basketId, weight, price, count } = req.body;
    const exProd = await BasketProducts.findOne({ where: { productId, basketId, weight } });
    if (exProd) {
      const updateProd = await db.query(`
      update "basket_products"
      set "count" = ${Number(exProd.count) + Number(count)},
        "price" = ${Number(exProd.price) + Number(price)}
        where "basketId" = ${basketId}
         and "productId" = ${productId}
         and "weight" =  ${weight} `)
      return res.json(updateProd);
    }
    const basket = await BasketProducts.create({ productId, basketId, weight, price, count });
    return res.json(basket);
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      console.log(req.params)
      const fav = await db.query(`SELECT DISTINCT "basket_products"."id",
      "basket_products"."productId",
      "basket_products"."weight",
      "basket_products"."price",
      "basket_products"."count",
      "products"."name",
      "products"."img"
    FROM "basket_products" LEFT JOIN "products" ON "basket_products"."productId" = "products"."id"
    WHERE "basketId" = ${id}
     `)
      return res.json(fav)
    } catch (e) {
      return res.json(e.message)
    }
  }

  async getTotalPrice(req, res) {
    console.log('12121211cffffff212')
    const { id } = req.params;
    const totalPrice = await db.query(`select sum("price"),count("id")
    from "basket_products" where "basketId" = ${id}`)
    return res.json(totalPrice)
  }

  async updateProduct(req, res) {
    const { productId, basketId, weight, price, count } = req.body;
    const updateProd = await db.query(`
    update "basket_products"
    set "count" = ${count},
      "price" = ${price}
      where "basketId" = ${basketId}
       and "productId" = ${productId}
       and "weight" =  ${weight} `)
    return res.json(updateProd);
  }

  async deleteProduct(req, res) {
    const { productId, basketId, weight } = req.body;
    const deleteProd = await db.query(`delete from "basket_products"
    where "productId" = ${productId} and "basketId" = ${basketId} and "weight" = ${weight}`)
    return res.json(deleteProd)
  }
}

module.exports = new basketController();