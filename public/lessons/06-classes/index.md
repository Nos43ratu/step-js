# Классы

## Задача 1

[Пример](/examples/06-classes/example-1)

Создать инпут который будет фильтровать список фруктов по введенному значению.

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

```html
<body>
  <main id="root"></main>
</body>
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

- Создать класс SearchInput

```js
class SearchInput {
  constructor() {}

  handleInput(event) {}

  renderInput() {}

  renderWrapper() {}

  renderResults(value) {}
}
```

## Задача 2

Создать класс студента который наследует класс пользователя.
Класс студента должен иметь поле с информацией которая является класссом.
Создать класс для отрисовки таблицы которая отображает информацию о оценках студента.

[Пример](/examples/06-classes/example-2)

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button {
  padding: 4px;
}
.table {
  display: flex;
  flex-direction: column;
  margin: 32px;
  border: black 1px solid;
  padding: 16px;
}
.title {
  display: flex;
  justify-content: space-between;
}
.grades {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}
.grade {
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border: black 1px solid;
  padding: 4px;
}
.controls {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
```

```js
Пример грейда
{
  subject: string, // Название предмета
  mark: number, // Оценка
}

class Student {
  constructor(name, surname, grades) {
    this.name = name;
    this.surname = surname;
    this.grades = grades;
  }

  getFullName() {} // Adil Kairolla

  addGrade(subject, mark) {} // Нужно запугить обьект грейда и добавить в массив

  removeGrade(subjectName) {} // Нужно удалить грейд по названию предмета из массива используя метод filter

  calculateGrades() {} // Нужно посчитать среднее значение оценок и вернуть результат используя метод reduce
}

const adil = new Student("Adil", "Kairolla", [
  {
    subject: "js",
    mark: 5,
  },
  {
    subject: "css",
    mark: 3,
  },
]);
```

- Создать класс `RenderTable` который отрисовывает таблицу с информацией о студенте.

```js
class RenderTable {
  constructor(student) {
    this.student = student;

    this.render();
  }

  render() {
    document.body.innerHTML = "";
    const table = this.createTable();

    const title = this.createTitle();
    const grades = this.createGrades();
    const controls = this.createControls();

    table.append(title);
    table.append(grades);
    table.append(controls);

    document.body.append(table);
  }

  createTable() {} // Создать таблицу с классом table и вернуть ее
  // <div class="table"></div>

  createTitle() {} // Создать заголовок с именем студента, средним баллом и вернуть его
  // <div class="title">
  //   <h1>Adil Kairolla</h1>
  //   <h2>avg score: 4</h2>
  // </div>

  createGrades() {} // Создать список с оценками и вернуть его
  // <div class="grades">
  //   <div class="grade"><span>js</span><span>5</span></div>
  //   <div class="grade"><span>css</span><span>3</span></div>
  // </div>

  createControls() {} // Создать кнопки для добавления и удаления оценок и вернуть их
  // <div class="controls">
  //   <button>add</button>
  //   <button>remove</button>
  // </div>
}

const studentTable = new RenderTable(student);

studentTable.render();
```
