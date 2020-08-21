"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoRootFolderId = exports.demoFileMap = exports.SortOrder = exports.SortProperty = exports.Option = exports.KbKey = exports.InputEventType = exports.FileView = exports.FileBrowser = void 0;
var FileUtil_1 = require("./util/FileUtil");
var FileBrowser_1 = __importDefault(require("./components/FileBrowser"));
exports.FileBrowser = FileBrowser_1.default;
var typedef_1 = require("./typedef");
Object.defineProperty(exports, "FileView", { enumerable: true, get: function () { return typedef_1.FileView; } });
Object.defineProperty(exports, "InputEventType", { enumerable: true, get: function () { return typedef_1.InputEventType; } });
Object.defineProperty(exports, "KbKey", { enumerable: true, get: function () { return typedef_1.KbKey; } });
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return typedef_1.Option; } });
Object.defineProperty(exports, "SortProperty", { enumerable: true, get: function () { return typedef_1.SortProperty; } });
Object.defineProperty(exports, "SortOrder", { enumerable: true, get: function () { return typedef_1.SortOrder; } });
var _a = FileUtil_1.FileUtil.getDemoFs(), demoFileMap = _a.demoFileMap, demoRootFolderId = _a.demoRootFolderId;
exports.demoFileMap = demoFileMap;
exports.demoRootFolderId = demoRootFolderId;
//# sourceMappingURL=index.js.map