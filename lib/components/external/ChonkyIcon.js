"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChonkyIconFA = void 0;
var faAdobe_1 = require("@fortawesome/free-brands-svg-icons/faAdobe");
var faGitAlt_1 = require("@fortawesome/free-brands-svg-icons/faGitAlt");
var faLinux_1 = require("@fortawesome/free-brands-svg-icons/faLinux");
var faNodeJs_1 = require("@fortawesome/free-brands-svg-icons/faNodeJs");
var faPhp_1 = require("@fortawesome/free-brands-svg-icons/faPhp");
var faPython_1 = require("@fortawesome/free-brands-svg-icons/faPython");
var faRust_1 = require("@fortawesome/free-brands-svg-icons/faRust");
var faUbuntu_1 = require("@fortawesome/free-brands-svg-icons/faUbuntu");
var faWindows_1 = require("@fortawesome/free-brands-svg-icons/faWindows");
var faArrowDown_1 = require("@fortawesome/free-solid-svg-icons/faArrowDown");
var faBalanceScale_1 = require("@fortawesome/free-solid-svg-icons/faBalanceScale");
var faBoxOpen_1 = require("@fortawesome/free-solid-svg-icons/faBoxOpen");
var faCheckCircle_1 = require("@fortawesome/free-solid-svg-icons/faCheckCircle");
var faChevronDown_1 = require("@fortawesome/free-solid-svg-icons/faChevronDown");
var faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faCircleNotch_1 = require("@fortawesome/free-solid-svg-icons/faCircleNotch");
var faCogs_1 = require("@fortawesome/free-solid-svg-icons/faCogs");
var faCopy_1 = require("@fortawesome/free-solid-svg-icons/faCopy");
var faCubes_1 = require("@fortawesome/free-solid-svg-icons/faCubes");
var faDatabase_1 = require("@fortawesome/free-solid-svg-icons/faDatabase");
var faDownload_1 = require("@fortawesome/free-solid-svg-icons/faDownload");
var faEraser_1 = require("@fortawesome/free-solid-svg-icons/faEraser");
var faExclamationTriangle_1 = require("@fortawesome/free-solid-svg-icons/faExclamationTriangle");
var faExternalLinkAlt_1 = require("@fortawesome/free-solid-svg-icons/faExternalLinkAlt");
var faEyeSlash_1 = require("@fortawesome/free-solid-svg-icons/faEyeSlash");
var faFile_1 = require("@fortawesome/free-solid-svg-icons/faFile");
var faFileAlt_1 = require("@fortawesome/free-solid-svg-icons/faFileAlt");
var faFileArchive_1 = require("@fortawesome/free-solid-svg-icons/faFileArchive");
var faFileCode_1 = require("@fortawesome/free-solid-svg-icons/faFileCode");
var faFileExcel_1 = require("@fortawesome/free-solid-svg-icons/faFileExcel");
var faFileImage_1 = require("@fortawesome/free-solid-svg-icons/faFileImage");
var faFilePdf_1 = require("@fortawesome/free-solid-svg-icons/faFilePdf");
var faFileWord_1 = require("@fortawesome/free-solid-svg-icons/faFileWord");
var faFilm_1 = require("@fortawesome/free-solid-svg-icons/faFilm");
var faFistRaised_1 = require("@fortawesome/free-solid-svg-icons/faFistRaised");
var faFolder_1 = require("@fortawesome/free-solid-svg-icons/faFolder");
var faFolderOpen_1 = require("@fortawesome/free-solid-svg-icons/faFolderOpen");
var faFolderPlus_1 = require("@fortawesome/free-solid-svg-icons/faFolderPlus");
var faGenderless_1 = require("@fortawesome/free-solid-svg-icons/faGenderless");
var faInfoCircle_1 = require("@fortawesome/free-solid-svg-icons/faInfoCircle");
var faKey_1 = require("@fortawesome/free-solid-svg-icons/faKey");
var faLevelUpAlt_1 = require("@fortawesome/free-solid-svg-icons/faLevelUpAlt");
var faList_1 = require("@fortawesome/free-solid-svg-icons/faList");
var faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
var faMusic_1 = require("@fortawesome/free-solid-svg-icons/faMusic");
var faObjectGroup_1 = require("@fortawesome/free-solid-svg-icons/faObjectGroup");
var faRunning_1 = require("@fortawesome/free-solid-svg-icons/faRunning");
var faSearch_1 = require("@fortawesome/free-solid-svg-icons/faSearch");
var faSortAmountDownAlt_1 = require("@fortawesome/free-solid-svg-icons/faSortAmountDownAlt");
var faSortAmountUpAlt_1 = require("@fortawesome/free-solid-svg-icons/faSortAmountUpAlt");
var faTerminal_1 = require("@fortawesome/free-solid-svg-icons/faTerminal");
var faTh_1 = require("@fortawesome/free-solid-svg-icons/faTh");
var faThLarge_1 = require("@fortawesome/free-solid-svg-icons/faThLarge");
var faTimes_1 = require("@fortawesome/free-solid-svg-icons/faTimes");
var faTrash_1 = require("@fortawesome/free-solid-svg-icons/faTrash");
var faUpload_1 = require("@fortawesome/free-solid-svg-icons/faUpload");
var faUsers_1 = require("@fortawesome/free-solid-svg-icons/faUsers");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_1 = __importDefault(require("react"));
var icons_types_1 = require("../../types/icons.types");
var IconMap = (_a = {},
    // Misc
    _a[icons_types_1.ChonkyIconName.loading] = faCircleNotch_1.faCircleNotch,
    _a[icons_types_1.ChonkyIconName.dropdown] = faChevronDown_1.faChevronDown,
    _a[icons_types_1.ChonkyIconName.circle] = faGenderless_1.faGenderless,
    // File Actions: Drag & drop
    _a[icons_types_1.ChonkyIconName.dndDragging] = faFistRaised_1.faFistRaised,
    _a[icons_types_1.ChonkyIconName.dndCanDrop] = faArrowDown_1.faArrowDown,
    _a[icons_types_1.ChonkyIconName.dndCannotDrop] = faTimes_1.faTimes,
    // File Actions: File operations
    _a[icons_types_1.ChonkyIconName.openFiles] = faBoxOpen_1.faBoxOpen,
    _a[icons_types_1.ChonkyIconName.openParentFolder] = faLevelUpAlt_1.faLevelUpAlt,
    _a[icons_types_1.ChonkyIconName.copy] = faCopy_1.faCopy,
    _a[icons_types_1.ChonkyIconName.search] = faSearch_1.faSearch,
    _a[icons_types_1.ChonkyIconName.selectAllFiles] = faObjectGroup_1.faObjectGroup,
    _a[icons_types_1.ChonkyIconName.clearSelection] = faEraser_1.faEraser,
    // File Actions: Sorting & options
    _a[icons_types_1.ChonkyIconName.sortAsc] = faSortAmountDownAlt_1.faSortAmountDownAlt,
    _a[icons_types_1.ChonkyIconName.sortDesc] = faSortAmountUpAlt_1.faSortAmountUpAlt,
    _a[icons_types_1.ChonkyIconName.checkActive] = faCheckCircle_1.faCheckCircle,
    _a[icons_types_1.ChonkyIconName.checkInactive] = faCircle_1.faCircle,
    // File Actions: Unsorted
    _a[icons_types_1.ChonkyIconName.list] = faList_1.faList,
    _a[icons_types_1.ChonkyIconName.folder] = faFolder_1.faFolder,
    _a[icons_types_1.ChonkyIconName.folderCreate] = faFolderPlus_1.faFolderPlus,
    _a[icons_types_1.ChonkyIconName.folderOpen] = faFolderOpen_1.faFolderOpen,
    _a[icons_types_1.ChonkyIconName.smallThumbnail] = faTh_1.faTh,
    _a[icons_types_1.ChonkyIconName.largeThumbnail] = faThLarge_1.faThLarge,
    _a[icons_types_1.ChonkyIconName.folderChainSeparator] = faChevronRight_1.faChevronRight,
    _a[icons_types_1.ChonkyIconName.download] = faDownload_1.faDownload,
    _a[icons_types_1.ChonkyIconName.upload] = faUpload_1.faUpload,
    _a[icons_types_1.ChonkyIconName.trash] = faTrash_1.faTrash,
    _a[icons_types_1.ChonkyIconName.fallbackIcon] = faExclamationTriangle_1.faExclamationTriangle,
    // File modifiers
    _a[icons_types_1.ChonkyIconName.symlink] = faExternalLinkAlt_1.faExternalLinkAlt,
    _a[icons_types_1.ChonkyIconName.hidden] = faEyeSlash_1.faEyeSlash,
    // Generic file types
    _a[icons_types_1.ChonkyIconName.file] = faFile_1.faFile,
    _a[icons_types_1.ChonkyIconName.license] = faBalanceScale_1.faBalanceScale,
    _a[icons_types_1.ChonkyIconName.code] = faFileCode_1.faFileCode,
    _a[icons_types_1.ChonkyIconName.config] = faCogs_1.faCogs,
    _a[icons_types_1.ChonkyIconName.model] = faCubes_1.faCubes,
    _a[icons_types_1.ChonkyIconName.database] = faDatabase_1.faDatabase,
    _a[icons_types_1.ChonkyIconName.text] = faFileAlt_1.faFileAlt,
    _a[icons_types_1.ChonkyIconName.archive] = faFileArchive_1.faFileArchive,
    _a[icons_types_1.ChonkyIconName.image] = faFileImage_1.faFileImage,
    _a[icons_types_1.ChonkyIconName.video] = faFilm_1.faFilm,
    _a[icons_types_1.ChonkyIconName.info] = faInfoCircle_1.faInfoCircle,
    _a[icons_types_1.ChonkyIconName.key] = faKey_1.faKey,
    _a[icons_types_1.ChonkyIconName.lock] = faLock_1.faLock,
    _a[icons_types_1.ChonkyIconName.music] = faMusic_1.faMusic,
    _a[icons_types_1.ChonkyIconName.terminal] = faTerminal_1.faTerminal,
    _a[icons_types_1.ChonkyIconName.users] = faUsers_1.faUsers,
    // OS file types
    _a[icons_types_1.ChonkyIconName.linux] = faLinux_1.faLinux,
    _a[icons_types_1.ChonkyIconName.ubuntu] = faUbuntu_1.faUbuntu,
    _a[icons_types_1.ChonkyIconName.windows] = faWindows_1.faWindows,
    // Programming language file types
    _a[icons_types_1.ChonkyIconName.rust] = faRust_1.faRust,
    _a[icons_types_1.ChonkyIconName.python] = faPython_1.faPython,
    _a[icons_types_1.ChonkyIconName.nodejs] = faNodeJs_1.faNodeJs,
    _a[icons_types_1.ChonkyIconName.php] = faPhp_1.faPhp,
    // Development tools file types
    _a[icons_types_1.ChonkyIconName.git] = faGitAlt_1.faGitAlt,
    // Brands file types
    _a[icons_types_1.ChonkyIconName.adobe] = faAdobe_1.faAdobe,
    // Other program file types
    _a[icons_types_1.ChonkyIconName.pdf] = faFilePdf_1.faFilePdf,
    _a[icons_types_1.ChonkyIconName.excel] = faFileExcel_1.faFileExcel,
    _a[icons_types_1.ChonkyIconName.word] = faFileWord_1.faFileWord,
    _a[icons_types_1.ChonkyIconName.flash] = faRunning_1.faRunning,
    _a);
exports.ChonkyIconFA = react_1.default.memo(function (props) {
    var icon = props.icon;
    var faProps = __assign(__assign({}, props), { icon: IconMap[icon] ? IconMap[icon] : IconMap.fallbackIcon });
    return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, __assign({}, faProps));
});
//# sourceMappingURL=ChonkyIcon.js.map