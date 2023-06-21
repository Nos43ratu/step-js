# Домашнее задание

Добавить на страницу input с типом файл. При выборе файла формата json, отобразить его на странице.

На странице должен быть

- input с типом файл

```html
<input type="file" />
```

При выборе файла формата json, отобразить его на странице. В теге pre

- pre

```html
<pre></pre>
```

В Итоге должно получиться

```html
<input type="file" />

<pre>
// сюда вставить json
</pre>
```

## Подсказки

- Для отображения json в теге pre, можно использовать метод JSON.stringify
- Для получения файла из input, можно использовать событие change
- Для получения файла из input, можно использовать свойство files
- Для получения файла можно использовать FileReader

## Дополнительно (не обязательно)

- Добавить возможность загрузить картинку и отобразить ее на странице
- Сделать условие при загрузке файла, если файл не json или картинка, то вывести ошибку

В итоге должно получиться

```html
<input type="file" />

// если файл .json
<pre>
// сюда вставить json
</pre>

// если файл картинка
<img src="" alt="" />
```

## Подсказки

- Для проверки типа файла, можно использовать свойство type у файла
- Для проверки типа файла, можно использовать метод includes у строки
- Для получения картинки из input, можно использовать свойство files
- Дальше есть несколько способов, как отобразить картинку на странице один из них метод URL.createObjectURL(file)
- если передать файл полученный из event.target.files[0] в метод URL.createObjectURL(file), то получим ссылку на картинку, которую можно использовать в теге img