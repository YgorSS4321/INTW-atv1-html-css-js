function changeText(){
    let texto1 = document.getElementById("text1");
   
    texto1.textContent = "new text";
   
  }
  
  function appendingChild(){
    let titleBar = document.getElementById("titlebar");
   
    let someTextNode = document.createTextNode("adicionando texto");
   
    titleBar.appendChild(someTextNode);
    let br = document.createElement("br");
    titleBar.appendChild(br);
  }
  