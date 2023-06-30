# Задание

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  display: flex;
}

main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  gap: 24px;
}

h1 {
  margin: 0;
}

.films {
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  border: 1px solid black;
}

.film {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 4px;
}

.add {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 4px;
  gap: 8px;
  border: 1px solid black;
}

input {
  font-size: 24px;
  padding: 4px 6px;
}

button {
  font-size: 24px;
  padding: 4px 6px;
}
```

```html
<main>
  <h1>Film list</h1>

  <div class="avg-rating"></div>

  <div class="films"></div>

  <div class="add">
    <input type="text" id="title" placeholder="Title" />

    <input type="text" id="rating" placeholder="Rating" />

    <button id="add">Add</button>
  </div>
</main>
```

```js
class State {
  listeners = [];

  constructor(initalState = {}) {
    this.state = initalState;
  }

  setState = (newState) => {
    this.state = { ...this.state, ...newState };

    this.listeners.forEach((listener) => listener(this.state));
  };

  subscribe = (listener) => {
    this.listeners.push(listener);
  };
}

const filmsState = new State({
  films: [],
});

const films = document.querySelector(".films");

const renderFilms = (state) => {
  films.innerHTML = "";

  if (filmsState.state.films.length === 0) {
    return (films.innerHTML = "No films");
  }

  filmsState.state.films.forEach((film) => {
    const filmElement = document.createElement("div");
    filmElement.classList.add("film");

    const title = document.createElement("span");
    title.innerText = film.title;

    const raing = document.createElement("span");
    raing.innerText = film.rating;

    filmElement.appendChild(title);
    filmElement.appendChild(raing);

    films.appendChild(filmElement);
  });
};

filmsState.subscribe(renderFilms);

renderFilms();

const renderAvgRating = () => {
  const avgRating = document.querySelector(".avg-rating");

  if (filmsState.state.films.length === 0) {
    return (avgRating.innerHTML = "");
  }

  const totalRating = filmsState.state.films.reduce(
    (acc, film) => acc + Number(film.rating),
    0
  );

  const avg = totalRating / filmsState.state.films.length;

  avgRating.innerHTML = `Average rating: ${avg.toFixed(2)}`;
};

filmsState.subscribe(renderAvgRating);

const add = document.querySelector(".add");
const addButton = document.querySelector("#add");
const titleInput = document.querySelector("#title");
const ratingInput = document.querySelector("#rating");

const handleAdd = () => {
  const title = titleInput.value;
  const rating = ratingInput.value;

  if (!title || !rating) return alert("Please enter title and rating");

  if (isNaN(Number(rating)) || rating < 0 || rating > 10) {
    return alert("Rating must be between 0 and 10");
  }

  filmsState.setState({
    films: [...filmsState.state.films, { title, rating }],
  });

  titleInput.value = "";
  ratingInput.value = "";
};

addButton.addEventListener("click", handleAdd);

add.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAdd();
  }
});
```
