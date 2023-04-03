<template>
  <div id="lCon">
    <figure>
      <img src="../assets/logo_donuts.png" alt="logo" />
    </figure>
    <div id="cont">
      <h1>Welcome to <span>Maple Donuts</span></h1>
      <form @submit.prevent="login">
        <div>
          <figure>
            <img src="../assets/icons/user.png" alt="user" />
          </figure>
          <input name="email" placeholder="Email" v-model="userObj.email" />
        </div>
        <div>
          <figure>
            <img src="../assets/icons/padlock.png" alt="pass" />
          </figure>
          <input
            name="pass"
            :type="type"
            placeholder="Password "
            v-model="userObj.pass"
          />
          <figure @click="showHide" v-show="flag">
            <img src="../assets/icons/view.png" alt="view" />
          </figure>
          <figure @click="showHide" v-show="!flag">
            <img src="../assets/icons/hide.png" alt="hide" />
          </figure>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <router-link to="/register"><h3>Sign Up</h3></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userObj: { email: "", pass: "" },
      flag: false,
      type: "password",
    };
  },
  methods: {
    login() {
      this.$emit("login", this.userObj);
      this.userObj = { email: "", pass: "" };
    },
    showHide() {
      this.flag = !this.flag;
      switch (this.type) {
        case "password":
          this.type = "text";
          break;
        case "text":
          this.type = "password";
      }
    },
  },
};
</script>

<style scoped>
 #lCon {
  padding: 20vh 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  column-gap: 1vh;
}

#cont {
  display: flex;
  row-gap: 10vh;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8vh;
  font-size: 25px;
}
div {
  display: flex;
}
form>div {
  align-items: flex-start;
  width: 50%;
}
h1 {
  font-size: 45px;
  color: #e47738;
}
h1 > span {
  color: #417358;
  font-style: italic;
}

form img {
  height: 19px;
}
input {
  border: none;
  border-bottom: 3px solid #417358;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #faf6f0;
  width: 35vh;
}
form > div {
  display: flex;
  column-gap: 2vh;
}

button {
  width: 20%;
  height: 6vh;
  background-color: #e47738;
  border-radius: 10px;
  border: 2px solid #e47738;
  font-size: 15px;
}
button:hover {
  background-color: #417358;
  background-color: #417358;
  border: 2px solid #417358;
  transition: 1s;
  color: white;
}
a {
  text-decoration: none;
}
h3 {
  font-style: italic;
  color: #417358;
}
h3:hover {
  color: #e47738;
  transition: 0.3s;
}
</style>


