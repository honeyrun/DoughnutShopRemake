import Doughnut from "./Doughnut.js";
import CustomDoughnut from "./CustomDoughnut.js";

class ShoppingCart {

    cartID = "";
    constructor() {
        this.pList = new Map();
    }
    assignUser(id) {
        this.cartID = id;
    }

    calTotalAll() {
        let sum = 0;
        this.pList.forEach((item)=>{
            sum += item.calTotal();
        })
        return sum;
    }
    calDiscount() {
        if(this.calTotalAmount() > 11) {
            return this.calTotalAll()*0.1;
        }
        return 0;
    }
    calFinalPrice() {
       return this.calTotalAll() - this.calDiscount();
    }
    calTotalAmount() {
        let count = 0;
        this.pList.forEach((item)=>{
            if(item.amount != '') {
                count += parseInt(item.amount);
            }
        })
        return count;
    }
 
    identifyClass(obj) {
        let newItem = null;
        if (obj.custom) {
            newItem = new CustomDoughnut(obj);
        } else {
            newItem = new Doughnut(obj);
        }
        return newItem;
    }

    addProduct(obj, qty) {

        let classObject = this.identifyClass(obj);
        classObject.amount = qty;
        
        if(this.pList.has(obj.pid)) {
            let prevAmount = this.pList.get(obj.pid).amount;
            classObject.amount = prevAmount + classObject.amount;
        }
        this.pList.set(classObject.pid, classObject);
        
        console.log(classObject);
    }

    deleteProduct(pid) {
        this.pList.delete(pid);
    }

    // Map object -> array converted
    saveStrData() {
        let arr = []
        this.pList.forEach((obj)=>{
            arr.push(obj);
        })
        return JSON.stringify(arr);
    }
    restoreData(cartArr) {
        for(let item of cartArr) {
            let classObject = this.identifyClass(item);
            this.pList.set(classObject.pid,classObject);
        }
    }
  
}

export default ShoppingCart;