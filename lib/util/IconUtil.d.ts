/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
import { Nullable } from 'tsdef';
import { icons as defaultIcons } from '../components/Icon';
import { IconData, FileData } from '../typedef';
export declare const getIconData: (file: Nullable<FileData>, icons: typeof defaultIcons) => IconData;
