"use strict";

const cartBoxHtml = `<!-- <div class="cart-box-in">
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
                    <span class="cart-product-quantity">3</span> =
                    <span class="cart-total">$375.00</span>
                  </p>
                </div>
                <button class="btn-empty-cart">
                  <img src="images/icon-delete.svg" alt="" />
                </button>
              </div>
              <button class="btn-checkout">Checkout</button> -->`;

const cartBox = document.querySelector(".cart-box");
const inputProductQuantity = document.querySelector("#quantity");
const quantityBox = document.querySelector(".product-quantity");
const btnIncrease = document.querySelector(".increase-quant");
const btnDecrease = document.querySelector(".decrease-quant");
const btnQuantity = document.querySelectorAll(".btn-quantity");
const btnCart = document.querySelector(".btn-cart-header");
btnCart.addEventListener("click", function () {
  cartBox.classList.toggle("cart-active");
});
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
