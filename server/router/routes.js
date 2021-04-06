const route = require("express").Router();
const userModel = require("../model/model");

route.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

route.post("/", async (req, res) => {
  try {
    const user = await userModel.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
