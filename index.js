
let coffeeList = [];

function buildCoffeePrice(obj){

  const coffeePrice = document.createElement("div");
  coffeePrice.className = "coffeePrice";

  const title = document.createElement("h4");
  title.appendChild(document.createTextNode(obj.title));

  const img = document.createElement("img");
  img.src = obj.urlimg;
  img.width = "200";
  
  const q_vendas = document.createElement("p");
  q_vendas.value = obj.q_vendas;

  const price = document.createElement("p");
  price.appendChild(document.createTextNode(obj.price));

  const button = document.createElement("button");
  button.appendChild(document.createTextNode("Buy"));
  
  button.onclick = () => {
    const string = ".coffeePrice[] button";
    document.querySelector(string);
    
    
  };

  coffeePrice.appendChild(title);
  coffeePrice.appendChild(img);
  coffeePrice.appendChild(price);
  //coffeePrice.appendChild(q_vendas);
  
  coffeePrice.appendChild(button);

  return coffeePrice;


}

function addCoffee(){
    // create html elements by DOM document
  
   // inserting a CardapioCard for each element of CoffeeList 
   // stylizing all CardapioCar with css className

    atualizeCoffeeVar();
    //atualizeCoffeeCardapio();
  
    let divCoffees = document.getElementById("CoffeeCardapio");
  
    const obj1 = coffeeList[coffeeList.length - 1];
  
    divCoffees.appendChild(buildCoffeePrice(obj1));
  
  
    
  
  
  

    

    

}

function atualizeCoffeeCardapio(){
  
  const divCoffees = document.getElementById("CoffeeCardapio");
  divCoffees.innerHTML = "";
  for(var element in coffeeList){
    divCoffees.appendChild(buildCoffeePrice(element));
  }

  
}

function atualizeCoffeeVar(){
    let name_coffee = document.getElementById("coffeeName");
    let img_src = document.getElementById("img_src");
    let coffeePrice = document.getElementById("coffeePrice");
  
    let obj = {
      title: name_coffee.value,
      urlimg: img_src.value,
      price: coffeePrice.value,
      q_vendas: 0
    }
    
    coffeeList.push(obj);
  
    name_coffee.value = "";
    img_src.value = "";
    coffeePrice.value = "";
  
    console.log(coffeeList);

}


  
