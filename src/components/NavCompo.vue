<template>
  <nav :class="{ onScroll: !view.topOfPage }">
    <aside>
      <h2><span>Maple</span> Doughnut</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="320.712"
        viewBox="0 0 320.712 320.737"
      >
        <g id="donut" transform="translate(-0.475 511.62)">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M146.324-511.231a163.045,163.045,0,0,0-84.677,33.746c-12.231,9.409-28.1,27.1-37.258,41.523-3.952,6.21-11.667,22.016-14.427,29.543a194.951,194.951,0,0,0-8.029,31.3c-1.944,12.231-1.944,35.439,0,47.67a193.255,193.255,0,0,0,8.029,31.3c2.823,7.652,10.538,23.4,14.427,29.543a173.537,173.537,0,0,0,51.685,51.685c6.147,3.889,21.891,11.6,29.543,14.427a163.05,163.05,0,0,0,82.733,7.276c78.593-13.611,135.735-84.113,132.724-163.71A154.119,154.119,0,0,0,304.7-421.849c-8.28-16.873-16.873-28.853-30.672-42.715-13.862-13.8-25.842-22.392-42.715-30.672a155.891,155.891,0,0,0-46.416-14.74C175.679-511.419,155.105-512.109,146.324-511.231Zm39.391,46.1c2.509,1.066,25.278,23.208,26.846,26.156,1.129,2.133,1.129,6.21,0,8.907-1.129,2.76-4.767,5.394-7.9,5.833-4.892.69-6.9-.753-19.57-13.486-6.461-6.461-11.98-12.545-12.357-13.486-1.505-3.952-.376-9.471,2.446-12.043a15.946,15.946,0,0,1,7.088-2.823A13.752,13.752,0,0,1,185.715-465.129ZM135.1-443.3c6.586,4.391,6.774,12.921.376,17.625-1.694,1.254-2.572,1.317-16.057,1.317h-14.3l-2.321-1.819c-5.9-4.516-5.52-12.858.815-17.124,2.07-1.38,2.634-1.443,15.744-1.443S133.027-444.681,135.1-443.3Zm36.631,37.383a55.9,55.9,0,0,1,43.656,43.656c6.21,29.857-13.423,59.4-43.656,65.609-29.857,6.21-59.4-13.423-65.609-43.656C98.152-378.946,133.089-413.884,171.727-405.918Zm-88.943,4.391c2.2,1.129,4.642,4.83,5.018,7.464.627,4.767-.565,6.586-11.98,18.19-5.9,5.959-11.918,11.667-13.486,12.67a10.384,10.384,0,0,1-16.183-7.527c-.565-4.265,1.317-6.962,14.05-19.57,10.663-10.538,12.043-11.729,14.615-12.231A11.4,11.4,0,0,1,82.785-401.527ZM257.6-402.719c3.45.753,5.457,2.446,7.213,5.833,1.129,2.383,1.38,3.513,1.066,5.708-.565,3.575-3.952,7.59-7.151,8.53-1.254.314-7.652.627-14.113.627-13.172,0-14.615-.314-17.814-3.952-5.332-6.021-2.258-14.866,5.771-16.81C235.329-403.409,254.711-403.409,257.6-402.719ZM62.337-338.176c1.505.941,7.59,6.711,13.486,12.67,8.593,8.719,10.914,11.416,11.541,13.548A10.321,10.321,0,0,1,71.62-300.416c-1.505-.941-7.59-6.711-13.548-12.733-8.97-9.158-10.851-11.416-11.478-13.674A10.284,10.284,0,0,1,62.337-338.176Zm208.808-.5c4.391,2.509,6.461,9.22,4.14,13.611-1.129,2.007-23.961,24.776-25.9,25.78a12.945,12.945,0,0,1-4.453.69,10.362,10.362,0,0,1-9.471-14.238c.815-2.258,23.459-25.152,25.968-26.281A11.946,11.946,0,0,1,271.145-338.677Zm-188.674,80.6a49.177,49.177,0,0,1,11.6,6.021c8.217,5.457,15.054,8.719,22.142,10.663,7.652,2.07,21.2,2.07,28.853,0a72.893,72.893,0,0,0,21.2-10.036c9.534-6.461,15.493-8.53,24.588-8.53,9.032,0,14.552,1.882,24.337,8.342,3.2,2.07,7.4,4.642,9.409,5.645a67.423,67.423,0,0,0,16.622,5.332c1.631.251,2.823.753,2.634,1.066-.753,1.129-13.737,9.346-19.758,12.419a144.45,144.45,0,0,1-45.475,14.238c-9.785,1.254-27.285,1.254-36.443-.063a165,165,0,0,1-27.536-6.586,183.575,183.575,0,0,1-26.03-12.357c-12.106-7.464-31.864-24.337-30.358-25.905,1.254-1.254,9.66-2.509,14.677-2.133A58.206,58.206,0,0,1,82.471-258.077Z"
            transform="translate(0 0)"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </aside>

    <div class="page">
      <ul>
        <li><router-link to="/productlist">Menu</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-if="!logFlag"><router-link to="/">Login </router-link></li>
        <li id="cart">
          <router-link to="/shoppingcart"
            ><i class="fa-solid fa-cart-shopping"></i
          >({{ shoppingCart.calTotalAmount() }})</router-link
          >
        </li>
        <li v-if="logFlag">
          <router-link to="/user"><i class="fa-solid fa-user"></i></router-link>
        </li>
        <li v-if="logFlag" @click="logout"><a href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavCompo",
  props: ["logFlag", "shoppingCart"],
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

nav {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 3;
  background-color: transparent;
  color: $deepBrown;
  justify-content: space-between;
  align-items: center;
  padding: 1.3%;
  padding-left: 6%;
  padding-right: 6%;
  transition: 0.3s;
  img {
    width: 10%;
  }
  &.onScroll {
    box-shadow: 0 1px 13px rgba(128, 127, 126, 0.2);
    background-color: $bg;
    ul li {
      color: $lightBrown;
    }

    li:hover {
      cursor: pointer;
      color: $black-default;
      a {
        color: $black-default;
      }
    }
    a {
      color: $lightBrown;
    }
    h2 {
      color: $deepBrown;
    }
    svg path {
      fill: #6b5f52;
    }
  }
}

div {
  justify-content: center;
  box-sizing: border-box;

  ul {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
    color: $bg;
    li {
      list-style: none;
      border-radius: 10px;
      /* padding: 0.5%; */
      transition: 0.3s;
    }
  }
  li:hover {
    cursor: pointer;
    color: $primary;
    a {
      color: $primary;

    }
  }
  a {
    display: flex;
      align-items: center;
    text-decoration: none;
    color: $bg;
    gap: 3px;
    transition: 0.3s;
  }
}

aside {
  display: flex;
  align-items: center;
  gap: 1rem;
  h2 {
    font-family: "Damion";
    font-size: 2rem;
    color: $bg;
    span {
      font-family: "Damion";
      color: $primary;
    }
  }
  svg {
    width: 32px;
  }
}

.page {
  align-self: center;
}

.scroll {
  background-color: $bg;
}
</style>
