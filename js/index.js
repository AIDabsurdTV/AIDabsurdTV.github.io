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
	<div class="item">
		<span class="header"  id="text">${header}</span>
		<div class="img" style="background-image: url(${img});"></div>
		<button class="button"><a href="ruletka.html">${button}</a></button>
		<div class="price">${price}</div>
	</div>
		`;
		element.innerHTML+=html;
 }
}
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:1300$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:1444$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:999$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:40$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:198$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:99$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:565$");
product.paint(".container", "ASUS ROG", "img/ed0186fdec03a31343cde0510ccdefd6_i-58.jpg", "Купить", "цена:898$");
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












