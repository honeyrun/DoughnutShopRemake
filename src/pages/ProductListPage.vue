<template>
  <div>
    <image-header-compo :hData="hData" />
    <div id="pCon">
      <aside id="sideBar">
        <div class="function">
          <section id="search">
            <h5>Search</h5>
            <div>
              <input type="search" v-model="searchKey" />
              <button @click="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </section>
          <section class="sort">
            <h5>Sort</h5>
            <select v-model="sort">
              <option selected value="no">Sort by Popularity</option>
              <option value="pLow">Sort by Price - low to high</option>
              <option value="pHigh">Sort by Price - high to low</option>
              <option value="nLow">Sort by Name - A to Z</option>
              <option value="nHigh">Sort by Name - Z to A</option>
            </select>
          </section>
          <section class="filter">
            <h5>Filter</h5>
            <div>
              <aside>
                <input type="radio" v-model="filter" value="all" />
                <label>All</label>
              </aside>
              <aside>
                <input type="radio" v-model="filter" value="g_free" />
                <label>Gluten-free</label>
              </aside>
              <aside>
                <input type="radio" v-model="filter" value="vegan" />
                <label>Vegen</label>
              </aside>
            </div>
          </section>
          <!-- Custon Donut -->
          <aside class="link">
            <figure>
              <figcaption>
                <router-link to="/custom"
                  >Order Custom Doughnut
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    viewBox="0 0 127.836 39.869"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M415.8,696.517H537.4l-27.929-35"
                      transform="translate(-415.797 -659.648)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="9"
                    />
                  </svg>
                </router-link>
              </figcaption>
            </figure>
          </aside>
        </div>
      </aside>
      <div id="menu">
        <h1>Doughnuts</h1>
        <section>
          <doughnut-compo
            v-for="doughnut in filterSortSearch"
            :key="doughnut.pid"
            :doughnut="doughnut"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutCompo from "../components/DoughnutCompo.vue";
import ImageHeaderCompo from "../components/ImageHeaderCompo.vue";

export default {
  name: "ProductListPage",
  components: {
    DoughnutCompo,
    ImageHeaderCompo,
  },
  props: ["doughtnutList", "shoppingCart"],
  data() {
    return {
      searchKey: "",
      sort: "no",
      filter: "all",
      hData: {
        img: "Hmenu.jpg",
        title: "Menu",
        content: "",
      },
    };
  },
  methods: {
   
    search() {
      this.displayList = new Map(
        [...this.doughtnutList].filter(
          ([, value]) =>
            value.pname.toLowerCase().indexOf(this.searchKey.toLowerCase()) >
              -1 ||
            value.pIngd.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        )
      );
    },
  },
  computed: {
    filterSortSearch() {
      let displayList = this.doughtnutList;

      displayList = displayList.filter(
        (item) =>
          item.pname.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
          item.pIngd.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
      );

      switch (this.sort) {
        case "pLow":
          displayList = [...displayList].sort((a, b) => a.price - b.price);
          break;
        case "pHigh":
          displayList = [...displayList].sort((a, b) => b.price - a.price);

          break;
        case "nLow":
          displayList = displayList = [...displayList].sort((a, b) =>
            a.pname.localeCompare(b.pname)
          );
          break;
        case "nHigh":
          displayList = displayList = [...displayList].sort((a, b) =>
            b.pname.localeCompare(a.pname)
          );
          break;
        default:
      }

      if (this.filter === "g_free") {
        displayList = displayList.filter((item) => item.g_free);
      } else if (this.filter === "vegan") {
        displayList = displayList.filter((item) => item.vegan);
      }
      return displayList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

select {
  padding: 10px;
  width: 100%;
}
input [type="checkbox"] {
  width: 20px;
  height: 20px;
}

input[type="radio"] {
  accent-color: $green;
}

#pCon {
  display: flex;
  width: 100%;
}

#menu {
  width: 72%;
  min-height: 80vh;
  padding: 8vh;
  padding-left: 6%;
  padding-right: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 6vh;

  section {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4.5vh;
    column-gap: 5.6vh;
  }
}

#sideBar {
  width: 28%;
  height: 100vh;
  background-color: $bg-sec;
  display: flex;
  justify-content: center;
  padding-top: 8vh;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 80px;

  &.fixed {
    top: 4.2rem;
    position: fixed;
  }
}

.function {
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  > section {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    section {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
    }
    aside {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }
  }
}

.link {
  figure {
    border: 1px solid #202020;
    width: 100%;
    height: 7rem;
    align-items: center;
    position: relative;
    background-image: url("../assets/customBtn.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  img {
    width: 100%;
    height: 100%;
  }
  figcaption {
    background-color: rgba($color: #3c3837, $alpha: 0.54);
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 7%;
    box-sizing: border-box;
    display: flex;
  }
  a {
    width: 100%;
    height: 100%;
    align-items: center;
    color: white;
    font-size: 18px;
    text-decoration: none;
    display: flex;
    transition: 0.3s;
  }
  a:hover {
    color: $primary;
    svg path {
      stroke: $primary;
    }
  }
}

#search {
  button {
    width: 40px;
    height: 40px;
  }
  input {
    width: 75%;
    height: 40px;
    border-right: none;
    padding: 3px;
    text-align: left;
  }
}
</style>
