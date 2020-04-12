"use strict";
exports.__esModule = true;
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.build = function (config) {
        var configValidate = config.validate();
        if (!configValidate.isOk()) {
            console.log(configValidate.msg);
            return;
        }
    };
    return Project;
}());
exports["default"] = Project;
