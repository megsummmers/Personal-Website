//variables
let page = 1;
let num = 0;
let currentNum = 1;
const abtScroll = document.getElementById("AboutSec");

function scrollH(){
    console.log("1");
    if(document.scrollLeft >= 0 && document.scrollLeft <= 2160){
        console.log("1");
    } else if(this.scrollLeft > 2160 && this.scrollLeft <= 2160*2){
        console.log("2");
    } else if(this.scrollX > 2160*2 && this.scrollX <= 2160*3){
        console.log("3");
    } else if(this.scrollX > 2160*3 && this.scrollX <= 2160*4){
        console.log("4");
    }
}

document.getElementById("AboutSec").addEventListener("keydown", function(){
    console.log(":)");
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

function moveCircle(pageNum){
    $(document).ready(function () {
        var $horizontal = $('#horizontal');
    
        $(window).scroll(function () {
            var s = $(this).scrollTop(),
                d = $(document).height(),
                c = $(this).height();
    
            scrollPercent = (s / (d - c));
    
            var position = (scrollPercent * ($(document).width() - $horizontal.width()));
    
            $horizontal.css({
                'left': position
            });
        });
    });

        document.getElementById("circle").style.left = "1%";
        document.getElementById("name").style.display = "contents";
        document.getElementById("PortfolioSec").style.display = "none";
        document.getElementById("ProjectSec").style.display = "none";
        document.getElementById("AboutSec").style.display = "none";
}

function previewJump(type, num){
    console.log(":)");
    window.scrollTo (0, 1500);
    changeProject(type, num);
}

function changeSection(num){
    if(currentNum > num){
        document.getElementById("topScroll").scrollLeft -= 2160*(currentNum-num);
    } else if(currentNum < num){
        document.getElementById("topScroll").scrollLeft += 2160*(num-currentNum);
    }
    currentNum = num;
}

function changeSectionY(direction){
    document.getElementById("topMenu").style.display = "none";

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

