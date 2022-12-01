const products = [
  {
    id: 1,
    name: "200g original blend",
    price: "500"
  },
  {
    id: 2,
    name: "original blend 500g",
    price: "900"
  },
  {
    id: 3,
    name: "200g special blend",
    price: "700"
  },
  {
    id: 4,
    name: "Special blend 500g",
    price: "1200"
  }]

const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  // const price = priceElement.value;
  const price = products.find(e => e.id === parseInt(productElement.value)).price;
  const number = numberElement.value;
  const name = products.find(e => e.id === parseInt(productElement.value)).name;
  
  let purchase = {
    price: parseInt(price),
    number: parseInt(number),
    name: name
  };

  const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
  if(purchases.length < 1 || newPurchase === -1) { //--2
    purchases.push(purchase);
  } else {
    purchases[newPurchase].number += purchase.number; //--3
  }

  window.alert(`${display()}\n subtotal${subtotal()}Circle`);
  productElement.value = "";
  numberElement.value = "";
}

function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].name} ${purchases[i].price}Circle:${purchases[i].number}point\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const detail = display();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${detail}\n subtotal is${sum}Yen, postage${postage}Yen. total is${sum + postage}yen`);
  purchases = [];
  productElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
    return 500;
  } else {
    return 250;
  }
}