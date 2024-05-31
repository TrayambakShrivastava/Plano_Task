function removeTop(){
    var x = document.getElementById("topMenu");
    x.style.display = "none" ;
}


function shiftImg(n) {
    var x = document.getElementsByClassName("carouselSlide");
    var y = document.getElementsByClassName("dot");
    var currentIndex;
    // Find the currently displayed image
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "flex") {
            currentIndex = i;
            break;
        }
    }
    x[currentIndex].style.display = "none";
    y[currentIndex].style.backgroundColor = "gray";
    y[currentIndex].style.backgroundImage = "none";
    var nextIndex = (currentIndex + n + x.length) % x.length;
    x[nextIndex].style.display = "flex";
    y[nextIndex].style.backgroundImage = x[nextIndex].style.backgroundImage;

}


function showIcon(index)
{
    var x = document.getElementsByClassName("tstmnlIcon") ;
    var y = document.getElementsByClassName("logoDot") ;
    var z = document.getElementsByClassName("tstmnlText") ;

    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = "black" ;
        y[i].style.backgroundColor = "gray" ;
        z[i].style.display = "none" ;
        }

        x[index].style.fill = "aqua" ;
        y[index].style.backgroundColor = "aqua" ;
        z[index].style.display = "block" ;
    
}

