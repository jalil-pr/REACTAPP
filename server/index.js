const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const db = require("./models");
const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/users/", userRoutes);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
