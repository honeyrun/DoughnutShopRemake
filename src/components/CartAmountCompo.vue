<template>
  <div>
    <button @click="btnCtrl">-</button>
    <input type="number" v-model="qty" @change="edit" />
    <button @click="btnCtrl">+</button>
  </div>
</template>

<script>
export default {
  name: "CartAmountCompo",
  inject: ["item"],
  computed: {
    qty: {
      get() {
        return this.item.amount;
      },
      set(val) {
        if (val < 1 && val != "") {
          this.$parent.$emit("deleteItemE", this.item.pid);
          return false;
        } else if (typeof val === "string" && val != "") {
          val = 1;
        }
        this.item.amount = val;
      },
    },
  },
  methods: {
    btnCtrl: function (e) {
      switch (e.target.innerText) {
        case "+":
          if (this.qty < 100) {
            this.qty++;
          }
          break;
        case "-":
          if (this.qty > 0) {
            this.qty--;
            if (this.qty == 0) {
              this.$parent.$emit("deleteItemE", this.item.pid);
            }
          }
          break;
      }
      this.$parent.$emit("editItemE");
    },
    edit() {
      if (this.qty == "") {
        this.$parent.$emit("deleteItemE", this.item.pid);
        return false;
      }
      this.$parent.$emit("editItemE");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
div {
  display: flex;
}
button {
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 1.4px solid #202020;
  transition: 0.3s;
  color: $black-200;
}
button:hover {
  background-color: $bg-sec;
  cursor: pointer;
}
aside {
  display: flex;
}
input {
  width: 60px;
  border-left: none;
  border-right: none;
}
</style>
