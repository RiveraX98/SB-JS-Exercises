const express = require("express");
const router = new express.Router();
const slugify = require("slugify");
const db = require("../db");
const ExpressError = require("../expressError");

router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM companies`);
    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});

router.get("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const compResults = await db.query(
      `SELECT code, name, description FROM companies WHERE code =$1`,
      [code]
    );
    if (compResults.rows.length === 0) {
      throw new ExpressError(`Company not found: ${code}`, 404);
    }
    const invoiceRes = await db.query(
      `SELECT id,amt,paid FROM invoices WHERE comp_code=$1`,
      [code]
    );

    const industyRes = await db.query(
      `SELECT name FROM industries LEFT JOIN companies_industries ON code = ind_code WHERE comp_code = $1`,
      [code]
    );
    const industries = industyRes.rows.map((r) => r.name);

    const compInfo = compResults.rows[0];
    compInfo.invoices = invoiceRes.rows;
    compInfo.industries = industries;

    return res.json({ company: code, compInfo });
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const code = slugify(name, { lower: true });
    const results = await db.query(
      `INSERT INTO companies (code, name, description) VALUES ($1,$2,$3) RETURNING code, name,description`,
      [code, name, description]
    );
    return res.status(201).json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.patch("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const { name, description } = req.body;
    const results = await db.query(
      `UPDATE companies SET name=$1, description=$2 WHERE code = $3 RETURNING code, name, description`,
      [name, description, code]
    );
    if (results.rows.length === 0) {
      throw new ExpressError(`Company not found: ${code}`, 404);
    }
    return res.json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.delete("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const select = await db.query(`Select * from companies where code =$1`, [
      code,
    ]);

    if (select.rows.length === 0) {
      throw new ExpressError(`Company not found: ${code}`, 404);
    }

    const results = await db.query(
      `DELETE FROM companies WHERE code =$1 Returning code`,
      [code]
    );

    return res.send({ status: `deleted ${code}` });
  } catch (e) {
    return next(e);
  }
});
module.exports = router;
