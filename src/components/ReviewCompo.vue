<template>
  <swiper
    :slidesPerView="2"
    :loop="true"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(review, idx) in reviews" :key="idx">
      <div>
        <div class="content">
          <svg
            width="21"
            height="18"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.203 16c2.034 0 3.594-1.7 3.594-3.752 0-2.124-1.356-3.61-3.255-3.61-.339 0-.813.07-.881.07C3.864 6.442 5.831 3.611 8 2.124L5.492 0C2.372 2.336 0 6.3 0 10.62 0 14.087 1.966 16 4.203 16zm11 0c2.034 0 3.661-1.7 3.661-3.752 0-2.124-1.423-3.61-3.322-3.61-.339 0-.813.07-.881.07.271-2.266 2.17-5.097 4.339-6.584L16.492 0C13.372 2.336 11 6.3 11 10.62c0 3.468 1.966 5.38 4.203 5.38z"
              fill="#726251"
              fill-rule="nonzero"
            ></path>
          </svg>
          <p>{{review.content}}</p>
          <div class="profile">
            <figure>
              <img :src="require(`../assets/home/${review.img}`)"/>
            </figure>
            <h3>{{review.name}}</h3>
            <h6>{{review.location}}</h6>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";

export default {
  name: "ReviewCompo",
  data() {
    return {
      reviews: [
        {
          name: "Elanor Pera",
          location: "New York",
          content: "The doughnuts are always fresh, fluffy and flavorful. The staff is always friendly and accommodating, and I love that they offer customization options",
          img: "p1.jpg"
        },
        {
          name: "Esther Howard",
          location: "California",
          content: "This is hands down the best doughnut shop in town! The doughnuts are always delicious and I also love that they offer discounts for buying in bulk",
          img: "p2.jpg"
        },
        {
          name: "Jacob Davis",
          location: "Sweden",
          content: "The doughnuts were warm, soft and delicious - definitely worth coming back for more!",
          img: "p3.jpg"
        },
        {
          name: "Krishna Barbe",
          location: "Frankfrut",
          content: "Their doughnuts are the perfect and the toppings and fillings are always fresh and delicious. I highly recommend the mocha latte doughnut - it's my personal favorite!",
          img: "p4.jpg"
        },
        
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.swiper {
  width: 100%;
  height: 23rem;
}

.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

.content {
  margin: 6%;
  width: 88%;
  height: 88%;
  background-color: $bg;
  box-shadow: 0 0 15px #bcad9c;
  box-sizing: border-box;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    color: $bg;
  }

  p {
    font-size: 13px;
    line-height: 1.6;
  }

  span {
    font-size: 68px;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    color: $primary;
  }
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: inherit;
      object-position: center;
      object-fit: cover;
    }
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
    font-size: 13px;
    font-weight: normal;
    color: $lightBrown;
  }


}
</style>
