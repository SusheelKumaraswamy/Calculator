var input1=document.getElementById("input1");
input1.addEventListener("keypress",function(e){
  if(!(e.keyCode>=48 && e.keyCode<=57)){
    alert("Warning:Enter Number alone");
    e.preventDefault();
  }
})

var input2=document.getElementById("input2");
input2.addEventListener("keypress",function(e){
  if(!(e.keyCode>=48 && e.keyCode<=57)){
    alert("Warning:Enter Number alone");
    e.preventDefault();
  }
})

var equals=document.getElementById("equals");
equals.addEventListener("click",function(){
  var a=parseInt(document.getElementById("input1").value);
  var b=parseInt(document.getElementById("input2").value);
  var symbols=document.getElementById("values").value;
  
  if(symbols==="+"){
    var res=a+b;
    document.getElementById("output").value=res;
    document.getElementById("output").style.backgroundColor="gold";
    document.getElementsByClassName("main")[0].style.backgroundImage="url('The-Answer-698x428-e1445614683535.jpg')";
    document.getElementsByClassName("main")[0].style.backgroundSize="100%"
  }
  if(symbols==="-"){
    var res=a-b;
    document.getElementById("output").value=res;
    document.getElementById("output").style.backgroundColor="gold";
    document.getElementsByClassName("main")[0].style.backgroundImage="url('The-Answer-698x428-e1445614683535.jpg')";
    document.getElementsByClassName("main")[0].style.backgroundSize="100%"
  }
  if(symbols==="x"){
    var res=a*b;
    document.getElementById("output").value=res;
    document.getElementById("output").style.backgroundColor="gold";
    document.getElementsByClassName("main")[0].style.backgroundImage="url('The-Answer-698x428-e1445614683535.jpg')";
    document.getElementsByClassName("main")[0].style.backgroundSize="100%"
  }
  if(symbols==="/"){
    var res=a/b;
    document.getElementById("output").value=res;
    document.getElementById("output").style.backgroundColor="gold";
    document.getElementsByClassName("main")[0].style.backgroundImage="url('The-Answer-698x428-e1445614683535.jpg')";
    document.getElementsByClassName("main")[0].style.backgroundSize="100%"
  }
  if(symbols==="%"){
    var res=a%b;
    document.getElementById("output").value=res;
    document.getElementById("output").style.backgroundColor="gold";
    document.getElementsByClassName("main")[0].style.backgroundImage="url('The-Answer-698x428-e1445614683535.jpg')";
    document.getElementsByClassName("main")[0].style.backgroundSize="100%"
  }
})





