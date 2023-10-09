const express = require("express");
const router = new express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM invoices`);
    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const invoiceRes = await db.query("SELECT * FROM invoices WHERE id=$1", [
      id,
    ]);

    if (invoiceRes.rows.length === 0) {
      throw new ExpressError(`Invoice Not Found: ${id}`, 404);
    }

    const compRes = await db.query(`SELECT * FROM companies WHERE code=$1`, [
      invoiceRes.rows[0].comp_code,
    ]);

    const invoice = invoiceRes.rows[0];
    invoice.company = compRes.rows[0];

    return res.json({ invoice: invoice });
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { comp_code, amt, add_date, paid = "f" } = req.body;
    const results = await db.query(
      `INSERT INTO invoices (comp_code,amt,paid,add_date) VALUES ($1,$2,$3,$4) RETURNING id, comp_code,amt,paid`,
      [comp_code, amt, paid, add_date]
    );
    return res.status(201).json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amt, paid = "f" } = req.body;
    const results = await db.query(
      `UPDATE invoices SET amt=$1, paid=$2 WHERE id=$3 RETURNING id, comp_code,amt,paid`,
      [amt, paid, id]
    );

    if (invoiceRes.rows.length === 0) {
      throw new ExpressError(`Invoice Not Found: ${id}`, 404);
    }

    return res.json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});
module.exports = router;

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await db.query(`DELETE FROM invoices WHERE id =$1`, [id]);
    return res.send({ Msg: "Deleted" });
  } catch (e) {
    return next(e);
  }
});
