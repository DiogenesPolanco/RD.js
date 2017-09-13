# RDJs - Request for Dummies in JavaScript
====================================

[![Build Status](https://travis-ci.org/DiogenesPolanco/RD.js.svg?branch=master)](https://travis-ci.org/DiogenesPolanco/RD.js)

The Library is designed to be the most agile and simple way to make http calls. It is compatible with es6.


## Instalation
Via Bower, npm  and yarn:

    $ bower install rdjs -save
    $ npm install rdjs -save
    $ yarn add rdjs
    
**Quick usage guide**

Below you can find a quick reference for the most common operations you need to perform to use RDJs.

1- Performing a GET request
```js
// Make a request for all repos
RDJs.get('https://api.github.com/users/diogenespolanco/repos')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
2- Performing a POST request
```js
// Make a request for a user with a given ID
RDJs.post('https://api.github.com/authorizations', {
    "scopes":[
       "public_repo"
    ]
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
3- Performing a PUT request
```js
// Make a request for a user with a given ID
RDJs.put('https://api.github.com/user/whatever', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
3- Performing a DELETE request
```js
// Make a request for a user with a given ID
RDJs.delete('https://api.github.com/user/whatever')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
``` 
4- Performing a RDJs.all fail-fast behaviour
```js
// Make a request for a user with a given ID
var p1 = RDJs.get('https://api.github.com/users/diogenespolanco/repos')
.then(function(response) {
  console.log(response);
});
var p2 = RDJs.get('https://api.spotify.com/v1/search?q=mana&type=artist')
.then(function(response) {
  console.log(response);
});
 

RDJs.all([p1, p2]).then(values => { 
  console.log("Done!!");
}, reason => {
  console.log(reason)
});
``` 
5- Performing a RDJs.trace function returns a operation that is settled the same way as the first passed promise to settle. It resolves or rejects, whichever happens first.

```js
// Make a request for a user with a given ID
var p1 = RDJs.get('https://api.github.com/users/diogenespolanco/repos')
.then(function(response) {
   console.log("github is normal, so it resolves!!");
});
var p2 = RDJs.get('https://api.spotify.com/v1/search?q=mana&type=artist')
.then(function(response) {
   console.log("spotify is faster, so it resolves!!");
});
 

RDJs.trace([p1, p2]).then(values => { 
  console.log("Done trace!!");
}, reason => {
  console.log(reason)
});
``` 

## Project Setup

This project uses [gulp](http://gulpjs.com/) as its build system. 

- Install gulp: `$ npm install -g gulp`

1. Install dependencies: `$ npm install`
2. Build and run: `$ gulp buildrun`
3. Run:`$ npm start`

## Testing

This project usings [mocha](http://mochajs.org/) for unit testing. Install mocha:

- `$ npm install -g mocha`

To compile and test run:

-  `$ gulp && mocha`
 
