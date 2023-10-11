const express = require("express");
const router = new express.Router();
const db = require("../db");
const slugify = require("slugify");

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM industries`);
    return res.json({ industries: results.rows });
  } catch (e) {
    return next(e);
  }
});

router.get("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const results = await db.query(`SELECT * FROM industries WHERE code=$1`, [
      code,
    ]);
    const compRes = await db.query(
      `SELECT comp_code FROM companies_industries WHERE ind_code=$1`,
      [code]
    );

    let indRes = results.rows[0];
    indRes.companies = compRes.rows;
    return res.json(indRes);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const code = slugify(name, { lower: true });
    const results = await db.query(
      `INSERT INTO industries (code,name) VALUES ($1,$2) RETURNING code, name`,
      [code, name]
    );
    return res.status(201).json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});
module.exports = router;

router.post("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const { comp_code } = req.body;
    const results = await db.query(
      `INSERT INTO companies_industries (comp_code, ind_code) VALUES ($1,$2) RETURNING id,comp_code, ind_code`,
      [comp_code, code]
    );
    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});
