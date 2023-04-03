<template>
  <figure>
    <router-link :to="`/productdetail?pid=${doughnut.pid}`">
      <div>
        <aside>
          <i v-if="doughnut.vegan" class="fa-solid fa-leaf"></i>
          <i
            v-if="doughnut.g_free"
            class="fa-solid fa-wheat-awn-circle-exclamation"
          ></i>
        </aside>
        <img :src="getImage(doughnut)" :alt="doughnut.pid" />
        <!-- <img src="../assets/doughnuts/d1.png"> -->
      </div>
      <figcaption>
        <h4>{{ doughnut.pname }}</h4>
        <p>$ {{ doughnut.price }}</p>
      </figcaption>
    </router-link>
    <add-cart-compo :pObj="doughnut" />
  </figure>
</template>
<script>
import AddCartCompo from "./AddCartCompo.vue";

export default {
  name: "DoughnutCompo",
  components: {
    AddCartCompo,
  },
  props: ["doughnut"],
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

figure {
  padding: 20px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
}
figure:hover {
  box-shadow: 0px 4px 35px $shadow;
}

i {
  color: #417358;
  border: 1.4px solid #417358;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

aside {
  position: absolute;
  display: flex;
  column-gap: 1vh;
}
a {
  color: #202020;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;

  > div {
    height: 210px;
    display: flex;
  }
}

p {
  padding-top: 0.8vh;
  color: #417358;
}

img {
  width: 190px;
  height: 190px;
  object-fit: cover;
  object-position: center;
  align-self: flex-end;
}
</style>
