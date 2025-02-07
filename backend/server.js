const http = require("http");
const colors = require("colors");
const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

sequelize.sync({ force: false }).then(() => {
  // console.log("Ma’lumotlar bazasi ulandi.");
  server.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} da ishga tushdi.`.bgMagenta.white);
  });
});
