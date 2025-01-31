"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHelper = void 0;
var dateformat_1 = __importDefault(require("dateformat"));
var filesize_1 = __importDefault(require("filesize"));
var FileHelper = /** @class */ (function () {
    function FileHelper() {
    }
    FileHelper.isEncrypted = function (file) {
        // Not a directory by default
        return !!file && file.isAmeraEncrypted === true;
    };
    FileHelper.isDirectory = function (file) {
        // Not a directory by default
        return !!file && file.isDir === true;
    };
    FileHelper.isHidden = function (file) {
        // Not hidden by default
        return !!file && file.isHidden === true;
    };
    FileHelper.isSymlink = function (file) {
        // Not a symlink by default
        return !!file && file.isSymlink === true;
    };
    FileHelper.isClickable = function (file) {
        // Clickable by default
        return !!file;
    };
    FileHelper.isOpenable = function (file) {
        // Openable by default
        return !!file && file.openable !== false;
    };
    FileHelper.isSelectable = function (file) {
        // Selectable by default
        return !!file && file.selectable !== false;
    };
    FileHelper.isDraggable = function (file) {
        // File & folders are draggable by default, `null` is not
        return !!file && file.draggable !== false;
    };
    FileHelper.isDroppable = function (file) {
        // Folders are droppable by default, files are not
        if (!file)
            return false;
        if (file.isDir && file.droppable !== false)
            return true;
        return file.droppable === true;
    };
    FileHelper.getReadableFileSize = function (file) {
        if (!file || typeof file.size !== 'number')
            return null;
        var size = file.size;
        var sizeData = filesize_1.default(size, { bits: false, output: 'object' });
        if (sizeData.symbol === 'B') {
            return Math.round(sizeData.value / 10) / 100.0 + " KB";
        }
        else if (sizeData.symbol === 'KB') {
            return Math.round(sizeData.value) + " " + sizeData.symbol;
        }
        return sizeData.value + " " + sizeData.symbol;
    };
    FileHelper.getReadableDate = function (file) {
        if (!file ||
            !(file.modDate instanceof Date || typeof file.modDate === 'string')) {
            return null;
        }
        // Convert string date into a date object
        var date = file.modDate;
        if (typeof date === 'string') {
            date = new Date(date);
        }
        // Confirm that we have a valid date
        if (isNaN(date.getTime()))
            return null;
        var currentYear = date.getFullYear() === new Date().getFullYear();
        if (currentYear)
            return dateformat_1.default(date, 'd mmmm, HH:MM');
        return dateformat_1.default(date, 'd mmm yyyy, HH:MM');
    };
    FileHelper.getChildrenCount = function (file) {
        if (!file || typeof file.childrenCount !== 'number')
            return null;
        return file.childrenCount;
    };
    return FileHelper;
}());
exports.FileHelper = FileHelper;
//# sourceMappingURL=file-helper.js.map