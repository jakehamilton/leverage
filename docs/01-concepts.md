Concepts
========

Ideology
--------

Leverage is built with a few general ideas, here they are:

1. Configuration should be simple (and preferably declarative)
    + Meaning, I should be able to provide a simple JavaScript object in my definitions and just "have things work"
2. Orchestration of endpoints should be a main focus
    + Meaning, we want to make creation of http (and other protocols) endpoints easy to create and organize
3. Plain
    + Meaning, no magical dependencies should be used; let's keep it simple

Core Concepts
-------------

Leverage allows you to describe your server in terms of definitions.
Here are the kinds of definitions that area available:

+ Route
    - A Route is some sort of endpoint on your server that allows you to react to requests made to you
    - Ex: An http endpoint (`/api/quote` for example)
    - Ex: A socket.io event name (`new-message` for example)

+ Service
    - A Service is a module that can be accessed within a Route and can be shared between multiple routes
    - Ex: A state store

+ Middleware
    - A Middleware is used to configure a plugin
    - Ex: An express middleware for the http plugin

+ Plugin
    - A Plugin is used to extend the underlying server in some meaningful way or even add an entirely new server
    - Ex: A socket.io plugin to allow creating socket.io Route definitions
