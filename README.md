<p align="center">
    <img src="https://raw.githubusercontent.com/jakehamilton/leverage/master/.md-assets/logo.png" width="120" height="120" alt="Leverage Logo">
</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/@leverage/core.svg?style=for-the-badge">
    <img src="https://img.shields.io/travis/jakehamilton/leverage.svg?style=for-the-badge">
    <img src="https://img.shields.io/coveralls/github/jakehamilton/leverage.svg?style=for-the-badge">
    <img src="https://img.shields.io/badge/semantic_release_🚀📦-enabled-brightgreen.svg?style=for-the-badge">
    <img src="https://img.shields.io/badge/made_with-love-ff69b4.svg?style=for-the-badge">
</p>

## What is Leverage?

👩‍💻 Leverage is a pattern you can use to build your next application.

# What can you create with Leverage?

+ [A HTTP server](https://github.com/jakehamilton/leverage-plugin-http)
+ [A chat bot](https://github.com/jakehamilton/leverage-plugin-discord)
+ [A WebSocket server](https://github.com/jakehamilton/leverage-plugin-websocket)
+ A MIDI interface
+ 👩💭 Anything else you can imagine!

## Install

Leverage's core library can be installed with one command:

```bash
yarn add @leverage/core # or npm install
```

## Getting Started

Let's start by creating a "Hello World" HTTP server.

### Install Dependencies

You will need the Leverage core library as well as an HTTP plugin.

```bash
yarn add @leverage/core @leverage/plugin-http # or npm install
```

### Hello World

Now, we will write an HTTP component for our plugin to install:

```typescript
import { Manager } from '@leverage/core';
import { HTTP, HTTPComponent } from '@leverage/plugin-http';

const manager = new Manager();
const http = new HTTP();

const component: HTTPComponent = {
    is: 'component',
    type: 'http',
    config: {
        http: {
            path: '/',
            method: 'get'
        }
    },

    http (request, response) {
        response.send('Hello World');
    }
}

manager.add(http, route);

http.listen(8080);
```

## Want To Dig In Deeper?

Check out [the wiki](https://github.com/jakehamilton/leverage/wiki)!

Learn from example applications:

+ *coming soon*

# Roadmap

Most (if not all) roadmap items are tracked on [the project board](https://github.com/jakehamilton/leverage/projects/2).
