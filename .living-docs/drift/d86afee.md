# Living Docs — documentation drift

**Repository:** u2007007/web-testing
**Commit:** [`d86afee`](https://github.com/u2007007/web-testing/commit/d86afeeb38270ae4ea7f13b18ce0c915f46afa1b)
**Detected at:** 2026-05-18T09:46:42.720Z

## Summary

| File | Symbol | Commit | Reason |
| --- | --- | --- | --- |
| `utils.js` | add | [d86afee](https://github.com/u2007007/web-testing/commit/d86afeeb38270ae4ea7f13b18ce0c915f46afa1b) | Function signature changed to accept three parameters (a, b, c) and returns sum of all three, but existing JSDoc only documents two parameters and sum of a and b. |

## `utils.js`

| Field | Value |
| --- | --- |
| Symbol | add |
| Project ID | `o3B70aL4GTMIdW3QI4aq` |
| Drift doc ID | `utils.js` |
| File at commit | [view](https://github.com/u2007007/web-testing/blob/d86afeeb38270ae4ea7f13b18ce0c915f46afa1b/utils.js) |

### What drifted

Function signature changed to accept three parameters (a, b, c) and returns sum of all three, but existing JSDoc only documents two parameters and sum of a and b.

### Before

_No stored living doc — drift detected from inline JSDoc in the diff._

### After (proposed JSDoc)

~~~js
/**
 * Adds three numbers.
 * @param a - First number
 * @param b - Second number
 * @param c - Third number
 * @returns Sum of a, b, and c
 */
~~~
