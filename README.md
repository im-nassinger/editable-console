# editable-console

**editable-console** is a runtime-agnostic logging utility that allows you to create and modify console output dynamically. It's available both as an npm package and as a jsr package.

## Installation

### npm

```bash
npm install editable-console
```

### jsr (with Deno)

```bash
deno add jsr:@im-nassinger/editable-console
```

## Usage

```ts
import { EditableConsole } from 'editable-console';

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