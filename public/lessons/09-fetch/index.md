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

- Добавить в html разметку

  - ```html
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

- Создать функцию getPosts которая будет делать запрос на сервер и получать посты
  - ```js
    const getPosts = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const posts = await response.json();
      return posts;
    };
    ```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    html,
    body {
      background-color: #f5f5f5;
    }

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 32px;
      color: #333;
    }

    .posts {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    .post {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid black;
      background: ghostwhite;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      padding: 16px;
    }

    .post-title {
      margin-bottom: 8px;
      color: #333;
    }

    .post-content {
      margin-bottom: 16px;
      color: #333;
      white-space: pre-wrap;
    }

    .post button {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      margin-top: 4px;
    }

    #add-post {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    #add-post input {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    #add-post button {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    #add-post button:hover {
      background: #ffffff;
    }
  </style>
  <body>
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
  </body>

  <script>
    async function getPosts() {
      const data = await fetch(
        "http://localhost:3000/step/api/example/adil/posts"
      ).then((res) => res.json());

      return data;
    }

    async function renderPosts() {
      const data = await getPosts();

      const posts = data.posts;

      const postsContainer = document.querySelector(".posts");

      postsContainer.innerHTML = "";

      if (posts.length === 0) {
        postsContainer.innerHTML = "<h2>No posts yet</h2>";
        return;
      }

      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
        `;

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";

        editButton.addEventListener("click", async () => {
          console.log(post);

          const editPostForm = document.createElement("form");
          editPostForm.id = "edit-post";

          editPostForm.innerHTML = `
                <h2>Edit post</h2>
                <input type="text" name="title" placeholder="Post title" value="${post.title}" />
                <input type="text" name="content" placeholder="Post content" value="${post.content}" />
                <button type="submit">Save post</button>
            `;

          editPostForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(editPostForm);

            const data = await fetch(
              `http://localhost:3000/step/api/example/adil/post/${post.id}`,
              {
                method: "PUT",
                body: JSON.stringify(Object.fromEntries(formData.entries())),
              }
            ).then((res) => {
              if (res.status === 200) {
                renderPosts();
              }
            });

            e.target.reset();
          });

          postElement.innerHTML = "";
          postElement.appendChild(editPostForm);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", async () => {
          const data = await fetch(
            `http://localhost:3000/step/api/example/adil/post/${post.id}`,
            {
              method: "DELETE",
            }
          ).then((res) => {
            if (res.status === 200) {
              renderPosts();
            }
          });
        });

        postElement.appendChild(editButton);
        postElement.appendChild(deleteButton);

        postsContainer.appendChild(postElement);
      });
    }

    renderPosts();

    const addPostForm = document.querySelector("#add-post");

    addPostForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(addPostForm);

      const data = await fetch(
        "http://localhost:3000/step/api/example/adil/posts",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        }
      ).then((res) => {
        if (res.status === 200) {
          renderPosts();
        }
      });

      e.target.reset();
    });
  </script>
</html>
```
