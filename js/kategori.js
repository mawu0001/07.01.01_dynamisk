window.addEventListener("DOMContentLoaded", init);

const katURL = "https://kea-alt-del.dk/t7/api/categories";

let kategoriTemplate;
let kategoriContainer;

function init() {
  console.log("init");
  kategoriTemplate = document.querySelector(".kategori_temp");
  kategoriContainer = document.querySelector(".kategori_con");

  fetch(katURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showCategories(json);
    });
}

function showCategories(categoriesJSON) {
  let categoriesClone;
  categoriesJSON.forEach((category) => {
    //fang template
    clone = kategoriTemplate.cloneNode(true).content;
    console.log("category", category);

    //skift indhold
    clone.querySelector(".cat_name").textContent = category.category;

    clone
      .querySelector(".link")
      .setAttribute("href", `produktliste.html?category=${category.category}`);

    //append child
    kategoriContainer.appendChild(clone);
  });
}
