var base_color="#fffff"
var color1="#84208D"
var color2="#620F99"
var flashspeed=120
var flashingletters=2
var flashingletters2=2
var flashpause=0
var n=0
var color_text=""
message=document.getElementById("text").innerHTML;
if (document.all||document.getElementById){
    color_text='<div align="center"><font color="'+base_color+'" size="4">';
    for (m=0; m<message.length; m++) color_text+='<span id="neonlight'+m+'">'+message.charAt(m)+'</span>'
    color_text+='</font></div>'
    document.getElementById("text").innerHTML = color_text
}
else document.getElementById("text").innerHTML = message
function crossref(number){
    var crossobj=document.all? eval("document.all.neonlight"+number) :
    document.getElementById("neonlight"+number)
    return crossobj
}
function neon(){
    if (n==0){
     for (m=0;m<message.length;m++)
     crossref(m).style.color=base_color
     }
    crossref(n).style.color=color1
    if (n>flashingletters-1) { crossref(n-flashingletters).style.color=color2 }
    if (n>(flashingletters+flashingletters2)-1) {
    crossref(n-flashingletters-flashingletters2).style.color=base_color }
    if (n<message.length-1) { n++ }
    else {
     n=0
     clearInterval(flashing)
     setTimeout("start_color()",flashpause)
     return
     }
}
function start_color(){
    if (document.all||document.getElementById)
    flashing=setInterval("neon()",flashspeed)
}
start_color()
var product = {
	paint(container, header, img, button,price) {
		var element = document.querySelector(container);
		var html = `
		`;
		element.innerHTML+=html;
 }
}
product.paint(".container", "ASUS ROG", "img/2.jpg", "Купить2", "цена");
product.paint(".container", "ASUS ROG", "img/3.jpg", "Купить3", "цена");
product.paint(".container", "ASUS ROG", "img/4.jpg", "Купить4", "цена");
product.paint(".container", "ASUS ROG", "img/4.jpg", "Купить4", "цена");
product.paint(".container", "ASUS ROG", "img/4.jpg", "Купить4", "цена");
product.paint(".container", "ASUS ROG", "img/5.jpg", "Купить5", "цена");
product.paint(".container", "ASUS ROG", "img/5.jpg", "Купить5", "цена");
product.paint(".container", "ASUS ROG", "img/5.jpg", "Купить5", "цена");
$(".vxod").click(function(){ 
$(".pupur_fast").css({"top" : $(window).scrollTop() +100}).fadeIn("pop"); 
$(".bg_popur").fadeIn();
});


$(".close").click(function(){ 
$(".pupur_fast").fadeOut("close-pupur"); 
});


$(".close").click(function(){ 
$(".bg_popur").fadeOut("close-pupur"); 
});












