const mongoose = require("mongoose");
require("colors");
const Recipe = require("../models/recipeModel");
const recipes = require("../data/data");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    // Recipe.insertMany(recipes);
    console.log(`Mongo connected: ${connect.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
