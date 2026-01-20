import { getProductsApi } from "../../api/products";

const productsModule = {
  namespaced: true,

  state: () => ({
    products: [],
  }),

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },

  actions: {
    async getProducts({ commit }) {
      const { products } = await getProductsApi();
      commit("SET_PRODUCTS", products);
    },
  },

  getters: {
    products: (state) => state.products,

    categoriesCount: (state) => {
      return state.products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
      }, {});
    },

    avgPriceByCategory: (state) => {
      const map = {};

      state.products.forEach((p) => {
        if (!map[p.category]) {
          map[p.category] = { sum: 0, count: 0 };
        }
        map[p.category].sum += p.price;
        map[p.category].count++;
      });

      return Object.fromEntries(
        Object.entries(map).map(([key, value]) => [
          key,
          +(value.sum / value.count).toFixed(2),
        ]),
      );
    },
  },
};

export default productsModule;
