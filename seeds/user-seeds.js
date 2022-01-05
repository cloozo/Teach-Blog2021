const { User } = require('../models');

const userData = [
    {
        username: "test1",
        email: "test1@gmail.com",
        password: "1password123456"
    },
    {
        username: "test2",
        email: "test2@gmail.com",
        password: "2password123456"
    },
    {
        username: "test3",
        email: "test3@gmail.com",
        password: "3password123456"
    },
    {
        username: "test4",
        email: " test4@gmail.com",
        password: "4password123456"
    },
    {
        username: "test5",
        email: "test5@gmail.com",
        password: "5password123456"
    },
    {
        username: "test6",
        email: "test6@gmail.com",
        password: "6password123456"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;