const prev = document.querySelector('.banner-wrap .btn-wrap .prev');
const next = document.querySelector('.banner-wrap .btn-wrap .next');
const banner = document.querySelector('.banner-wrap .banner');
const bannerLi = document.querySelectorAll('.banner-wrap .banner li');
const pagingLi = document.querySelectorAll('.banner-wrap .paging li');
let current = 0, old = 0, size = 600, length = bannerLi.length;

next.addEventListener('click', e => {
  current++;
  if (current > length - 1) {
    current = 0;
  }
  banner.style.transform = `translateX(${-size * current}px)`;
  pagingLi[old].classList.remove('on');
  pagingLi[current].classList.add('on');
  old = current;
})

prev.addEventListener('click', e => {
  current--;
  if (current < 0) {
    current = length - 1;
  }
  banner.style.transform = `translateX(${-size * current}px)`;
  pagingLi[old].classList.remove('on');
  pagingLi[current].classList.add('on');
  old = current;
})

pagingLi.forEach( item => {
  item.addEventListener('click', e => {
    let el = e.currentTarget;
    current =el.dataset.num;

    pagingLi[old].classList.remove('on');
    el.classList.add('on');
    banner.style.transform = `translateX(${-size * current}px)`;
    old = current;
  })
})

