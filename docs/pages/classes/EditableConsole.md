[**editable-console**](../README.md)

***

[editable-console](../globals.md) / EditableConsole

# Class: EditableConsole

Defined in: [EditableConsole.ts:8](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L8)

Represents a console that supports editable logs.

## Constructors

### Constructor

> **new EditableConsole**(): `EditableConsole`

#### Returns

`EditableConsole`

## Properties

### lastLogString

> **lastLogString**: `string` = `''`

Defined in: [EditableConsole.ts:13](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L13)

Cached string of the last rendered log output.

***

### logs

> **logs**: [`EditableLog`](EditableLog.md)[] = `[]`

Defined in: [EditableConsole.ts:10](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L10)

Array of editable logs.

## Methods

### error()

> **error**(...`messages`): [`EditableLog`](EditableLog.md)

Defined in: [EditableConsole.ts:74](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L74)

Logs an error message.

#### Parameters

##### messages

...[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The messages to log.

#### Returns

[`EditableLog`](EditableLog.md)

The created editable log.

***

### log()

> **log**(...`messages`): [`EditableLog`](EditableLog.md)

Defined in: [EditableConsole.ts:54](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L54)

Logs an informational message.

#### Parameters

##### messages

...[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The messages to log.

#### Returns

[`EditableLog`](EditableLog.md)

The created editable log.

***

### removeLog()

> **removeLog**(`log`): `void`

Defined in: [EditableConsole.ts:37](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L37)

Removes a log entry from the console.

#### Parameters

##### log

The log to remove or its index.

`number` | [`EditableLog`](EditableLog.md)

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [EditableConsole.ts:82](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L82)

Renders the current logs to the console.
Uses caching to avoid unnecessary re-renders.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [EditableConsole.ts:97](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L97)

Converts all logs to a single string representation.

#### Returns

`string`

The string representation of all logs.

***

### warn()

> **warn**(...`messages`): [`EditableLog`](EditableLog.md)

Defined in: [EditableConsole.ts:64](https://github.com/im-nassinger/editable-console/blob/main/src/EditableConsole.ts#L64)

Logs a warning message.

#### Parameters

##### messages

...[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The messages to log.

#### Returns

[`EditableLog`](EditableLog.md)

The created editable log.
