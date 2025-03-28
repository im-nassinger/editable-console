import type { EditableMessage } from './EditableMessage.ts';

export type PrimitiveMessage = string | number | object;
export type AnyMessage = EditableMessage | PrimitiveMessage;
export type LogType = 'info' | 'warn' | 'error';