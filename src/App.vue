<template>
  <div
    id="app"
    class="w-full min-h-screen flex flex-col gap-4 p-4 bg-slate-200"
  >
    <div class="w-full bg-white text-center p-2 rounded">
      <h1 class="text-2xl text-gray-900">Resumo do seu pedido</h1>
    </div>
    <div class="flex flex-col flex-1 gap-4">
      <Card v-for="(item, index) in getCart" :key="index" :item="item" />
    </div>
    <div class="w-full h-max flex flex-col gap-2">
      <div class="w-full bg-white flex flex-col gap-2 p-2 rounded">
        <div class="w-full flex justify-between">
          <p>Subtotal:</p>
          <p>R$ {{ total }}</p>
        </div>
        <div class="w-full flex justify-between">
          <p class="font-bold">Total:</p>
          <p class="font-bold">R$ {{ total + gorjeta }}</p>
        </div>
      </div>
      <button id="button" class="w-full p-2 text-white text-lg rounded">
        Continuar
      </button>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { Card },
  data() {
    return {
      gorjeta: 5,
    };
  },
  computed: {
    ...mapGetters(["getCart"]),
    total: {
      get() {
        return this.getCart.reduce(
          (acc, item) =>
            acc +
            (item.items.reduce((acc, Item) => acc + Item.amount * Item.qty, 0) +
              item.amount) *
              item.qty,
          0
        );
      },
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#button {
  background-color: #182136;
}
</style>
