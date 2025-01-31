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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileNameComponent = exports.useModifierIconComponents = exports.useThumbnailUrl = exports.useDndIcon = void 0;
var path_1 = __importDefault(require("path"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var thumbnails_recoil_1 = require("../../recoil/thumbnails.recoil");
var icons_types_1 = require("../../types/icons.types");
var file_helper_1 = require("../../util/file-helper");
var logger_1 = require("../../util/logger");
var ChonkyIcon_1 = require("../external/ChonkyIcon");
var TextPlaceholder_1 = require("../external/TextPlaceholder");
exports.useDndIcon = function (selected, isDragging, isOver, canDrop) {
    if (isOver) {
        return canDrop && !selected
            ? icons_types_1.ChonkyIconName.dndCanDrop
            : icons_types_1.ChonkyIconName.dndCannotDrop;
    }
    return isDragging ? icons_types_1.ChonkyIconName.dndDragging : null;
};
exports.useThumbnailUrl = function (file, setThumbnailUrl, setThumbnailLoading) {
    var thumbnailGenerator = recoil_1.useRecoilValue(thumbnails_recoil_1.thumbnailGeneratorState);
    react_1.useEffect(function () {
        var loadingCancelled = false;
        if (file) {
            if (thumbnailGenerator) {
                setThumbnailLoading(true);
                Promise.resolve()
                    .then(function () { return thumbnailGenerator(file); })
                    .then(function (thumbnailUrl) {
                    if (loadingCancelled)
                        return;
                    setThumbnailLoading(false);
                    if (thumbnailUrl && typeof thumbnailUrl === 'string') {
                        setThumbnailUrl(thumbnailUrl);
                    }
                })
                    .catch(function (error) {
                    if (!loadingCancelled)
                        setThumbnailLoading(false);
                    logger_1.Logger.error("User-defined \"thumbnailGenerator\" handler threw an error: " + error.message);
                });
            }
            else if (file.thumbnailUrl) {
                setThumbnailUrl(file.thumbnailUrl);
            }
        }
        return function () {
            loadingCancelled = true;
        };
    }, [file, setThumbnailUrl, setThumbnailLoading, thumbnailGenerator]);
};
exports.useModifierIconComponents = function (file) {
    var modifierIcons = react_1.useMemo(function () {
        var modifierIcons = [];
        if (file_helper_1.FileHelper.isHidden(file))
            modifierIcons.push(icons_types_1.ChonkyIconName.hidden);
        if (file_helper_1.FileHelper.isSymlink(file))
            modifierIcons.push(icons_types_1.ChonkyIconName.symlink);
        if (file_helper_1.FileHelper.isEncrypted(file))
            modifierIcons.push(icons_types_1.ChonkyIconName.lock);
        return modifierIcons;
    }, [file]);
    var modifierIconComponents = react_1.useMemo(function () {
        return modifierIcons.map(function (icon, index) { return (react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { key: "file-modifier-" + index, icon: icon })); });
    }, [modifierIcons]);
    return modifierIconComponents;
};
exports.useFileNameComponent = function (file) {
    return react_1.useMemo(function () {
        var _a;
        if (!file)
            return react_1.default.createElement(TextPlaceholder_1.TextPlaceholder, { minLength: 15, maxLength: 20 });
        var name;
        var extension;
        var isDir = file_helper_1.FileHelper.isDirectory(file);
        if (isDir) {
            name = file.name;
            extension = '/';
        }
        else {
            extension = (_a = file.ext) !== null && _a !== void 0 ? _a : path_1.default.extname(file.name);
            name = file.name.substr(0, file.name.length - extension.length);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            name,
            react_1.default.createElement("span", { className: "chonky-file-entry-description-title-extension" }, extension)));
    }, [file]);
};
//# sourceMappingURL=BaseFileEntry-hooks.js.map