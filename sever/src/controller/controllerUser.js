import db from "../models/index";

export const getUserById = async (req, res) => {
  try {
    let data = await db.User.findAll({
      where: {
        id: 1,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};
