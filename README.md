

# ✅ **1. Statement Coverage (% Stmts)**

**Definition:**
How many **individual statements** in your code were executed at least once.

### Example Code:

```ts
function add(a, b) {
  const result = a + b;   // Statement 1
  return result;          // Statement 2
}
```

### Example Test:

```ts
import { expect, test } from "vitest";
import { add } from "./add";

test("adds numbers", () => {
  expect(add(1, 2)).toBe(3);
});
```

### Coverage Result:

* Statement 1 executed → ✔️
* Statement 2 executed → ✔️

**Statement Coverage = 100%**

If you never call `add()`, coverage would be **0%** because no statements run.

---

# ✅ **2. Branch Coverage (% Branch)**

**Definition:**
How many **paths** inside control structures (like `if`, `?:`, `&&`, `||`) have been executed.

### Example:

```ts
function isPositive(x) {
  if (x > 0) {       // Branch A (true), Branch B (false)
    return "yes";
  } else {
    return "no";
  }
}
```

### Test Case:

```ts
test("positive", () => {
  expect(isPositive(5)).toBe("yes");
});
```

### Branch Coverage:

* TRUE branch executed ✔️
* FALSE branch **not executed** ❌

**Branch Coverage = 50%**

If you add:

```ts
expect(isPositive(-1)).toBe("no");
```

Then branch coverage becomes **100%**.

---

# ✅ **3. Function Coverage (% Funcs)**

**Definition:**
How many **functions** were called by your tests.

### Example:

```ts
export function greet(name) {   // Function 1
  return "Hello " + name;
}

export function sayBye(name) { // Function 2
  return "Bye " + name;
}
```

### Test:

```ts
test("greet works", () =>
  expect(greet("Sam")).toBe("Hello Sam"));
```

### Function Coverage:

* greet() called → ✔️
* sayBye() never called → ❌

**Function Coverage = 50%**

---

# ✅ **4. Line Coverage (% Lines)**

**Definition:**
How many **lines** of code have been executed.

Differs from statement coverage because a single line can contain multiple statements or conditions.

### Example:

```ts
const x = 1; const y = 2;  // Two statements on one line
return x + y;              // One line, one statement
```

If tests only use `x` but never run `return x + y`, you might get:

```
Statement Coverage: 50%
Line Coverage: 50%
```

But if a complex line has multiple statements and only some run, line coverage may differ.

---

# 📌 **Putting All Coverage Together With a Real Example**

Suppose you have this function:

```ts
export function calculate(n) {
  if (n > 10) {                // Branch 1 (true) / Branch 2 (false)
    return "big";
  }

  if (n === 0) {               // Branch 3 (true) / Branch 4 (false)
    return "zero";
  }

  return "small";              // Always executes if the above don't
}
```

### Test:

```ts
test("case: big", () => {
  expect(calculate(15)).toBe("big");
});
```

### Coverage Breakdown:

| Metric         | Actual Coverage | Why                                            |
| -------------- | --------------- | ---------------------------------------------- |
| **Statements** | ❌ Some missed   | Only executed statements inside the first `if` |
| **Branches**   | ❌ 25%           | Only (n > 10) true path ran                    |
| **Functions**  | ✔️ 100%         | The single function was called                 |
| **Lines**      | ❌ Not all       | Lines containing the second `if` not executed  |

---

# 🎯 **Coverage Summary in Plain English**

| Coverage Type  | What It Measures             | Example                 |
| -------------- | ---------------------------- | ----------------------- |
| **Statements** | Did every *instruction* run? | `a + b`, `const x = 1`  |
| **Lines**      | Did every *line* run?        | Line 10, line 11, etc.  |
| **Branches**   | Did every *path* run?        | `if`, `else`, ternaries |
| **Functions**  | Did every *function* run?    | `add()`, `calculate()`  |




# Assertions

when writing tests, we often need to check that values meet certain conditions


`expect(value)`
The arg should be the value that your code produces

You will use expect along with a matcher fuc to assert sthg about a value

- `https://jestjs.io/docs/using-matchers`
- `https://github.com/testing-library/jest-dom`




# What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

# What not to test?

- Implementation details
- Third party code
- Code that is not important from a user point of view

# RTL Queries

- Every test we write generally involves the following basic steps

  1. Render the component
  2. Find an element rendered by the component
  3. Assert against the element found in step 2 which will pass or fail the test
 



 # Priority order for queries

 - Your test should resemble how users interact with your code as much as possible

 1. getByRole
 2. getByLabelText
 3. getByPlaceholderText
 4. getByText
 5. getByDisplayValue
 