import { Nullable } from 'tsdef';
export interface FileData {
    id: string;
    name: string;
    ext?: string;
    isDir?: boolean;
    isHidden?: boolean;
    isAmeraEncrypted?: boolean;
    isSymlink?: boolean;
    openable?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    droppable?: boolean;
    size?: number;
    modDate?: Date | string;
    childrenCount?: number;
    thumbnailUrl?: string;
    [property: string]: any;
}
export declare type FileArray = Nullable<FileData>[];
export declare type ReadonlyFileArray = ReadonlyArray<Nullable<FileData>>;
export declare type FileFilter = (file: Nullable<FileData>) => boolean;
