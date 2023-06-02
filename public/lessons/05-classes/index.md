# Классы

```js
class MyAwesomeClass {
  constructor() {
    // ...
  }

  myMethod() {
    // ...
  }
}

const myAwesomeClass = new MyAwesomeClass();
myAwesomeClass.myMethod();
```

<br/>

- Организация кода: Классы позволяют организовать код в более логически структурированную форму. Вы можете объединить связанные данные и функции в одном месте.

- Модульность: Классы позволяют создавать модули, которые могут быть повторно использованы в разных частях программы. Вы можете создавать новые экземпляры класса с разными значениями свойств, что делает код более гибким.

- Наследование: Классы позволяют создавать иерархию объектов, где дочерние классы наследуют свойства и методы родительского класса. Это позволяет повторно использовать код и упрощает его поддержку и расширение.

<br/>

## Ключевое слово `this`

```js
class MyAwesomeClass {
  name = "John Doe";

  myMethod() {
    console.log(this.name);
  }
}
```

<br/>

## Конструктор

```js
class MyAwesomeClass {
  constructor(name) {
    this.name = name;
  }

  myMethod() {
    console.log(this.name);
  }
}
```

<br/>

## Наследование

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // вызов конструктора родителя с аргументом
  }
}

const dog = new Dog("Dog");
dog.speak(); // Dog makes a noise.
```

<br/>

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // вызов конструктора родителя с аргументом
  }

  constructor(name) {
    super(name); // вызов конструктора родителя с аргументом
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Dog");
dog.speak(); // Dog barks.
```

<br/>

## Задача 1

- Создать класс `Human` который принимает имя и фамилию и имеет метод `getFullName` который возвращает полное имя.
  - Пример использования Human

```js
class Human {}

const human = new Human(name, surname);

human.getFullName(); // John Doe
```

- Создать класс `Male` и `Female` который наследует класс `Human`
  - класс `Male` должен иметь метод `getSex` который возвращает пол `male`
  - класс `Female` должен иметь метод `getSex` который возвращает пол `female`
  - Каждый класс должен реализовать метод `callMe`

```js
class Male {}
class Female {}

const male = new Male(name, surname);
male.getSex(); // male
make.callMe; // his name is John Doe

const female = new Female(name, surname);
female.getSex(); // female
female.callMe; // here name is Sarah Doe
```

<br/>

## Задача 2

Создать класс студента который наследует класс пользователя.
Класс студента должен иметь поле с информацией которая является класссом.
Создать класс для отрисовки таблицы которая отображает информацию о оценках студента.

[Пример](/examples/05-classes/example-1)

- Создать класс `User`
  - Пример использования User

```js
class User {}

const user = new User(name, surname);
user.getFullName(); // John Doe
```

- Создать класс `Info` который в конкретном случае будет содержать оценки студента и считать среднию оценку.
  - Так же класс должен иметь методы add и remove для добавления и удаления оценок.
  - Пример использования Info

```js
class Info {}

const grades = [
  {
    subject: "js",
    mark: 5,
  },
  {
    subject: "html",
    mark: 3,
  },
];

const info = new Info(grades);

info.getAverageMark(); // 4
info.add({ subject: "css", mark: 5 });
info.remove("js");
```

- Создать класс `Student` который наследует класс `User` и содержит поле `info` с информацией о студенте.
  - Пример использования Student

```js
class Student extends User {}

const student = new Student(name, surname, grades);
student.getFullName(); // John Doe
student.info.getAverageMark(); // 4
```

- Создать класс `Table` который отрисовывает таблицу с информацией о студенте.
  - Пример использования Table

```js
class RenderTable {
  constructor(student) {
    this.student = student;
  }

  render() {
    // ...
  }
}

const studentTable = new RenderTable(student);

studentTable.render();
```

<br/>

## CSS

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
