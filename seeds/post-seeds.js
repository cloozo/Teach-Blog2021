const { Post } = require("../models");

const postData = [
  {
    title: "title1!",
    post_content: "Test1",
    user_id: 3,
  },
  {
    title: "Title2",
    post_content: "Test2",
    user_id: 1,
  },
  {
    title: "Titkle3",
    post_content: "Test3",
    user_id: 2,
  },
  {
    title: "Titkle4",
    post_content: "Test4",
    user_id: 3,
  },
  {
    title: "Titkle6",
    post_content: "Test6",
    user_id: 4,
  },
  {
    title: "Titkle6",
    post_content: "Test6",
    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
