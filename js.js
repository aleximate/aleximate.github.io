/*menu*/
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("btn_menu_back").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back");

function mostrar_menu(){
    nav.style.left= "0px";
    background_menu.style.display="block";
};

function ocultar_menu(){
    nav.style.left= "-300px";
    background_menu.style.display="none";
};

/*banner*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft= document.querySelector("#carrusel_btn_left");
const btnRight= document.querySelector("#carrusel_btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 700);
}
function prev(){
    let sliderSection= document.querySelectorAll(".slider_section");
    let sliderSectionLast= sliderSection[sliderSection.length-1]
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 700);
}
btnRight.addEventListener('click',function(){
    next();
})
btnLeft.addEventListener('click',function(){
    prev();
})