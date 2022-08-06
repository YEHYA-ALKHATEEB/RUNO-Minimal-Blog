<template>
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner">
      <!-- first slider -->
      <div
        class="carousel-item active"
        :style="{
          backgroundImage:
            'url(' + require('/src/assets/image/banner-img-1.jpg') + ')',
        }"
      >
        <div class="container">
          <div>
            <button class="badge">ADVENTURE</button>
            <h1>
              Richird Norton photorealistic<br />
              rendering as real photos
            </h1>
            <div class="d-flex">
              <div class="d-flex align-content-center">
                <div class=""><p>08.08.2021</p></div>
                <div class="dash mt-2 mx-2"></div>
              </div>
              <div class="d-flex flex-md-wrap">
                <p>
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- second slider -->
      <div
        class="carousel-item"
        :style="{
          backgroundImage:
            'url(' + require('/src/assets/image/banner-img-2.jpg') + ')',
        }"
      >
        <div class="container">
          <div>
            <button class="badge">ADVENTURE</button>
            <h1>
              Richird Norton photorealistic<br />
              rendering as real photos
            </h1>
            <div class="d-flex align-items-center flex-wrap">
              <div class="mb-auto"><p>08.08.2021</p></div>
              <div class="dash mb-auto mt-1 mx-2"></div>
              <div>
                <p>
                  Progressively incentivize cooperative systems through
                  technically sound<br />
                  functionalities. The credibly productivate seamless data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-indicators ms-auto">
      <button
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
  </div>

  <!-- popular topics -->
  <div class="container">
    <h1 class="text-primary mt-4 title">Popular topics</h1>
  </div>
  <div class="container popular-topics mt-5">
    <div class="d-flex justify-content-between flex-wrap">
      <div class="d-flex align-items-center flex-wrap categories">
        <button
          @click="getProducts()"
          class="btn"
          :class="activeCategory === 'all' ? 'active' : ''"
        >
          All
        </button>
        <div v-if="categoryLoader" class="spinner-border loader" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else-if="categoryList.length === 0">No categories</div>
        <button
          v-else
          :class="activeCategory === category ? 'active' : ''"
          v-for="(category, index) in categoryList"
          :key="index"
          class="btn"
          @click="getCategorizedProducts(category)"
        >
          {{ category }}
        </button>
      </div>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        @click="showModal = !showModal"
        class="btn border-0"
      >
        Add Product
      </button>
      <!-- <teleport to="#formModal" :disabled="showModal"> -->
      <teleport to="#formModal" :disabled="!showModal">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Product</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="showModal = false"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="title" class="col-form-label">Title</label>
                    <input
                      type="text"
                      v-model="title"
                      class="form-control"
                      id="title"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price" class="col-form-label">Price</label>
                    <input
                      type="text"
                      v-model="price"
                      class="form-control"
                      id="price"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="category" class="col-form-label"
                      >Category</label
                    >
                    <select
                      id="category"
                      required
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="(category, index) in categoryList"
                        :key="index"
                        value=""
                        selected
                      >
                        {{ category }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="description" class="col-form-label"
                      >Description:</label
                    >
                    <textarea
                      type="text"
                      rows="4"
                      v-model="description"
                      class="form-control h-auto"
                      id="description"
                    />
                  </div>
                  <label for="image" class="col-form-label">Image</label>

                  <div class="input-group mb-3">
                    <input type="file" class="form-control" id="image" />
                    <label class="input-group-text">Upload</label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="showModal = false"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  @click="addProduct()"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </teleport>
    </div>

    <!-- cards -->
    <div
      v-if="productLoader"
      class="spinner-border loader text-info"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else-if="productList.length === 0">No Products</div>

    <div v-else class="row mt-2 mb-5">
      <div
        class="col-12 mt-3 col-md-6 col-lg-3"
        v-for="(product, index) in productList"
        :key="index"
      >
        <router-link
          class="text-decorate"
          :to="{ name: 'Product', params: { id: product.id } }"
        >
          <div class="card h-100 border-0">
            <div
              class="card-image"
              :style="{
                backgroundImage: 'url(' + product.image + ')',
              }"
            >
              <button class="badge">{{ product.category }}</button>
            </div>
            <div class="card-body px-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>08.08.2021</span>
                <button class="price">Price: ${{ product.price }}</button>
              </div>
              <h5 class="mt-2 card-title">
                {{ product.title }}
              </h5>
              <p class="d-flex mt-2 card-text flex-wrap">
                {{ product.description }}
              </p>
            </div>
            <div class="card-footer bg-transparent border-0 mb-auto">
              <button
                @click.prevent="deleteProduct(product.id)"
                class="delete w-100"
              >
                Delete
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- banner -->
  <div
    class="w-100 banner-bg d-flex flex-column justify-content-center"
    :style="{
      backgroundImage:
        'url(' + require('/src/assets/image/Richird-norton-banner.jpg') + ')',
    }"
  >
    <div class="banner-text text-center">
      <button class="badge">FASHION</button>
      <h1>Richird Norton photorealistic rendering as real photos</h1>
      <p class="description">
        Progressively incentivize cooperative systems through technically sound
        functionalities. The credibly productivate seamless data.
      </p>
      <span>08.08.2021</span>
    </div>
  </div>

  <!-- Editor’s Pick -->

  <div class="container">
    <h1 class="text-primary mt-5 title">Editors Pick</h1>
    <div class="row mt-5 mb-5 related-product">
      <div class="col-12 col-md-6 my-2 h-100 col-lg-4">
        <div
          class="card border-0 editors-card-image"
          :style="{
            backgroundImage:
              'url(' + require('/src/assets/image/Blog-1.jpg') + ')',
          }"
        >
          <div class="card-body mx-3">
            <button class="editor-badge">TRAVEL</button>
            <span class="">08.08.2021</span>
            <h5 class="mt-2 card-title">
              Richard Norton photorealistic rendering as real photos
            </h5>
            <p class="d-flex mt-2 card-text flex-wrap">
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivate seamless data with
              flexible schemas.
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
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivate seamless data with
              flexible schemas.
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
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivate seamless data with
              flexible schemas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";

