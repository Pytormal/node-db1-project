const Acc = require("./accounts-model");


exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
    const { name, budget } = req.body;

    if (name && budget) {
      next();
    } else {
      res.status(400).json({ message: "name and budget are required" })
    }
  // if (name = String) {
  //   next()
  // }
  // else {
  //   res.status(400).json({ message: "name of account must be a string" });
  // }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
 next();
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Acc.getById(req.params.id);

    if (account) {
      res.locals.account = account;
      next();
    } else {
      res.status(404).json({ message: "account not found" });
    }

  } catch (err) {
    next(err);
  }
};
