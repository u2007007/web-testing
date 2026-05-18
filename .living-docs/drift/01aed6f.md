# Living Docs — documentation drift

**Repository:** u2007007/web-testing
**Commit:** [`01aed6f`](https://github.com/u2007007/web-testing/commit/01aed6fd74dea1bc28eebe4444cfd16fdfd10347)
**Detected at:** 2026-05-18T10:28:10.459Z

## Summary

| File | Symbol | Commit | Reason |
| --- | --- | --- | --- |
| `utils.js` | add | [01aed6f](https://github.com/u2007007/web-testing/commit/01aed6fd74dea1bc28eebe4444cfd16fdfd10347) | The .living-docs file and inline JSDoc both describe a three-parameter function, but the diff reduces the function to two parameters. Documentation is stale. |

## `utils.js`

| Field | Value |
| --- | --- |
| Symbol | add |
| Project ID | `N2Y45bTdp4O3qKNYrV5z` |
| Drift doc ID | `utils.js` |
| File at commit | [view](https://github.com/u2007007/web-testing/blob/01aed6fd74dea1bc28eebe4444cfd16fdfd10347/utils.js) |

### What drifted

The .living-docs file and inline JSDoc both describe a three-parameter function, but the diff reduces the function to two parameters. Documentation is stale.

### Before

_No stored living doc — drift detected from inline JSDoc in the diff._

### After (proposed JSDoc)

~~~js
/**
 * Adds two numbers together.
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
~~~
