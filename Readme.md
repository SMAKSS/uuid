# UUID

![npm](https://img.shields.io/npm/v/@smakss/uuid) ![NPM](https://img.shields.io/npm/l/@smakss/uuid) ![npm](https://img.shields.io/npm/dt/@smakss/uuid) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/uuid)

In order to create a unique identifier, it's common to use a UUID (Universally Unique Identifier). This package generates a version 4 UUID compliant with [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) standards using pure JavaScript. The codebase for this project is inspired by the collective wisdom of the StackOverflow community.

UUIDs use the Web Crypto API by default. If secure randomness is unavailable, generation throws instead of silently falling back to predictable values. Passing false to `uuid(false)` opts into `Math.random()` and should only be used for non-security-sensitive identifiers.

Node.js 20 or later is required. In browsers, the Web Crypto API must be available.

## Demo

Check out the working demo on CodeSandbox:

[![View @smakss/uuid](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-uuid-x5cqpb?fontsize=14&hidenavigation=1&theme=dark)

## How it works?

Install the package using npm or pnpm:

```bash
npm install @smakss/uuid
# or
pnpm add @smakss/uuid
```

For CommonJS modules, include it like this:

```javascript
const { default: uuid } = require('@smakss/uuid');
```

For ECMAScript modules, import it as follows:

```javascript
import uuid from '@smakss/uuid';
```

Then, you can use it within your application like this:

```javascript
// Generate a new UUID using cryptographic randomness
const uniqueID = uuid();
console.log(uniqueID); // Outputs: '123e4567-e89b-12d3-a456-426614174000' (example output)
```

<sub>**NOTE:** Each call to `uuid()` generates a new UUID. Secure randomness requires the Web Crypto API.</sub>

## Contributing

Interested in contributing to this project? Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

To ensure a welcoming and positive experience for all contributors and users, we adhere to a [Code of Conduct](./CODE_OF_CONDUCT.md). Your cooperation is appreciated.

## Local playground

This repository includes a Vite playground linked to the package through the pnpm workspace. Try the current local build without publishing a package version:

```sh
pnpm install
pnpm run dev:playground
```

To build the playground app, run this from the package root:

~~~sh
pnpm run build:playground
~~~
