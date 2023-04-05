<template>
  <div>
    <div class="navBg"></div>
    <div id="uCon">
      <section>
        <article>
          <h2>User Info</h2>
          <div>
            <h5>Full Name</h5>
            <h4>{{ user.fname }} {{ user.lname }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Email</h5>
            <h4>{{ user.email }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Phone</h5>
            <h4>{{ user.phone }}</h4>
          </div>
          <span></span>
          <div>
            <h5>Address</h5>
            <h4>{{ user.address }}</h4>
          </div>
          <span></span>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  props: ["user"],
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#uCon {
  padding-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
  width: 100%;
  height: 70vh;
}
section {
  width: 100%;
  display: flex;
  justify-content: center;
}

h2 {
  width: 100%;
  font-size: 26px;
  padding-bottom: 2vh;
}
div > h5,
div > h4 {
  font-size: 18px;
  color: #202020;
}
div > h5 {
  width: 55%;
  font-weight: 500;
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
  width: 35%;
  background-color: white;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  align-items: center;
}
span {
  width: 100%;
  border-bottom: 1.8px solid #e2dbdb;
}
</style>
