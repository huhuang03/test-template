"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var template_1 = require("../../template");
var out_file_1 = require("../../../out_file");
var path = require("path");
var TempalteCmake = /** @class */ (function (_super) {
    __extends(TempalteCmake, _super);
    function TempalteCmake() {
        return _super.call(this, "cmake") || this;
    }
    TempalteCmake.prototype.getOutput = function () {
        return [
            out_file_1["default"].fromLocalFile(path.resolve(__dirname, '../../../template_data/cmake/CMakeLists.txt')),
            out_file_1["default"].fromLocalFile(path.resolve(__dirname, '../../../template_data/cmake/main.cc')),
            new out_file_1["default"]('build', '', true),
        ];
    };
    return TempalteCmake;
}(template_1.Template));
exports["default"] = TempalteCmake;
