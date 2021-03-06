const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./config/connection');
const models = require('./models');
const routes = require("./routes");

app.use([
  express.urlencoded({ extended: true }),
  express.json()
])

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

app.use(routes);

sequelize
  .sync({ force: false, logging: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("🚀  Server server now on port", PORT);
    });
  })
  .catch(err => console.error(err));