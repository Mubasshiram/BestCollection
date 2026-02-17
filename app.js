const productContainer = document.getElementById("product-container");
const loader = document.getElementById("loader");
const modal = document.getElementById("productModal");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  cartCount.innerText = cart.length;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function toggleLoader(show) {
  loader.classList.toggle("hidden", !show);
}


async function loadProducts() {
  try {
    toggleLoader(true);

    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
 displayProducts(products);
 toggleLoader(false);
} catch (err) {
    console.log("Product error:", err);
    toggleLoader(false);
  }
}



function displayProducts(products) {
  productContainer.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition";

    card.innerHTML = `
      <!-- IMAGE -->
      <div class="bg-gray-100 p-8 flex justify-center items-center h-64">
        <img src="${product.image}" 
             class="h-48 object-contain" />
      </div>

      <!-- BODY -->
      <div class="p-5">

        <!-- CATEGORY + RATING -->
        <div class="flex justify-between items-center mb-3">

          <span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full capitalize">
            ${product.category}
          </span>

          <div class="flex items-center text-sm text-gray-600">
            <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
            ${product.rating.rate}
            <span class="ml-1 text-gray-400">
              (${product.rating.count})
            </span>
          </div>

        </div>

        <!-- TITLE -->
        <h2 class="font-semibold text-gray-800 mb-2">
          ${shortText(product.title, 45)}
        </h2>

        <!-- PRICE -->
        <p class="text-lg font-bold text-gray-900 mb-4">
          $${product.price}
        </p>

        <!-- BUTTONS -->
        <div class="flex gap-3">

          <button 
            class="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 details-btn">
            <i class="fa-regular fa-eye mr-2"></i>
            Details
          </button>

          <button 
            class="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 add-btn">
            <i class="fa-solid fa-cart-plus mr-2"></i>
            Add
          </button>

        </div>

      </div>
    `;

    
    card.querySelector(".details-btn")
      .addEventListener("click", () => showDetails(product));

    card.querySelector(".add-btn")
      .addEventListener("click", () => addToCart(product));

    productContainer.appendChild(card);
  });
}


function shortText(text, length) {
  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
}

function showDetails(product) {
  document.getElementById("modal-title").innerText = product.title;
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-description").innerText = product.description;
  document.getElementById("modal-price").innerText = "$" + product.price;

  modal.showModal();
}


function addToCart(product) {
  cart.push(product);
  saveCart();
}
updateCartCount();
loadProducts();
