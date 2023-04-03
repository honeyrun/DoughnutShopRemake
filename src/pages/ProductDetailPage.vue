<template>
  <div>
    <div class="navBg"></div>
    <div class="detail">
      <!-- doughnut info -->
      <h5>Menu / {{ doughnut.pname }}</h5>
      <figure>
        <section>
          <img :src="getImage(doughnut)" :alt="doughnut.pid" />
        </section>
        <article>
          <aside class="icon">
            <i v-if="doughnut.vegan" class="fa-solid fa-leaf"></i>
            <i
              v-if="doughnut.g_free"
              class="fa-solid fa-wheat-awn-circle-exclamation"
            ></i>
          </aside>
          <figcaption>
            <h1>{{ doughnut.pname }}</h1>
            <h3>{{ doughnut.ptitle }}</h3>
            <a href="#dInfo">Show Detail Calories & Ingredients</a>
            <p>$ {{ doughnut.price }}</p>
            <add-cart-compo :pObj="doughnut" />
          </figcaption>
        </article>
      </figure>

      <!--  doughnut detail -->
      <article class="dInfo" id="dInfo">
        <aside class="pDetail">
          <h2>Product Detail</h2>
          <p>{{ doughnut.pInfo }}</p>
        </aside>
        <aside class="allInfo">
          <section class="cal">
            <h2>All Calories</h2>
            <table>
              <thead>
                <th v-for="(name, idx) in doughnut.pCalNames" :key="idx">
                  <tr>
                    {{
                      name
                    }}
                  </tr>
                </th>
              </thead>
              <tbody>
                <th v-for="(pCal, idx) in doughnut.pCals" :key="idx">
                  <tr>
                    {{
                      pCal
                    }}
                  </tr>
                </th>
              </tbody>
            </table>
          </section>
          <section class="ingd">
            <h2>All Ingredients</h2>
            <p>{{ doughnut.pIngd }}</p>
          </section>
        </aside>
      </article>

      <!-- Recommended donuts -->
      <section id="items">
        <h2>Recommendation</h2>
        <article>
          <doughnut-compo
            v-for="(arrayItem, idx) in arrayItems"
            :key="idx"
            :doughnut="arrayItem"
            class="dCompo"
          ></doughnut-compo>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import AddCartCompo from "../components/AddCartCompo.vue";
import DoughnutCompo from "../components/DoughnutCompo.vue";

export default {
  name: "ProductDetailPage",
  components: {
    AddCartCompo,
    DoughnutCompo,
  },
  props: ["doughtnutList", "pid"],
  data() {
    return {
      doughnut: this.getDdata(),
      arrayItems: this.recommendation(),
    };
  },
  methods: {
    getDdata() {
      for (let i of this.doughtnutList) {
        if (this.pid == i.pid) {
          return i;
        }
      }
      this.$router.push({ name: "product-list", reload: true });
    },
    getImage(obj) {
      let imgSrc = "";
      try {
        return require(`../assets/doughnuts/d${obj.pid}.png`);
      } catch (error) {
        console.error(`Image [d${obj.pid}.png] not found!`);
      }
      return imgSrc;
    },
    recommendation() {
      let recArray = this.doughtnutList.filter((item) => this.pid != item.pid);
      const shuffled = recArray.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {
    pid() {
      this.doughnut = this.getDdata();
      this.arrayItems = this.recommendation();
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.navBg {
  background-color: $green;
  height: 5rem;
}

.detail {
  padding-top: 12vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 7vh;
  padding-bottom: 15vh;
}
.detail > figure {
  width: 70%;
  height: 70%;
  display: flex;
  background-color: white;
  align-items: center;
}
.detail > figure > section {
  width: 54%;
  display: flex;
  justify-content: center;
}
.detail > figure img {
  width: 42vh;
  height: 42vh;
}
.detail > figure > article {
  display: flex;
  flex-direction: column;
}
.detail > figure > aside {
  position: absolute;
  display: flex;
  column-gap: 1vh;
}
.icon {
  display: flex;
  column-gap: 1vh;
}
figcaption {
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
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
figure > article {
  width: 40%;
}
h1 {
  font-size: 40px;
}
h3 {
  font-weight: 400;
}
figcaption > p {
  font-size: 30px;
}
table {
  display: flex;
}
thead,
tbody {
  display: flex;
  flex-direction: column;
}
th {
  border-top: 1px solid black;
}
th:first-child {
  border-top: 3px solid black;
}
a {
  color: black;
}
a:hover {
  color: #417358;
}
.dInfo {
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.dInfo > aside {
  padding: 2%;
  height: 50%;
  display: flex;
  row-gap: 1vh;
}
.dInfo > a {
  color: black;
}
.pDetail {
  display: flex;
  flex-direction: column;
}
.allInfo {
  display: flex;
  flex-direction: row;
  column-gap: 4vh;
}
.allInfo > section {
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
}
.cal {
  width: 40%;
}
.ingd {
  width: 60%;
}
#items {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2vh;
  background-color: white;
  padding: 7vh 0;
}
#items article {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
#items figure {
  width: 25vh;
  display: flex;
  align-items: center;
}
#items h2 {
  width: 68%;
  text-align: left;
}
</style>
