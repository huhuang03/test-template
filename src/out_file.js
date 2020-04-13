"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var OutFile = /** @class */ (function () {
    function OutFile(path, content, isFolder) {
        if (isFolder === void 0) { isFolder = false; }
        this.path = path;
        this.content = content;
        this.isFolder = isFolder;
    }
    OutFile.fromLocalFile = function (localPath, outPath) {
        if (outPath === void 0) { outPath = ""; }
        if (!fs.existsSync(localPath)) {
            throw "OutFile fromLocalFile file not exist: " + localPath;
        }
        outPath = outPath || path.basename(localPath);
        return new OutFile(outPath, fs.readFileSync(localPath, 'utf-8'));
    };
    return OutFile;
}());
exports["default"] = OutFile;
