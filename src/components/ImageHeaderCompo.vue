<template>
  <header>
    <figure :style="bgImg">
      <figcaption>
        <div>
          <h2>{{ hData.title }}</h2>
          <p>{{ hData.content }}</p>
        </div>
      </figcaption>
    </figure>
  </header>
</template>
<script>
export default {
  name: "ImageHeaderCompo",
  props: ["hData"],
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require(`../assets/header/${this.hData.img}`)})`,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";

header {
  height: 26rem;
}
figure {
  height: 100%;
  background-size: cover;
  background-position: center;
  h2 {
    color: white;
    font-size: 50px;
  }
}

figcaption {
  color: $bg;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba($color: #3c3737, $alpha: 0.54);
}

div {
  width: 45%;
}
p {
  padding-top: 1.2rem;
  color: $lightBrown2;
  font-size: 14px;
}
</style>
