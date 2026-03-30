# RDJs - Simple HTTP Client for JavaScript/TypeScript

[![npm version](https://img.shields.io/npm/v/rdjs.svg)](https://www.npmjs.com/package/rdjs)
[![Build Status](https://travis-ci.org/DiogenesPolanco/RD.js.svg?branch=master)](https://travis-ci.org/DiogenesPolanco/RD.js)

Simple and lightweight HTTP client library for making AJAX requests. Compatible with ES6+ and TypeScript.

## Installation

```bash
npm install rdjs
# or
yarn add rdjs
```

## Quick Usage

```typescript
import { RDJs } from 'rdjs';

// GET request
RDJs.get('https://api.github.com/users/diogenespolanco/repos')
  .then(response => console.log(response))
  .catch(error => console.error(error));

// POST request
RDJs.post('https://api.example.com/data', { name: 'test' })
  .then(response => console.log(response))
  .catch(error => console.error(error));

// PUT request
RDJs.put('https://api.example.com/data/1', { name: 'updated' })
  .then(response => console.log(response))
  .catch(error => console.error(error));

// DELETE request
RDJs.delete('https://api.example.com/data/1')
  .then(response => console.log(response))
  .catch(error => console.error(error));

// With custom headers
RDJs.get('https://api.example.com/protected', {}, { 
  headers: [{ key: 'Authorization', value: 'Bearer token' }] 
});

// Promise.all - waits for all promises
const p1 = RDJs.get('https://api.github.com/users/diogenespolanco/repos');
const p2 = RDJs.get('https://api.spotify.com/v1/search?q=test&type=artist');

RDJs.all([p1, p2]).then(values => {
  console.log('All done!', values);
}).catch(reason => {
  console.error('Some failed', reason);
});

// Promise.race - returns first settled promise
RDJs.trace([p1, p2]).then(value => {
  console.log('First one done!', value);
});
```

## API

### Methods

- `RDJs.get(url, params?, options?)` - GET request
- `RDJs.post(url, data?, options?)` - POST request
- `RDJs.put(url, data?, options?)` - PUT request
- `RDJs.delete(url, params?, options?)` - DELETE request

### Options

```typescript
interface RequestOptions {
  headers?: Header[];
  async?: boolean;
}

interface Header {
  key: string;
  value: string;
}
```

## Project Setup

```bash
npm install
npm run build
```

## Testing

```bash
npm test
```
