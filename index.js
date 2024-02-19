function increaseValue() {
    let value=parseInt(document.getElementById("numberInput").value, 10);
    value = isNaN(value)?0:value;
    value++;
    document.getElementById("numberInput").value=value;
    if(value>0)
    {
        $("#decreaseBtn").prop("disabled",false);
    }
    else{
        $("#decreaseBtn").prop("disabled", true);
    }


}

function decreaseValue() {
    let value=parseInt(document.getElementById("numberInput").value, 10);

    value=isNaN(value)?0:value;
    var disabled=false;
    if(value<2)
    {
        disabled=true;
    }

    if(disabled)
    {
        $("#decreaseBtn").prop("disabled", true)
    }
    else if(disabled===false)
    {
        $("#decreaseBtn").prop("disabled", false);

    }
    value < 1 ? value = 1 : '';
    value--
    document.getElementById("numberInput").value=value;
}
document.getElementById("increaseBtn").addEventListener("click", ()=>{
    increaseValue();
});
document.getElementById("decreaseBtn").addEventListener("click", ()=>{
    decreaseValue();
});


// heart button functionality


let heartbutton=$("#heartBtn");
$("#heartBtn").on("click", ()=>{
    $("#heartBtn i").toggleClass("active-class");
});


// CAROUSEL FUNCTIONALITY
const carousel = document.querySelector(".carousel");
let isDragStart=false;

const dragStart = (e) =>{
    isDragStart=true;
    prevPageX=e.pageX || e.touches[0].pageX;
    prevScrollLeft=carousel.scrollLeft;
}
const dragging = (e)=>{
    if(isDragStart===false)
    return;
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff=(e.pageX || e.touches[0].pageX ) - prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;

}
const dragStop = () => {
    isDragStart=false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


// CAROUSEL BUTTON 

let arrowIcons=document.querySelectorAll(".wrapper i");

firstImg=carousel.querySelectorAll("img")[0];
let firstImgWidth=firstImg.clientWidth+15;
let scrollWidth=carousel.scrollWidth-carousel.clientWidth;

const showHideIcons = ()=> {
    arrowIcons[0].style.display=carousel.scrollLeft===0?"none":"block";
    arrowIcons[1].style.display=carousel.scrollLeft===scrollWidth?"none":"block";

}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        carousel.scrollLeft += icon.id ==="left"? -firstImgWidth: firstImgWidth;
        setTimeout(()=>showHideIcons(), 60);
    })
    
});



