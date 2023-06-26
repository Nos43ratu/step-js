# Домашнее задание

Cоздать приложение, которое будет выводить список пользователей. Данные для списка можно получить по ссылке: https://jsonplaceholder.typicode.com/users методов GET

Задача в этот раз максимально творческая. То есть какие данные пользователя выводить и как их отображать - решать Вам.

Стилизация тоже на Ваше усмотрение.

Вам нужно самим посмотреть какие данные приходят и как их отобразить или в консоли в панели сеть(network)

Вот примеры того как можно отобразить данные:

```html
<ul class="users">
  <li>
    <h2>Leanne Graham</h2>
    <p>Phone: 1-770-736-8031 x56442</p>
    <p>Website: hildegard.org</p>
  </li>
  <li>
    <h2>Ervin Howell</h2>
    <p>Phone: 010-692-6593 x09125</p>
    <p>Website: anastasia.net</p>
  </li>
  <ul />
</ul>
```

```js
function getUsers() {
    const users = fetch() ...

    return users;
}

function renderUsers() {
    const users = getUsers();

    ...
}

renderUsers();
```
