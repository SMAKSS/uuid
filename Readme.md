# UUID

![npm](https://img.shields.io/npm/v/@smakss/uuid) ![NPM](https://img.shields.io/npm/l/@smakss/uuid) ![npm](https://img.shields.io/npm/dt/@smakss/uuid) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/uuid)

In order to create a unique identifier, it's common to use a UUID (Universally Unique Identifier). This package generates a version 4 UUID compliant with [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) standards using pure JavaScript. The codebase for this project is inspired by the collective wisdom of the StackOverflow community.

<sub>**New in version `v2.1.0`**: Added an option to use cryptographic randomness via the Web Crypto API, enhancing the randomness quality of UUIDs where supported. This feature is optional and can be enabled during UUID generation.</sub>

## Demo

Check out the working demo on CodeSandbox:

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
// Generate a new UUID using pseudo-random numbers
const uniqueID = uuid();
console.log(uniqueID); // Outputs: '123e4567-e89b-12d3-a456-426614174000' (example output)

// Generate a new UUID using cryptographic randomness (if supported)
const cryptoID = uuid(true);
console.log(cryptoID); // Outputs a UUID generated with cryptographic randomness
```

<sub>**NOTE:** Each call to `uuid()` generates a unique UUID, so the output will vary with each call. The cryptographic randomness option enhances the unpredictability of UUIDs in environments that support the Web Crypto API.</sub>

## Contributing

Interested in contributing to this project? Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

To ensure a welcoming and positive experience for all contributors and users, we adhere to a [Code of Conduct](./CODE_OF_CONDUCT.md). Your cooperation is appreciated.
