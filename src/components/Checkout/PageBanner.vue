<template>
  <div class="page-banner-area style-three bg-secondary pb-100">
    <div class="container mw-1720">
      <div class="page-banner-content">
        <ul class="d-flex align-items-center ps-0 list-unstyled bredcrounbs">
          <li>
            <RouterLink to="/"> HOME </RouterLink>
          </li>
          <li>
            <span>SHOP</span>
          </li>
          <li>
            <span>CHECKOUT</span>
          </li>
        </ul>
        <h2>Checkout</h2>
      </div>
    </div>

    <div class="container mw-1356">
      <div class="row">
        <div class="col-lg-7 col-xxl-8 mb-5 mb-lg-0">
          <div class="billing-details-form">
            <h3>Billing Details</h3>
            <form>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput1"
                      placeholder="Name"
                    />
                    <label for="floatingInput1">Name</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput2"
                      placeholder="Name"
                    />
                    <label for="floatingInput2">Name</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput3"
                      placeholder="Email"
                    />
                    <label for="floatingInput3">Email</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput4"
                      placeholder="Phone No"
                    />
                    <label for="floatingInput4">Phone No</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <div class="form-floating">
                      <select
                        class="form-select form-control"
                        id="floatingSelect5"
                        aria-label="Floating label select example"
                      >
                        <option selected>Canada</option>
                        <option value="1">United Kingdom</option>
                        <option value="2">United States</option>
                      </select>
                      <label for="floatingSelect5">Country</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <div class="form-floating">
                      <select
                        class="form-select form-control"
                        id="floatingSelect6"
                        aria-label="Floating label select example"
                      >
                        <option selected>Lachine</option>
                        <option value="1">United Kingdom</option>
                        <option value="2">United States</option>
                      </select>
                      <label for="floatingSelect6">Town</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <div class="form-floating">
                      <select
                        class="form-select form-control"
                        id="floatingSelect7"
                        aria-label="Floating label select example"
                      >
                        <option selected>Montreal</option>
                        <option value="1">United Kingdom</option>
                        <option value="2">United States</option>
                      </select>
                      <label for="floatingSelect7">City</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput8"
                      placeholder="Street address"
                    />
                    <label for="floatingInput8">Street address</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput9"
                      placeholder="Post Code"
                    />
                    <label for="floatingInput9">Post Code</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Want to create an account?
                    </label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                    <label class="form-check-label" for="flexCheckDefault2">
                      Want to ship to a different address?
                    </label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <textarea
                      class="form-control"
                      id="floatingInput10"
                      placeholder="Other notes"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <label for="floatingInput10">Other notes</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn">
                    <span class="border-style">Place Order</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 col-xxl-4">
          <div class="checkout-cart-total mb-5">
            <div class="p-30">
              <h3>Cart Total</h3>
              <div class="d-flex justify-content-between align-items-center">
                <span class="title">Products</span>
                <span class="title">Price</span>
              </div>
            </div>
            <div class="d-sm-flex align-items-center product-q">
              <div class="flex-shrink-0">
                <img src="@/assets/images/product-1.jpg" alt="product" />
              </div>
              <div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h4>Nestor Band Whole Home Mesh Wi-Fi System Router</h4>
                    <span class="count">x1</span>
                  </div>
                  <span class="price">$129.00</span>
                </div>
              </div>
            </div>
            <div class="d-sm-flex align-items-center product-q">
              <div class="flex-shrink-0">
                <img src="@/assets/images/product-2.jpg" alt="product" />
              </div>
              <div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h4>Nestor Band Whole Gaming Console</h4>
                    <span class="count">x1</span>
                  </div>
                  <span class="price">$145.00</span>
                </div>
              </div>
            </div>
            <div class="d-sm-flex align-items-center product-q">
              <div class="flex-shrink-0">
                <img src="@/assets/images/product-3.jpg" alt="product" />
              </div>
              <div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h4>Nestor Band Whole Home Mesh Wi-Fi Connector</h4>
                    <span class="count">x1</span>
                  </div>
                  <span class="price">$458.00</span>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-between align-items-center p-30 py-3"
            >
              <span class="title text-body">Subtotal</span>
              <span class="title text-body">$364</span>
            </div>
            <div
              class="d-flex justify-content-between align-items-center p-30 py-3 border-0"
            >
              <span class="title text-secondary fw-bold">Total</span>
              <span class="title text-secondary fw-bold">$364</span>
            </div>
          </div>

          <div class="checkout-cart-total">
            <div class="p-30">
              <h3 class="mb-0">Cart Total</h3>
            </div>
            <form class="p-30">
              <div class="form-check mb-3">
                <input
                  class="form-check-input rounded-0 bg-transparent"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                  checked
                />
                <label
                  class="form-check-label text-secondary mb-2"
                  for="flexCheckDefault3"
                >
                  Direct Bank Transfer
                </label>
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input rounded-0 bg-transparent"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label
                  class="form-check-label text-secondary mb-2"
                  for="flexCheckDefault4"
                >
                  PayPal
                </label>
              </div>
              <div class="form-check mb-0">
                <input
                  class="form-check-input rounded-0 bg-transparent"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label
                  class="form-check-label text-secondary mb-2"
                  for="flexCheckDefault5"
                >
                  Cash on Delivery
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBanner",
});
</script>
