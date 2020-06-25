import { Request, Response } from "express";
import knex from "../database/connection";

class PointController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    const point = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    };

    const trx = await knex.transaction();

    const insertedIds = await trx("points").insert({
      image: "default",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        point_id,
        item_id,
      };
    });

    await trx("points_items").insert(pointItems);

    await trx.commit();

    return res.json({
      point_id,
      ...point,
    });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ error: "Point not found" });
    }

    // const collectedItems = await knex("items")
    //   .join("points_items", "items.id", "=", "points_items.item_id")
    //   .where("points_items.point_id", id);

    return res.json({
      point,
      // collectedItems,
    });
  }
}

export default PointController;
