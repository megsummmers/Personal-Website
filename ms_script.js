//variables
let page = 1;
let num = 0;
let currentNum = 1;
let screenW = screen.availWidth;
let screenH = screen.availHeight;

window.addEventListener('load', function(event){
    document.getElementById("topScroll").addEventListener("scroll", function(){
        if(this.scrollLeft <= screenW){
            document.getElementById("dividerT").style.display = "flex";
            document.getElementById("circle").style.marginLeft = "2vw";
        } else if(this.scrollLeft <= screenW*2 && this.scrollLeft >= screenW){
            document.getElementById("circle").style.marginLeft = "45vw";
        } else {
            document.getElementById("dividerT").style.display = "flex";
            document.getElementById("circle").style.marginLeft = "85vw";
        }
        
    })
}, false)

window.addEventListener("keydown", function(e){
    if(e.code == "ArrowLeft"){
        this.document.getElementById("circle").style.marginLeft = this.document.getElementById("circle").style.marginLeft + 5;
    } else if(e.code == "ArrowRight"){
        this.document.getElementById("circle").style.left += 1;
    } else if(e.code == "ArrowDown"){
        console.log("down");
    }
});

function moveCircle(num){
    switch(num){
        case 1: 
            document.getElementById("topScroll").scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            scrollLeft.scrollLeft += 0;
            document.getElementById("circle").style.marginLeft = "2vw";
            break;
        case 2:
            document.getElementById("topScroll").scroll({
                top: 0,
                left: screenW+screenW/2,
                behavior: "smooth",
            });
            window.scrollLeft += window.innerWidth;
            document.getElementById("circle").style.marginLeft = "42vw";
            break;
        case 3:
            document.getElementById("topScroll").scroll({
                top: 0,
                left: screenW*3,
                behavior: "smooth",
            });
            document.getElementById("circle").style.marginLeft = "85vw";
            break;
    }
}

function previewJump(type, num){
    window.scrollTo (0, 1500);
    changeProject(type, num);
}

function changeSection(num){
    switch(num){
        case 1:
            document.getElementById("GameSec").style.display = "block";
            document.getElementById("ModelSec").style.display = "none";
            document.getElementById("DesignSec").style.display = "none";
            break;
        case 2:
            document.getElementById("GameSec").style.display = "none";
            document.getElementById("ModelSec").style.display = "block";
            document.getElementById("DesignSec").style.display = "none";
            break;
        case 3:
            document.getElementById("GameSec").style.display = "none";
            document.getElementById("ModelSec").style.display = "none";
            document.getElementById("DesignSec").style.display = "block";
            break;
    }
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

