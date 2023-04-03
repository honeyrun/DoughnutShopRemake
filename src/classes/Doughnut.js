class Doughnut {

    constructor(dObj) {
        this.pid =  dObj.pid;
        this.pname = dObj.pname;
        this.price = dObj.price;
        this.g_free = dObj.g_free;
        this.vegan = dObj.vegan;
        // this.amount = (dObj.amount != null) ? dObj.amount : 0;
        this.amount = dObj.amount || 0;
    }

    calTotal() {
        let total = this.price * this.amount;
        return total;
    }

  
}

export default Doughnut;