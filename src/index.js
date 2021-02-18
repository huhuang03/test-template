#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var project_1 = require("./project");
var config_1 = require("./config");
var template_manager_1 = require("./template/template_manager");
var p = new project_1["default"]();
var parser = require('yargs')
    .command('list', 'list all templates', function (yargs) {
    console.log("All tmplates:");
    console.log("\t" + template_manager_1["default"].tempaltes.map(function (t) { return t.name; }).join("\n\t"));
})
    .option('tName', {
    alias: 't',
    type: 'string',
    description: '[-t] The tempalte name'
})
    .option('name', {
    alias: 'n',
    type: 'string',
    description: 'The project name.(But I don\'t what this mean.)'
})
    .option('out', {
    alias: 'o',
    type: 'string',
    description: 'The output folder'
});
var _loop_1 = function (t) {
    parser.command(t.name, "create a " + t.name + " type project", function () { }, function (argv) {
        var out = "t_" + t.name;
        p.build(new config_1["default"](out, t.name, out));
    });
};
for (var _i = 0, _a = p.templates; _i < _a.length; _i++) {
    var t = _a[_i];
    _loop_1(t);
}
parser.parse();
// const argv = parser.argv
