//variables
let page = 1;
let num = 0;
let currentNum = 1;
const Hscroll = document.getElementById("Hscroll");

window.addEventListener("scroll", function(event){
    if(this.scrollY >= 10 && this.scrollY <= 1000){
        this.document.getElementById("divider").style.width = "85%";
    } else {
        this.document.getElementById("divider").style.width = "100%";
    }
}, false);

function moveCircle(pageNum){
    switch(pageNum){
        case 1:
            document.getElementById("circle").style.left = "1%";
            document.getElementById("name").style.display = "contents";
            document.getElementById("AboutSec").style.display = "none";
            document.getElementById("PortfolioSec").style.display = "none";
            break;
        case 2:
            document.getElementById("circle").style.left = "50%";
            document.getElementById("name").style.display = "none";
            document.getElementById("AboutSec").style.display = "contents";
            document.getElementById("PortfolioSec").style.display = "none";
            break;
        case 3:
            document.getElementById("circle").style.left = "90%";
            document.getElementById("name").style.display = "none";
            document.getElementById("AboutSec").style.display = "none";
            document.getElementById("PortfolioSec").style.display = "contents";
            break;
    }
        
}

function previewJump(type, num){
    console.log(":)");
    window.scrollTo (0, 1500);
    changeProject(type, num);
}

function changeSection(num){
    switch(num){
        case 1:
            document.getElementById("Hscroll").scrollLeft = 0;
            break;
        case 2:
            if(currentNum == 1){
                document.getElementById("Hscroll").scrollLeft += 2000;
            } else if(currentNum == 3){
                document.getElementById("Hscroll").scrollLeft -= 2000;
            }
            
            break;
        case 3:
            document.getElementById("Hscroll").scrollLeft += 3000;
            break;
    }
    currentNum = num;
}

function changeAbt(num){
    switch(num){
        case 1: document.getElementById("Ab1").style.display = "block";
        document.getElementById("Ab2").style.display = "none";
        document.getElementById("Ab3").style.display = "none";
        break;
        case 2: document.getElementById("Ab1").style.display = "none";
        document.getElementById("Ab2").style.display = "block";
        document.getElementById("Ab3").style.display = "none";
        break;
        case 3: document.getElementById("Ab1").style.display = "none";
        document.getElementById("Ab2").style.display = "none";
        document.getElementById("Ab3").style.display = "block";
        break;
    }
}

function changeProject(type, side){
    var pages = [];

    if(type == 'PfGa'){
        pages[0] = document.getElementById("PfGa1");
        pages[1] = document.getElementById("PfGa2");
        pages[2] = document.getElementById("PfGa3");
        pages[3] = document.getElementById("PfGa4");
        pages[4] = document.getElementById("PfGa5");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 4){
            num += 1;
        }
    } else if(type == 'Ab'){
        pages[0] = document.getElementById("Ab1");
        pages[1] = document.getElementById("Ab2");
        pages[2] = document.getElementById("Ab3");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 2){
            num += 1;
        }
    } else if(type == 'Pr'){
        pages[0] = document.getElementById("Pr1");
        pages[1] = document.getElementById("Pr2");
        pages[2] = document.getElementById("Pr3");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 2){
            num += 1;
        }
    }

    console.log(num);
    
    for(var i=0; i < pages.length; i++){
        if(i == num){
            pages[i].style.display = "contents";
        }else{
            pages[i].style.display = "none";
        }
    }
}

