# Test Driven Development - The Basics

## Setup

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

## The describe function

```
describe(name,fn)
```
Creates a block that groups several tests (related) together.

# tdd-basics
