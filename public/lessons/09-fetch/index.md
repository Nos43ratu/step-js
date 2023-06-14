# HTTP

[HTTP](https://2903658835-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M9rAzfyk09Mm-FclXVO%2F-MClM5AYG2TFOeGi4e-J%2F-MClrbatT7VqbAQeNvNS%2FHTTP.PNG?alt=media&token=c18d36cf-ff00-4c12-ac19-8f9d7499c34f) (HyperText Transfer Protocol) - это протокол передачи данных, который используется для обмена информацией на веб-серверах и клиентских устройствах, таких как компьютеры и мобильные устройства. Он обеспечивает стандартизированный способ взаимодействия между клиентом и сервером, позволяя запросить ресурсы с сервера и передать данные обратно клиенту.

### Зачем нужен протокол HTTP?

Протокол HTTP служит основой для обмена информацией в сети Интернет. Он позволяет браузерам и другим клиентским приложениям отправлять запросы на серверы, чтобы получить веб-страницы, изображения, видео, аудио и другие ресурсы. HTTP также определяет способы передачи данных, обеспечивая надежность и целостность информации.

### Структура HTTP-запроса

- **URI** - определяет ресурс, который необходимо получить.
- **Метод запроса** - определяет тип запроса. Например, GET, POST, PUT, DELETE, HEAD, OPTIONS.
- **Заголовки** - содержат метаданные запроса.
- **Тело** - содержит данные запроса.

### Структура HTTP-ответа

- **Статус-код** - определяет, успешно ли выполнен запрос. Например, 200 (OK), 404 (Not Found), 500 (Internal Server Error).
- **Заголовки** - содержат метаданные ответа.
- **Тело** - содержит данные ответа.

### HTTP-методы

- **GET** - используется для получения данных с сервера.
- **POST** - используется для отправки данных на сервер.
- **PUT** - используется для обновления данных на сервере.
- **DELETE** - используется для удаления данных на сервере.
- **HEAD** - используется для получения метаданных ресурса.
- **OPTIONS** - используется для получения информации о поддерживаемых методах запроса.
- **PATCH** - используется для обновления данных на сервере.
- **TRACE** - используется для получения диагностических данных о запросе.

### HTTP-статусы

- **1xx** - информационные сообщения.
- **2xx** - успешное выполнение запроса.
- **3xx** - перенаправление.
- **4xx** - ошибка клиента.
- **5xx** - ошибка сервера.

<br/>
<br/>
<br/>

## Задача 1

Создать блог с постами возможность добавлять, удалять и редактировать посты
[Пример](/examples/09-fetch/example-1)

- Добавить в html разметку

```html
<main>
  <h1>adil`s posts:</h1>

  <div class="posts"></div>

  <form id="add-post">
    <h2>Add post</h2>
    <input type="text" name="title" placeholder="Post title" />
    <input type="text" name="content" placeholder="Post content" />
    <button type="submit">Add post</button>
  </form>
</main>
```

- Подключить css

```html
<link rel="stylesheet" href="https://adilkairolla.dev/step/static/css" />
```

```js
async function getPosts() {}

function renderPosts() {}

function addPost(post) {}

function handleSubmit(event) {}

const form = document.querySelector("#add-post");

form.addEventListener("submit", handleSubmit);

function deletePost(id) {}

function updatePost(id, post) {}
```

- Создать функцию renderPosts рендерить посты в html

```js
const renderPosts = () => {
  const data = await getPosts();

  const posts = data.posts;

  ...
};
```

- Если постов нет то показать сообщение "No posts"

```html
<h2>No posts yet</h2>
```

- Элемент поста выглядит так

```html
<div class="post">
  <h2 class="post-title">3</h2>
  <p class="post-content">3</p>
  <button>Edit</button>
  <button>Delete</button>
</div>
```

- Добавить обработчик на форму добавления поста который будет добавлять пост по адресу https://adilkairolla.dev/step/api/example/adil/posts
  c методом POST

```js
const addPost = async (post) => {
  const response = await fetch()...

  return post;
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;

  const post = {
    title: form.title.value,
    content: form.content.value,
  };

  const newPost = await addPost(post);

  renderPosts();
};

const form = document.querySelector('#add-post');

form.addEventListener('submit', handleSubmit);
```

- Создать функцию getPosts которая будет делать запрос на сервер и получать посты по адресу https://adilkairolla.dev/step/api/example/name/posts
- где name это ваше имя

```js
const getPosts = async () => {
  const response = await fetch()...

  return posts;
};
```

- Добавить обработчик на кнопку delete который будет удалять пост по адресу https://adilkairolla.dev/step/api/example/adil/post/${post.id}
  c методом DELETE

- Добавить обработчик на кнопку edit который будет редактировать пост по адресу https://adilkairolla.dev/step/api/example/adil/post/${post.id}
  c методом PUT
