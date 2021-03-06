# UUID

![npm](https://img.shields.io/npm/v/@smakss/uuid) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/uuid) ![NPM](https://img.shields.io/npm/l/@smakss/uuid) ![npm](https://img.shields.io/npm/dt/@smakss/uuid) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/uuid)

In order to create a unique id, you need to generate a unique string so the best way for it as [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) said is to use UUID. This package will generate a unique id according to RFC 4122 schema in pure js. The main source of this project is based on the StackOverflow community wiki. 

<sub>For the sake of compatibility it do not use [crypto](https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto) anymore since the `v1.1.2`.</sub>

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/uuid
or
yarn add @smakss/uuid
```

to include it with common js module you should do this:

```js
var uuid = require('@smakss/uuid');
```

and to include it with ECMAscript module you can simply do this one:

```js
import uuid from '@smakss/uuid';
```

then to use it within your application you can do it just like this:

```js
uuid(); 

// Result: '289c653f-6c89-416c-8d82-c03f7e47340c'
```

## Demo

You can check the [working demo](https://runkit.com/smakss/uuid) in runkit.