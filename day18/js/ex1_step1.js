const prev = document.querySelector('.banner-wrap .btn-wrap .prev');
const next = document.querySelector('.banner-wrap .btn-wrap .next');
const banner = document.querySelector('.banner-wrap .banner');
const bannerli = document.querySelectorAll('.banner-wrap .banner li');
const pagingli = document.querySelectorAll('.banner-wrap .paging li');
let current = 0 , old = 0, size = 600 , len = bannerli.length ;

next.addEventListener('click', (e) => {
    current++;
    if( current > len  - 1 ) {
        current  = 0;
    }
    banner.style.transform = `translateX(${ -size * current}px)`;
    pagingli[old].classList.remove('on');
    pagingli[current].classList.add('on');
    old = current;
})
prev.addEventListener('click', (e) => {
    current--;
    if( current < 0  ) {
        current  = len  - 1;
    }
    banner.style.transform = `translateX(${ -size * current}px)`;
    pagingli[old].classList.remove('on');
    pagingli[current].classList.add('on');
    old = current;
})

pagingli.forEach( item => {
    item.addEventListener('click', (e) => {
        let el  = e.currentTarget;
        current = el.dataset.num ;
        pagingli[old].classList.remove('on');
        // pagingli[current].classList.add('on');
        el.classList.add('on');
        banner.style.transform = `translateX(${ -size * current}px)`;        
        old = current;
    })
})

