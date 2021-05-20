const Acc = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Acc.getById(req.params.id);

    if (account) {
      res.locals.account = account;
      next();
    } else {
      res.status(404).json({ message: `Account cannot be found` });
    }
  } catch (err) {
    next(err);
  }
};
