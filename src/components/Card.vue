<template>
  <div id="Card" class="w-full h-max p-2 bg-white flex flex-row rounded">
    <div class="flex flex-col justify-between gap-4 w-9/12">
      <div>
        <p class="font-bold">{{ item.name }}</p>
        <p class="font-bold text-gray-700 text-sm">Observações:</p>
        <p
          class="text-sm text-gray-600"
          v-for="(obs, index) in item.items"
          :key="index"
        >
          {{ obs.qty }} {{ obs.name }} <br />
        </p>
      </div>
      <div>
        <div
          class="flex w-max flex-row justify-center items-center gap-2 text-xl"
        >
          <button
            class="w-max"
            @click="
              ac_handleUpdateState({
                name: item.name,
                mutation: 'mt_handleSubQty',
              })
            "
          >
            <img src="../assets/sub.svg" alt="" class="w-6 h-6" />
          </button>
          {{ item.qty }}
          <button
            class="w-max"
            @click="
              ac_handleUpdateState({
                name: item.name,
                mutation: 'mt_handleAddQty',
              })
            "
          >
            <img src="../assets/add.svg" alt="" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 justify-between items-end">
      <button
        @click="
          ac_handleUpdateState({
            mutation: 'mt_handleCloseItem',
            name: item.name,
          })
        "
      >
        <img src="../assets/close.svg" alt="" class="w-5 h-5" />
      </button>
      <div class="font-bold text-lg">R$ {{ total }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["ac_handleUpdateState"]),
  },
  props: {
    item: Object,
  },
  computed: {
    total: {
      get() {
        return (
          (this.item.amount +
            this.item.items.reduce(
              (acc, item) => acc + item.amount * item.qty,
              0
            )) *
          this.item.qty
        );
      },
    },
  },
  mounted() {
    console.log(this.item);
  },
};
</script>

<style></style>
