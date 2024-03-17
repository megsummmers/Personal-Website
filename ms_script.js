//variables
let page = 'home';

// hide ground after scrolling down
window.addEventListener("scroll", function(){
    //console.log(this.scrollX)
    if(page != 'home'){
        if(this.scrollY <= 10){
            this.document.getElementById("ground").style.display = "inline";
        } else {
            this.document.getElementById("ground").style.display = "none";
        }
    }
}, false);

function moveCircle(pageNum){
    switch(pageNum){
        case 1:
        document.getElementById("circle").style.left = "1%";
        document.getElementById("name").style.display = "inline";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        page = 'home';
        break;
        case 2: 
        document.getElementById("circle").style.left = "30%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "inline";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        page = 'portfolio';
        break;
        case 3: 
        document.getElementById("circle").style.left = "60%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "inline";
        page = 'about';
        break;
        case 4: 
        document.getElementById("circle").style.left = "90%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "inline";
        document.getElementById("AboutSec").style.display = "none";
        page = 'project';
        break;
    }
}

function changeProject(type, num){
    var page1;
    var page2;
    var page3;
    if(type == 'Pf'){
        page1 = document.getElementById("Pf1");
        page2 = document.getElementById("Pf2");
        page3 = document.getElementById("Pf3");
    } else if(type == 'Ab'){
        page1 = document.getElementById("Ab1");
        page2 = document.getElementById("Ab2");
        page3 = document.getElementById("Ab3");
    } else if(type == 'Pr'){
        page1 = document.getElementById("Pr1");
        page2 = document.getElementById("Pr2");
        page3 = document.getElementById("Pr3");
    }
    
    switch(num){
        case 1: page1.style.display = "inline";
        page2.style.display = "none";
        page3.style.display = "none";
        break;
        case 2: page1.style.display = "none";
        page2.style.display = "inline-block";
        page3.style.display = "none";
        break;
        case 3: page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "inline";
        break;
    }
}