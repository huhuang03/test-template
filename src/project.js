"use strict";
exports.__esModule = true;
var template_manager_1 = require("./template/template_manager");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.build = function (config) {
        console.log("111");
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }
        console.log("222");
        var template = template_manager_1["default"].tempaltes.find(function (t) { return t.name == config.templateName; });
        console.log("333");
        console.log(template);
        if (template == null) {
            throw "Can't find template " + config.templateName;
        }
        console.log("begin to write template " + config.templateName);
        template.write(config.outFolder, config);
    };
    return Project;
}());
exports["default"] = Project;
