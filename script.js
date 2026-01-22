"use strict";

// Adding HTML for adding items to Cart.

// DOM Selections
const inputProductQuantity = document.querySelector("#quantity");
const quantityBox = document.querySelector(".product-quantity");
const btnIncrease = document.querySelector(".increase-quant");
const btnDecrease = document.querySelector(".decrease-quant");
const btnQuantity = document.querySelectorAll(".btn-quantity");
const cartBox = document.querySelector(".cart-box");
const btnCart = document.querySelector(".btn-cart-header");
const cartInside = document.querySelector(".cart-inside");
const btnAddToCart = document.querySelector(".btn-add-cart");
const allDisplayImages = document.querySelectorAll(".display-img");
const allThumbnailImages = document.querySelectorAll(".thumbnail-img");
const mainImg = document.querySelector(".main-img");
const imageBox = document.querySelector(".images");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay-img");

// Functions
//Adding items to Cart
function addToCart(num) {
  cartInside.innerHTML = `<div class="cart-box-in">
                <img
                  src="images/image-product-1-thumbnail.jpg"
                  alt=""
                  class="cart-img"
                />
                <div class="cart-description-box">
                  <p class="cart-product-description">
                    Fall Limited Edition Sneakers
                  </p>
                  <p class="cart-product-price">
                    <span class="cart-product-price">$125.00</span> x
                    <span class="cart-product-quantity">${num}</span> =
                    <span class="cart-total">$${125 * num}.00</span>
                  </p>
                </div>
                <button class="btn-empty-cart">
                  <img src="images/icon-delete.svg" alt="" />
                </button>
              </div>
              <button class="btn-checkout">Checkout</button>`;
}

// Removing Items from Cart
function deleteCart() {
  cartInside.innerHTML = `<p class="cart-description-box">Empty Cart</p>`;
}

function cartOps(event) {
  const isClickInsideCart = cartBox.contains(event.target);
  const isClickOnCartIcon = btnCart.contains(event.target);
  const isClickOnAddBtn = btnAddToCart.contains(event.target);

  if (isClickOnCartIcon) {
    // 1. Toggle when clicking the header icon
    cartBox.classList.toggle("cart-active");
  } else if (isClickOnAddBtn) {
    // 2. Always SHOW when clicking "Add to Cart"
    cartBox.classList.add("cart-active");
    // (You would also trigger your "add logic" here)
  } else if (!isClickInsideCart && cartBox.classList.contains("cart-active")) {
    // 3. Close if clicking anywhere else
    cartBox.classList.remove("cart-active");
  }
}

// Set Overlay when clicked on main image
function setOverlay() {
  overlayImg.setAttribute("src", `${mainImg.getAttribute("src")}`);
  overlay.classList.add("active-overlay");
}

// Remove overlay
function removeOverlay(event) {
  if (overlay.classList.contains("active-overlay")) {
    if (event.target === overlayImg) return;
    else {
      overlay.classList.remove("active-overlay");
    }
  }
}

// Cart Open and Close
document.addEventListener("click", function (event) {
  cartOps(event);
});

// Increasing and Decreasing Product Quantity
btnIncrease.addEventListener("click", function () {
  let num = Number(inputProductQuantity.value);
  if (num >= 5) return;
  num++;
  inputProductQuantity.value = num;
});

btnDecrease.addEventListener("click", function () {
  let num = Number(inputProductQuantity.value);
  if (num <= 0) return;
  num--;
  inputProductQuantity.value = num;
});

// Adding To cart
btnAddToCart.addEventListener("click", function () {
  let num = Number(inputProductQuantity.value);
  if (num <= 0) return;
  addToCart(num);
});

// Empty Cart
cartInside.addEventListener("click", function (event) {
  const btnEmptyCart = event.target.closest(".btn-empty-cart");
  if (!btnEmptyCart) return;
  deleteCart();
});

// imageBox.addEventListener("click", function (event) {
//   const target = event.target;
//   if (target.classList.contains("thumbnail-img")) {
//     mainImg.setAttribute("src", `${target.getAttribute("data-main-img")}`);
//   }
//   allThumbnailImages.forEach((thumbnail) =>
//     thumbnail.classList.remove("current-img"),
//   );
//   if (target.classList.contains("thumbnail-img"))
//     target.classList.add("current-img");
// });

mainImg.addEventListener("click", setOverlay);

overlay.addEventListener("click", function (event) {
  if (event.target === overlayImg) return;
  else overlay.classList.remove("active-overlay");
});

/* <!-- Implementing Hamburger Menu Now--> */
const headerMobile = document.querySelector(".header-mobile");
const hamburger = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-nav");
hamburger.addEventListener("click", function () {
  headerMobile.classList.add("mobile-active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  headerMobile.classList.remove("mobile-active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

window.addEventListener("resize", function (event) {
  if (event.target.innerWidth > 1200) {
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    hamburger.style.display = "block";
    headerMobile.classList.remove("mobile-active");
  }
});
