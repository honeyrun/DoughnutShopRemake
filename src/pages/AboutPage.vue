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
            indulge in our delicious doughnuts today! Indulge in our freshly
            made doughnuts at Maple Doughnut Shop, featuring our signature maple
            glaze made with pure Canadian maple syrup.
          </p>
          <figure>
            <img src="../assets/about/about3.png" alt="auto" />
          </figure>
        </div>
        <figure>
          <img src="../assets/about/shop1.jpeg" alt="shop1" />
        </figure>
      </section>
      <div class="video"></div>
      <section>
        <figure>
          <img src="../assets/about/shop2.jpg" alt="shop1" />
        </figure>
        <h5>Maple Doughnut Time</h5>
        <h1>WE ARE OPEN</h1>
        <p>
          Come in early to start your day off with a fresh, warm doughnut, or stop by later in the afternoon for a sweet treat to help you power through the rest of your day. We can't wait to see you!
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
      </section>
      <contact-compo />
    </div>
  </div>
</template>

<script>
import ContactCompo from '../components/ContactCompo.vue';
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
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
</style>
