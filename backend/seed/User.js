
const User = require("../model/userModel"); 
const mongoose = require("mongoose");
const seedUsers = async () => {


    const users = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "12345678", 
        avatar: {
          public_id: "sample_avatar_id",
          url: "https://example.com/avatar.jpg",
        },
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "12345678",
        avatar: {
          public_id: "sample_avatar_id_2",
          url: "https://example.com/avatar2.jpg",
        },
        role: "admin",
      },
    ];

    for (const userData of users) {
      const user = new User(userData);
      await user.save();
    }
    console.log("Users seeded successfully");
    process.exit();
};

module.exports = {
    seedUsers: seedUsers,
  };
  