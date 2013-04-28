var util = require("util"),
    constants = require("./constants"),
    fs = require("fs"),
    async = require("async"),
    requirejs = require("../../dependencies/rjs/r");

function getAllBuildConfigs() {
    return fs.readdirSync(constants.BUILD_CONFIG_ROOT);
}

function runOptimizer(buildConfig, options, done) {
    var config = require("../config/" + buildConfig);
    if (options.debug === "false") {
        config.optimize = "uglify2";
    }

    requirejs.optimize(config, function (buildResponse) {
        done();
    }, function (err) {
        console.log(err);
    });
}

function runBundle(options, done) {
    var buildConfigs = [],
        optimizations = [];
    if (options.buildConfig === "all") {
        buildConfigs = getAllBuildConfigs();
        buildConfigs.forEach(function (configFile) {
            optimizations.push(runOptimizer.bind(null, configFile, options));
        });
    } else {
        optimizations.push(runOptimizer.bind(null, options.buildConfig + ".js", options));
    }
    async.series(optimizations, done);
}

module.exports = {
    bundle: runBundle
};
