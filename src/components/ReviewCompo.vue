<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="30"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div>
        <div class="content">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.203 16c2.034 0 3.594-1.7 3.594-3.752 0-2.124-1.356-3.61-3.255-3.61-.339 0-.813.07-.881.07C3.864 6.442 5.831 3.611 8 2.124L5.492 0C2.372 2.336 0 6.3 0 10.62 0 14.087 1.966 16 4.203 16zm11 0c2.034 0 3.661-1.7 3.661-3.752 0-2.124-1.423-3.61-3.322-3.61-.339 0-.813.07-.881.07.271-2.266 2.17-5.097 4.339-6.584L16.492 0C13.372 2.336 11 6.3 11 10.62c0 3.468 1.966 5.38 4.203 5.38z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
          <p>Bring The Best Experience</p>
          <div class="profile">
            <figure>
              <img src="../assets/about/chef3.jpeg" alt="chef3" />
            </figure>
            <h3>Kristin Steward</h3>
            <h6>Chef Cook</h6>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <div class="content">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.203 16c2.034 0 3.594-1.7 3.594-3.752 0-2.124-1.356-3.61-3.255-3.61-.339 0-.813.07-.881.07C3.864 6.442 5.831 3.611 8 2.124L5.492 0C2.372 2.336 0 6.3 0 10.62 0 14.087 1.966 16 4.203 16zm11 0c2.034 0 3.661-1.7 3.661-3.752 0-2.124-1.423-3.61-3.322-3.61-.339 0-.813.07-.881.07.271-2.266 2.17-5.097 4.339-6.584L16.492 0C13.372 2.336 11 6.3 11 10.62c0 3.468 1.966 5.38 4.203 5.38z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
          <p>Bring The Best Experience</p>
          <div class="profile">
            <figure>
              <img src="../assets/about/chef3.jpeg" alt="chef3" />
            </figure>
            <h3>Kristin Steward</h3>
            <h6>Chef Cook</h6>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <figure></figure>
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
        <figure></figure>
        <div class="content">
          <h1>Bring The Best Experience</h1>
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
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.swiper {
  width: 100%;
  height: 22rem;
}

.swiper-slide {

  position: relative;
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;


}

.swiper-button-prev {
  left: -110% !important;
}
.swiper-button-next {
  right: 110%;
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
}

.profile {
  figure {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    img {
      height: inherit;
      object-fit: cover;
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
    font-size: 16px;
  }
}
</style>
