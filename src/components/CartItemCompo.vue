<template>
  <div id="itemCon">
    <figure>
      <img v-if="!item.custom" :src="getImage(item)" :alt="item.pid" />
      <img v-if="item.custom" src="../assets/custom.jpeg" :alt="item.pid" />
    </figure>
    <article>
      <aside>
        <h2>{{ item.pname }}</h2>
        <p>1EA : {{ item.price }}</p>
      </aside>
      <div v-if="item.custom">
        <h3>Option</h3>
        <h5>
          Shape : {{ item.shape }} / Filling : {{ item.filling }} / Topping :
          {{ item.topping }}
        </h5>
        <h5 v-if="item.vegan">vegan</h5>
        <h5 v-if="item.g_free">gluten free</h5>
      </div>
      <cart-amount-compo />
    </article>
    <aside>
      <h4>Price : {{ item.calTotal().toFixed(2) }}</h4>
      <button @click="deleteItem">REMOVE</button>
    </aside>
  </div>
</template>

<script>
import CartAmountCompo from "./CartAmountCompo.vue";

export default {
  name: "CartItemCompo",
  props: ["item"],
  components: {
    CartAmountCompo,
  },
  methods: {
    getImage(obj) {
      let imgSrc = "";
      try {
        return require(`../assets/doughnuts/d${obj.pid}.png`);
      } catch (error) {
        console.error(`Image [d${obj.pid}.png] not found!`);
      }
      return imgSrc;
    },
    deleteItem() {
      this.$emit("deleteItemE", this.item.pid);
    },
  },
  provide() {
    return {
      item: this.item,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
#itemCon {
  background-color: white;
  width: 94%;
  display: flex;
  align-items: center;
  padding: 2.5% 3%;

  > aside {
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
  }
}
figure {
  padding: 1vh;
}
img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
}

h4 {
  font-weight: 500;
  color: $green;
  font-size: 19px;
}
h3 {
  font-weight: 500;
  font-size: 16px;
  margin-top: -0.6vh;
}
p {
  color: #a19896;
  font-size: 14px;
}
h5 {
  font-weight: 500;
  color: #a19896;
  font-size: 14px;
}
article {
  padding-left: 5.5vh;
  width: 48%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
}
button {
  background-color: white;
  padding: 8px 28px;
  border: 1.4px solid #202020;
  font-size: 16px;
  transition: 0.3s;
}
button:hover {
  background-color: #417358;
  color: #faf6f0;
  cursor: pointer;
}
</style>
