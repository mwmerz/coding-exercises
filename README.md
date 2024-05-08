# Coding Exercises
## Introduction
Whether you are preparing to go on your next interview or just trying to sharpen your skills, sites like [LeetCode.com](https://www.leetcode.com) give you a new way to learn and enhance your skills.

This repository is a collection of my solutions to coding examples.

## Guidelines
In an effort to comply with [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#iterators-and-generators), we will use higher-order functions to iterate over arrays.

e.g.
```typescript
// bad
for (let c of s) {}

// good
s.every((c) => {});

// best
const output = s.reduce((acc, cur) => acc + cur, 0)
```
