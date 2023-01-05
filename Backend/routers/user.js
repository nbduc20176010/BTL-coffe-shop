const router = require("express").Router();
const User = require("../models/User");


//update user
router.put("/:id",  async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json(err);
  }
});

//delete user
router.delete("/:id",  async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("user has been deleted");
  } catch (err) {
    res.json(err);
  }
});

//get all users
router.get("/",  async (req, res) => {
  let page = req.query.page;
  let size = req.query.size;
  try {
    const users = await User.find()
      .skip(page * size - size)
      .limit(size);
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

//get user by id
router.get("/:id",  async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.json(others);
  } catch (err) {
    res.json(err);
  }
});

//get user stats
router.get("/stats");

module.exports = router;
