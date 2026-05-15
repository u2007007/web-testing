# Living Docs — AI analysis

This pull request was opened automatically from commit `a8f7df2`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.js`

- **Symbol:** add
- **Changed:** true
- **Drift detected:** true

### Reason

Function signature changed from two parameters to three, and return now sums three numbers. Inline JSDoc still describes two parameters and sum of two numbers, causing drift.

### Proposed documentation

~~~ts
/**
 * Adds three numbers together.
 * @param a - First number
 * @param b - Second number
 * @param c - Third number
 * @returns Sum of a, b, and c
 */
~~~
