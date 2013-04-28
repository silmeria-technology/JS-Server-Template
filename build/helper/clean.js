var constants = require("./constants"),
    wrench = require("wrench"),
    util = require("util");

function clean(done) {
    wrench.rmdirSyncRecursive(constants.DIST, true);
    done();
}

module.exports = {
    clean: clean
};
