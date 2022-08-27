const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-.]+@([\w]+)+.com$/g;

  if (!email) {
    res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!regex.test(email)) {
    res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = emailValidate;
