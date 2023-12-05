const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");

module.exports = async (client) => {

  const eventosPath = path.join(__dirname, "../bot/distube");
  const files = await fs.readdir(eventosPath);
  for (const file of files) {
    if (file.endsWith(".js")) {
      const eventName = file.slice(0, -3);
      client.distube.on(eventName, require(path.join(eventosPath, file)).bind(null, client.distube));
    }
  }
  console.log(chalk.bold.blue(`Se han iniciado correctamente todos los eventos de Distube.`))
};