import logUpdate from 'log-update';
import { EditableLog } from './EditableLog.ts';
import type { LogType, AnyMessage } from './types.ts';

/**
 * Represents a console that supports editable logs.
 */
export class EditableConsole {
    /** Array of editable logs. */
    logs: EditableLog[] = [];
    /** Cached string of the last rendered log output. */
    lastLogString: string = '';

    /**
     * Adds a new log entry with the specified type and messages.
     *
     * @param type - The type of log ('info', 'warn', or 'error').
     * @param messages - The messages to log.
     * @returns The newly created editable log.
     */
    private addLog(type: LogType, messages: AnyMessage[]) {
        const editableLog = new EditableLog(this, type, messages);

        this.logs.push(editableLog);

        this.render();

        return editableLog;
    }

    /**
     * Removes a log entry from the console.
     *
     * @param log - The log to remove or its index.
     */
    removeLog(log: EditableLog | number) {
        const i = log instanceof EditableLog ?
            this.logs.indexOf(log) : log;

        if (i === -1) return;

        this.logs.splice(i, 1);

        this.render();
    }

    /**
     * Logs an informational message.
     *
     * @param messages - The messages to log.
     * @returns The created editable log.
     */
    log(...messages: AnyMessage[]) {
        return this.addLog('info', messages);
    }

    /**
     * Logs a warning message.
     *
     * @param messages - The messages to log.
     * @returns The created editable log.
     */
    warn(...messages: AnyMessage[]) {
        return this.addLog('warn', messages);
    }

    /**
     * Logs an error message.
     *
     * @param messages - The messages to log.
     * @returns The created editable log.
     */
    error(...messages: AnyMessage[]) {
        return this.addLog('error', messages);
    }

    /**
     * Renders the current logs to the console.
     * Uses caching to avoid unnecessary re-renders.
     */
    render() {
        const newLogString = this.toString();
        
        if (newLogString === this.lastLogString) return;

        this.lastLogString = newLogString;
        
        logUpdate(newLogString);
    }

    /**
     * Converts all logs to a single string representation.
     *
     * @returns The string representation of all logs.
     */
    toString() {
        return this.logs.map((log) => log.toString()).join('\n');
    }
}