[**editable-console**](../README.md)

***

[editable-console](../globals.md) / EditableMessage

# Class: EditableMessage

Defined in: [EditableMessage.ts:8](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L8)

Represents an editable message that can be part of multiple logs.

## Constructors

### Constructor

> **new EditableMessage**(`content`): `EditableMessage`

Defined in: [EditableMessage.ts:20](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L20)

Creates an instance of EditableMessage.

#### Parameters

##### content

[`PrimitiveMessage`](../type-aliases/PrimitiveMessage.md)

The message content.

#### Returns

`EditableMessage`

## Properties

### content

> **content**: [`PrimitiveMessage`](../type-aliases/PrimitiveMessage.md)

Defined in: [EditableMessage.ts:10](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L10)

The content of the message.

***

### logs

> **logs**: [`EditableLog`](EditableLog.md)[] = `[]`

Defined in: [EditableMessage.ts:13](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L13)

The logs that contain this message.

## Accessors

### isObject

#### Get Signature

> **get** **isObject**(): `boolean`

Defined in: [EditableMessage.ts:47](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L47)

Indicates whether the content is an object.

##### Returns

`boolean`

True if the content is an object, false otherwise.

## Methods

### edit()

> **edit**(`newContent`): `void`

Defined in: [EditableMessage.ts:29](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L29)

Edits the content of the message.

#### Parameters

##### newContent

[`PrimitiveMessage`](../type-aliases/PrimitiveMessage.md)

The new content for the message.

#### Returns

`void`

***

### remove()

> **remove**(): `void`

Defined in: [EditableMessage.ts:38](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L38)

Removes this message from all logs that include it.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [EditableMessage.ts:56](https://github.com/im-nassinger/editable-console/blob/main/src/EditableMessage.ts#L56)

Converts the message to a string representation.

#### Returns

`string`

The string representation of the message.
