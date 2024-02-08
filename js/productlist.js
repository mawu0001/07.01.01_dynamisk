window.addEventListener("DOMContentLoaded", init);
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");

//const productURL = "https://kea-alt-del.dk/t7/api/products?category";

let productTemplate;
let productContainer;

function init() {
  productTemplate = document.querySelector(".product_template");
  productContainer = document.querySelector(".product_container");

  fetch("https://kea-alt-del.dk/t7/api/products?category=" + query)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productsJSON) {
  let productsClone;
  productsJSON.forEach((product) => {
    //fang template
    clone = productTemplate.cloneNode(true).content;

    //skift indhold
    document.querySelector("h2").textContent = product.category;
    clone.querySelector(".product_name").src = product.brandimage;
    clone.querySelector(".product_name").textContent =
      product.productdisplayname;
    clone.querySelector(".brandname").textContent = product.brandname;
    clone.querySelector(".pris").textContent = product.price;

    clone.querySelector(".subcategory").textContent = product.articletype;
    clone.querySelector(
      "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if (product.soldout) {
      // produktet er udsolgt
      clone.querySelector(".soldout").classList.remove("hide");
      clone.querySelector(".product_image").classList.add("milk");
    }

    if (product.discount) {
      clone.querySelector(".procent_span").textContent = product.discount;
      clone.querySelector(".procent_txt").classList.remove("hide");
      clone.querySelector(".discounted").classList.remove("hide");
      clone.querySelector(".price").classList.add("strike");
      clone.querySelector(".prev").classList.remove("hide");
      const nypris = product.price - (product.discount * product.price) / 100;
      clone.querySelector(".new_price").textContent = Math.round(nypris);
    }

    clone
      .querySelector(".read_more")
      .setAttribute("href", `produkt.html?id=${product.id}`);

    //append child
    productContainer.appendChild(clone);
  });
}
