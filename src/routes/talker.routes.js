const { Router } = require('express');
const ageValidate = require('../middlewares/ageValidate');
const nameValidate = require('../middlewares/nameValidate');
const rateValidate = require('../middlewares/rateValidate');
const talkValidate = require('../middlewares/talkValidate');
const tokenValidate = require('../middlewares/tokenValidate');
const watchValidate = require('../middlewares/watchValidate');
const { getAllTalkers, getTalkerById, insertTalker, updateTalker } = require('../utils');

const talkerRouter = Router();

talkerRouter.get('/', async (_req, res) => {
  const talkersList = await getAllTalkers();
  return res.status(200).json(talkersList);
});

talkerRouter.post('/', tokenValidate, nameValidate, ageValidate,
  talkValidate, watchValidate, rateValidate, async (req, res) => {
  const newTalker = req.body;
  const response = await insertTalker(newTalker);

  res.status(201).json(response);
});

talkerRouter.get('/:id/', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkerById(id);

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
});

talkerRouter.put('/:id', tokenValidate, nameValidate,
  ageValidate, talkValidate, watchValidate, rateValidate, async (req, res) => {
  const { id } = req.params;

  const response = await updateTalker(id, req.body);

  return res.status(200).json(response);
});

module.exports = talkerRouter;