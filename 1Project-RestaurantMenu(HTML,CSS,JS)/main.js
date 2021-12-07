function addToCart(iDatr) {
    var item = document.createElement('h3');
    var Name = document.getElementById(iDatr).innerText;
    var itemName = document.createTextNode(Name);
    item.appendChild(itemName);
    document.getElementById("Selected_Items").appendChild(item);

};

function result() {
    var item = document.createElement('h3');
    var Name = "Order Placed Successfully \n Your Order will be delivedred Soon \n  Thank you";
    item.appendChild(document.createTextNode(Name));
    document.getElementById('r').appendChild(item);
}