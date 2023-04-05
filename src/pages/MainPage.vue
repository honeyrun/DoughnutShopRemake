<template>
  <div>
    <slider-compo />
    <!-- Recommended donuts -->
    <section id="items">
      <h1>Weekly Bestselling</h1>
      <article>
        <doughnut-compo
          v-for="(item, idx) in weekly"
          :key="idx"
          :doughnut="item"
        ></doughnut-compo>
      </article>
    </section>
    <section class="custom">
      <h1>Discover Your Flavor</h1>
      <article>
        <div>
          <h6>
            Everyone has their own unique tastes and preferences. That's why we
            offer a fully customizable doughnut experience! Choose your own
            shape, from classic ring to fun and funky shapes, and then select
            from our wide variety of toppings and fillings to create your
            perfect doughnut.
          </h6>
        </div>
        <figure><img src="../assets/home/donutC.png" alt="custom" /></figure>
        <div>
          <ul>
            <li>
              <h2>1. Choose Base Shape</h2>
              <p>Including traditional round, twists, and more.</p>
            </li>
            <li>
              <h2>2. Choose Filling</h2>
              <p>Variety of delicious fillings to complement your doughnut.</p>
            </li>
            <li>
              <h2>3. Topping With your Preference</h2>
              <p>Add an extra layer of flavor and texture</p>
            </li>
          </ul>
          <router-link to="/custom"><button>ORDER CUSTOM</button></router-link>
        </div>
      </article>
    </section>
    <section class="discount">
      <figure><img src="../assets/home/donut1.png" alt="donutone" /></figure>
      <div>
        <h1>Buy <span>12</span> or More and Get a Discount</h1>
        <p>
          Maple Doughnut Shop, we offer a special discount for our customers who
          purchase 12 or more doughnuts. Mix and match to create your own custom
          dozen and take advantage of the savings.
        </p>
        <figure><img src="../assets/home/flour.png" alt="flour" /></figure>
      </div>
    </section>
    <section class="review">
        <h1>CUSTOMER REVIEWS</h1>
        <review-compo />
    </section>
    <contact-compo />
  </div>
</template>

<script>
import ContactCompo from "../components/ContactCompo.vue";
import SliderCompo from "../components/SliderCompo.vue";
import DoughnutCompo from "../components/DoughnutCompo.vue";
import ReviewCompo from '../components/ReviewCompo.vue';

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
register();


export default {
  name: "MainPage",
  components: {
    SliderCompo,
    ContactCompo,
    DoughnutCompo,
    ReviewCompo
  },
  props: ["doughtnutList"],
  data() {
    let array = [
      this.doughtnutList[3],
      this.doughtnutList[14],
      this.doughtnutList[4],
      this.doughtnutList[12],
    ];
    return {
      weekly: array,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

section {
  row-gap: 2rem;
  padding: 5rem 15%;
  box-sizing: border-box;
}
h1 {
  font-size: 40px;
  text-align: center;
}
p {
  font-size: 15px;
}

#items {
  padding: 6rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
}

.custom {
  background-color: $deepBrown;
  display: flex;
  flex-direction: column;
  padding: 5rem 15% 3rem;

  article {
    display: flex;
    align-items: center;
  }
  h1,
  h2 {
    color: $bg;
  }
  p {
    color: #bdb0aa;
    font-size: 14px;
  }
  h6 {
    font-size: 16px;

    font-weight: 400;
    color: #bdb0aa;
  }
  li {
    line-height: 1.5;
    list-style: none;
    padding-bottom: 1rem;
  }

  figure {
    flex: 1.6;
    padding-left: 3rem;
  }
  div {
    flex: 1;
  }
  img {
    width: 100%;
  }
}

.discount {
  display: flex;
  align-items: center;
  gap: 2rem;

  figure {
    flex: 1;
  }
  div {
    padding-right: 6rem;
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    figure {
      position: absolute;
      right: -10%;
      bottom: 6%;
      transform: translateY(50%);
      width: 30%;
    }
  }
  img {
    width: 100%;
  }
  h1 {
    text-align: left;
  }
  span {
    font-weight: 500;
  }
}

.review {
    background-color: $lightBrown2;
}

a {
  text-decoration: none;
  color: $bg;
}
button {
  background-color: #417358;
  padding: 10px 30px;
  margin-top: 15px;
  border: 1.4px solid #202020;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
  color: $bg;
}
a:hover {
  button {
    background-color: $bg;
    color: $black-200;
  }
}
</style>
