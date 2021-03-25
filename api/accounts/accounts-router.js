const router = require('express').Router()
const Acc = require('./accounts-model.js')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Acc.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const accounts = await Acc.getById(id);
    if (accounts) {
      res.json(accounts);
    } else {
      res.status(404).json({
        message: "The account with the specified ID does not exist",
      });
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
