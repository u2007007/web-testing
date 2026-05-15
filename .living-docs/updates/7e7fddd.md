# Living Docs — AI analysis

This pull request was opened automatically from commit `7e7fddd`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.js`

- **Symbol:** sum
- **Changed:** true
- **Drift detected:** true

### Reason

Function renamed from 'add' to 'sum' and parameter count reduced from three to two. The existing documentation and inline JSDoc still describe a three-parameter function, which is now inaccurate.

### Proposed documentation

~~~ts
/**
 * Adds two numbers.
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
~~~
