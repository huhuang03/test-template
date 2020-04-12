"use strict";
exports.__esModule = true;
var Template = /** @class */ (function () {
    function Template(name) {
        this.name = name;
        if (!this.name) {
            throw "Must specify name";
        }
    }
    return Template;
}());
exports["default"] = Template;
