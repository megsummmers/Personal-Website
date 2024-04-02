//variables
let page = 1;
let num = 0;

// hide ground after scrolling down
window.addEventListener("scroll", function(){
    let scrollx = this.scrollX;
    //console.log(this.scrollY);
    if(page != 1){
        if(this.scrollY <= 10){
            this.document.getElementById("ground").style.display = "inline";
        } else {
            this.document.getElementById("ground").style.display = "none";
        }
    }

    if(page == 2){
        if(this.scrollY >= 1200 && this.scrollX >= scrollx){
            document.getElementById("scrollH").scrollLeft += 950;
        } else if(this.scrollY >= 1200 && this.scrollX <= scrollx){
            document.getElementById("scrollH").scrollLeft += 950;
        }
    }
}, false);

window.addEventListener("keydown", function(event){
    if(this.scrollY <= 10){
        switch(event.key){
            case "ArrowLeft":
                if(page > 1 && page <= 4){
                    page -= 1;
                    moveCircle(page);
                }
                break;
            case "ArrowRight":
                if(page >= 1 && page < 4){
                    page += 1;
                    moveCircle(page);
                }
                break;
        }
    }
}, false);

function moveCircle(pageNum){
    switch(pageNum){
        case 1:
        document.getElementById("circle").style.left = "1%";
        document.getElementById("name").style.display = "contents";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        page = 1;
        break;
        case 2: 
        document.getElementById("circle").style.left = "30%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "contents";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
        page = 2;
        break;
        case 3: 
        document.getElementById("circle").style.left = "60%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "contents";
        document.getElementById("AboutSec").style.display = "none";
        page = 3;
        break;
        case 4: 
        document.getElementById("circle").style.left = "90%";
        document.getElementById("name").style.display = "none";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "contents";
        page = 4;
        break;
    }
}

function scrollH(num){
    switch(num){
        case 1:
            document.getElementById("scrollH").scrollLeft += 950;
    }
}

function previewJump(type, num){
    console.log(":)");
    window.scrollTo (0, 1500);
    changeProject(type, num);
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

