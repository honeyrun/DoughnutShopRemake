<template>
    <div>
        <aside>
            <button @click="btnCtrl">-</button>
            <input type="number" v-model="qty" @change="exception">
            <button @click="btnCtrl">+</button>
        </aside>
        <button @click="addToCart"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
</template>

<script>

export default {
    name: "AddCartCompo",
    data() {
        return {
            qty: 1
        }
    },
    props: ['pObj'],
    inject: ['doughtnutList','shoppingCart'],
    methods: {
        btnCtrl(e) {
            switch (e.target.innerText) {
                case "+":
                    if(this.qty<100) {
                        this.qty++;
                    }
                    break;
                case "-":
                    if(this.qty>1) {
                        this.qty--;
                    }
                    break;
            }
        },
        addToCart() {
            console.log(this.pObj)
            this.shoppingCart.addProduct(this.pObj, this.qty);
            this.qty = 1;
            alert ("Added to cart");
            console.log(this.shoppingCart);

            localStorage.setItem("cartdata", this.shoppingCart.saveStrData());
        },
        exception() {
            if ( (this.qty  < 1 && this.qty !='') || typeof this.qty  === 'string' || this.qty === 0) {
                this.qty = 1;
            } else if (this.qty >99) {
                this.qty = 99;
            }
        }
    },

}
</script>

<style  lang="scss" scoped>
@import "../assets/variables.scss";

    div {
        display: flex;
        column-gap: 1.5vh;
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