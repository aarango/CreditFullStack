const app = require("./app");
const CONFIG = require("./config/config");

app.listen(CONFIG.PORT, () => {
  console.log("servidor inicializado" + CONFIG.PORT);
});
