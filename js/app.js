$(document).ready(function(){
$('.slider').slick({
    /* button nahi dene k liye */
    arrows:false,
    dots : true,
    appendDots:'.slider-dots',
    dotsClass:'dots'      /* we will not give dot here in the first because this is custom class */
});


let hamberger = document.querySelector('.hamberger');

let times = document.querySelector('.times');

let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');    /* mobile nav k andar jitna bhi class hai wo sab yaha aa jayega */

});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open')
});

});

