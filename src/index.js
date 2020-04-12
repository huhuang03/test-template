#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var project_1 = require("./project");
var config_1 = require("./config");
var argv = require('yargs')
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
new project_1["default"]().build(new config_1["default"](argv.name, argv.tName, argv.out));
