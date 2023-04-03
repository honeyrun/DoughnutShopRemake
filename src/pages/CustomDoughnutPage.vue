<template>
  <div>
    <div class="navBg"></div>
    <div id="customCon">
      <aside>
        <h1>Custom Doughnut</h1>
      </aside>
      <div>
        <section>
          <div class="optBar">
            <h5>Shape</h5>
            <div>
              <figure>
                <img src="../assets/ring.jpg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="ring_shape"
                    v-model="selected.shape"
                  />
                  <h6>Ring</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/circle.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="circle_shape"
                    v-model="selected.shape"
                  />
                  <h6>Circle</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/cruller.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="cruller_shape"
                    v-model="selected.shape"
                  />
                  <h6>Cruller</h6>
                </figcaption>
              </figure>
            </div>
          </div>
          <span></span>
          <div class="optBar">
            <h5>Filling</h5>
            <div>
              <figure>
                <img src="../assets/mix_filling.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="mix_filling"
                    v-model="selected.filling"
                  />
                  <h6>Mix Filling</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/vanilla_filling.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="vanilla_filling"
                    v-model="selected.filling"
                  />
                  <h6>Vanilla Filling</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/chocolate_filling.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="choco_filling"
                    v-model="selected.filling"
                  />
                  <h6>Chocolate Filling</h6>
                </figcaption>
              </figure>
            </div>
          </div>
          <span>
            <h6>No Filling</h6>
            <input type="radio" value="no_filling" v-model="selected.filling" />
          </span>
          <div class="optBar">
            <h5>Topping</h5>
            <div>
              <figure>
                <img src="../assets/mix_topping.png" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="mix_topping"
                    v-model="selected.topping"
                  />
                  <h6>Mix Topping</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/choco_topping.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="mm_topping"
                    v-model="selected.topping"
                  />
                  <h6>M&M Topping</h6>
                </figcaption>
              </figure>
              <figure>
                <img src="../assets/oreo_topping.jpeg" alt="" />
                <figcaption>
                  <input
                    type="radio"
                    value="oreo_topping"
                    v-model="selected.topping"
                  />
                  <h6>Oreo Topping</h6>
                </figcaption>
              </figure>
            </div>
          </div>
          <span>
            <h6>No Topping</h6>
            <input type="radio" value="no_topping" v-model="selected.topping" />
          </span>
          <div class="optBar">
            <h5>Others</h5>
            <div>
              <figcaption>
                <input type="checkbox" v-model="selected.vegan" />
                <i class="fa-solid fa-leaf"></i>
                <h6>vegan</h6>
              </figcaption>
              <figcaption>
                <input type="checkbox" v-model="selected.g_free" />
                <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>
                <h6>glueten free</h6>
              </figcaption>
            </div>
          </div>
        </section>
        <article>
          <h2>Selected Option</h2>
          <div>
            <h5>Shape :</h5>
            <h4>{{ selected.shape }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Filling :</h5>
            <h4>{{ selected.filling }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Topping :</h5>
            <h4>{{ selected.topping }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Price</h5>
            <p>{{ calPrice() }}</p>
          </div>
          <div>
            <add-cart-compo :pObj="selected" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import AddCartCompo from "../components/AddCartCompo.vue";

export default {
  name: "CustomDoughnutPage",
  components: {
    AddCartCompo,
  },
  data() {
    return {
      selected: {
        custom: true,
        price: 2,
        vegan: false,
        g_free: false,
        shape: "ring_shape",
        filling: "no_filling",
        topping: "no_topping",
      },
      priceList: {
        ring_shape: 2.5,
        circle_shape: 3,
        cruller_shape: 3.4,
        mix_filling: 1,
        vanilla_filling: 0.8,
        choco_filling: 0.8,
        mix_topping: 1.5,
        mm_topping: 1.3,
        oreo_topping: 1,
        no_filling: 0,
        no_topping: 0,
      },
    };
  },
  methods: {
    calPrice() {
      let price = 0;
      price =
        this.priceList[this.selected.shape] +
        this.priceList[this.selected.filling] +
        this.priceList[this.selected.topping];
      if (this.selected.vegan) {
        price *= 1.15;
      }
      if (this.selected.g_free) {
        price *= 1.1;
      }
      price = price.toFixed(2);

      // update price inside obj
      this.selected.price = price;
      console.log(this.selected);
      return price;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.navBg {
  background-color: $green;
  height: 5rem;
}

#customCon {
  padding-top: 7vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
}
#customCon > div {
  display: flex;
  column-gap: 40px;
  width: 80%;
}
aside {
  width: 80%;
}
h1 {
  font-size: 32px;
}
h2 {
  width: 100%;
  font-size: 24px;
  padding-bottom: 2vh;
}
h6 {
  font-weight: 500;
  font-size: 16px;
  color: #202020;
}
div > h5,
div > h4 {
  font-size: 18px;
  color: #202020;
  width: 100%;
}
div > h5 {
  font-weight: 500;
}
div > h4 {
  text-align: right;
}
article > div {
  display: flex;
  width: 100%;
}
article p {
  font-size: 24px;
  font-weight: 600;
}
article {
  width: 20%;
  background-color: white;
  right: 10%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  align-items: center;
    position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 80px;
  height: 60vh;

}
span {
  width: 100%;
  border-bottom: 1.8px solid #e2dbdb;
  display: flex;
  column-gap: 3vh;
}

section {
  width: 58%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  background-color: white;
  padding: 3%;
}
button {
  background-color: #417358;
  color: #faf6f0;
  padding: 10px 30px;
  margin-top: 15px;
  border: 1.5px solid #202020;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
button:hover {
  background-color: white;
  color: #202020;
  cursor: pointer;
}
.optBar {
  display: flex;
  flex-direction: column;
  row-gap: 4vh;
}
.optBar > div {
  display: flex;
}
figure {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #e47738;
  object-fit: cover;
  object-position: center;
}
figcaption {
  display: flex;
  column-gap: 1vh;
}
</style>
