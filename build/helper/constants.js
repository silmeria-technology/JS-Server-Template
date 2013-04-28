var path = require("path");

module.exports = {
    ROOT: path.normalize(__dirname + "/../../"),
    DIST: path.normalize(__dirname + "/../../dist"),
    BUILD_CONFIG_ROOT: path.normalize(__dirname + "/../config/"),
    DOCS: path.normalize(__dirname + "/../../docs"),
    MAIN_LIB: path.normalize(__dirname + "/../../main/lib"),
    SERVER_PATH: path.resolve(path.normalize(__dirname + "/../../server/app.js")),
    FOREVER_PATH: path.resolve(path.normalize(__dirname + "/../../node_modules/forever/bin/forever")),
    DEPENDENCIES: path.normalize(__dirname + "/../../dependencies"),
    DEPENDENCIES_JSDOC: path.normalize(__dirname + "/../../dependencies/jsdoc_toolkit-2.4.0/jsdoc-toolkit/"),
    DEPENDENCIES_R_JS: path.normalize(__dirname + "/../../dependencies/rjs/r.js"),
    DEFAULT_SSH_KEY: "~/.ssh/id_rsa.pub",
    USB_IP: "169.254.0.1",
    PW: "qaqa"
};
