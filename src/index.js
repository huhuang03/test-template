#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var project_1 = require("./project");
var config_1 = require("./config");
var template_manager_1 = require("./template/template_manager");
var argv = require('yargs')
    .command('list', 'list all templates', function (yargs) {
    console.log("All tmplates");
    console.log("\t" + template_manager_1["default"].tempaltes.map(function (t) { return t.name; }).join("\n\t"));
})
    .option('name', {
    alias: 'n',
    type: 'string',
    description: 'The project name'
})
    .option('tName', {
    alias: 't',
    type: 'string',
    description: 'The tempalte name'
})
    .option('out', {
    alias: 'o',
    type: 'string',
    description: 'The output folder'
})
    .argv;
if (!argv._[0]) { // has no command
    new project_1["default"]().build(new config_1["default"](argv.name, argv.tName, argv.out));
}
