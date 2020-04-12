"use strict";
exports.__esModule = true;
var th_comm_1 = require("th_comm");
var Config = /** @class */ (function () {
    function Config(name, templateName, outFolder) {
        this.name = name;
        this.templateName = templateName;
        this.outFolder = outFolder;
        this.outFolder = this.outFolder || this.templateName;
    }
    Config.prototype.validate = function () {
        if (!this.name || !this.templateName || !this.outFolder) {
            return th_comm_1["default"].error("name and tempalteName and outFolder must not be null");
        }
        return new th_comm_1["default"]();
    };
    return Config;
}());
exports["default"] = Config;
