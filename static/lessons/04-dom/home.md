Создать список слайдов с кнопками переключения слайдов.
На странице должен быть виден только один слайд.
На странице есть две кнопки: "следующий слайд" и "предыдущий слайд".
При клике на кнопку "следующий слайд" должен отобразиться следующий слайд.
Активный слайд должен быть виден на странице и занимать всю ширину.
Остальные слайды должны быть скрыты.

Примерный вид слайдера:

```html
<div class="head">
  <button class="prev">Предыдущий слайд</button>
  <button class="next">Следующий слайд</button>
</div>
<div class="body">
  <div class="slide">Слайд 1</div>
  <div class="slide">Слайд 2</div>
  <div class="slide">Слайд 3</div>
  <div class="slide">Слайд 4</div>
  <div class="slide">Слайд 5</div>
</div>
```

Добавить на страницу под слайдами точки для переключения слайдов.
При клике на точку должен отобразиться соответствующий слайд.
Количество точек должно соответствовать количеству слайдов.

```html
<div class="head">
  <button class="prev">Предыдущий слайд</button>
  <button class="next">Следующий слайд</button>
</div>
<div class="body">
  <div class="slide">Слайд 1</div>
  <div class="slide">Слайд 2</div>
  <div class="slide">Слайд 3</div>
  <div class="slide">Слайд 4</div>
  <div class="slide">Слайд 5</div>
</div>
<div class="bubbles">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
</div>
```
