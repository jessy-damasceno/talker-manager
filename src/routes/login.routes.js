const { Router } = require('express');
const { generate } = require('rand-token');

const loginRouter = Router();

loginRouter.post('/', (_req, res) => {
  // const { email, password } = req.body;

  const token = generate(16);

  res.status(200).json({ token });
});

module.exports = loginRouter;