Создать форму регистрации пользователя с валидацией полей.

[Пример]()

- Поле имя

  - обязательное
  - минимум 3 символа
  - максимум 20 символов
  - Начинается с большой буквы

- Поле пароль
  - обязательное
  - минимум 6 символов
  - максимум 20 символов

<br/>

```html
<main>
  <input type="text" id="name" />

  <input type="password" id="password" />

  <button>Login</button>
</main>
```

```js
class Register {
  name = document.getElementById("name");
  password = document.getElementById("password");
  button = document.querySelector("button");

  constructor() {}

  init() {
    this.button.addEventListener("click", this.handleLogin);
    this.name.addEventListener("change", this.handleNameChange);
    this.password.addEventListener("change", this.handlePasswordChange);
  }

  handleLogin = () => {};

  handleNameChange = (event) => {};

  handlePasswordChange = (event) => {};
}

new Register();
```
