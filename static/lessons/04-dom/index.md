# DOM

## Задача 1

Создать инпут который будет фильтровать список фруктов по введенному значению.

[Пример](/api/examples/04-dom/example-1)

```html
<main>
  <input type="text" id="search-input" placeholder="search..." />

  <div id="search-results" class="search-results"></div>
</main>
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: white;
}

main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
}

input {
  font-size: 32px;
}

.search-results {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
```

<br/>

```js
const data = [
  "Apple",
  "Orange",
  "Banana",
  "Pineapple",
  "Mango",
  "Strawberries",
  "Watermelon",
  "Kiwi",
  "Peach",
  "Pear",
  "Grape",
  "Cherry",
];
```

<br/>

для проверки наличия строки в другой строке используйте метод `includes`:

```js
const str = "Hello World";
str.includes("Hello"); // true
str.includes("hello"); // false
```

<br />

для перевода строки в нижний регистр используйте метод `toLowerCase`:

```js
const str = "Hello World";
str.toLowerCase(); // 'hello world'
```

<br/>

## Задача 2

Создать список покупок с возможностью добавления и удаления элементов, кнопками выбора всех и снятия выбора со свех предметов корзины.

[Пример](/api/examples/04-dom/example-2)

<br/>

### Отабразить список покупок

```html
<main>
  <div>
    <div class="head">
      <h1>Покупки</h1>
    </div>

    <div id="cart" class="cart"></div>
  </div>
</main>
```

### CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: white;
}

main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  max-width: 700px;
}

h1 {
  font-size: 24px;
  margin: 0;
}

.head {
  display: flex;
  justify-content: space-between;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
```

<br/>

### JS

```js
const data = ["Хлеб", "Молоко", "Сыр"];
```

```html
<label class="cart-item">
  <input type="checkbox" class="cart-item_input" />

  <span class="cart-item_label">Хлеб</span>
</label>
```

```css
.cart-item {
  width: 100%;
  display: flex;
}

.cart-item_input + .cart-item_label {
  font-size: 16px;
}

.cart-item_input:checked + .cart-item_label {
  color: gray;
  text-decoration: line-through;
}
```

<br/>
<br/>

```html
<main>
  <div>
    <div class="head">
      <h1>Покупки</h1>

      <div class="actions">
        <button id="select-all">Select all</button>
        <button id="unselect-all">Unselect all</button>
      </div>
    </div>

    <div id="cart" class="cart"></div>
  </div>
</main>
```

Для выбора всех элементов корзины используйте метод `querySelectorAll`:

```js
const cartItems = document.querySelectorAll(".cart-item");
```

<br/>
<br/>

```html
<main>
  <div>
    <div class="head">
      <h1>Покупки</h1>

      <div class="actions">
        <button id="select-all">Select all</button>
        <button id="unselect-all">Unselect all</button>
      </div>
    </div>

    <div id="cart" class="cart"></div>
  </div>

  <div class="add">
    <h1>Добавить</h1>

    <input id="add-input" type="text" class="add-input" />

    <button id="add-button">Add</button>
  </div>
</main>
```

```css
.add {
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  gap: 8px;
  border: 1px solid black;
  padding: 8px;
}
```

<br/>
<br/>

```html
<main>
  <div>
    <div class="head">
      <h1>Покупки</h1>

      <div class="actions">
        <button id="select-all">Select all</button>
        <button id="unselect-all">Unselect all</button>
        <button id="edit">Edit</button>
      </div>
    </div>

    <div id="cart" class="cart"></div>
  </div>

  <div class="add">
    <h1>Добавить</h1>

    <input id="add-input" type="text" class="add-input" />

    <button id="add-button">Add</button>
  </div>
</main>
```

```css
.cart-item_delete {
  margin-left: auto;
  display: none;
}

.cart-item_delete.active {
  display: block;
}
```
