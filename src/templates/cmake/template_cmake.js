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
var out_file_1 = require("../../out_file");
var TempalteCmake = /** @class */ (function (_super) {
    __extends(TempalteCmake, _super);
    function TempalteCmake() {
        return _super.call(this, "cmake") || this;
    }
    TempalteCmake.prototype.getOutput = function () {
        return [
            new out_file_1["default"]('CMakeLists.txt', 'cmake_minimum_required(VERSION 3.12)\ncmake_minimum_required(VERSION 3.12)\n\nadd_executable(main main.cc)'),
            new out_file_1["default"]('src/main.cc', '#include <string>\n#include <string>\n\nusing namespace std;\n\nint main() {\n    return 0;\n}'),
            new out_file_1["default"]('build', '', true),
        ];
    };
    return TempalteCmake;
}(template_1["default"]));
