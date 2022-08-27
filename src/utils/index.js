const fs = require('fs/promises');
const path = require('path');

const pathname = path.join(__dirname, '../talker.json');

const getAllTalkers = async () => {
  const talkersList = await fs.readFile(pathname, 'utf8');

  if (talkersList) {
    return JSON.parse(talkersList);
  }
  return [];
};

const getTalkerById = async (id) => {
  const talkersList = await getAllTalkers();

  return talkersList.find((e) => e.id === Number(id));
};

const saveTalkers = async (talkersList) => {
  await fs.writeFile(pathname, JSON.stringify(talkersList));
};

const insertTalker = async (talker) => {
  const talkersList = await getAllTalkers();
  const newTalker = talker;

  newTalker.id = talkersList.length + 1;
  talkersList.push(newTalker);
  console.log(talkersList);
  await saveTalkers(talkersList);

  return newTalker;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  insertTalker,
};