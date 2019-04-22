---
id: installation
title: Installation
sidebar_label: Installation
hide_title: true
---

# Installation

Cyan can be installed into your project by running:

```bash
npm install --save-dev @helpscout/cyan
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.

## Setup with Jest

In your project's test setup files (declared in [`setupFiles`](https://jestjs.io/docs/en/configuration#setupfiles-array), or [`setupFilesAfterEnv`](https://jestjs.io/docs/en/configuration#setupfilesafterenv-array), add the `setupTests` function from Cyan.

```js
// ./scripts/setupTests.js
import { setupTests } from '@helpscout/cyan'

// Setup Cyan for testing
setupTests()
```

Alternatively, you can do the following if you prefer `require`:

```js
// ./scripts/setupTests.js
const { setupTests } = require('@helpscout/cyan')

// Setup Cyan for testing
setupTests()
```

That's it! Cyan is now ready to be used with Jest.
