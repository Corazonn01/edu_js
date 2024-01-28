// task price and sale
function makeSale(item, price) {
    if(item >= 5 && price >= 10000) {
        console.log("the amount of sale if 20%, and the price is:  " + ((price * 20)/100));
    }else if (item >= 5 && !price <= 10000) {
        console.log("the amount of sale if 10%, and the price is:  " + ((price * 10)/100));
    } else if (item <= 5 && price >= 10000) {
        console.log("the amount of sale if 7%, and the price is:  " + ((price * 7)/100));
    } else {
        console.log("the amount of sale if 5%, and the price is:  " + ((price * 5)/100));
    }
}
makeSale(6, 200000)
makeSale(7, 1000)
makeSale(4, 30000)
makeSale(4, 1000)

