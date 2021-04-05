const app = require("./config/express");
const { env, port } = require("./config/local_env");

app.listen(port, () =>
  console.info(`Server is running on port ${port} (${env})`)
);

module.exports = app;
