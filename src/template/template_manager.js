"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var template_1 = require("./template");
var TemplateManager = /** @class */ (function () {
    function TemplateManager() {
        this.tempaltes = [];
        this.initialTempaltes();
    }
    TemplateManager.prototype.initialTempaltes = function () {
        var _this = this;
        var templateDataFolder = path.resolve(__dirname, "../../template_data");
        if (!fs.existsSync(templateDataFolder)) {
            throw "Why " + templateDataFolder + " doesn't exists";
        }
        this.tempaltes = fs.readdirSync(templateDataFolder).filter(function (f) {
            return fs.statSync(path.resolve(templateDataFolder, f)).isDirectory;
        })
            .map(function (f) {
            return _this.createTemplateFromFodler(path.resolve(templateDataFolder, f));
        });
    };
    TemplateManager.prototype.createTemplateFromFodler = function (folderPath) {
        var fullPath = path.resolve(folderPath);
        if (!fs.existsSync(fullPath)) {
            console.error("file not exist when create template from folder, folder: ", folderPath);
            return null;
        }
        return new template_1.StaticFolderTempalte(folderPath);
    };
    return TemplateManager;
}());
var templateMgr = new TemplateManager();
exports["default"] = templateMgr;
