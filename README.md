# scroll lock
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/scroll-lock/nodejs.yml?style=flat-square)](https://github.com/substrate-system/scroll-lock/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/scroll-lock?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/scroll-lock)](https://packagephobia.com/result?p=@substrate-system/scroll-lock)
[![gzip size](https://img.shields.io/bundlephobia/minzip/@substrate-system/scroll-lock?style=flat-square)](https://bundlephobia.com/package/@substrate-system/scroll-lock)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


Prevent scrolling programmatically, useful for things like modal windows.

Originally [seen in shoelace](https://github.com/shoelace-style/shoelace/blob/next/src/internal/scroll.ts).

[See a live demo](https://substrate-system.github.io/scroll-lock/)

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [Use](#use)
  * [Example](#example)
- [Modules](#modules)
  * [ESM](#esm)
  * [Common JS](#common-js)
  * [pre-built JS](#pre-built-js)
- [CSS](#css)
  * [Import](#import)

<!-- tocstop -->

</details>

## Install

```sh
npm i -S @substrate-system/scroll-lock
```

## Use

### Example
```js
import {
    lockBodyScrolling,
    unlockBodyScrolling
} from '@substrate-system/scroll-lock'
import '@substrate-system/scroll-lock/css'

document.getElementById('lock')?.addEventListener('click', ev => {
    ev.preventDefault()
    lockBodyScrolling(document.body)
    console.log('lock')
})

document.getElementById('unlock')?.addEventListener('click', ev => {
    ev.preventDefault()
    unlockBodyScrolling(document.body)
    console.log('unlocked')
})

```


## Modules

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import {
    lockBodyScrolling,
    unlockBodyScrolling
} from '@substrate-system/scroll-lock'
```

### Common JS
```js
require('@substrate-system/scroll-lock')
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/scroll-lock/dist/module.min.js ./public
```

#### HTML
```html
<script type="module" src="./module.min.js"></script>
```

## CSS

This module depends on CSS.

### Import

```js
import '@substrate-system/scroll-lock/css'
```

Or minified:
```js
import '@substrate-system/scroll-lock/css/min'
```
