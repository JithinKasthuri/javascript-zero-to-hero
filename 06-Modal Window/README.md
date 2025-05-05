# Key Takeaways

- In `classList.add` or `classList.remove`, don't mention the class name starting with `.`, mention without `.`
- Let us assume, we have repeated code like below -

  ```js
  btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  ```

  We can move the repeated code into a function and pass it inside event listener -

  ```js
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnCloseModal.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);
  ```

  This works fine. However, we can't directly call the function inside event listener -

  ```js
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnCloseModal.addEventListener("click", closeModal()); //❌  Not the correct way to use function inside event listener.
  overlay.addEventListener("click", closeModal()); //❌  Not the correct way to use function inside event listener.
  ```

  In the above code snippet, the closeModal function is called immediately when the javascript runs. It is not called when the button is clicked.

- Keyboard Events: `keydown`, `keypress`, and `keyup`

  | Event      | When it Fires                  | Repeats on Hold | Captures All Keys | Status         |
  | ---------- | ------------------------------ | --------------- | ----------------- | -------------- |
  | `keydown`  | When key is pressed            | ✅ Yes          | ✅ Yes            | ✅ Recommended |
  | `keypress` | After `keydown` for characters | ✅ Yes          | ❌ No             | ❌ Deprecated  |
  | `keyup`    | When key is released           | ❌ No           | ✅ Yes            | ✅ Recommended |

  ### Notes:

  🔹 **Use `keydown`** to detect when a key is pressed.\
   🔹 **Use `keyup`** to detect when a key is released.\
   ⚠️ **Avoid `keypress`**, as it is deprecated and may not be supported in all browsers.

- For any event that is captured by an event listener, the function that is mentioned in after the event, will have access to an event object. We can use that in JS. For example, with below code we cna see which key was pressed. -
  ```js
  document.addEventListener("keydown", function (e) {
    console.log(e.key);
  });
  ```
