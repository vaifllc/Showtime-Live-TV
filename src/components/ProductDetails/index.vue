<template>
  <div class="products-description-area ptb-100">
    <div class="container mw-1356">
      <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
          <ul class="nav nav-tabs description-tabs">
            <li class="nav-item">
              <button
                class="nav-link"
                type="button"
                :class="['tab', { active: activeTab === 'description' }]"
                @click="setActiveTab('description')"
              >
                Description
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                type="button"
                :class="['tab', { active: activeTab === 'reviews' }]"
                @click="setActiveTab('reviews')"
              >
                Reviews
              </button>
            </li>
          </ul>

          <div class="tab-content">
            <div v-show="activeTab === 'description'">
              <div class="products-description">
                <p>
                  Speed is the heartbeat of your online experience. A reputable
                  ISP should offer blazing fast internet speeds to accommodate
                  the demands of today's data-intensive activities. Look for
                  packages that match your usage patterns, whether you're a
                  casual user or a power user requiring high-speed connectivity
                  for multiple devices.
                </p>
                <p>
                  In an era where our daily lives are intricately woven into the
                  digital fabric, the importance of a reliable and
                  high-performing Internet Service Provider (ISP) cannot be
                  overstated.
                </p>
                <ul class="ps-0 mb-0 list-unstyled description-liist">
                  <li class="d-flex align-items-center">
                    <i class="ti ti-circle-check"></i>
                    <span
                      >Implementing advanced measures to safeguard your online
                      presence.</span
                    >
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="ti ti-circle-check"></i>
                    <span
                      >Smooth internet connection without any interruption</span
                    >
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="ti ti-circle-check"></i>
                    <span>Seamless connectivity than ever</span>
                  </li>
                </ul>

                <div class="pb-100"></div>

                <div class="comments-wrap">
                  <h3>03 Comments</h3>

                  <div class="d-flex comment-list mb-4">
                    <div class="flex-shrink-0">
                      <img src="@/assets/images/comment.jpg" alt="comment" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4>Angela Carter</h4>
                      <span>Jan 11, 2025, 08:14 PM</span>
                      <p>
                        Thinking Beyond, was shaped by the input and ideas of
                        thousands of patients, families, staff, physicians,
                        learners, researchers, volunteers, donors, partners,
                        residents, and health system leaders.
                      </p>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1 start">
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex comment-list ms-80">
                    <div class="flex-shrink-0">
                      <img src="@/assets/images/comment-2.jpg" alt="comment" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4>Jane Ronan</h4>
                      <span>Jan 11, 2025, 08:14 PM</span>
                      <p>
                        Thinking Beyond, was shaped by the input and ideas of
                        thousands of patients, families, staff, physicians,
                        learners, researchers, volunteers, donors, partners,
                        residents, and health system leaders.
                      </p>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1 start">
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="pb-100"></div>

                <form class="comment-form">
                  <div
                    class="d-flex align-items-center justify-content-between mb-35 flex-wrap gap-2"
                  >
                    <h3 class="mb-0">Leave A Review</h3>
                    <div class="d-flex align-items-center review">
                      <span>Add Ratings:</span>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
                        <li><i class="ti ti-star-filled"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                      </ul>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-floating mb-4">
                        <textarea
                          class="form-control"
                          id="floatingInput4"
                          placeholder="Your review here"
                          cols="30"
                          rows="5"
                        ></textarea>
                        <label for="floatingInput4">Your review here</label>
                      </div>
                    </div>
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
                          type="email"
                          class="form-control"
                          id="floatingInput2"
                          placeholder="Email"
                        />
                        <label for="floatingInput2">Email</label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-floating mb-4">
                        <input
                          type="url"
                          class="form-control"
                          id="floatingInput3"
                          placeholder="Website"
                        />
                        <label for="floatingInput3">Website</label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-check mb-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn">
                        <span class="border-style">Post Review Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div v-show="activeTab === 'reviews'">
              <div class="products-description">
                <div class="comments-wrap">
                  <h3>03 Comments</h3>

                  <div class="d-flex comment-list mb-4">
                    <div class="flex-shrink-0">
                      <img src="@/assets/images/comment.jpg" alt="comment" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4>Angela Carter</h4>
                      <span>Jan 11, 2025, 08:14 PM</span>
                      <p>
                        Thinking Beyond, was shaped by the input and ideas of
                        thousands of patients, families, staff, physicians,
                        learners, researchers, volunteers, donors, partners,
                        residents, and health system leaders.
                      </p>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1 start">
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex comment-list ms-80">
                    <div class="flex-shrink-0">
                      <img src="@/assets/images/comment-2.jpg" alt="comment" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4>Jane Ronan</h4>
                      <span>Jan 11, 2025, 08:14 PM</span>
                      <p>
                        Thinking Beyond, was shaped by the input and ideas of
                        thousands of patients, families, staff, physicians,
                        learners, researchers, volunteers, donors, partners,
                        residents, and health system leaders.
                      </p>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1 start">
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                        <li>
                          <i class="ti ti-star-filled"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="pb-100"></div>

                <form class="comment-form">
                  <div
                    class="d-flex align-items-center justify-content-between mb-35 flex-wrap gap-2"
                  >
                    <h3 class="mb-0">Leave A Review</h3>
                    <div class="d-flex align-items-center review">
                      <span>Add Ratings:</span>
                      <ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
                        <li><i class="ti ti-star-filled"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                        <li><i class="ti ti-star"></i></li>
                      </ul>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-floating mb-4">
                        <textarea
                          class="form-control"
                          id="floatingInput44"
                          placeholder="Your review here"
                          cols="30"
                          rows="5"
                        ></textarea>
                        <label for="floatingInput44">Your review here</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-floating mb-4">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput11"
                          placeholder="Name"
                        />
                        <label for="floatingInput11">Name</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-floating mb-4">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInput22"
                          placeholder="Email"
                        />
                        <label for="floatingInput22">Email</label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-floating mb-4">
                        <input
                          type="url"
                          class="form-control"
                          id="floatingInput33"
                          placeholder="Website"
                        />
                        <label for="floatingInput33">Website</label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-check mb-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault1"
                        />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn">
                        <span class="border-style">Post Review Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 order-1 order-lg-2 mb-5 mb-lg-0">
          <SidebarWidget />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SidebarWidget from "../Products/SidebarWidget.vue";

export default defineComponent({
  name: "ProductDetails",
  components: {
    SidebarWidget,
  },
  setup() {
    const activeTab = ref("description");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>
