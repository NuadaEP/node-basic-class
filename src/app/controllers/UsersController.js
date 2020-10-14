const UserModel = require("../models/UserModel");

class UsersController {
  async index(req, res) {
    const users = await UserModel.find();

    return res.json({ users });
  }

  async store(req, res) {
    const { name } = req.body;

    const user = await UserModel.create({ name });

    return res.json({ user });
  }
}

module.exports = new UsersController();
