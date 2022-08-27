const fs = require('fs/promises');
const path = require('path');

const pathname = path.join(__dirname, '../talker.json');

const getAllTalkers = async () => {
  const talkersList = await fs.readFile(pathname, 'utf8');
  return JSON.parse(talkersList);
};

const getTalkerById = async (id) => {
  const talkersList = await getAllTalkers();

  return talkersList.find((e) => e.id === Number(id));
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};