# Задача

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
  max-width: 300px;
}
```

```html
<main>
  <div class="wrapper"></div>

  <input type="text" id="input" />
  <button id="action">добавить</button>
</main>
```

````js
const wrapper = document.querySelector(".wrapper");
    const textInput = document.getElementById("input");
    const actionButton = document.getElementById("action");

    const addElement = (text) => {
      const elementWrapper = document.createElement("div");
      elementWrapper.style.display = "flex";
      elementWrapper.style.alignItems = "center";
      elementWrapper.style.justifyContent = "space-between";

      const textItem = document.createElement("p");
      textItem.innerHTML = text;
      elementWrapper.append(textItem);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "delete";
      deleteButton.onclick = () => elementWrapper.remove();
      elementWrapper.append(deleteButton);

      wrapper.append(elementWrapper);
    };

    actionButton.addEventListener("click", () => {
      const value = textInput.value;

      if (!value) {
        return alert("Введите текст");
      }

      addElement(value);

      textInput.value = "";
    });```
````