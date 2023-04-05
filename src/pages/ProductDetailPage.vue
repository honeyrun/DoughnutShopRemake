<template>
  <div>
    <div class="navBg"></div>
    <div class="dCon">
      <h5>
        <router-link to="/productlist" style="text-decoration: none"
          >Menu /</router-link
        >
        {{ doughnut.pname }}
      </h5>
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
      <article id="dInfo">
        <aside style="flex-direction: column">
          <h2>Product Detail</h2>
          <p>{{ doughnut.pInfo }}</p>
        </aside>
        <aside class="allInfo">
          <section style="width: 40%">
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
                <td v-for="(pCal, idx) in doughnut.pCals" :key="idx">
                  <tr>
                    {{
                      pCal
                    }}
                  </tr>
                </td>
              </tbody>
            </table>
          </section>
          <section style="width: 60%">
            <h2>All Ingredients</h2>
            <p>{{ doughnut.pIngd }}</p>
          </section>
        </aside>
      </article>
      <!-- Recommended donuts -->
      <section id="items">
        <h2>You May Also Like</h2>
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
h1 {
  font-size: 40px;
}
h2 {
  padding-bottom: 1rem;
}
h3 {
  font-weight: 400;
}
h5 {
  width: 70%;
  text-align: left;
  font-family: "poppins";
  font-weight: 400;
  font-size: 16px;
}
p {
  font-size: 15px;
}

.dCon {
  padding-top: 8vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 2.5rem;
  padding-bottom: 15vh;

  > figure {
    width: 70%;
    display: flex;
    background-color: white;
    align-items: center;

    img {
      width: 23rem;
      height: 23rem;
    }
    > section {
      width: 54%;
      display: flex;
      justify-content: center;
    }
    > article {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
    }
    > aside {
      position: absolute;
      display: flex;
      column-gap: 1vh;
    }
  }
}

.icon {
  display: flex;
  column-gap: 1vh;
}
figcaption {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  > p {
    font-size: 24px;
    color: $green;
  }
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

table {
  display: flex;
  thead,
  tbody {
    display: flex;
    flex-direction: column;
  }
}
tr {
  font-size: 15px;
}
tbody {
  td {
    padding-left: 0.5rem;
    font-weight: 400;
  }
}
th,
td {
  border-top: 1px solid $black-200;
  padding: 0.1rem;
}
th:first-child,
td:first-child {
  border-top: 3px solid $black-200;
}
a {
  color: $lightBrown;
  font-weight: normal;
}
a:hover {
  color: #417358;
}

#dInfo {
  width: 70%;
  box-sizing: border-box;
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;

  > aside {
    padding: 2%;
    height: 50%;
    display: flex;
  }
}

.allInfo {
  display: flex;
  flex-direction: row;
  column-gap: 0.3rem;

  > section {
    display: flex;
    flex-direction: column;
  }
}

#items {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  row-gap: 1.2rem;
  padding: 3.8rem 0;

  article {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  #items figure {
    width: 25vh;
    display: flex;
    align-items: center;
  }
  h2 {
    width: 68%;
    text-align: left;
  }
}
</style>
