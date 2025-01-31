import { Nullable } from 'tsdef';
import { FileData } from '../types/files.types';
export declare class FileHelper {
    static isEncrypted(file: Nullable<FileData>): file is FileData;
    static isDirectory(file: Nullable<FileData>): file is FileData;
    static isHidden(file: Nullable<FileData>): file is FileData;
    static isSymlink(file: Nullable<FileData>): file is FileData;
    static isClickable(file: Nullable<FileData>): file is FileData;
    static isOpenable(file: Nullable<FileData>): file is FileData;
    static isSelectable(file: Nullable<FileData>): file is FileData;
    static isDraggable(file: Nullable<FileData>): file is FileData;
    static isDroppable(file: Nullable<FileData>): file is FileData;
    static getReadableFileSize(file: Nullable<FileData>): Nullable<string>;
    static getReadableDate(file: Nullable<FileData>): Nullable<string>;
    static getChildrenCount(file: Nullable<FileData>): Nullable<number>;
}
