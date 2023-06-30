# Экзамен

## Условия

- Обязательно использование jQuery!⁉️

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
```

- Формат отправки решений:
  - Архив состоящий из:
    - `index.html`
    - `style.css`
    - `script.js`
  - При желании можно добавить другие файлы (например для разделения стилей и скриптов)
- Стилизация на свое усмотрение
  - Нельзя использовать css из заданий курса
  - Должен соблюдаться порядок блоков и общая структура блоков

<brake-xl></brake-xl>

## Задачи

<br/>

### 1. Todo list

Создать приложение для управления списком задач.

[Демо](/example/15-exam/example-1)

<br/>

#### Приложение состоит из

- Шапки
  - Заголовок
  - Кнопка добавления задачи которая открывает модальное окно
  - Кнопка выделения всех задач
  - Кнопка сброса выделения всех задач
- Списка задач
  - Задача состоит из:
    - Чекбокса
    - Текста
- При обновлении страницы список задач сохраняется

<br/>

#### Что должно быть реализовано:

- Добавление задачи
  - При нажатии на кнопку добавления задачи открывается модальное окно
    - Модальное окно имеет фоновый затемненный слой
    - Модальное окно появляется по центру экрана
  - В модальном окне есть форма с полем ввода текста и кнопкой добавления
    - При отправке формы задача добавляется в список задач
    - При нажатии на кнопку добавления задачи модальное окно закрывается
    - Перерисовывается список задач
- Выделение всех задач
  - При нажатии на кнопку выделения всех задач чекбоксы всех задач становятся отмеченными
    - Состояние чекбоксов сохраняется при обновлении страницы
  - При нажатии на кнопку сброса выделения всех задач чекбоксы всех задач становятся не отмеченными
    - Состояние чекбоксов сохраняется при обновлении страницы

<br/>

#### Подсказки:

<br/>

- Формат списка задач

```js
const item = {
  title: "Задача 1", // Текст задачи
  checked: false, // Состояние чекбокса
};
```

<br/>

- localStorage

```js
// Для добавления в localStorage:
localStorage.setItem("key", "value");

// Для получения из localStorage:
localStorage.getItem("key");

// Для удаления из localStorage:
localStorage.removeItem("key");
```

<br/>

- Для удобства можно реализовать функции для работы с localStorage

```js
// Добавление в localStorage
function addItem(item) {} // item - объект задачи, описанный выше
// Для добавления item в массив задач, можно использовать метод push

// Получение из localStorage
function getItems() {} // Возвращает массив задач из localStorage

// Для отметки всех задач как выполненных
function checkAll() {} // Всем задачам в массиве задач устанавливает checked: true, можно использовать метод map

// Для сброса отметки всех задач
function uncheckAll() {} // Всем задачам в массиве задач устанавливает checked: false, можно использовать метод map

