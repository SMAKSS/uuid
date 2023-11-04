# UUID

![npm](https://img.shields.io/npm/v/@smakss/uuid) ![NPM](https://img.shields.io/npm/l/@smakss/uuid) ![npm](https://img.shields.io/npm/dt/@smakss/uuid) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/uuid)

In order to create a unique identifier, it's common to use a UUID (Universally Unique Identifier). This package generates a version 4 UUID compliant with [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) standards using pure JavaScript. The codebase for this project is inspired by the collective wisdom of the StackOverflow community.

<sub>Since version `v1.1.2`, the package does not utilize the [crypto](https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto) API to maximize compatibility across different environments.</sub>

## Demo

You can check the [working demo](https://runkit.com/smakss/uuid) on RunKit.

or

[![View @smakss/uuid](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-uuid-x5cqpb?fontsize=14&hidenavigation=1&theme=dark)

## How it works?

To install the package, run the following command:

```bash
npm i @smakss/uuid
# or
yarn add @smakss/uuid
```

For CommonJS modules, include it like this:

```javascript
const uuid = require('@smakss/uuid');
```

For ECMAScript modules, import it as follows:

```javascript
import uuid from '@smakss/uuid';
```

Then, you can use it within your application like this:

```javascript
// Generate a new UUID
const uniqueID = uuid();
console.log(uniqueID); // Outputs: '123e4567-e89b-12d3-a456-426614174000' (example output)
```

<sub>**NOTE:** Each call to `uuid()` generates a unique UUID, so the output will vary with each call.</sub>

## Contributing

Interested in contributing to this project? Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

To ensure a welcoming and positive experience for all contributors and users, we adhere to a [Code of Conduct](./CODE_OF_CONDUCT.md). Your cooperation is appreciated.
