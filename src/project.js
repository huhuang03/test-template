"use strict";
exports.__esModule = true;
var template_manager_1 = require("./template/template_manager");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.build = function (config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }
        var template = template_manager_1["default"].tempaltes.find(function (t) { return t.name == config.templateName; });
        if (template == null) {
            throw "Can't find template " + config.templateName;
        }
        template.write(config.outFolder);
    };
    return Project;
}());
exports["default"] = Project;
