# Домашнее задание

## Задание 1

Создайте класс `User` который принимает имя и фамилию и имеет метод `getFullName` который возвращает полное имя.

```js
class User {
  constructor() {}

  getFullName() {
    return; // name + surname
  }
}
```

Добавьте поле `tasks` массив (изначально пустой)

- Добавьте метод `addTask(name, status)` который добавляет новую задачу в массив `tasks`
- Добавьте метод `getTasks()` который возвращает массив задач
- Добавьте метод `getTaskByTitle(title)` который возвращает задачу по названию
- Добавьте метод `removeTaskByTitle(title)` который удаляет задачу по названию
- Добавьте метод `markAsDone(title)` который помечает задачу как выполненную

```js
class User {
  task = [];
  constructor() {}

  getFullName() {
    return; // name + surname
  }

  addTask(name, status) {} // добавляет новую задачу в массив tasks
  getTasks() {} // возвращает массив задач
  getTaskByTitle(title) {} // возвращает задачу по названию
  removeTaskByTitle(title) {} // удаляет задачу по названию
  markAsDone(title) {} // помечает задачу как выполненную
}

// ДЛЯ ТЕСТА вашего класса создайте экземпляр класса и вызовите все эти методы снизу
const user = new User("John", "Doe");
user.addTask("Learn JavaScript", false);
user.addTask("Learn HTML", true);

console.log(user.getTasks()); // [{ title: 'Learn JavaScript', status: false }, { title: 'Learn HTML', status: true }]
console.log(user.getTaskByTitle("Learn HTML")); // { title: 'Learn HTML', status: true }
user.removeTaskByTitle("Learn HTML");
console.log(user.getTasks()); // [{ title: 'Learn JavaScript', status: false }]
user.markAsDone("Learn JavaScript"); // помечает как выполненную
console.log(user.getTasks()); // [{ title: 'Learn JavaScript', status: true }]
```
