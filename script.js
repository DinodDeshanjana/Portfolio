function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".humbeurger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});


ScrollReveal().reveal('.profile .section__text .title', {delay:500, origin:'right'});
ScrollReveal().reveal('.profile .section__text .section__text__p1', {delay:500, origin:'right'});
ScrollReveal().reveal('.profile .section__text .section__text__p2', {delay:500, origin:'right'});
ScrollReveal().reveal('.btn-container', {delay:500, origin:'left'});
ScrollReveal().reveal('.socials-container .icon', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.profile .section__pic-contaner', {delay:500, origin:'bottom'});

ScrollReveal().reveal('.about .section__text__p1', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.about .title', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.section__pic-container', {delay:500, origin:'left'});
ScrollReveal().reveal('.details-container', {delay:500, origin:'bottom'});

ScrollReveal().reveal('.project .section__text__p1', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.project .title', {delay:500, origin:'bottom'});

ScrollReveal().reveal('.contact .section__text__p1', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.contact .title', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.contact-info-upper-container', {delay:500, origin:'bottom'});
