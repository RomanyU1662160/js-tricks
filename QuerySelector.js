// const listGroup = document.querySelectorAll("[.container .alert h1]");

// listGroup.map(item => {
//   console.log(item[0].innerHTML);
// });
// console.log(listGroup[0].innerHTML);

// const ById = document.querySelectorAll("#row-id ul li");
// console.log(ById.lastChild);
[...document.querySelectorAll("[data-codelist='Romany'] label")].map(label => {
  return [label.getAttribute("for"), label.textContent];
});

const rooma = document.querySelectorAll("[data-codelist='Romany'] li");
console.log(rooma);
