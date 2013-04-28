var childProcess = require("child_process"),
    constants = require("./helper/constants");

function _exec(cmdExpr, done) {
    var proc = childProcess.exec(cmdExpr, function (error, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
    });

    proc.on("exit", function (code) {
        process.exit(code);
    });
}

function start(done) {
    var options = [ "start",
                    "-l server.log",
                    "-a",
                    constants.SERVER_PATH];
    _exec(constants.FOREVER_PATH + " " + options.join(' '), done);
}

function stop(done) {
    var options = [ "stop",
                    constants.SERVER_PATH];
    _exec(constants.FOREVER_PATH + " " + options.join(' '), done);
}

module.exports = {
    start: start,
    stop: stop
};
