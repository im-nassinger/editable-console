import chalk from 'chalk';
import { EditableConsole } from './EditableConsole.ts';
import { EditableMessage } from './EditableMessage.ts';
import type { LogType, AnyMessage } from './types.d.ts';

/**
 * Represents an individual editable log entry.
 */
export class EditableLog {
    /** The parent console instance. */
    console: EditableConsole;
    /** The type of log entry. */
    type: LogType = 'info';
    /** Array of editable messages contained in this log entry. */
    messages: EditableMessage[] = [];

    /**
     * Creates an instance of EditableLog.
     *
     * @param console - The parent console.
     * @param type - The type of log ('info', 'warn', or 'error').
     * @param messages - The messages to include in the log.
     */
    constructor(console: EditableConsole, type: LogType, messages: AnyMessage[]) {
        this.console = console;
        this.type = type;
        this.messages = this.convertMessages(messages);
    }

    /**
     * Converts provided messages into EditableMessage instances.
     *
     * @param messages - The messages to convert.
     * @returns An array of EditableMessage instances.
     */
    private convertMessages(messages: AnyMessage[]) {
        const editableMessages: EditableMessage[] = [];

        for (const message of messages) {            
            let editableMessage: EditableMessage;

            if (message instanceof EditableMessage) {
                editableMessage = message;
            } else {
                editableMessage = new EditableMessage(message);
            }

            editableMessage.logs.push(this);

            editableMessages.push(editableMessage);
        }

        return editableMessages;
    }

    /**
     * Removes a specific message from this log.
     *
     * @param message - The message or its index to remove.
     */
    removeMessage(message: EditableMessage | number) {
        const i = message instanceof EditableMessage ?
            this.messages.indexOf(message) : message;

        if (i === -1) return;

        this.messages.splice(i, 1);

        if (this.messages.length === 0) this.remove();

        this.console.render();
    }

    /**
     * Edits the current log with new messages.
     *
     * @param messages - The new messages for the log.
     */
    edit(...messages: AnyMessage[]) {
        this.messages = this.convertMessages(messages);
        this.console.render();
    }

    /**
     * Removes this log entry from its parent console.
     */
    remove() {
        this.console.removeLog(this);
    }

    /**
     * Gets the chalk color function based on the log type.
     *
     * @returns A function that applies the appropriate color to the text.
     */
    get colorFn() {
        return {
            info: chalk.white,
            warn: chalk.yellow,
            error: chalk.red
        }[this.type];
    }

    /**
     * Converts this log entry to a string representation.
     *
     * @returns The string representation of the log.
     */
    toString() {
        return this.messages.map((message) => {
            const text = message.toString();

            if (message.isObject) return text;

            return this.colorFn(text);
        }).join(' ');
    }
}