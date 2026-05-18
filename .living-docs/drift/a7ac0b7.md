# Living Docs — documentation drift

**Repository:** u2007007/web-testing
**Commit:** [`a7ac0b7`](https://github.com/u2007007/web-testing/commit/a7ac0b7a9770572f047d892dfb767429e4eed1ed)
**Detected at:** 2026-05-18T10:26:22.960Z

## Summary

| File | Symbol | Commit | Reason |
| --- | --- | --- | --- |
| `utils.js` | add | [a7ac0b7](https://github.com/u2007007/web-testing/commit/a7ac0b7a9770572f047d892dfb767429e4eed1ed) | Inline JSDoc in source file describes two parameters and addition of two numbers, but the diff adds a third parameter 'c' and changes the return to a + b + c. No Firestore or .living-docs documentation exists. Drift detected. |

## `utils.js`

| Field | Value |
| --- | --- |
| Symbol | add |
| Project ID | `N2Y45bTdp4O3qKNYrV5z` |
| Drift doc ID | `utils.js` |
| File at commit | [view](https://github.com/u2007007/web-testing/blob/a7ac0b7a9770572f047d892dfb767429e4eed1ed/utils.js) |

### What drifted

Inline JSDoc in source file describes two parameters and addition of two numbers, but the diff adds a third parameter 'c' and changes the return to a + b + c. No Firestore or .living-docs documentation exists. Drift detected.

### Before

_No stored living doc — drift detected from inline JSDoc in the diff._

### After (proposed JSDoc)

~~~js
/**
 * Adds three numbers together.
 * @param a - First number
 * @param b - Second number
 * @param c - Third number
 * @returns Sum of a, b, and c
 */
~~~