export default {
  name: "homepage",
  data() {
    return {
      showModal: false,
      categoryLoader: false,
      productLoader: false,
      categoryList: [],
      productList: [],
      activeCategory: "all",
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    };
  },
  methods: {
    // get categories
    getCategories() {
      let self = this;
      this.categoryLoader = true;
      ProductService.findCategories({})
        .then(function (res) {
          self.categoryList = res.data || [];
          self.categoryLoader = false;
        })
        .catch(function (err) {
          self.categoryLoader = false;
          console.log(err);
        });
    },
    // get products
    getProducts() {
      let self = this;
      this.productLoader = true;
      this.productList = [];
      ProductService.findProducts({})
        .then(function (res) {
          self.productList = res.data || [];
          self.activeCategory = "all";
          self.productLoader = false;
        })
        .catch(function (err) {
          self.productLoader = false;
          console.log(err);
        });
    },
    getCategorizedProducts(category) {
      let self = this;
      this.productLoader = true;
      this.productList = [];
      ProductService.findFilteredProducts({
        category: category,
      })
        .then(function (res) {
          self.productList = res.data || [];
          self.activeCategory = category;
          self.productLoader = false;
        })
        .catch(function (err) {
          console.log(err);
          self.productLoader = false;
        });
    },
    deleteProduct(id) {
      ProductService.deleteProducts({
        id: id,
      })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    addProduct() {
      const self = this;
      ProductService.addProduct({
        title: this.title,
        price: this.price,
        category: this.category,
        description: this.description,
        image: this.image,
      })
        .then(function (res) {
          self.showModal = false;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  },
};
</script>
