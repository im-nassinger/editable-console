[**editable-console**](../README.md)

***

[editable-console](../globals.md) / EditableConsole

# Class: EditableConsole

Defined in: EditableConsole.ts:8

Represents a console that supports editable logs.

## Constructors

### Constructor

> **new EditableConsole**(): `EditableConsole`

#### Returns

`EditableConsole`

## Properties

### lastLogString

> **lastLogString**: `string` = `''`

Defined in: EditableConsole.ts:12

Cached string of the last rendered log output.

***

### logs

> **logs**: [`EditableLog`](EditableLog.md)[] = `[]`

Defined in: EditableConsole.ts:10

Array of editable logs.

## Methods

### error()

> **error**(...`messages`): [`EditableLog`](EditableLog.md)

Defined in: EditableConsole.ts:73

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

Defined in: EditableConsole.ts:53

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

Defined in: EditableConsole.ts:36

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

Defined in: EditableConsole.ts:81

Renders the current logs to the console.
Uses caching to avoid unnecessary re-renders.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: EditableConsole.ts:96

Converts all logs to a single string representation.

#### Returns

`string`

The string representation of all logs.

***

### warn()

> **warn**(...`messages`): [`EditableLog`](EditableLog.md)

Defined in: EditableConsole.ts:63

Logs a warning message.

#### Parameters

##### messages

...[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The messages to log.

#### Returns

[`EditableLog`](EditableLog.md)

The created editable log.
