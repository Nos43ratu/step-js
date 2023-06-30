# Задача

```css
:root {
  --gray-light: #f9fafb;
  --gray-medium: #f3f4f6;
  --gray-dark: #d1d5db;

  --accent-light: #6366f1;
  --accent: #4f46e5;

  --text-light: #6b7280;
  --text-dark: #111827;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: system-ui, sans-serif;
  background: var(--gray-medium);
  height: 100%;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

table {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

thead {
  background-color: var(--gray-light);
}

th {
  text-align: left;
  padding: 14px 12px;
  color: var(--text-dark);
  font-size: 14px;
  font-weight: 600;
}

th:first-of-type {
  padding: 14px 12px 14px 24px;
}

th:last-of-type {
  padding: 14px 24px 14px 12px;
}

tbody {
  border-top: 1px solid var(--gray-dark);
}

tbody > tr {
  border-top: 1px solid var(--gray-dark);
}

td {
  text-align: left;
  padding: 16px;
  color: var(--text-dark);
  font-size: 14px;
}

td:first-of-type {
  padding: 16px 12px 16px 24px;
}

td:last-of-type {
  padding: 16px 24px 16px 12px;
  text-align: end;
}

.title {
  font-weight: 500;
}

.price,
.amount {
  color: var(--text-light);
}

button {
  all: unset;
  background-color: var(--accent);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background: var(--accent-light);
}

button:focus {
  box-shadow: 0 0 0 4px var(--gray-dark);
}

button.delete {
  background-color: transparent;
  color: var(--accent);
}

button.delete:hover {
  color: red;
}

input {
  all: unset;
  padding: 6px 12px;
  border-radius: 6px;
  color: var(--text-dark);
  box-shadow: inset 0 0 0 1px var(--gray-dark), 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

input:focus {
  box-shadow: inset 0 0 0 2px var(--accent), 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

input:invalid {
  box-shadow: inset 0 0 0 2px red, 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

select {
  all: unset;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px var(--gray-dark), 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

select:focus {
  box-shadow: inset 0 0 0 2px var(--accent), 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

label.file {
  all: unset;
  background-color: var(--accent);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

label.file:hover {
  background: var(--accent-light);
}

label.file > input {
  display: none;
}

.status {
  font-weight: 500;
  color: white;
  border-radius: 99999px;
  padding: 4px 8px;
  border-width: 1px;
  border-style: solid;
}
.status.delivered {
  background-color: rgb(240 253 244 / 0.5);
  border-color: rgb(22 163 74 / 0.1);
  color: rgb(21 128 61);
}
.status.canceled {
  background-color: rgb(254, 242, 242, 0.5);
  border-color: rgb(220 38 38 / 0.1);
  color: rgb(185 28 28);
}
.status.delivering {
  background-color: rgb(254 252 232 / 0.5);
  border-color: rgb(202 138 4 / 0.2);
  color: rgb(133 77 14);
}

form {
  background: white;
  padding: 20px 24px;
  gap: 12px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 360px;
  display: flex;
  flex-direction: column;
}

form > *:last-child {
  margin-top: 24px;
}

form > *:first-child {
  margin-bottom: 12px;
}
```

<br/>

```html
<main>
  <div class="head">
    <h1>Students</h1>

    <div>
      <button id="add-student">Add student</button>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Avg mark</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
</main>
```

<br/>

```js
function getItems() {
  const data = window.localStorage.getItem("students");

  if (data) {
    return JSON.parse(window.localStorage.getItem("students"));
  }

  return [];
}

function addItem(item) {
  const items = getItems();

  const newItems = [...items, item];

  window.localStorage.setItem("students", JSON.stringify(newItems));

  renderItems();
}

function removeItem(index) {
  const items = getItems();

  items.splice(index, 1);

  window.localStorage.setItem("students", JSON.stringify(items));
}

const getStudents = () => {
  const data = getItems();

  const body = $("#tbody");

  body.empty("");

  data.forEach((student, index) => {
    const row = $(
      `
        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
          <td>${student.avg_mark}</td>
        </tr>
      `
    );

    row.append(
      $('<td><button class="delete">Delete</button></td>').click(() => {
        removeItem(index);
        getStudents();
      })
    );

    body.append(row);
  });
};

getStudents();

$("#add-student").click(function () {
  const modal = $(`
            <div class="modal">
              <form>
                <h2>Add student</h2>

                <label>
                  Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Age
                  <input type="number" name="age" required />
                </label>
                <label>
                  Avg mark
                  <input type="number" name="avg_mark" required />
                </label>

                <button type="submit">Add</button>
              </form>
            </div>
          `).css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  });

  modal
    .children("form")
    .css({
      backgroundColor: "white",
      padding: "20px 24px",
      gap: "8px",
      borderRadius: "6px",
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      width: "360px",
      display: "flex",
      flexDirection: "column",
    })
    .submit((e) => {
      e.preventDefault();

      const form = $(e.target);

      const name = form.find("input[name=name]").val();
      const email = form.find("input[name=email]").val();
      const age = form.find("input[name=age]").val();
      const avg_mark = form.find("input[name=avg_mark]").val();

      const data = localStorage.getItem("students");

      if (data) {
        const students = JSON.parse(data);

        localStorage.setItem(
          "students",
          JSON.stringify([
            ...students,
            {
              name,
              email,
              age,
              avg_mark,
            },
          ])
        );
      } else {
        localStorage.setItem(
          "students",
          JSON.stringify([
            {
              name,
              email,
              age,
              avg_mark,
            },
          ])
        );
      }

      getStudents();
      modal.remove();
    });

  $("body").append(modal);
});
```
