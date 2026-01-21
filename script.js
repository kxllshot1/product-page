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

const btnCart = document.querySelector(".btn-cart-header");
btnCart.addEventListener("click", function () {
  const cartBox = document.querySelector(".cart-box");
  cartBox.classList.toggle("cart-active");
});
