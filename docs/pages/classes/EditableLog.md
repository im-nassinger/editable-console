[**editable-console**](../README.md)

***

[editable-console](../globals.md) / EditableLog

# Class: EditableLog

Defined in: [EditableLog.ts:9](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L9)

Represents an individual editable log entry.

## Constructors

### Constructor

> **new EditableLog**(`console`, `type`, `messages`): `EditableLog`

Defined in: [EditableLog.ts:26](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L26)

Creates an instance of EditableLog.

#### Parameters

##### console

[`EditableConsole`](EditableConsole.md)

The parent console.

##### type

[`LogType`](../type-aliases/LogType.md)

The type of log ('info', 'warn', or 'error').

##### messages

[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The messages to include in the log.

#### Returns

`EditableLog`

## Properties

### console

> **console**: [`EditableConsole`](EditableConsole.md)

Defined in: [EditableLog.ts:11](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L11)

The parent console instance.

***

### messages

> **messages**: [`EditableMessage`](EditableMessage.md)[] = `[]`

Defined in: [EditableLog.ts:17](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L17)

Array of editable messages contained in this log entry.

***

### type

> **type**: [`LogType`](../type-aliases/LogType.md) = `'info'`

Defined in: [EditableLog.ts:14](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L14)

The type of log entry.

## Accessors

### colorFn

#### Get Signature

> **get** **colorFn**(): (`text`) => `string`

Defined in: [EditableLog.ts:98](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L98)

Gets the chalk color function based on the log type.

##### Returns

`Function`

A function that applies the appropriate color to the text.

###### Parameters

###### text

`string`

###### Returns

`string`

## Methods

### edit()

> **edit**(...`messages`): `void`

Defined in: [EditableLog.ts:81](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L81)

Edits the current log with new messages.

#### Parameters

##### messages

...[`AnyMessage`](../type-aliases/AnyMessage.md)[]

The new messages for the log.

#### Returns

`void`

***

### remove()

> **remove**(): `void`

Defined in: [EditableLog.ts:89](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L89)

Removes this log entry from its parent console.

#### Returns

`void`

***

### removeMessage()

> **removeMessage**(`message`): `void`

Defined in: [EditableLog.ts:63](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L63)

Removes a specific message from this log.

#### Parameters

##### message

The message or its index to remove.

`number` | [`EditableMessage`](EditableMessage.md)

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [EditableLog.ts:111](https://github.com/im-nassinger/editable-console/blob/main/src/EditableLog.ts#L111)

Converts this log entry to a string representation.

#### Returns

`string`

The string representation of the log.
