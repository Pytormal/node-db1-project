const router = require("express").Router();
const Acc = require("./accounts-model");
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const acc = await Acc.getAll();
    res.json(acc);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.json(res.locals.account);
});

router.post("/",checkAccountPayload, async(req, res, next) => {
  // DO YOUR MAGIC
   try {
    const acc = await Acc.create({
      name: req.body.name,
      budget: req.body.budget,
    });

    res.json(acc);
  } catch (err) { next(err) }
});

router.put("/:id", checkAccountPayload, checkAccountId, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
   try {

     const acc = await Acc.updateById(req.params.id, {
       name: req.body.name,
       budget: req.body.budget,
     });

     res.json(acc);
   } catch (err) {
     next(err);
   }
});

router.delete("/:id", checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
    try {
      const acc = await Acc.deleteById(req.params.id);
      res.json(acc);
    } catch (err) {
      next(err);
    }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: "something went wrong inside the accounts router",
    errMessage: err.message,
  });
});

module.exports = router;
