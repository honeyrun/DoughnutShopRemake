<template>
  <swiper
    :slidesPerView="1"
    :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2600,
      disableOnInteraction: false,
    }"
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div>
        <img src="../assets/home/slider1.jpg" alt="slider1" />
        <div class="content">
          <h1>Bring The Best Experience</h1>
          <router-link to="/productlist"
            ><button>ORDER NOW</button></router-link
          >
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img src="../assets/home/slider2.jpg" alt="slider2" />
        <div class="content">
          <h1>We deal with <span>Quality</span></h1>
          <router-link to="/productlist"
            ><button>ORDER NOW</button></router-link
          >
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img src="../assets/home/slider3.jpg" alt="slider3" />
        <div class="content">
          <h1>Taste That Last Forever</h1>
          <router-link to="/productlist"
            ><button>ORDER NOW</button></router-link
          >
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
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.swiper {
  width: 100%;
  height: 37rem;
}

.swiper-slide {
  position: relative;
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #2d251f, $alpha: 0.4);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    color: $bg;
  }

  span {
    font-size: 68px;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    color: $primary;
  }

  a {
    text-decoration: none;
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
}
</style>
