# Test Driven Development - The Basics

## Objectives

To understand test driven development and the basics of testing in JavaScript (eventually TypeScript)

## File Setup

- Create project using vite with a vanilla JavaScript template
- Install jest
- Install @types/jest to give intellisense for all of the matchers built into jest
- Create jsconfig.json file and add ..

```
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

## Testing with JavaScript

### The describe function

```
describe(name,fn)
```

Creates a block that groups several tests (related) together.

## When to use toEqual() vs toBe()?

toEqual() will check all properties of object instances ("deep equality")
toBe() will compare primitive values or to check referential identity of object instances.

## JEST Setup and Teardown Helper Functions

```
beforeEach(fn, timeout)
```
## E2E Testing
Different to unit test as it will simulate the interaction of user with the ui.

cypress is a good tool to simulate E2E testing.
```
npm install cypress -D
```
