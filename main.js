const selectElement=function(element){
    return document.querySelector(element);
};

let menuToggler=selectElement('.menu-toggle');
let body=selectElement('body');

menu-Toggler.addEventListener('click',function(){
    body.classList.toggle('open');
});