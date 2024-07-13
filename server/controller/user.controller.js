const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const jwtUtil = require("../utils/jwtUtils");
const { log } = require("console");

const findAll = async (req, res) => {
  console.log("find all users api called.");
  const users = await db.users.findAll();
  res.status(200).json(users);
};

const register = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const userCheck = await db.users.findOne({ where: { email: email } });
  if (userCheck && userCheck.email == req.body.email) {
    res.status(409).send("A user by this email is already registered.");
  }
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: "user",
    };
    const newUser = await db.users.create(user);
    res.json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  console.log("request body: ", req.body);
  const { email, password } = req.body;
  const user = await db.users.findOne({ where: { email: email } });
  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (passwordsMatch) {
      const token = jwtUtil.generateToken({
        role: user.role,
        email: user.email,
        name: user.username,
      });
      res.json({
        accessToken: token,
        user: {
          role: user.role,
          email: user.email,
          name: user.username,
        },
      });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

module.exports = {
  findAll,
  register,
  login,
};
