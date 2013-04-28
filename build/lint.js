var childProcess = require('child_process'),
    util = require('util');

function _exec(cmdExpr, done) {
    var proc = childProcess.exec(cmdExpr, function (error, stdout, stderr) {
        util.print(stdout);
        util.print(stderr);
    });

    proc.on("exit", function (code) {
        process.exit(code);
    });
}

function _lintJS(files, done) {
    var options = ["--show-non-errors"];
    _exec('jshint ' + files.concat(options).join(' '), done);
}

function runLint(done, files) {
    _lintJS(files && files.length > 0 ? files : ["."], done);
}

module.exports = {
    lint: runLint
};
