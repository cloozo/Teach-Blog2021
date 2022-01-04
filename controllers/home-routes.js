const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts });
    // res.render("homepage", dbPostData[0].get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
