# 🔐 JavaScript Strict Mode

**Strict Mode** is a way to opt in to a safer, cleaner version of JavaScript. It helps catch common coding mistakes and prevents unsafe actions.

### ✅ How to Enable Strict Mode

To enable strict mode, add the following line at the top of your script or function:

```js
"use strict";
```

Example -

```js
"use strict";
x = 3.14; // ❌ Error: x is not defined
```

Without strict mode, x would be created as a global variable. Strict mode throws an error to prevent this.

### ✅ Where to use Strict mode

We can use it for the entire file or within a function -

```js
"use strict";
// Whole file is in strict mode
```

```js
function myFunction() {
  "use strict";
  // Only this function is in strict mode
}
```

### 🚫 What Does Strict Mode Prevent?

Strict mode helps avoid many silent or risky JavaScript behaviors by throwing errors. Here are detailed examples:

---

#### 1. ❌ Using Undeclared Variables

```js
"use strict";
x = 10; // ❌ ReferenceError: x is not defined
```

#### 2. ❌ Assigning to Read-only Properties

```js
"use strict";
const obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });
obj.prop = 100; // ❌ TypeError: Cannot assign to read-only property
```

#### 3. ❌ Deleting Variables, Functions, or Arguments

```js
"use strict";
let x = 5;
delete x; // ❌ SyntaxError: Delete of an unqualified identifier in strict mode
```

#### 4. ❌ Duplicating Parameter Names

```js
"use strict";
function sum(a, a, c) {
  return a + c;
}
// ❌ SyntaxError: Duplicate parameter name not allowed in strict mode
```

#### 5. ❌ Using with Statements (disallowed)

```js
"use strict";
with (Math) {
  let x = cos(2);
}
// ❌ SyntaxError: Strict mode code may not include a with statement
```

#### 6. ❌ Assigning to eval or arguments

```js
"use strict";
eval = 5; // ❌ SyntaxError
arguments = []; // ❌ SyntaxError
```

### 7. ❌ Implicit this in Functions (returns undefined)

```js
"use strict";
function showThis() {
  console.log(this); // 👉 undefined instead of the global object
}
showThis();
```

### 8. ❌ Octal Literals

```js
"use strict";
let num = 012; // ❌ SyntaxError: Octal literals are not allowed in strict mode
```

### 9. ❌ Function Declarations Inside Blocks

```js
"use strict";
if (true) {
  function test() {} // ❌ SyntaxError in some browsers
}
```

---

# 🔁 Function Declaration vs Function Expression in JavaScript

Understanding the difference between function declarations and expressions is key to writing clean, predictable JavaScript code.

---

### 📊 Comparison Table

| Feature            | Function Declaration                | Function Expression                      |
| ------------------ | ----------------------------------- | ---------------------------------------- |
| **Syntax**         | `function name() {}`                | `const name = function() {}`             |
| **Hoisting**       | ✅ Yes — usable before it's defined | ❌ No — only usable after the assignment |
| **Naming**         | Must have a name                    | Can be named or anonymous                |
| **Use Case**       | General-purpose functions           | Assign to variables, callbacks, or IIFEs |
| **Self-Invoking?** | ❌ No                               | ✅ Yes (when used as an IIFE)            |

---

### ✅ Function Declaration Example

```js
greet(); // ✅ Works due to hoisting

function greet() {
  console.log("Hello from a function declaration!");
}
```

---

### ❌ Function Expression Example

```js
greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log("Hello from a function expression!");
};
```

---

### 🧠 Named vs Anonymous Function Expressions

```js
const sayHi = function hello() {
  console.log("Hi");
};

sayHi(); // ✅ Works
// hello(); ❌ Error: Not accessible outside
```

---

### ⚡ IIFE (Immediately Invoked Function Expression)

IIFEs work only with function expressions:

```js
(function () {
  console.log("This runs immediately!");
})();
```

---

### 🧵 Summary

- Use **Function Declarations** when you need hoisting.
- Use **Function Expressions** for flexibility (e.g., passing as arguments, callbacks, or defining functions conditionally).

> 🧠 Tip: Prefer `const` for function expressions to avoid accidental reassignment.

---

# 📚 JavaScript Array Methods (Basic)

## 1. `push()`

**Adds** one or more elements to the **end** of an array.

```js
const fruits = ["apple", "banana"];
const result = fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
console.log(result); // 3 (new length of the array)
```

## 2. `pop()`

Removes the last element from an array.

```js
const fruits = ["apple", "banana", "orange"];
const result = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(result); // "orange" (removed item)
```

## 3. `shift()`

Removes the first element from an array.

```js
const fruits = ["apple", "banana", "orange"];
const result = fruits.shift();
console.log(fruits); // ["banana", "orange"]
console.log(result); // "apple" (removed item)
```

## 4. `unshift()`

Adds one or more elements to the beginning of an array.

```js
const fruits = ["banana", "orange"];
const result = fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "orange"]
console.log(result); // 3 (new length of the array)
```

## 5. `indexOf()`

Returns the first index of a specified element. Returns -1 if not found.

```js
const fruits = ["apple", "banana", "orange"];
const index = fruits.indexOf("banana");
console.log(index); // 1

const notFound = fruits.indexOf("grape");
console.log(notFound); // -1
```

## 6. `includes()`

Checks if an array contains a specified element.

```js
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false
```

# 📦 JavaScript: Objects

Objects in JavaScript are collections of **key-value pairs**. They are used to store structured data.

### ✅ Syntax

```javascript
const person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};
```

### 🔍 Accessing Properties

```javascript
console.log(person.name); // Alice
console.log(person["age"]); // 30
```

### ✍️ Modifying Properties

```javascript
person.age = 31;
person.city = "New York"; // Adds a new property
```

### 🔧 Adding Functions to Objects (Methods)

You can define a function inside an object to represent behavior.

```javascript
const user = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Call the method
user.greet(); // Output: Hello, my name is Alice
```

### 🧠 this Keyword

Inside a method, `this` refers to the object itself.

It allows methods to access other properties of the object.

---

# 🔁 JavaScript For Loops

For loops allow you to execute a block of code multiple times.

## ✅ Basic For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
```

### 🔄 Looping Through Arrays

```javascript
const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

### 🔁🔍 Looping Through Objects

Use `for...in` to iterate over object keys:

```javascript
const user = {
  username: "bob",
  role: "admin",
  active: true,
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

Use `Object.entries()` for key-value pairs:

```javascript
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`);
}
```
