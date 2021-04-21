"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.StaticFolderTempalte = exports.Template = void 0;
var fs = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
var ITemplate = /** @class */ (function () {
    function ITemplate(name) {
        this.name = name;
        if (!this.name) {
            throw "Must specify name";
        }
    }
    return ITemplate;
}());
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template(name) {
        return _super.call(this, name) || this;
    }
    Template.prototype.write = function (outFolder, config) {
        this.getOutput().forEach(function (output) {
            if (!output.isFolder) {
                fs.outputFileSync(path.resolve(outFolder, output.relatePath), output.content);
            }
            else {
                fs.mkdir(path.resolve(outFolder, output.relatePath));
            }
        });
    };
    return Template;
}(ITemplate));
exports.Template = Template;
var StaticTempalte = /** @class */ (function (_super) {
    __extends(StaticTempalte, _super);
    function StaticTempalte(name, outFile) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.outFile = outFile;
        return _this;
    }
    StaticTempalte.prototype.getOutput = function () {
        return this.outFile;
    };
    return StaticTempalte;
}(Template));
var CONFIG_FILE_NAME = "mytmp_config.json";
var StaticFolderTempalte = /** @class */ (function (_super) {
    __extends(StaticFolderTempalte, _super);
    function StaticFolderTempalte(folder) {
        var _this = _super.call(this, path.basename(folder)) || this;
        _this.folder = folder;
        return _this;
    }
    StaticFolderTempalte.prototype.write = function (outFolder, config) {
        var _this = this;
        var ncp = require('ncp').ncp;
        ncp(this.folder, outFolder, {
            filter: function (fname) {
                if (fname.includes(".idea") || fname.includes("cmake-build-debug")) {
                    return false;
                }
                if (fname.endsWith(CONFIG_FILE_NAME)) {
                    return false;
                }
                return true;
            }
        }, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            _this.replaceAllPlaceHolder(outFolder, config);
        });
    };
    // has bug that can only replace in level 0
    StaticFolderTempalte.prototype.replaceAllPlaceHolder = function (folder, config) {
        fs.readdir(folder, function (e, items) {
            // if (folder.includes('build')) {
            //     return
            // }
            // if (folder == ".idea") {
            //     return
            // }
            // if (folder == "mytmp_config.json") {
            //     return
            // }
            if (e) {
                console.log(e);
                return;
            }
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                // console.log("folder: " + folder);
                // console.log("item: " + item);
                var fullPath = path.join(folder, item);
                if (fs.statSync(fullPath).isFile()) {
                    var content = fs.readFileSync(fullPath, 'utf-8');
                    content = content.replace(/\$NAME\$/g, config.name);
                    fs.writeFileSync(fullPath, content);
                }
            }
        });
    };
    return StaticFolderTempalte;
}(ITemplate));
exports.StaticFolderTempalte = StaticFolderTempalte;
exports.default = ITemplate;
