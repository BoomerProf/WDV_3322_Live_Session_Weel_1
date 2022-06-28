// require mongoose

const { userInfo } = require('os');

const findUser = async (object) => {
  return await userInfo.find(object);
};

const saveUser = async (newUser) => {
  return newUser.save();
};

module.exports = { saveUser, findUser };
