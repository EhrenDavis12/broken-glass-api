require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
const corsOptions = {
  origin: process.env.corsOptions || "http://localhost:3000"
};
app.use(cors(corsOptions));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes")(app);

const syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV_RESET_DB === "false") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
