# eslint-import-uuid-test

See  [import-js/eslint-plugin-import#2685](https://github.com/import-js/eslint-plugin-import/issues/2935).

## Getting started

```powershell
# Ensure you have installed yarn package manager (e.g., with `npm i -g yarn`)
# then
PS > yarn
PS > yarn lint
```
## What you will see

```log
\eslint-import-uuid-test\src\index.ts
  3:8  error  No exported names found in module './buzz'  import/namespace      <-- ???
  4:8  error  No exported names found in module './foo'   import/namespace      <-- Expected

✖ 2 problems (2 errors, 0 warnings)
```
