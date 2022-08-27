const { Router } = require('express');
const { getAllTalkers, getTalkerById } = require('../utils');

const talkerRouter = Router();

talkerRouter.get('/', async (_req, res) => {
  const talkersList = await getAllTalkers();
  return res.status(200).json(talkersList);
});

talkerRouter.get('/:id/', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkerById(id);

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
});

module.exports = talkerRouter;