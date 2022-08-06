import Endpoint from "@/services/Endpoint";
export default {
  // storefront
  findCategories() {
    return Endpoint().get(`products/categories`, {});
  },
  findProducts() {
    return Endpoint().get(`products`, {});
  },
  findFilteredProducts(payload) {
    return Endpoint().get(`products/category/` + payload.category, {});
  },
  deleteProducts(payload) {
    return Endpoint().delete(`products/` + payload.id, {});
  },
  addProduct(payload) {
    return Endpoint().post(`products/`, payload);
  },
  getProductDetails(payload) {
    return Endpoint().get(`products/` + payload.id, {});
  },
};
