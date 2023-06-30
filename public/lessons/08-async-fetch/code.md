# Задание

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

```html
<body>
  <div id="user-list" class="user-list"></div>

  <div id="user"></div>
</body>
```

```js
const userListState = new State({
  activeUserId: null,
});

function renderUsers(users) {
  const wrapper = document.getElementById("user-list");

  users.forEach((user) => {
    const userWrapper = document.createElement("div");
    userWrapper.className = "user";

    userWrapper.onclick = () => {
      userListState.setState({
        activeUserId: user.id,
      });
    };

    userWrapper.innerHTML = `
            <img src='${user.photo}' />
            <div class='info'>
                <span class='name'>${user.name}</span>
                <span class='email'>${user.email}</span>
            </div>

            <span class='role'>
                ${user.role}
            </span>
        `;

    wrapper.appendChild(userWrapper);
  });
}

async function loadUsers() {
  const users = await fetch("https://adilkairolla.dev/step/api/example/users")
    .then((res) => res.json())
    .then((users) => users);

  renderUsers(users);
}

function renderUser(user) {
  const wrapper = document.getElementById("user");

  wrapper.innerHTML = `
                <div class="user-wrapper">
                    <img src='${user.photo}' />

                     <div class='info'>
                        <span class='name'>${user.name}</span>
                        <span class='email'>${user.email}</span>
                    </div>

                    <span>
                        Role: ${user.role}
                    </span>

                    <div>
                        <span>About:</span>
                        <p>${user.about}</p>
                    </div>
                </div>
            `;
}

async function loadUser() {
  const user = await fetch(
    `https://adilkairolla.dev/step/api/example/user/${userListState.state.activeUserId}`
  )
    .then((res) => res.json())
    .then((user) => user);

  renderUser(user);
}

userListState.listen(() => loadUser());

loadUsers();
```
