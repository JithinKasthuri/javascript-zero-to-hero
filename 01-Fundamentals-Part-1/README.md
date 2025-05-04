# JavaScript Variable Naming Conventions

This guide explains the standard naming conventions to follow for clean, professional JavaScript code.

---

### 📌 1. Use **camelCase** for Variables and Functions

- Start with a lowercase letter.
- Capitalize the first letter of each subsequent word.

```javascript
let userName = "John";
function getUserProfile() {}
```

---

### 📌 2. Use **PascalCase** for Classes and Constructor Functions

- Start each word, including the first, with a capital letter.

```javascript
class UserProfile {
  constructor(name) {
    this.name = name;
  }
}
```

---

### 📌 3. Use **UPPERCASE_SNAKE_CASE** for Constants

- Use only uppercase letters and underscores `_` between words.

```javascript
const API_BASE_URL = "https://api.example.com";
const MAX_RETRIES = 5;
```

---

### 📌 4. Variable Names Should Be **Descriptive and Meaningful**

- Avoid single-letter names unless used in very short loops (like `i`, `j`, etc.).
- Prefer clarity over cleverness.

```javascript
let userAge = 25; // ✅ Good
let a = 25; // ❌ Bad
```

---

### 📌 5. Do **Not Start** Variable Names with Numbers

- Starting with a number causes a syntax error.

```javascript
let user2 = "Tom";  // ✅ OK
let 2user = "Tom";  // ❌ Error
```

---

### 📌 6. Do **Not Use Reserved Keywords** as Variable Names

- Avoid names like `class`, `return`, `function`.

```javascript
let className = "Physics"; // ✅ OK
let return = 5;            // ❌ Error
```

---

### 📌 7. Prefer **Nouns for Variables** and **Verbs for Functions**

- Variables usually represent things (nouns).
- Functions usually represent actions (verbs).

```javascript
let emailList = [];
function sendEmail() {}
```

---

### 📌 8. Use Consistent **Prefixes/Suffixes** for Booleans

- Use prefixes like `is`, `has`, `can`, or `should` to make booleans self-explanatory.

```javascript
let isLoggedIn = true;
let hasProfilePicture = false;
```

---

### 📌 9. Avoid Abbreviations (Unless Very Common)

- Full words improve readability and maintainability.

```javascript
let numberOfUsers = 100; // ✅ Good
let numUsr = 100; // ❌ Bad
```

---

## ⚡ Quick Summary Table

| Type      | Convention           | Example                    |
| --------- | -------------------- | -------------------------- |
| Variables | camelCase            | `userName`, `emailList`    |
| Functions | camelCase            | `getUserProfile()`         |
| Classes   | PascalCase           | `UserProfile`, `OrderItem` |
| Constants | UPPERCASE_SNAKE_CASE | `MAX_RETRIES`, `API_URL`   |

---

## ✅ Best Practices Checklist

- [x] Use `camelCase` for variables and functions.
- [x] Use `PascalCase` for classes and constructors.
- [x] Use `UPPERCASE_SNAKE_CASE` for constants.
- [x] Prefer full words over abbreviations.
- [x] Avoid using reserved keywords.
- [x] Prefix boolean variables with `is`, `has`, `can`, or `should`.
- [x] Write descriptive and meaningful names.
- [x] Start names with letters (not numbers).
- [x] Be consistent across the project.

---

# 🧩 JavaScript Data Types

In JavaScript, every value belongs to one of two main categories: **Primitive** or **Object** types.

---

### 📚 Categories of Data Types

- **Primitive Types**: Basic types; immutable 🧱
- **Object Types**: Complex, mutable collections of properties 🏗️

---

### 🎯 7 Primitive Types

1. **🔢 Number**

   - Floating point numbers
   - Used for decimals and integers

   ```javascript
   let age = 23;
   let price = 19.99;
   ```

2. **📝 String**

   - Sequence of characters
   - Used for text

   ```javascript
   let firstName = "John";
   ```

3. **🔍 Boolean**

   - Logical type that can only be `true` or `false`
   - Used for taking decisions

   ```javascript
   let isAdult = true;
   ```

4. **❓ Undefined**

   - Value taken by a variable that is **not yet defined** (‘empty value’)

   ```javascript
   let score;
   console.log(score); // undefined
   ```

5. **🛑 Null**

   - Also means ‘empty value’ (intentional absence of any object value)

   ```javascript
   let selectedProduct = null;
   ```

6. **🆔 Symbol** (introduced in ES2015)

   - Value that is **unique** and cannot be changed
   - [Not very useful for now]

   ```javascript
   const id = Symbol("id");
   ```

7. **🔢📈 BigInt** (introduced in ES2020)
   - Represents **larger integers** than the `Number` type can hold
   ```javascript
   const largeNumber = 1234567890123456789012345678901234567890n;
   ```

---

### 🧠 Important Concepts

- **Dynamic Typing**:

  - JavaScript is a dynamically typed language 🔄.
  - We do **not** have to manually define the data type of a variable.
  - The data type is determined **automatically at runtime**.

  ```javascript
  let message = "Hello"; // String
  message = 100; // Now Number
  ```

- **Special Case**:

  - `typeof null` returns `"object"` 😲
  - This is a well-known **legacy bug** in JavaScript.

  ```javascript
  console.log(typeof null); // "object"
  ```

---

### 🧹 Quick Summary

