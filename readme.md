# How to fix the multiple-instances of React error when using linked NPM modules that import React as a peer dependency

## Back-link your linked module's React dependency back to your application's React

In `Example` app that you are receiving the multiple-version error:

- Go to `node_modules/react`
- Run `yarn link`

In your linked module `node_modules/frontend-common` that also uses React:

- Run `yarn link react`

This will result in both React instances resolving to the same file (your app's `node_modules/react` import)

## and the same operation for your linked module's `react-router-dom` dependency

## Use Rescripts (secondary)

Rescripts is great. Because you can do this:

- `yarn add @rescripts/cli`
- Replace your calls to react-scripts with [rescript calls](https://github.com/harrysolovay/rescripts#1-replace-react-scripts-calls-with-rescripts-calls)
- Add this file to the root of your project:

`.rescriptsrc.js`:

```js
const path = require("path");
const resolveFrom = require("resolve-from");

const fixLinkedDependencies = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      react$: resolveFrom(path.resolve("node_modules"), "react"),
      "react-dom$": resolveFrom(path.resolve("node_modules"), "react-dom")
    }
  };
  return config;
};

module.exports = [fixLinkedDependencies];
```

- Run `yarn start`
