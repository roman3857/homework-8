import { products } from "./data.js";
import template from "./src/template.hbs";

const productList = document.querySelector("#productList");
const searchInput = document.querySelector("#searchInput");

function renderProducts(productsToRender) {
  productList.innerHTML = template({
    products: productsToRender,
  });
}

renderProducts(products);

searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue),
  );

  renderProducts(filteredProducts);
});
