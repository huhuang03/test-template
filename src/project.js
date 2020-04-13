"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
var template_css_1 = require("./templates/css/template_css");
var template_cmake_1 = require("./templates/cmake/template_cmake");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.build = function (config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }
        var template = Project.ALL_TEMPLATES.find(function (t) { return t.name == config.templateName; });
        if (template == null) {
            throw "Can't find template " + config.templateName;
        }
        template.getOutput().forEach(function (output) {
            if (!output.isFolder) {
                fs.outputFileSync(path.resolve(config.outFolder, output.path), output.content);
            }
            else {
                fs.mkdir(path.resolve(config.outFolder, output.path));
            }
        });
    };
    Project.ALL_TEMPLATES = [new template_css_1["default"](), new template_cmake_1["default"]()];
    return Project;
}());
exports["default"] = Project;
