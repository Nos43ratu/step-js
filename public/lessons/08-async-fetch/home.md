# Домашнее задание

## Задание №1

- Создать функцию `loadUsers`, которая делает запрос на `https://adilkairolla.dev/step/api/example/users` и возвращает массив юзеров.
- Создать функцию `renderUsers`, которая принимает массив юзеров и выводит их на страницу в виде списка.
- Добавить на страницу <input /> который будет фильтровать юзеров по имени. При вводе в поле, должны отображаться только те юзеры, у которых имя начинается с введенного текста.

```html
<input type="text" id="filter" />

<ul id="users"></ul>
```

- в id="users" должны отображаться только те юзеры, у которых имя начинается с введенного текста.

HTML элемента юезра который должен создавать функция `renderUsers`:

```html
<li>
  <h3>Имя: {имя}</h3>
  <p>Емаил: {емаил}</p>
  <p>возраст: {возраст}</p>
</li>
```

```js
function loadUsers() {
  // ваш код
  return users;
}

function renderUsers(users) {
  const usersList = document.getElementById("users");
  // ваш код
  usersList.append(...)
}

renderUsers(loadUsers());

const filter = document.getElementById("filter");
filter.addEventListener("input", () => {
  // ваш код
});
```
