const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "First Comment!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "SecondComment!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Another Comment",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "Testing Comment",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
