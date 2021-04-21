"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
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
exports.default = templateMgr;
