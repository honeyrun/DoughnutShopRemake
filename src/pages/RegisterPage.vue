<template>
  <div id="all">
    <div>
      <figure>
        <img src="../assets/logo_donuts.png" alt="logo" />
      </figure>
      <h1>Register to <span>Maple Donuts</span></h1>
    </div>
    <form @submit.prevent="reg">
      <div id="info">
        <div>
          <label for="fname"><span>*</span>Name: </label>
          <input name="fname" v-model="user.fname" required />
        </div>
        <div>
          <label for="lname"><span>*</span>Family Name:</label>
          <input name="lname" v-model="user.lname" required  />
        </div>
        <div>
          <label for="email"><span>*</span>Email:</label>
          <input name="email" v-model="user.email" required />
        </div>
        <div>
          <label for="phone"><span>*</span>Phone Number:</label>
          <input name="phone" v-model="user.phone" required />
        </div>
        <div>
          <label for="address"><span>*</span>Address:</label>
          <input name="address" v-model="user.address" required />
        </div>
        <div>
          <label for="pass"><span>*</span>Password:</label>
          <input name="pass" type="password" v-model="user.pass" required  />
        </div>

      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        pass: "",
      },
    };
  },
  methods: {
    reg() {
      this.$emit("register", this.user);
      this.user = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        pass: "",
      };
    },
  },
};
</script>
<style scoped>
  #all {
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 2vh;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15vh;
    font-size: 20px;
    padding-top: 5vh;

  }
  #info{
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 8vh;
    column-gap: 10vh;
    justify-content: center;
    width: 80%;
  }
  #info > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2vh;
    color: #e47738;
    width: 22%;
  }
  #info span{
    color: red;
    padding-right: 2vh;
  }
  div {
    display: flex;
  }
  h1 {
    font-size: 45px;
    color: #e47738;
  }
  h1 > span {
    color: #417358;
    font-style: italic;
  }
  input {
    border: none;
    border-bottom: 3px solid #417358;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #faf6f0;
    width: 100%;
    font-size: 18px;
  }

  #all > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }
  figure{
    width: 15%;
  }
  img{
  width:100%; 
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
    border: 2px solid #417358;
    transition: 0.3s;
    color: white;
  }

</style>