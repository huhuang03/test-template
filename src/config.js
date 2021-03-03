"use strict";
exports.__esModule = true;
// why can't find js_ex??
var Result = require('@huhuang03/js_ex').Result;
var Config = /** @class */ (function () {
    function Config(name, templateName, outFolder) {
        this.name = name;
        this.templateName = templateName;
        this.outFolder = outFolder;
        this._fix_param();
    }
    Config.prototype.validate = function () {
        this._fix_param();
        if (!this.templateName) {
            return Result.error("tempalteName(-t) must specified.");
        }
        return new Result();
    };
    Config.prototype._fix_param = function () {
        if (this.outFolder && !this.name) {
            this.name = this.outFolder;
        }
        if (this.name && !this.outFolder) {
            this.outFolder = this.name;
        }
        if (this.templateName) {
            if (!this.name) {
                this.name = "t_" + this.templateName;
            }
            if (!this.outFolder) {
                this.outFolder = "t_" + this.templateName;
            }
        }
    };
    return Config;
}());
exports["default"] = Config;
