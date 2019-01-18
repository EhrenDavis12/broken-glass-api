require("path");
const fs = require("fs");

getFilesFromPath = (path, extension, app) => {
  let dir = fs.readdirSync(path);
  return dir.filter(elm => {
    if (elm == "index.js") return;
    if (elm.match(new RegExp(`.*\.(${extension})`, "ig"))) {
      require("./" + elm)(app);
    }
  });
};

module.exports = function(app) {
  getFilesFromPath(__dirname, `.js`, app);
};