| 📂 Category | 🔤 Type   | 🛠️ Example              |
| ----------- | --------- | ----------------------- |
| Primitive   | Number    | `42`, `3.14`            |
| Primitive   | String    | `"Hello World"`         |
| Primitive   | Boolean   | `true`, `false`         |
| Primitive   | Undefined | `let x;`                |
| Primitive   | Null      | `let y = null;`         |
| Primitive   | Symbol    | `Symbol("id")`          |
| Primitive   | BigInt    | `12345678901234567890n` |
| Object      | Object    | `{ name: "John" }`      |

---

# Basics of let, const and var

### 📌 let

- Block-scoped `{}`.
- Can be updated, but **not re-declared** in the same scope.

  ```javascript
  let age = 25;
  age = 26; // ✅ Allowed
  ```

### 📌 const

- Block-scoped `{}`.
- Cannot be updated or re-declared.
- Must be initialized when declared.

  ```javascript
  const birthYear = 1995;
  birthYear = 1996; // ❌ Error
  ```

  **Note:** Objects and arrays declared with const can still be mutated.

  ```javascript
  const person = { name: "John" };
  person.name = "Doe"; // ✅ Allowed
  ```

### 📌 var

- Function-scoped `function(){}`.
- Can be updated and re-declared.

  ```javascript
  var job = "teacher";
  job = "engineer"; // ✅ Allowed
  ```

**NOTE:** Use let and const in modern JavaScript. \
**NOTE:** If you assign a value to a variable without declaring it (without let, const, or var), JavaScript will implicitly create it as a global variable, even if you are inside a function or block. This can create unwanted bug in the code.

# Operator Precedence in JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

---

# JavaScript: Type Conversion & Coercion

---

### 📚 Type Conversion (Explicit)

You manually **convert** a value from one type to another using functions like `String()`, `Number()`, and `Boolean()`.

```javascript
// String Conversion
const inputYear = 1991;
console.log(String(inputYear)); // '1991'

// Number Conversion
console.log(Number("1991")); // 1991
console.log(Number("hello")); // NaN
console.log(typeof NaN); // number

// Boolean Conversion
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
```

### 🎯 Type Coercion (Implicit)

JavaScript automatically converts types behind the scenes when operating on mixed types.

```javascript
// String Coercion
console.log("I am " + 23 + " years old"); // 'I am 23 years old'

// Number Coercion
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log(3 + 2 + 5 + "1"); // 101
console.log(3 + 2 + 5 - "1"); // 9
```

### 🔥 Important Gotchas

- Number('abc') ➔ NaN
- Boolean('') ➔ false, Boolean(' ') ➔ true
- `undefined` coerces to `NaN` in numeric operations.
- `null` coerces to 0 in numeric operations.
  ```javascript
  console.log(null + 1); // 1
  console.log(undefined + 1); // NaN
  ```

---

# Falsy Values in JS

These are values that evaluate to `false` when used in a boolean context (For example - conditions like if-else, or Boolean() function) -

1. false
2. 0
3. NaN
4. undefined
5. ''
6. null

---

# == vs ===

- == (**Loose Equality**) \
  Compares two values after converting them to a common type (type coercion).
  May lead to unexpected results if types differ -

  ```javascript
  "5" == 5; // true (string '5' is converted to number 5)
  null == undefined; // true
  0 == false; // true
  ```

- === (**Strict Equality**) \
  Compares both value and type.

  No type conversion happens.

  Safer and more predictable.

  ```javascript
  "5" === 5; // false (different types: string vs number)
  0 === false; // false (number vs boolean)
  5 === 5; // true
  ```

**Rule of Thumb**:
👉 Always prefer === unless you have a very specific reason to use ==

---

# JavaScript Logical Operators

JavaScript provides three main logical operators used for combining or inverting boolean expressions:

| Operator | Name        | Description                                              | Example (a = true, b = false) | Result |
| -------- | ----------- | -------------------------------------------------------- | ----------------------------- | ------ |
| `&&`     | Logical AND | Returns true if **both** operands are true               | `a && b`                      | false  |
| `\|\|`   | Logical OR  | Returns true if **at least one** operand is true         | `a \|\| b`                    | true   |
| `!`      | Logical NOT | Reverses the boolean value: true becomes false, and vice | `!a`                          | false  |

## Behavior

- `&&` stops evaluation when it finds the first `false`.
- `||` stops evaluation when it finds the first `true`.
- `!` is a unary operator that negates the boolean value.

---

# JavaScript `switch` Statement

The `switch` statement is used to execute one block of code among many options based on the value of an expression.

### Syntax

```js
switch (expression) {
  case value1:
    // Code block
    break;
  case value2:
    // Code block
    break;
  default:
  // Default code block
}
```

**Notes**:

- `expression` is evaluated once and compared with each case value using strict comparison (===).
- The break statement stops the execution of the switch block. Without it, execution will "fall through" to the next case.
- The default block is optional and runs if no case matches.

Example -

```js
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana selected");
    break;
  case "apple":
    console.log("Apple selected");
    break;
  default:
    console.log("Unknown fruit");
}
```

---

# Expressions vs Statements in JavaScript

## Expressions

An **expression** is any valid unit of code that resolves to a value.

Examples:

```js
5 + 3         // evaluates to 8
"Hello"       // evaluates to "Hello"
x = 10        // evaluates to 10
function() {} // function expression
```

Expressions can be used anywhere a value is expected.

## Statements

A statement is an instruction that performs an action but doesn't necessarily return a value.

Examples:

```js
if (x > 5) {
  console.log("x is greater than 5");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let name = "John";
```

Statements define the flow of a program or declare variables, loops, conditions, etc.
