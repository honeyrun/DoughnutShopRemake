class CustomDoughnut {

    static count = 100; // Stores count of number of instances created

    constructor(cObj) {
        this.pid = ++this.constructor.count;
        this.pname = "Custom Doughnut";
        this.price = cObj.price;
        this.g_free = cObj.g_free;
        this.vegan = cObj.vegan;
        this.amount = (cObj.amount != null) ? cObj.amount : 0;

        this.shape = cObj.shape;
        this.filling = cObj.filling;
        this.topping = cObj.topping;
        this.custom = true;
    }


    calTotal() {
        let total = this.price * this.amount;
        return total;
    }

  
}

export default CustomDoughnut;