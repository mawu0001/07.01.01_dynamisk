window.addEventListener("DOMContentLoaded", init);

const productURL = "https://kea-alt-del.dk/t7/api/products";

let productTemplate;
let productContainer;

function init() {
  console.log("init");

  productTemplate = document.querySelector(".product_template");
  console.log("productTemplate", productTemplate);

  productContainer = document.querySelector(".product_container");
  console.log("productContainer", productContainer);

  fetch(productURL)
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
    // console.log("Product", product);

    //fang template
    clone = productTemplate.cloneNode(true).content;

    //skift indhold
    clone.querySelector(".product_name").src = product.brandimage;
    clone.querySelector(".product_name").textContent =
      product.productdisplayname;
    clone.querySelector(".brandname").textContent = product.brandname;
    clone.querySelector(".subcategory").textContent = product.articletype;
    clone.querySelector(
      "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    //clone.querySelector(".price").textContent = product.price;
    if (product.soldout) {
      //produktet er udsolgt
      clone.querySelector("article").classList.add("soldout");
    } else if (product.discounted) {
      //produktet er på tilbud
      clone.querySelector("article").classList.add("discounted");
    }

    clone
      .querySelector(".read_more")
      .setAttribute("href", `produkt.html?id=${product.id}`);

    //append child
    productContainer.appendChild(clone);
  });
}

/**
 document.querySelector(".purchasebox .brandname").textContent =
    product.brandname;
  document.querySelector(".purchasebox .subcategory").textContent =
    product.subcategory;
    document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
 */
