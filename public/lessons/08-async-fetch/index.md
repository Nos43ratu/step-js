# Ассихронность

Асинхронность в JavaScript означает, что код может выполняться параллельно или независимо от других частей программы. В отличие от синхронного кода, который выполняется последовательно, асинхронный код позволяет запускать операции, которые занимают время, без блокировки остальной части программы.

<br/>

Асинхронность в JavaScript особенно полезна при работе с операциями, которые требуют времени, такими как загрузка данных из сети, чтение файлов или выполнение длительных вычислений. Вместо того, чтобы ждать окончания выполнения таких операций, JavaScript может выполнять другие задачи и продолжать работу.

<br/>

## SetTimeout

В JavaScript есть несколько способов создания асинхронного кода. Один из них - использование функции `setTimeout`. Эта функция позволяет запланировать выполнение функции через определенный промежуток времени.

```js
setTimeout(() => {
  console.log("Hello, world!");
}, 1000);
```

<br/>
<br/>

## Fetch

Другой способ создания асинхронного кода - использование функции `fetch`. Эта функция позволяет загружать данные из сети. При этом она не блокирует выполнение остальной части программы.

```js
fetch("https://adilkairolla.dev/step/api/example/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

<br/>
<br/>

## Синтаксис fetch

```js
fetch(url)
  .then((response) => {
    // Код, который выполнится после получения ответа от сервера
    // Вы можете обрабатывать ответ, преобразовывать его в нужный формат, и т.д.
    return response.json();
  })
  .then((data) => {
    // Код, который выполнится после преобразования ответа в JSON
    // Вы можете работать с полученными данными
    console.log(data);
  })
  .catch((error) => {
    // Код, который выполнится в случае возникновения ошибки
    console.log(error);
  })
  .finally(() => {
    // Код, который выполнится в любом случае после завершения операции fetch
    // Вы можете добавить здесь очистку или завершающие действия
  });
```

<br/>
<br/>

## Синтаксис async/await

Синтаксис `async/await` позволяет писать асинхронный код так, как будто он синхронный. Это упрощает чтение и понимание кода.

```js
async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}
```

## Задание 1

Запросить список юзеров с сервера и вывести их на страницу в виде списка.
[Пример](/examples/08-async-fetchy/example-1)

- Создать новое состояние `userListState` c полем `activeUserId`
- Создать функцию `renderUsers`, которая принимает массив юзеров и рендерит их на страницу
  - Каждый юзер должен быть обернут в `div` с классом `user`
  - Внутри `div.user` должны быть:
    - `img` с `src` равным `user.photo`
    - `div.info` с классом `info`
      - `span.name` с именем юзера
      - `span.email` с email юзера
    - `span.role` с ролью юзера
    - При клике на `div.user` должен вызываться метод `setState` у `userListState` с полем `activeUserId` равным `user.id`
- Создать функцию `renderUser`, которая принимает юзера и рендерит его на страницу
  - Юзер должен быть обернут в `div.user-wrapper`
  - Внутри `div.user-wrapper` должны быть:
    - `img` с `src` равным `user.photo`
    - `div.info` с классом `info`
      - `span.name` с именем юзера
      - `span.email` с email юзера
    - `span` с ролью юзера
    - `div` с классом `about`
      - `span` с текстом `About:`
      - `p` с текстом `user.about`
- Создать функцию `loadUsers`, которая делает запрос на `https://adilkairolla.dev/step/api/example/users` и рендерит юзеров на страницу
- Создать функцию `loadUser`, которая делает запрос на `https://adilkairolla.dev/step/api/example/user/${userListState.state.activeUserId}` и рендерит юзера на страницу
- Вызвать функцию `loadUsers` в конце файла
- Вызвать функцию `loadUser` внутри `userListState.listen`

```html
<body>
  <div id="user-list" class="user-list"></div>

  <div id="user"></div>
</body>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  display: flex;
  font-family: sans-serif;
  padding: 16px;
}
.user-list {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 4px;
}
.user-list .user {
  display: flex;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  align-items: center;
}
.user-list .user:hover {
  background-color: #eee;
  cursor: pointer;
}
.user-list .user img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.name {
  font-weight: bold;
  font-size: 18px;
}
.email {
  font-size: 14px;
  color: #666;
}
.user-list .user .role {
  font-size: 14px;
  color: blue;
  margin-left: auto;
}

.user-wrapper {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  max-width: 400px;
}

.user-wrapper img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

p {
  font-style: italic;
}

@media screen and (max-width: 768px) {
  body {
    flex-direction: column;
  }
  .user-wrapper {
    margin-left: 0;
    margin-top: 24px;
    max-width: 100%;
  }
}
```

```js
const userListState = createState();

function renderUsers() {}

function renderUser() {}

function loadUsers() {
    ...
    renderUsers(users);
}

function loadUser() {
    ...
    renderUser(user);
}

userListState.listen(() => loadUser());

loadUsers();
```
