# Living Docs — AI analysis

This pull request was opened automatically from commit `cf71c7b`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.js`

- **Symbol:** add
- **Changed:** true
- **Drift detected:** true

### Reason

The function signature changed from three parameters (a, b, c) to two (a, b), and the return value changed from a+b+c to a+b. The stored existing documentation still describes three parameters and sum of three numbers, which is now inaccurate. The inline JSDoc in the diff is accurate.

### Proposed documentation

~~~ts
/**
 * Adds two numbers together.
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
~~~
