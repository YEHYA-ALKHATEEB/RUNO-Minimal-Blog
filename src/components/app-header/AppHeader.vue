<template>
  <header class="position-fixed w-100 mt-0">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="text-decorate" :to="{ name: 'Homepage' }">
          <span class="navbar-brand cursor-pointer">RUNO</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <router-link
                class="nav-link active text-decorate"
                :to="{ name: 'Homepage' }"
              >
                <span class="active-tab"> Home </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }">
                <span> About</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }">
                <span>Articles</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }">
                <span>Contact Us</span>
              </router-link>
            </li>
            <li
              v-if="!active"
              id="socialIcons"
              class="nav-item social-icons px-lg-3 mx-lg-3 nav-item-border"
            >
              <a class="mx-lg-1">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/facebook.svg')"
                  alt="facebook icon"
                />
              </a>
              <a class="mx-lg-1">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/twitter.svg')"
                  alt="twitter icon"
                />
              </a>
              <a class="mx-lg-1">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/youtube.svg')"
                  alt="youtube icon"
                />
              </a>
              <a class="mx-lg-1">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/pinterest.svg')"
                  alt="pinterest icon"
                />
              </a>
              <a class="mx-lg-1">
                <img
                  class="h-100 cursor-pointer"
                  :src="require('@/assets/image/behance.svg')"
                  alt="behance icon"
                />
              </a>
            </li>
            <li
              v-if="active"
              id="searchInput"
              class="nav-item ms-lg-2 mx-lg-3 mt-2 mt-lg-0"
            >
              <input
                class="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li
              @click="active = !active"
              class="nav-item ms-lg-2 mx-lg-3 mt-2 mt-lg-0"
            >
              <img
                alt="search icon"
                class="cursor-pointer"
                :src="require('@/assets/image/Search-Icon.svg')"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },

  methods: {},
};
</script>
