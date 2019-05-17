# rollup-plugin-varToThis

When exporting a iife from your rollup script, the default is:

```
// config:

{
  output: {
    format: 'iife',
    name: 'bundle',
    file: 'bundle.js'
  },
  ...
}

// bundle.js:

var bundle = [iife]
```

Rollup supports dot notation in the name, so you could do:

```
// config:

{
  output: {
    format: 'iife',
    name: 'root.bundle',
    file: 'bundle.js'
  },
  ...
}

// bundle.js:

this.root.bundle = [iife]
```

I didn't find a way to make to support `this.bundle` however. That's where this plugin comes in:

```
// config:

import varToThis from 'rollup-plugin-varToThis';

{
  output: {
    format: 'iife',
    name: 'bundle',
    file: 'bundle.js'
  },
  input: {
    plugins: [
      varToThis(),
      ...
    ],
    ...
  }
}

// bundle.js:

this.bundle = [iife]
```
