"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var OutFile = /** @class */ (function () {
    function OutFile(relatePath, content, isFolder) {
        if (isFolder === void 0) { isFolder = false; }
        this.relatePath = relatePath;
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
