const types = require("../../config/types");

class TypesController {
  index(req, res) {
    return res.json(types);
  }
}

module.exports = new TypesController();
