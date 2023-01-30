# To reproduce

`pnpm i` or `npm i`

then

```sh
npm t
```

The test script runs `tsx entry.mjs`, which contains `import should_be_a_function from './imported'`.

Expected behavior: `should_be_a_function` should be a function.

Observed behavior: `should_be_a_function` is an object with a `default` property.
