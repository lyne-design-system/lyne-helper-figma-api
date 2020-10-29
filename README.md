[![Build Status](https://travis-ci.com/lyne-design-system/lyne-helper-figma-api.svg?branch=master)](https://travis-ci.com/lyne-design-system/lyne-helper-figma-api) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-helper-figma-api?label=release)

# Lyne Helper Figma API

Helper methods to simplify requests to the Figma API.

## Usage

### Installation

Install the Figma API Helper with the following command:
```bash
npm install --save-dev lyne-helper-figma-api
```

### Require

```javascript
const figma = require('lyne-helper-figma-api');
```

### Fetch document

```javascript
figma.document('https://api.figma.com/v1/files/YOUR_FILE_ID', 'YOUR_FIGMA TOKEN')
  .then((document) => {
    console.log(document);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Get pages of a document

`figma.pages()` accepts 2 arguments:

`figmaDocument`: the data returned from `figma.document()`

`ignorePattern`: pages that include the ignorePattern in their name will be ignored and not returned.

```javascript
const pages = figma.pages(figmaDocument, ignorePattern);
```

### Get frames of a page

`figma.frames()` accepts 2 arguments:

`page`: one of the pages returned from `figma.pages()`

`ignorePattern`: frames that include the ignorePattern in their name will be ignored and not returned.

```javascript
const page = pages[0];
const frames = figma.frames(page, ignorePattern);
```

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

The package is automatically build and published to npm via Travis CI as soon as pushed to master.
