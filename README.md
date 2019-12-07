# build-your-own-test-framework

This is the companion repository for the book _Build Your Own Test Framework_.

Each starting point consists of two directories: `concise-test`, which is an NPM package containing a test runner, and `todo-example`, which is an example project that has the first package as a dependency.

## Getting started

The five steps are:

1. Upgrade to (or install) the latest Node version
2. Fork this repo and clone it to your local machine
3. Choose the chapter you wish to work on (e.g. `Chapter01`), and then which starting point you need. If you're working through the chapter then its `Start`, or if it's the _Practical Exercises_, use `Exercises`.
4. In a terminal, navigate to your starting point and follow the _Link the projects_ instructions below.

## Link the projects

The `todo-example` project makes use of this new library you'll be building, so we need to link the two so it can be accessed.

In a terminal, follow these instructions:

```bash
cd Chapter01/Start    # choose the starting point that you want
cd concise-test
npm link
cd ../todo-example
npm link concise-test
```

These instructions are also covered in _Chapter 1_ of the book.
