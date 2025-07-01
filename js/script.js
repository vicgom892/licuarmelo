const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function(){
    const currentScrollY = this.window.scrollY;

    if (currentScrollY === 0){
        header.classList.remove('header-fix');
    }
    else if (currentScrollY < lastScrollY){
        header.classList.add('header-fix');
    }
    else(
        header.classList.remove('header-fix')
    )
    lastScrollY = currentScrollY;
});