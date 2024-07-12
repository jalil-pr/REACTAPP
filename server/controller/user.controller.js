const  db  = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');



const findAll = async (req, res) => {
  console.log("find all users api called.");
  const users = await User.findAll();
  res.status(200).json(users);
};

const register = async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const user  = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    role: 'user'
  }
  const newUser = await db.users.create(user);
  res.json({user});
};


const login = async (req, res) => {
  console.log('user>login>request_body:', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({where:{email: email}});

  if (user) {
    const token = jwtUtil.generateToken({
      role: user.role,
      email: user.email,
      name: user.firstName,
    });

    res.json({
      accessToken: token,
      user: {
        role: user.role,
        email: user.email,
        name: user.firstName,
      },
    });
  } else {
    res.status(401).send("Username or password incorrect");
  }
};

module.exports = {
  findAll,
  register,
  login,
};
