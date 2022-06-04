const { Favorites, FavoritesProducts } = require('../models/models');
const db = require('../db');

class favoritesController {

  async create(req, res) {
    console.log(req.body)
    const { productId, favoriteId } = req.body;
    const favEx = await FavoritesProducts.findOne({ where: { productId, favoriteId } });
    if (favEx) {
      console.log(favEx)
      const del = db.query(`delete from "favorites_products" 
      where "productId" = ${productId} and "favoriteId" = ${favoriteId}`)
      return res.json(del);
    }
    const favorite = await FavoritesProducts.create({ productId, favoriteId });
    return res.json(favorite);
  }

  async getOne(req, res) {

    try {
      const { id } = req.params;
      console.log(req.params)
      const fav = await db.query(`select distinct "products"."id" as "prodId", "products"."name","products"."img", "products"."description","products"."acidity","products"."density",
      "products"."for250g","products"."for1000g","products"."forMilk","products"."forTurk","products"."forMachine",
      "products"."forHorn","rubrics"."name" as "rubrics","types"."name" as "types", "forWhats"."name" as "forWhat"
      from "favorites_products" left join "products" on "favorites_products"."productId" = "products"."id"
     left join "rubrics" on "products"."rubricId" = "rubrics"."id"
              left join "types" on  "products"."typeId" = "types"."id"
        left join "forWhats" on "products"."forWhatId" = "forWhats"."id"
     where "favoriteId" = ${id}`)
      return res.json(fav)
    } catch (e) {
      return res.json(e.message)
    }
  }

  async getAll(req, res) {
   /*  console.log(req.body)
    const { id } = req.body;
    const products = await db.query(`select distinct "products"."id" as "prodId", "products"."name","products"."img", "products"."description","products"."acidity","products"."density",
    "products"."for250g","products"."for1000g","products"."forMilk","products"."forTurk","products"."forMachine",
    "products"."forHorn","rubrics"."name" as "rubrics","types"."name" as "types", "forWhats"."name" as "forWhat"
    from "favorites_products" left join "products" on "favorites_products"."productId" = "products"."id"
	 left join "rubrics" on "products"."rubricId" = "rubrics"."id"
            left join "types" on  "products"."typeId" = "types"."id"
      left join "forWhats" on "products"."forWhatId" = "forWhats"."id"
	 where "productId" = ${id}`)

    return res.json(products) */


  }
}

module.exports = new favoritesController();