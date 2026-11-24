# TanStack Start: the dev dependency scan fails on a package only a server route imports

`src/routes/api/hello.ts` has only `server.handlers` and imports `node-only`, a package whose `exports` has just a `node` condition.

```sh
npm install
npm run dev
```

The dev server prints:

```
(!) Failed to run dependency scan. Skipping dependency pre-bundling. Error:   Failed to scan for dependencies from entries:
  node_modules/@tanstack/react-start/dist/plugin/default-entry/client.tsx
  src/router.tsx

[plugin vite:dep-scan:resolve]
Error: "." is not exported under the conditions ["module", "browser", "development", "import"] from package node_modules/node-only
```

`/api/hello` still answers. `npx vite build` succeeds and `dist/client` holds no reference to `node-only`.

Workaround: `optimizeDeps: { exclude: ['node-only'] }` in `vite.config.ts`.
