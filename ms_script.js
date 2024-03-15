//variables

function moveCircle(pageNum){
    
    switch(pageNum){
        case 1:
        document.getElementById("circle").style.left = "1%";
        document.getElementById("name").style.display = "inline";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        break;
        case 2: 
        document.getElementById("circle").style.left = "30%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "inline";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        break;
        case 3: 
        document.getElementById("circle").style.left = "60%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "inline";
        document.getElementById("AboutSec").style.display = "none";
        break;
        case 4: 
        document.getElementById("circle").style.left = "90%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "inline";
        break;
    }
}

function changeProject(type, num){
    if(type == 'Pf'){
        switch(num){
            case 1: document.getElementById("Pf1").style.display = "inline";
            document.getElementById("Pf2").style.display = "none";
            document.getElementById("Pf3").style.display = "none";
            break;
            case 2: document.getElementById("Pf1").style.display = "none";
            document.getElementById("Pf2").style.display = "inline";
            document.getElementById("Pf3").style.display = "none";
            break;
            case 3: document.getElementById("Pf1").style.display = "none";
            document.getElementById("Pf2").style.display = "none";
            document.getElementById("Pf3").style.display = "inline";
            break;
        }
    }
}