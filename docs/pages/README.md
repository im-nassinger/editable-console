**editable-console**

***

# editable-console

**editable-console** is a runtime-agnostic logging utility that allows you to create and modify console output dynamically. It's available both as an npm package and as a jsr package.

## Installation

### [npm](https://www.npmjs.com/package/editable-console)

```bash
npm install editable-console
```

### [jsr](https://jsr.io/@nassinger/editable-console) (with Deno)

```bash
deno add jsr:@nassinger/editable-console
```

## Usage

```ts
import { EditableConsole } from 'editable-console'; // or 'jsr:@nassinger/editable-console'

const console = new EditableConsole();

const loading = console.warn('loading...');
const greeting = console.log('hello');

setTimeout(() => {
    // removes the first log:
    loading.remove();

    // edits the second log:
    greeting.edit('hello world!');
}, 1000);
```

## Documentation

for full documentation, visit [editable-console docs](https://nassinger.com/projects/editable-console/docs/pages/README.html).

## License

MIT
