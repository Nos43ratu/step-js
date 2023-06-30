# Задача

```css
:root {
  --background-page: #e3fff9;

  --shadow-block: 0 0px 5px rgba(127, 126, 126, 0.6), 0 0px 0px rgba(0, 0, 0, 0.22);

  --radius-block: 6px;

  --gray-light: #f9fafb;
  --gray-medium: #f3f4f6;
  --gray-dark: #d1d5db;

  --accent-light: #6366f1;
  --accent: #4f46e5;

  --text-light: #6b7280;
  --text-dark: #111827;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  background-color: var(--background-page);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 32px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.columns {
  overflow-x: auto;
  display: flex;
  padding: 8px;
  gap: 16px;
}

.column {
  height: 100%;
  box-shadow: var(--shadow-block);
  background: white;
  border-radius: var(--radius-block);
  flex-shrink: 0;
  width: 256px;
  display: flex;
  flex-direction: column;
}

.column_head {
  padding: 8px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.column_task-list {
  height: 600px;
  border-radius: 0 0 var(--radius-block) var(--radius-block);
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: #f5f5f5;
}

.column .add {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
}

.task {
  width: 100%;
  height: 80px;
  box-shadow: var(--shadow-block);
  border-radius: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
```

```html
<body>
  <main>
    <header>
      <h1>Todo app</h1>

      <button>Add task</button>
    </header>

    <div class="columns">
      <div class="column">
        <form class="add">
          <h3>Add column</h3>

          <input name="title" type="text" />

          <button>Add</button>
        </form>
      </div>
    </div>
  </main>
</body>
```

<br/>

````js
function createColumn(title) {
      const head = $(
        ` <div class="column_head">
            <h3>${title}</h3>

            <span>▾</span>
          </div>`
      ).on("click", function (event) {
        $(this).next().slideToggle();
      });

      const list = $(`<div class="column_task-list"></div>`)
        .on("dragover", function (event) {
          event.preventDefault();

          $(this).css("background-color", "rgba(0, 0, 0, 0.1)");
        })
        .on("dragleave", function () {
          $(this).css("background-color", "#f5f5f5");
        })
        .on("drop", function (event) {
          const stickerId =
            event.originalEvent.dataTransfer.getData("text/plain");

          $(this).append($("#" + stickerId));

          $(this).css("background-color", "#f5f5f5");
        });

      const column = $('<div class="column"></div>').append(head).append(list);

      return column;
    }

    $(".column")
      .children("form")
      .on("submit", function (event) {
        event.preventDefault();

        const title = $(this).children("input").val();

        const column = createColumn(title);

        $(this).parent().before(column);

        this.reset();
      });

    $(".column")
      .has("form")
      .css("opacity", 0.3)
      .on("mouseenter", function () {
        $(this).css("opacity", 1);
      })
      .on("mouseleave", function () {
        $(this).css("opacity", 0.3);
      });

    const DEFAULT_COLUMNS = ["To do", "In progress", "Done"];

    DEFAULT_COLUMNS.forEach(function (title) {
      const column = createColumn(title);

      $(".column").last().before(column);
    });

    $("header button").on("click", function () {
      const modal = $(
        `<div class="modal">
          <form class="add">
            <h3>Add task</h3>

            <input name="title" type="text" />

            <button>Add</button>
          </form>
        </div>`
      ).css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      });

      modal.children().css({
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      });

      modal.on("click", function (event) {
        if (event.target === this) {
          $(this).remove();
        }
      });

      modal.on("submit", "form", function (event) {
        event.preventDefault();

        const form = $(this);

        const title = form.children("input").val();

        const task = createTask(title);

        $(".column").first().children(".column_task-list").append(task);

        form.parent().remove();
      });

      $("body").append(modal);
    });

    function createTask(title) {
      const task = $(
        `<div class="task" draggable="true" id="${Date.now()}" >
          <h3>${title}</h3>

          <button class="delete">Delete</button>
        </div>`
      );

      task.on("dragstart", function (event) {
        event.originalEvent.dataTransfer.setData("text/plain", this.id);
      });

      task.children("button").on("click", function () {
        $(this).parent().remove();
      });

      return task;
    }```
````