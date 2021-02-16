"use strict";
exports.__esModule = true;
var template_manager_1 = require("./template/template_manager");
var Project = /** @class */ (function () {
    function Project() {
        this.templates = [];
        this.templates = template_manager_1["default"].tempaltes;
    }
    Project.prototype.build = function (config) {
        var configValidate = config.validate();
        console.log(configValidate);
        if (!configValidate.isOk()) {
            console.error(configValidate.msg);
            return;
        }
        var template = template_manager_1["default"].tempaltes.find(function (t) { return t.name == config.templateName; });
        if (template == null) {
            throw "Can't find template " + config.templateName;
        }
        console.log("begin to write template " + config.templateName);
        template.write(config.outFolder, config);
    };
    return Project;
}());
exports["default"] = Project;
