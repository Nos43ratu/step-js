# Задание

В этом задании нужно реализовать список студентов с возможностью добавления новых студентов и удаления старых. Используя jquery
[Пример](/examples/13-jquery/example-1)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
```

## Требования

- Должна быть кнопка Add student при нажатии на которую откроется модально окно
- В модальном окне есть форма
  - Форма состоит из полей name, email, age(числовое), avg_mark(числовое), все поля обязательны
  - При отправке формы нужно закрыть модальное окно и сохранить студента в localStorage и перерисовать список
- Список студентов в виде таблицы

  - У Таблицы есть колонны Name, Email, Age, Avg mark и пустая колонна для кнопки удалить
  - Тело колонны состоит из списка студентов
  - Каждый ряд содержит имя, емаил, возраст, оценку и кнопку удалить
  - При нажатии на кнопку удалить убрать из списка студентов и сохранить новый список в localStorage и перерисовать таблицу

- CSS по вашей фантазии
- Но структура блоков должна остаться прежний
  - Первый блок Название и кнопка добавить
  - Второй блок с таблицей
