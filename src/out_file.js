"use strict";
exports.__esModule = true;
var OutFile = /** @class */ (function () {
    function OutFile(path, content, isFolder) {
        if (isFolder === void 0) { isFolder = false; }
        this.path = path;
        this.content = content;
        this.isFolder = isFolder;
    }
    return OutFile;
}());
exports["default"] = OutFile;
