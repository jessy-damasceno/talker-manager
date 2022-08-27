const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./routes/talker.routes');
const loginRouter = require('./routes/login.routes');

const app = express();
app.use(bodyParser.json());

// Use route /talker -- talker.router.js
app.use('/talker', talkerRouter);

// Use route /login -- talker.router.js
app.use('/login', loginRouter);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
