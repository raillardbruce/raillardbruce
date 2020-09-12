var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");


var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");


var body = document.getElementById("body");

var nav = document.getElementById("navbar");

var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")

var buttonsun =document.getElementById("buttonsun");



document.getElementById("buttonsun").addEventListener("click", function (){

    page1.classList.remove("functionbuttonhidden");
    page2.classList.remove("functionbuttonvisible");

    page1.classList.add("functionbuttonvisible");
    page2.classList.add("functionbuttonhidden");

    body.classList.remove("lebody2");
    body.classList.add("lebody1");

    nav.classList.remove("nav2");
    nav.classList.add("nav1");


});



document.getElementById("button2").addEventListener("click", function () {

    page1.classList.add("functionbuttonhidden");
    page2.classList.add("functionbuttonvisible");



    page1.classList.remove("functionbuttonvisible");
    page2.classList.remove("functionbuttonhidden");


    body.classList.add("lebody2");
    body.classList.remove("lebody1");

    nav.classList.add("nav2");
    nav.classList.remove("nav1");

});

document.getElementById("button3").addEventListener("click", function () {

    page1.classList.remove("functionbuttonhidden");
    page2.classList.remove("functionbuttonvisible");

    page1.classList.add("functionbuttonvisible");
    page2.classList.add("functionbuttonhidden");

    body.classList.remove("lebody2");
    body.classList.add("lebody1");

    button3.classList.add("buttonon")
    button4.classList.add("buttonoff")

    button3.classList.remove("buttonoff")
    button4.classList.remove("buttonon")


});

document.getElementById("button4").addEventListener("click", function () {

    page1.classList.add("functionbuttonhidden");
    page2.classList.add("functionbuttonvisible");



    page1.classList.remove("functionbuttonvisible");
    page2.classList.remove("functionbuttonhidden");


    body.classList.add("lebody2");
    body.classList.remove("lebody1");

    button3.classList.add("buttonoff")
    button4.classList.add("buttonon")

    button3.classList.remove("buttonon")
    button4.classList.remove("buttonoff")



});

var pdp = document.getElementById("pdp")

pdp.addEventListener("mouseover", function(event){
    event.target.src="images/Image.jpeg"
});

pdp.addEventListener("mouseout", function(event){
    event.target.src="images/pdp.JPG"
});


var colonne1 = document.getElementById("colonne1");
var colonne2 = document.getElementById("colonne2");
var colonne3 = document.getElementById("colonne3");
var lescolonnes = document.getElementById("lescolonnes");
var titre1 = document.getElementById("titre1");
var lalala = document.getElementById("lalala");
var colonne1_1 = document.getElementById("colonne1_1");
var colonne2_2 = document.getElementById("colonne2_2");
var colonne3_3 = document.getElementById("colonne3_3");
var systeme = document.getElementById("system");


document.getElementById("colonne1").addEventListener("click", function(){

    colonne2.classList.add("functionbuttonvisible");
    colonne1.classList.add("functionbuttonhidden");
    colonne3.classList.add("functionbuttonvisible");
    colonne2.classList.remove("functionbuttonhidden");
    colonne1.classList.remove("functionbuttonvisisble");
    colonne3.classList.remove("functionbuttonhidden");
   

    colonne1_1.classList.remove("functionbuttonhidden");
    colonne2_2.classList.add("functionbuttonhidden");
    colonne3_3.classList.add("functionbuttonhidden");

    colonne1.classList.add("focus");
    colonne2.classList.remove("focus");
    colonne3.classList.remove("focus");



});

document.getElementById("colonne2").addEventListener("click", function(){

    colonne1.classList.add("functionbuttonvisisble");
    colonne2.classList.add("functionbuttonhidden");
    colonne3.classList.add("functionbuttonvisible");
    colonne2.classList.remove("functionbuttonvisible");
    colonne1.classList.remove("functionbuttonhidden");
    colonne3.classList.remove("functionbuttonhidden");


    colonne2_2.classList.remove("functionbuttonhidden");
    colonne1_1.classList.add("functionbuttonhidden");
    colonne3_3.classList.add("functionbuttonhidden");

    colonne2.classList.add("focus");
    colonne1.classList.remove("focus");
    colonne3.classList.remove("focus");


});

document.getElementById("colonne3").addEventListener("click", function(){

    colonne1.classList.add("functionbuttonvisisble");
    colonne2.classList.add("functionbuttonvisisble");
    colonne3.classList.add("functionbuttonhidden");
    colonne2.classList.remove("functionbuttonhidden");
    colonne1.classList.remove("functionbuttonhidden");
    colonne3.classList.remove("functionbuttonvisible");


    colonne3_3.classList.remove("functionbuttonhidden");
    colonne1_1.classList.add("functionbuttonhidden");
    colonne2_2.classList.add("functionbuttonhidden");

    colonne3.classList.add("focus");
    colonne2.classList.remove("focus");
    colonne1.classList.remove("focus");


});




var buttonsun = document.getElementById("buttonsun");
var prenom = document.getElementById("prenom")
var acceuil = document.getElementById("acceuil")

buttonsun.addEventListener("mouseover", function(event){
    event.target.classList.add("mousebutton")
    prenom.classList.add("functionbuttonhidden")
    acceuil.classList.add("functionbuttonhidden")
});

buttonsun.addEventListener("mouseout", function(event){
    event.target.classList.remove("mousebutton")
    prenom.classList.remove("functionbuttonhidden")
    acceuil.classList.remove("functionbuttonhidden")
});

colonne1.addEventListener("mouseover", function(){
    colonne1.classList.add("mousecolonne")
})

colonne1.addEventListener("mouseout", function(){
    colonne1.classList.remove("mousecolonne")
})

colonne2.addEventListener("mouseover", function(){
    colonne2.classList.add("mousecolonne")
})

colonne2.addEventListener("mouseout", function(){
    colonne2.classList.remove("mousecolonne")
})

colonne3.addEventListener("mouseover", function(){
    colonne3.classList.add("mousecolonne")
})

colonne3.addEventListener("mouseout", function(){
    colonne3.classList.remove("mousecolonne")
})







