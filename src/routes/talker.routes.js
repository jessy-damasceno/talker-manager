const { Router } = require('express');
const { getAllTalkers } = require('../utils');

const talkerRouter = Router();

talkerRouter.get('/', async (_req, res) => {
  const talkersList = await getAllTalkers();
  return res.status(200).json(talkersList);
});

module.exports = talkerRouter;