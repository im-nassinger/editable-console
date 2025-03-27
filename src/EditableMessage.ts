import util from 'node:util';
import { EditableLog } from './EditableLog.ts';
import type { PrimitiveMessage } from './types.d.ts';

/**
 * Represents an editable message that can be part of multiple logs.
 */
export class EditableMessage {
    /** The content of the message. */
    content: PrimitiveMessage;
    /** The logs that contain this message. */
    logs: EditableLog[] = [];

    /**
     * Creates an instance of EditableMessage.
     *
     * @param content - The message content.
     */
    constructor(content: PrimitiveMessage) {
        this.content = content;
    }

    /**
     * Edits the content of the message.
     *
     * @param newContent - The new content for the message.
     */
    edit(newContent: PrimitiveMessage) {
        this.content = newContent;

        for (const log of this.logs) log.console.render();
    }

    /**
     * Removes this message from all logs that include it.
     */
    remove() {
        for (const log of this.logs) log.removeMessage(this);
    }

    /**
     * Indicates whether the content is an object.
     *
     * @returns True if the content is an object, false otherwise.
     */
    get isObject() {
        return typeof this.content === 'object';
    }

    /**
     * Converts the message to a string representation.
     *
     * @returns The string representation of the message.
     */
    toString() {
        if (this.isObject) {
            return util.inspect(this.content, { depth: 2, colors: true });
        } else {
            return this.content.toString();
        }
    }
}