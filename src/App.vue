<template>
  <div>
    <nav-compo
      :logFlag="logFlag"
      :shoppingCart="shoppingCart"
      @logout="logout"
    />
    <main>
      <router-view
        :doughtnutList="doughtnutList"
        :shoppingCart="shoppingCart"
        :user="loggedUser"
        @register="userRegister"
        @login="userLogin"
      />
    </main>
    <footer-compo />
  </div>
</template>

<script>
import dData from "./assets/data/doughnutData.json";
import ShoppingCart from "./classes/ShoppingCart";
import User from "./classes/User";
import CryptoJS from "crypto-js";

import NavCompo from "./components/NavCompo.vue";
import FooterCompo from "./components/FooterCompo.vue";

export default {
  name: "App",
  components: {
    NavCompo,
    FooterCompo,
  },
  data() {
    return {
      doughtnutList: dData,
      shoppingCart: new ShoppingCart(),
      userList: [],
      loggedUser: null,
      logFlag: false,
      key: "D0nut",
      doughnut: null,
    };
  },
  provide() {
    return {
      doughtnutList: this.doughtnutList,
      shoppingCart: this.shoppingCart,
    };
  },
  methods: {
    userRegister(userListData) {
      let userObj = new User(userListData);
      this.userList.push(userObj);
      localStorage.setItem(
        "userList",
        this.encrypt(JSON.stringify(this.userList))
      );
    },
    userLogin(loginData) {
      this.userList.forEach((user) => {
        if (user.email == loginData.email && user.pass == loginData.pass) {
          this.logFlag = true;
          this.loggedUser = new User(user);

          sessionStorage.setItem(
            "loggedUser",
            this.encrypt(JSON.stringify(this.loggedUser))
          );
          // redirect to main
          this.$router.push({ name: "product-list" });
          console.log("login success");

          // if the user has cart data, restore data
          let prevCartData = JSON.parse(localStorage.getItem("cartdata"));
          if (prevCartData != null) {
            this.shoppingCart.restoreData(prevCartData);
            console.log("restore cart data", this.shoppingCart);
          }
          return false;
        }
      });
      if (this.loggedUser == null) {
        alert("Wrong information");
      }
    },
    encrypt(data) {
      return CryptoJS.AES.encrypt(data, this.key).toString();
    },
    decrypt(encData) {
      let decData = CryptoJS.AES.decrypt(encData, this.key);
      return decData.toString(CryptoJS.enc.Utf8);
    },
    logout() {
      sessionStorage.removeItem("loggedUser");
      this.$router.push({ name: "login" });
      this.loggedUser = null;
      this.logFlag = false;
      window.location.reload();
    },
  },
  mounted() {
   
    try {
      let prevCartData = JSON.parse(localStorage.getItem("cartdata"));
      if (prevCartData != null) {
        this.shoppingCart.restoreData(prevCartData);
        console.log("restore cart data", this.shoppingCart);
      }
      let userListData = localStorage.getItem("userList");
      if (userListData != null) {
        this.userList = JSON.parse(this.decrypt(userListData));

        let userData = sessionStorage.getItem("loggedUser");
        if (userData != null) {
          this.loggedUser = new User(JSON.parse(this.decrypt(userData)));
          this.shoppingCart.assignUser(this.loggedUser.cartID);
          this.logFlag = true;
        } 
      }
    } catch (e) {
      // wrong access
      sessionStorage.clear();
      this.$router.push({ name: "" });
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
@import "./assets/variables.scss";

h1,
h2,
h3,
h4,
h5 {
  font-family: "Cormorant Garamond", serif;
  color: $black-200;
}

h1 {
  font-size: 34px;
}

h4 {
  font-size: 24px;
  font-weight: 400;
}

h5 {
  font-size: 20px;
}

p {
  color: $lightBrown;
}

button {
  border: 1.4px solid #202020;
  transition: 0.3s;
  background-color: $bg;
}
button:hover {
  background-color: $green;
  cursor: pointer;
  color: white;
}

input {
  text-align: center;
  border: 1.4px solid #202020;
  border-radius: 0;
  background-color: transparent;
}

input:focus {
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="radio"], input[type="checkbox"] {
  accent-color: $green;
}
</style>
