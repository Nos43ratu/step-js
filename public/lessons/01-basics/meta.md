---
title: 01. Введение в javascript
date: 24-05-2023
link:
---

# Titlte

## Titlte

### Titlte

Some text

Som long text
with prodolzenie

<brake-xl></brake-xl>

```js
const number = [1, 2, 3, 4];

function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return { ...styleObject, ...style[className] };
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(" ");
}

function asd() {}
```

- [Слайды](/files/01-entry.pptx)
- [Домашнее задание 1](/files/homework_1.docx), [Домашнее задание 2](/files/homework_2.docx)
- Доп материалы
  - [Переменные](https://learn.javascript.ru/variables)
  - [alert, prompt, confirm](https://learn.javascript.ru/alert-prompt-confirm)
  - [Операторы](https://learn.javascript.ru/operators)
  - [Логические операторы](https://learn.javascript.ru/logical-operators)
