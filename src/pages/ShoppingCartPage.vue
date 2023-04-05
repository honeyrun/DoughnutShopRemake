<template>
  <div>
    <div class="navBg"></div>
    <div id="cartCon">
      <aside>
        <h1>Cart</h1>
      </aside>
      <div>
        <section>
          <cart-item-compo
            v-for="[pid, item] in shoppingCart.pList"
            :key="pid"
            :item="item"
            @deleteItemE="delteItem"
            @editItemE="editItem"
          />
        </section>
        <article>
          <h2>Invoice</h2>
          <div>
            <h5>Price({{ shoppingCart.calTotalAmount() }} Items)</h5>
            <h4>$ {{ shoppingCart.calTotalAll().toFixed(2) }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Discount</h5>
            <h4>$ {{ shoppingCart.calDiscount().toFixed(2) }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Total Price</h5>
            <p>$ {{ shoppingCart.calFinalPrice().toFixed(2) }}</p>
          </div>
          <div>
            <button>CHECKOUT</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import CartItemCompo from "../components/CartItemCompo.vue";

export default {
  name: "ShoppingCartPage",
  props: ["shoppingCart"],
  components: {
    CartItemCompo,
  },
  methods: {
    delteItem(pid) {
      this.shoppingCart.deleteProduct(pid);
      localStorage.setItem("cartdata", this.shoppingCart.saveStrData());
    },
    editItem() {
      localStorage.setItem("cartdata", this.shoppingCart.saveStrData());
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#cartCon {
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
  > div {
    display: flex;
    column-gap: 40px;
    width: 80%;
  }
}
aside {
  width: 80%;
}

h2 {
  width: 100%;
  padding-bottom: 2vh;
}

h4 {
  font-size: 20px;
}
h5 {
  width: 74%;
  font-weight: 500;
  font-size: 20px;
  color: $lightBrown;
}

article {
  width: 24%;
  background-color: white;
  height: 50vh;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 80px;
  right: 10%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  align-items: center;

  > div {
    display: flex;
    width: 100%;

    p {
      font-size: 24px;
      font-family: "Cormorant Garamond", serif;
      color: $green;
    }
  }
}
span {
  width: 100%;
  border-bottom: 1.8px solid #e2dbdb;
}

section {
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
}
button {
  background-color: #417358;
  color: #faf6f0;
  padding: 10px 30px;
  margin-top: 15px;
  border: 1.4px solid #202020;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
button:hover {
  background-color: white;
  color: #202020;
  cursor: pointer;
}
</style>
