import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Cart: [
      {
        name: "Pizza de calebreza",
        amount: 10,
        qty: 2,
        items: [
          {
            name: "Cebola extra",
            amount: 1.5,
            qty: 1,
          },
          {
            name: "Borda recheada",
            amount: 5,
            qty: 1,
          },
        ],
      },
      {
        name: "Cane assada",
        amount: 35,
        qty: 1,
        items: [
          {
            name: "Farofa",
            amount: 5,
            qty: 2,
          },
          {
            name: "Feijão tropeiro",
            amount: 7,
            qty: 1,
          },
        ],
      },
    ],
  },
  mutations: {
    mt_handleAddQty(state, payload) {
      return state.Cart.map((el) => {
        switch (el.name) {
          case payload.name:
            el.qty += 1;
        }
      });
    },
    mt_handleSubQty(state, payload) {
      return state.Cart.map((el) => {
        switch (el.name) {
          case payload.name:
            el.qty -= 1;
            if (el.qty <= 1) {
              el.qty = 1;
            }
        }
      });
    },
    mt_handleCloseItem(state, payload) {
      return state.Cart.map((el) => {
        switch (el.name) {
          case payload.name:
            state.Cart.splice(state.Cart.indexOf(el), 1);
        }
      });
    },
  },
  actions: {
    ac_handleUpdateState(context, payload) {
      context.commit(payload.mutation, { name: payload.name });
    },
  },
  getters: {
    getCart(state) {
      return state.Cart;
    },
  },
  modules: {},
});
