var El={
    input:document.querySelector("input"),
    btn:document.querySelector("button"),
    box:document.getElementById("Box"),
    body:document.querySelector("body")
    
}

//--------------------Eventss
El.btn.onclick=Add;
El.box.addEventListener("click",Delete);
El.body.onload=getValueLS;


//---------------------Function
function Add(){
    // var box;
    var x=El.input.value;
    // El.box.innerHTML=x;
    var New=document.createElement("div");
    var del=document.createElement("div");
    var val=document.createElement("div")
     
    //Style Add
    New.id="NewElement"
     New.append(del);
     New.append(x);
    del.id="remove";
    // val.id="value"
    El.box.append(New);  
    

   AddLS(x);

  //AddSl();
    
   
    
}
  // Res
  function Delete(e){
  if(e.target.id==="remove"){
   
      e.target.parentElement.remove();
      var control=e.target.parentElement.textContent;

      gettextContent(control);

  }
  
  
}
//---Add Ls
function AddLS(){
  const nots=Chacksed();
  nots.push(El.input.value);
  localStorage.setItem("nots",JSON.stringify(nots))
}

//---checked----------Local Storage
function Chacksed(){
  var nots;
  let local=localStorage.getItem("nots");
if(local==null){
 nots=[];
}
else{
  nots=JSON.parse(local);
}
return nots;

}
function AddSl(){
  // var family=[];
  // family.push(El.input.value);
  // localStorage.setItem("family",family);
}
function getValueLS(){
 var e=JSON.parse(localStorage.getItem("nots"));
// console.log(e);
 for(var i=0;i<e.length;++i){
   // El.box.innerHTML=x;
   var New=document.createElement("div");
   var del=document.createElement("div");
   var val=document.createElement("div")
    
   //Style Add
   New.id="NewElement"
    New.append(del);
    New.append(e[i]);
    // val.append(e[i]);
   del.id="remove";
  //  val.id="value"
   El.box.append(New);  
 }

}
//get Value new Element == Value LoocalStorage
function gettextContent(No){
const no=No;
const list=Chacksed();
list.forEach(function (note,index) {
  if(note==no){
    list.splice(index,1);
  }
});
localStorage.setItem("nots",JSON.stringify(list));
}

