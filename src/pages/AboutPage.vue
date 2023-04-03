<template>
  <div>
    <image-header-compo :hData="hData" />
    <div id="con">
      <section>
        <div>
          <h5>We Are Maple Doughnut</h5>
          <h1>WE LOVE DOUGHNUTS</h1>
          <p>
            Welcome to Maple Doughnut Shop, where every doughnut is made fresh
            daily with the highest quality ingredients. Our specialty is our
            signature maple glaze, made with pure Canadian maple syrup for a
            sweet and satisfying taste. From classic glazed to unique and
            creative flavors, we have something for everyone. Stop by and
            indulge in our delicious doughnuts today!
          </p>
          <figure>
            <img
              src="../assets/about/about3.png"
              alt="auto"
              style="
                width: 70%;
                height: 140px;
                object-fit: contain;
                padding-top: 1rem;
              "
            />
          </figure>
        </div>
        <figure>
          <img src="../assets/about/shop1.jpeg" alt="shop1" />
        </figure>
      </section>
      <section>
        <figure>
          <img src="../assets/about/shop2.jpg" alt="shop1" />
        </figure>
        <div>
          <h5>Maple Doughnut Time</h5>
          <h1>WE ARE OPEN</h1>
          <p>
            Come in early to start your day off with a fresh, warm doughnut, or
            stop by later in the afternoon for a sweet treat to help you power
            through the rest of your day. We can't wait to see you!
          </p>
          <ul>
            <li>
              <h3>Mon - Fri</h3>
              <h6>9:00 am - 6:30 pm</h6>
            </li>
            <li>
              <h3>Sat - Sun</h3>
              <h6>10:00 am - 3:30 pm</h6>
            </li>
          </ul>
        </div>
      </section>
      <div class="chef">
        <h1>OUR CHEF</h1>
        <section>
          <div>
            <figure>
              <img src="../assets/about/chef1.jpeg" alt="chef1" />
              <figcaption><i class="fa-brands fa-instagram"></i>@EstherHowardPastry</figcaption>
            </figure>
            <h3>Esther Howard</h3>
            <h6>Chef Cook</h6>
          </div>
          <div>
            <figure>
              <img src="../assets/about/chef2.jpeg" alt="chef2" />
              <figcaption><i class="fa-brands fa-instagram"></i>@bakerWatson</figcaption>
            </figure>
            <h3>Darrell Watson</h3>
            <h6>Chef cook - Founder</h6>
          </div>
          <div>
            <figure>
              <img src="../assets/about/chef3.jpeg" alt="chef3" />
              <figcaption><i class="fa-brands fa-instagram"></i>@KristinMapleDonut</figcaption>
            </figure>
            <h3>Kristin Steward</h3>
            <h6>Chef Cook</h6>
          </div>
        </section>
      </div>
      <contact-compo />
    </div>
  </div>
</template>

<script>
import ContactCompo from "../components/ContactCompo.vue";
import ImageHeaderCompo from "../components/ImageHeaderCompo.vue";

export default {
  name: "AboutPage",
  components: {
    ImageHeaderCompo,
    ContactCompo,
  },
  props: [],
  data() {
    return {
      hData: {
        img: "Habout.jpg",
        title: "About Us",
        content:
          "We take pride in crafting the most delicious and indulgent doughnuts. Our unique flavors and fresh ingredients will have you coming back for more.",
      },
    };
  },
  methods: {},
  // mounted() {
  //   window.scrollTo(0, 0);
  // },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

section {
  display: flex;
  gap: 3rem;
  padding: 4rem 8%;

  figure {
    display: flex;
  }
  figure,
  div {
    flex: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
  }
}

section:first-child {
  padding: 8rem 8% 2rem;
}

img {
  width: 100%;
  height: 440px;
  object-fit: cover;
  object-position: center;
}

p {
  font-size: 15px;
}

h5 {
  color: $green;
}

h3 {
  font-size: 26px;
}

h6 {
  font-weight: 400;
  font-size: 18px;
  color: $lightBrown;
}

ul {
  width: 100%;
  li {
    width: 96%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0.8rem;
    padding-bottom: 0.5rem;
    border-bottom: 1.8px solid #e2dbdb;
  }
}

.chef {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    column-gap: 4rem;
  }

  figure {
    width: 280px;
    height: 280px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    img {
      height: inherit;
    }
    figcaption {
      transition: 0.3s;
      opacity: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: $primary, $alpha: 0.6);
      position: absolute;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      i {
        font-size: 32px;
      }
    }
  }
  figure:hover figcaption {
    opacity: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 0.3rem;
  }
  h3 {
    padding-top: 1rem;
  }
  h6 {
    font-style: italic;
    font-size: 16px;
  }
}
</style>
