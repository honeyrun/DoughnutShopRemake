<template>
  <div>
    <div class="navBg"></div>
    <div id="customCon">
      <h1>Custom Doughnut</h1>
      <div>
        <section>
          <div class="optBar">
            <h5>Shape</h5>
            <div>
              <figure v-for="(data, index) in shapeList" :key="index">
                <img :src="getImage(data.image)" :alt="data.image" />
                <figcaption>
                  <input
                    type="radio"
                    :value="data.type"
                    v-model="selected.shape"
                  />
                  <h6>{{ data.type }}</h6>
                </figcaption>
              </figure>
            </div>
          </div>
          <span></span>
          <div class="optBar">
            <h5>Filling</h5>
            <div>
              <figure v-for="(data, index) in fillingList" :key="index">
                <img :src="getImage(data.image)" :alt="data.image" />
                <figcaption>
                  <input
                    type="radio"
                    :value="data.type"
                    v-model="selected.filling"
                  />
                  <h6>{{ data.type }}</h6>
                </figcaption>
              </figure>
            </div>
            <aside>
              <h6>No Filling</h6>
              <input
                type="radio"
                value="no filling"
                v-model="selected.filling"
              />
            </aside>
          </div>
          <span> </span>
          <div class="optBar">
            <h5>Topping</h5>
            <div>
              <figure v-for="(data, index) in toppingList" :key="index">
                <img :src="getImage(data.image)" :alt="data.image" />
                <figcaption>
                  <input
                    type="radio"
                    :value="data.type"
                    v-model="selected.topping"
                  />
                  <h6>{{ data.type }}</h6>
                </figcaption>
              </figure>
            </div>
            <aside>
              <h6>No Topping</h6>
              <input
                type="radio"
                value="no topping"
                v-model="selected.topping"
              />
            </aside>
          </div>
          <span> </span>
          <div class="optBar">
            <h5>Others</h5>
            <div style="column-gap: 2rem">
              <aside>
                <input type="checkbox" v-model="selected.vegan" />
                <i class="fa-solid fa-leaf"></i>
                <h6>vegan</h6>
              </aside>
              <aside>
                <input type="checkbox" v-model="selected.g_free" />
                <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>
                <h6>glueten free</h6>
              </aside>
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
        price: 0,
        vegan: false,
        g_free: false,
        shape: "ring",
        filling: "no filling",
        topping: "no topping",
      },
      priceList: {
        ring: 2.5,
        circle: 3,
        cruller: 3.4,
        star: 3,
        chocolate: 0.8,
        vanilla: 1.2,
        strawberry: 1,
        custard: 0.7,
        "sugar powder": 0.4,
        "m&m": 0.8,
        nuts: 1,
        sprinkles: 0.6,
        "no filling": 0,
        "no topping": 0,
      },
      shapeList: [
        {
          type: "ring",
          image: "ring.png",
        },
        {
          type: "circle",
          image: "circle.png",
        },
        {
          type: "cruller",
          image: "cruller.png",
        },
        {
          type: "star",
          image: "star.png",
        },
      ],
      fillingList: [
        {
          type: "chocolate",
          image: "chocolate.jpeg",
        },
        {
          type: "vanilla",
          image: "vanilla.jpeg",
        },
        {
          type: "strawberry",
          image: "berry.jpeg",
        },
        {
          type: "custard",
          image: "custard.jpeg",
        },
      ],
      toppingList: [
        {
          type: "sugar powder",
          image: "sugar.jpeg",
        },
        {
          type: "m&m",
          image: "m&m.jpeg",
        },
        {
          type: "nuts",
          image: "nuts.jpeg",
        },
        {
          type: "sprinkles",
          image: "sprinkles.png",
        },
      ],
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
      return price;
    },
    getImage(path) {
      let imgSrc = "";
      try {
        return require(`../assets/custom/${path}`);
      } catch (error) {
        console.error(`Image [${path}] not found!`);
      }
      return imgSrc;
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

  > div {
    display: flex;
    column-gap: 40px;
    width: 80%;
  }
}
aside {
  display: flex;
  column-gap: 0.6rem;
}
h1 {
  width: 80%;
  text-align: left;
}
h2 {
  width: 100%;
  font-size: 24px;
  padding-bottom: 2vh;
}
h6 {
  font-weight: 400;
  font-size: 15px;
  color: $black-200;
}

div {
  div > h5 {
    width: 100%;
    font-weight: 500;
    font-size: 22px;
  }
  div > h4 {
    width: 100%;
    font-size: 20px;
    text-align: right;
  }
}

article {
  width: 24%;
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

  > div {
    display: flex;
    width: 100%;
  }
  p {
    font-family: "Cormorant Garamond", serif;
    color: $green;
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 1rem;
  }
}

span {
  width: 100%;
  border-bottom: 1.8px solid #e2dbdb;
  display: flex;
  column-gap: 0.5rem;
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
  padding: 0.5rem;
  > div {
    display: flex;
  }
}
figure {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1.4px solid #202020;
  object-fit: cover;
  object-position: center;
}
figcaption {
  display: flex;
  column-gap: 1vh;
}
</style>
