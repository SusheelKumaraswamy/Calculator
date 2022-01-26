var input1=document.getElementById("input1");
var count1=0;
input1.addEventListener("keypress",function(e){
  if (e.keyCode != 46 && e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57)){
    alert("Warning:Enter Number alone");
    e.preventDefault();
  }
  if(e.keyCode===46){
    count1++;
  }
  if(count1>1 && e.keyCode===46){
    e.preventDefault();
  }
})

var input2=document.getElementById("input2");
var count=0;
input2.addEventListener("keypress",function(e){
  
  if (e.keyCode != 46 && (e.keyCode < 48 || e.keyCode > 57)){
    alert("Warning:Enter Number alone");
    e.preventDefault();
  }
  if(e.keyCode===46){
    count++;
  }
  if(count>1 && e.keyCode===46){
    e.preventDefault();
  }
})

var equals=document.getElementById("equals");
equals.addEventListener("click",function(){
  var a=parseFloat(document.getElementById("input1").value);
  console.log(a);
  var b=parseFloat(document.getElementById("input2").value);
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





