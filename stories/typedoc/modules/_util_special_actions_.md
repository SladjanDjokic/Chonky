[chonky](../README.md) › [Globals](../globals.md) › ["util/special-actions"](_util_special_actions_.md)

# Module: "util/special-actions"

## Index

### Interfaces

* [SpecialMutableChonkyState](../interfaces/_util_special_actions_.specialmutablechonkystate.md)

### Functions

* [useSpecialActionDispatcher](_util_special_actions_.md#const-usespecialactiondispatcher)
* [useSpecialFileActionHandlerMap](_util_special_actions_.md#const-usespecialfileactionhandlermap)

## Functions

### `Const` useSpecialActionDispatcher

▸ **useSpecialActionDispatcher**(`files`: [FileArray](_types_files_types_.md#filearray), `selection`: [FileSelection](../interfaces/_types_files_types_.fileselection.md), `selectionUtil`: [SelectionUtil](../classes/_util_selection_.selectionutil.md), `selectFiles`: ReturnType<typeof useSelection>["selectFiles"], `toggleSelection`: ReturnType<typeof useSelection>["toggleSelection"], `clearSelection`: ReturnType<typeof useSelection>["clearSelection"], `dispatchFileAction`: [InternalFileActionDispatcher](_types_file_actions_types_.md#internalfileactiondispatcher)): *[InternalSpecialActionDispatcher](_types_special_actions_types_.md#internalspecialactiondispatcher)*

*Defined in [src/util/special-actions.ts:30](https://github.com/TimboKZ/Chonky/blob/faab549/src/util/special-actions.ts#L30)*

Returns a dispatch method meant to be used by child components. This dispatch
method is meant for "special" internal actions. It takes a special action, and
transforms it into a "file action" that can be handled by the user.

**Parameters:**

Name | Type |
------ | ------ |
`files` | [FileArray](_types_files_types_.md#filearray) |
`selection` | [FileSelection](../interfaces/_types_files_types_.fileselection.md) |
`selectionUtil` | [SelectionUtil](../classes/_util_selection_.selectionutil.md) |
`selectFiles` | ReturnType<typeof useSelection>["selectFiles"] |
`toggleSelection` | ReturnType<typeof useSelection>["toggleSelection"] |
`clearSelection` | ReturnType<typeof useSelection>["clearSelection"] |
`dispatchFileAction` | [InternalFileActionDispatcher](_types_file_actions_types_.md#internalfileactiondispatcher) |

**Returns:** *[InternalSpecialActionDispatcher](_types_special_actions_types_.md#internalspecialactiondispatcher)*

___

### `Const` useSpecialFileActionHandlerMap

▸ **useSpecialFileActionHandlerMap**(`selectionUtil`: [SelectionUtil](../classes/_util_selection_.selectionutil.md), `selectFiles`: ReturnType<typeof useSelection>["selectFiles"], `toggleSelection`: ReturnType<typeof useSelection>["toggleSelection"], `clearSelection`: ReturnType<typeof useSelection>["clearSelection"], `dispatchFileAction`: [InternalFileActionDispatcher](_types_file_actions_types_.md#internalfileactiondispatcher)): *object*

*Defined in [src/util/special-actions.ts:87](https://github.com/TimboKZ/Chonky/blob/faab549/src/util/special-actions.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`selectionUtil` | [SelectionUtil](../classes/_util_selection_.selectionutil.md) |
`selectFiles` | ReturnType<typeof useSelection>["selectFiles"] |
`toggleSelection` | ReturnType<typeof useSelection>["toggleSelection"] |
`clearSelection` | ReturnType<typeof useSelection>["clearSelection"] |
`dispatchFileAction` | [InternalFileActionDispatcher](_types_file_actions_types_.md#internalfileactiondispatcher) |

**Returns:** *object*