// Для отметки задачи как выполненной
function checkItem(index) {} // index - индекс задачи в массиве задач, можно использовать метод map
```

<br/>

- Для перерисовки списка задач можно использовать метод forEach

```js
function renderList() {
  const items = getItems();

  const list = $("#list");

  list.empty();

  items.forEach(() => {
    const item = $("html код элемента списка");
    // Создание элемента списка
    // Добавление элемента списка в список

    // Добавление обработчика события на чекбокс
    item.find("input").on("change", () => {
      // При изменении состояния чекбокса
      // Вызывается функция checkItem
      // Перерисовывается список задач
    });
    tem;
  });
} // Метод перерисовывает список задач
```

<br/>

- Для выделения всех задач можно jq

```js
$("button").click(() => {
  $("input").prop("checked", true);
  // При нажатии на кнопку
  // Вызывается функция checkAll
  // Перерисовывается список задач
});
```

<br/>

- Для создания модального окна можно использовать jq

```js
$("button").click(() => {
  // При нажатии на кнопку
  // Создается модальное окно
  const modal = $("html код модального окна");
  modal.css({
    // Модальное окно имеет фоновый затемненный слой
    // Модальное окно появляется по центру экрана
  });
  // Добавляется обработчик события на форму модального окна
  modal.find("form").on("submit", () => {
    // При отправке формы
    // Вызывается функция addItem
    // Перерисовывается список задач
    // Закрывается модальное окно
    modal.remove();
  });

  $("body").append(modal);
});
```

<brake-xl></brake-xl>

### 2. Калькулятор расходов

Создать приложение для учета расходов.

[Демо](/example/15-exam/example-2)

<br/>

#### Приложение состоит из

- Шапки
  - Заголовок
  - Кнопка добавления расхода которая открывает модальное окно
- Списка расходов
  - Расход состоит из:
    - Названия
    - Суммы
    - Типа
    - Кнопки удаления
- Подвала
  - Суммы всех расходов
- При обновлении страницы список расходов сохраняется

<br/>

#### Что должно быть реализовано:

- Добавление расхода
  - При нажатии на кнопку добавления расхода открывается модальное окно
    - Модальное окно имеет фоновый затемненный слой
    - Модальное окно появляется по центру экрана
  - В модальном окне есть форма с полями ввода названия, суммы и типа и кнопкой добавления
    - При отправке формы расход добавляется в список расходов
    - При нажатии на кнопку добавления расхода модальное окно закрывается
    - Перерисовывается список расходов
    - Пересчитывается сумма всех расходов
- Список расходов
  - Элемент списка расходов состоит из:
    - Названия
    - Суммы
    - Типа
    - Кнопки удаления
  - При нажатии на кнопку удаления расхода расход удаляется из списка расходов
    - Перерисовывается список расходов
    - Пересчитывается сумма всех расходов
- Подсчет суммы всех расходов
  - При добавлении расхода пересчитывается сумма всех расходов
  - При удалении расхода пересчитывается сумма всех расходов

<br/>

#### Подсказки:

<br/>

- Формат списка расходов

```js
const item = {
  title: "Название", // Название расхода
  price: 100, // Сумма расхода
  type: "Тип", // Тип расхода
};
```

<br/>

- localStorage

```js
// Для добавления в localStorage:
localStorage.setItem("key", "value");

// Для получения из localStorage:
localStorage.getItem("key");

// Для удаления из localStorage:
localStorage.removeItem("key");
```

<br/>

- Для удобства можно реализовать функции для работы с localStorage

```js
// Добавление в localStorage
function addItem(item) {} // item - объект расхода

// Получение из localStorage
function getItems() {} // Возвращает массив расходов

// Удаление из localStorage
function removeItem(index) {} // index - индекс расхода в массиве

// Пересчет суммы всех расходов
function getSum() {} // Возвращает сумму всех расходов
// Для подсчета суммы всех расходов можно использовать метод reduce
```

<br/>

- Для перерисовки таблицы можно использовать метод forEach

```js
// Метод перерисовывает таблицу
function renderTable() {
  const items = getItems();

  const tbody = $("tbody");

  tbody.empty();

  items.forEach(() => {
    const row = $("html код ряда таблицы");
    // Создание элемента ряда таблицы
    // Добавление элемента ряда в таблицу

    // Добавление обработчика события на кнопку удаления
    row.find("button").on("click", () => {
      // При нажатии на кнопку удаления
      // Вызывается функция removeItem
      // Перерисовывается список задач
    });

    tbody.append(row);
  });

  // Перерисовывается сумма всех расходов
  $("footer").text(`Сумма всех расходов: ${getSum()}`);
}
```

<br/>

- Для создания модального окна можно использовать jq

```js
$("button").click(() => {
  // При нажатии на кнопку
  // Создается модальное окно
  const modal = $("html код модального окна");
  modal.css({
    // Модальное окно имеет фоновый затемненный слой
    // Модальное окно появляется по центру экрана
  });
  // Добавляется обработчик события на форму модального окна
  modal.find("form").on("submit", () => {
    // При отправке формы
    // Вызывается функция addItem
    // Перерисовывается список задач
    // Закрывается модальное окно
    modal.remove();
  });

  $("body").append(modal);
});
```

<brake-xl></brake-xl>

### 3. Творческое задание

Создать приложение на свое усмотрение.

<br/>

#### Что должно быть реализовано:

- В приложении должна быть работа с localStorage
- В приложении должна быть работа с формами
- В приложении должна быть работа с событиями
- Приложение должно сохранять данные отправленные пользователем
- При обновлении страницы данные должны сохраняться
- Должна быть реализована возможность удаления данных
- Должна быть реализована возможность редактирования данных