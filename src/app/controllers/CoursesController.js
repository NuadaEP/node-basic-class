const UserModel = require("../models/UserModel");
const CourseModel = require("../models/CourseModel");
const types = require("../../config/types");

class CoursesController {
  async store(req, res) {
    const { user_id } = req.params;
    const { name, date, type_id } = req.body;

    const user = await UserModel.findById(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const typeFinded = types.find((type) => type.id === type_id);

    if (typeFinded === undefined) {
      return res.status(400).json({
        message: "Type ID does not exists",
      });
    }

    const course = await CourseModel.create({
      name,
      date,
      type: typeFinded,
      user,
    });

    return res.json(course);
  }
}

module.exports = new CoursesController();
