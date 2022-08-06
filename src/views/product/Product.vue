<template>
  <!-- banner -->
  <div
    v-if="productLoader"
    class="d-flex justify-content-center align-items-center h-100 response"
  >
    <div class="spinner-border loader text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div>
    <div
      class="w-100 product-banner d-flex flex-column justify-content-center"
      :style="{
        backgroundImage: 'url(' + product.image + ')',
      }"
    >
      <div class="banner-text text-center">
        <button class="badge">{{ product.category }}</button>
        <h1>{{ product.title }}</h1>
        <p class="description">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <h5>By Jennifer Lawrence</h5>
        <button class="badge">Price: ${{ product.price }}</button>
      </div>
    </div>

    <!-- product Details product-details -->
    <div class="container product-details mt-5">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 col-xxl-2">
          <div class="d-flex align-content-center me-2">
            <div><p class="date">08.08.2021</p></div>
            <div class="dash mx-2"></div>
            <div><p class="minutes">4 minutes</p></div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="d-flex flex-column flex-md-wrap products-dbtns">
            <p>{{ product.description }}</p>
            <div class="d-flex flex-wrap align-items-center mb-md-5">
              <button type="button" class="btn btn-light product-dbtn">
                ADVENTURE
              </button>
              <button type="button" class="btn btn-light product-dbtn">
                PHOTO
              </button>
              <button type="button" class="btn mt-2 btn-light product-dbtn">
                DESIGN
              </button>
            </div>
          </div>
          <hr class="my-5" />

          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-start">
              <div
                class="rounded-circle ellipes me-3"
                :style="{
                  backgroundImage:
                    'url(' + require('/src/assets/image/Ellipse-4.jpg') + ')',
                }"
              ></div>
              <div>
                <h1 class="person-name">By Jennifer Lawrence</h1>
                <p class="person-major">Thinker & Designer</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <router-link class="mx-lg-1" :to="{ name: 'Product' }">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/Fb.svg')"
                  alt="facebook logo"
                />
              </router-link>
              <router-link class="mx-lg-1" :to="{ name: 'Product' }">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/Tw.svg')"
                  alt="twitter logo"
                />
              </router-link>
              <router-link class="mx-lg-1" :to="{ name: 'Product' }">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/Pn.svg')"
                  alt="Pn logo"
                />
              </router-link>
              <router-link class="mx-lg-1" :to="{ name: 'Product' }">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/Be.svg')"
                  alt="Be logo"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Posts -->
    <div class="product-details-bg title">
      <div class="container py-4">
        <h3 class="text-primary mt-5">Related Posts</h3>
        <div class="row mt-5 mb-5 related-product">
          <div class="col-12 col-md-6 my-2 h-100 col-lg-4">
            <div
              class="card border-0 editors-card-image"
              :style="{
                backgroundImage:
                  'url(' + require('/src/assets/image/Blog-1.jpg') + ')',
              }"
            >
              <button class="editor-badge">TRAVEL</button>
              <div class="card-body mx-3">
                <span class="">08.08.2021</span>
                <h5 class="mt-2 card-title">
                  Richard Norton photorealistic rendering as real photos
                </h5>
                <p class="d-flex mt-2 card-text flex-wrap">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. Credibly productivate
                  seamless data with flexible schemas.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 h-100 col-md-6 my-2 col-lg-4">
            <div
              class="card h-100 editors-card-image border-0"
              :style="{
                backgroundImage:
                  'url(' + require('/src/assets/image/Blog-2.jpg') + ')',
              }"
            >
              <button class="editor-badge">TRAVEL</button>

              <div class="card-body mx-3">
                <span class="">08.08.2021</span>
                <h5 class="mt-2 mx-0 card-title">
                  Richard Norton photorealistic rendering as real photos
                </h5>
                <p class="d-flex mt-2 card-text">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. Credibly productivate
                  seamless data with flexible schemas.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 h-100 col-md-6 my-2 col-lg-4">
            <div
              class="card h-100 editors-card-image border-0"
              :style="{
                backgroundImage:
                  'url(' + require('/src/assets/image/Blog-3.jpg') + ')',
              }"
            >
              <button class="editor-badge">TRAVEL</button>

              <div class="card-body mx-3">
                <span class="">08.08.2021</span>
                <h5 class="mt-2 mx-0 card-title">
                  Richard Norton photorealistic rendering as real photos
                </h5>
                <p class="d-flex mt-2 card-text flex-wrap">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. Credibly productivate
                  seamless data with flexible schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductService from "@/services/ProductService";

export default {
  name: "product",
  data() {
    return {
      product: {},
      productLoader: false,
    };
  },

  methods: {
    getProduct() {
      let self = this;
      this.product = {};
      this.productLoader = true;
      ProductService.getProductDetails({ id: this.$route.params.id })
        .then(function (res) {
          self.product = res.data || {};
          self.productLoader = false;
          if (!self.product.id) {
            self.$router.push({ name: "Error404" });
          }
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
          self.productLoader = false;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
