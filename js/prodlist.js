fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  // fange template
  const template = document.querySelector(".product_template").content;
  console.log("productTemplate", template);
  //copy
  const copy = template.cloneNode(true);

  //ændre indhold

  //appende
  document.querySelector("main").appendChild(copy);
}

/*
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}
*/
