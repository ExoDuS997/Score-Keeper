var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var rb=document.querySelector("#reset");
var span1=document.querySelector("#s1");
var span2=document.querySelector("#s2");
var val=document.querySelector("input");
var no=document.querySelector("#no");
var p1c=0;
var p2c=0;
var win=5;
var gm=false;
p1Button.addEventListener("click",function(){
	if (!gm) {
    p1c++;
    if (p1c===win) {
    	span1.classList.add("win");
    	alert("Player 1 WON!!!")
    	gm=true;
    }		
	
    span1.textContent = p1c;
    }
});
p2Button.addEventListener("click",function(){
	if (!gm) {
    p2c++;
    if (p2c===win) {
    	span2.classList.add("win");
        alert("Player 2 WON!!! ")
    	gm=true;
    }		
	
    span2.textContent = p2c;
    }
    
});
rb.addEventListener("click",function(){
	reset();
});
function reset(){
	p1c=0;
    p2c=0;
    gm=false;
    span2.textContent=0;
    span1.textContent=0;
    span1.classList.remove("win");
    span2.classList.remove("win");
}
val.addEventListener("change",function(){
	if(Number(val.value)>=1){
		   no.textContent=val.value;
   win=Number(val.value);
   reset();
	}
	else{
		alert("Wrong input!!");
		reset();
	}
});





