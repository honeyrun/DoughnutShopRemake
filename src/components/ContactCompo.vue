<template>
  <div>
    <div id="Ccon">
        <article>
          <h2>Information</h2>
          <aside>
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <p>689 Thurlow St. Vancouver, BC, V6E 4M3</p>
              <p>219 West 4th Avenue Vancouver, BC, V6K 1N6</p>
            </div>
          </aside>
          <aside>
            <i class="fa-solid fa-phone"></i>
            <div>
              <p>(604) 420-4901</p>
              <p>(604) 620-4905</p>
            </div>
          </aside>
          <aside>
            <i class="fa-solid fa-envelope"></i>
            <div>
              <p>main@mapleDonut.com</p>
              <p>kitsilano@mapleDonut.com</p>
            </div>
          </aside>
        </article>
        <form>
          <div>
            <h2>Get in Touch</h2>
            <div>
              <div class="input">
                <p>First Name</p>
                <input type="text" />
              </div>
              <div class="input">
                <p>Last Name</p>
                <input type="text" />
              </div>
            </div>
            <div class="input">
              <p>Email Address</p>
              <input type="text" />
            </div>
            <div class="input">
              <p>Email Address</p>
              <textarea cols="20" rows="8"></textarea>
            </div>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
    </div>
    <map-compo />
  </div>
</template>

<script>
import MapCompo from "./MapCompo.vue";

export default {
  name: "ContactCompo",
  components: {
    MapCompo,
  },
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#Ccon {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 4vh 10%;
  box-sizing: border-box;
  column-gap: 3rem;
}
article, form {
    padding: 2.8rem 4rem;
    width: 100%;
}

article, form>div {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
}
article {
    row-gap: 2rem;
}

form {
    box-shadow: 0 0 15px #ece7e4;
    div div {
        display: flex;
        column-gap: 1rem;
        width: 100%;
    }
}

aside {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    line-height: 2;
}

i {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $lightBrown;
    font-size: 21px;
    border: 1.4px solid $deepBrown;
    border-radius: 50%;
}

h2 {
    font-size: 28px;
    padding-bottom: 1rem;
}

p {
    font-size: 14px;
}

input, textarea {
    padding: 0.4rem;
    text-align: start;
}

textarea {
    height: 80px;
}

.input {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
}

button {
  background-color: $green;
  color: white;
  padding: 10px 30px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
button:hover {
  background-color: white;
  color: $black-200;
  cursor: pointer;
}
</style>
