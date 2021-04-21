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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
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
exports.default = OutFile;
