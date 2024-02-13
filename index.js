//-------------------- navbar section----------------------

// i am doing here by clicking on navbar open close icon open and hide navbar menus

// first storeing class of open and close in the variable

let opens=document.getElementsByClassName("open")[0];
 
let closs=document.getElementsByClassName("close")[0];

 

//  storing class that i hide for click menu

let hidenMenu=document.getElementsByClassName("agaiMenu")[0];

//  now i am applying event on click open the menu
opens.addEventListener("click",displayMenu);
function displayMenu(){
    hidenMenu.style.display="block"
}

//  now i am applying event on click close the menu

closs.addEventListener("click",NotdisplayMenu);

function NotdisplayMenu(){
    hidenMenu.style.display="none"
}


//-------------------- project section----------------------
// I am doing here by clicking the menus change the html files and names
// first store project boxes ids

let projBox1=document.getElementById("p1");
let projBox2=document.getElementById("p2");
let projBox3=document.getElementById("p3");
let projBox4=document.getElementById("p4");

// first store project menu lists ids

let vanilaMenu=document.getElementById("Vcss");
let boootstMenu=document.getElementById("boots");
let jsMenu=document.getElementById("jsp");
 

// creating clicking effect on menu list that stored above


// for menu 1 vanila css project box name change

vanilaMenu.onclick=van;
function van(){
    projBox1.innerHTML="Project 1";
    projBox2.innerHTML="Project 2";
    projBox3.innerHTML="Project 3";
    projBox4.innerHTML="Project 4";

    projBox1.attributes[0].value="/Projects/marketingBulls/digitalMark.html";
    projBox2.attributes[0].value="/Projects/platinaWeb/Platina.html";
    projBox3.attributes[0].value="/Projects/anime9/index9Anim.html";
    projBox4.attributes[0].value="/Projects/LandingPage/index.html";
}






// for changing project index file for HTML AND BOOTSTRAP PROJECT

 // using  first store project boxes ids that we stored above - projBox1,projBox2,projBox3,projBox4

 
// for menu 2 bootstrap project box name change


boootstMenu.onclick=car;
function car(){
    projBox1.innerHTML="Project 5";
    projBox2.innerHTML="Project 6";
    projBox3.innerHTML="Project 7";
    projBox4.innerHTML="Project 8";

    projBox1.attributes[0].value="/Projects/MurdokWeb/Murdok.html";
    projBox2.attributes[0].value="/Projects/pensionWeb/pension.html";
    projBox3.attributes[0].value="/Projects/TravelWeb/indexTravel.html";
    projBox4.attributes[0].value="/Projects/cartWeb/indexCart.html";
}

 

// for menu 3 js project box name change

jsMenu.onclick=truck;
function truck(){
    projBox1.innerHTML="Project 9";
    projBox2.innerHTML="Project 10";
    projBox3.innerHTML="Project 11";
    projBox4.innerHTML="Project 12";


    projBox1.attributes[0].value="/Projects/LightOnOff-js/lightBulb.html";
    projBox2.attributes[0].value="/Projects/clock-js/clock.html";
    projBox3.attributes[0].value="/Projects/player/index.html";
    projBox4.attributes[0].value="/Projects/Form Validation/SaurabhAssignment1.html";


}
