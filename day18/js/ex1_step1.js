
;(function() {
  const get = target => {
    return document.querySelector(target);
  }
  const getAll = target => {
    return document.querySelectorAll(target);
  }


  const $prev = get('.banner-wrap .btn-wrap .prev');
  const $next = get('.banner-wrap .btn-wrap .next');
  const $banner = get('.banner-wrap .banner');
  const $bannerLi = getAll('.banner-wrap .banner li');
  const $pagingLi = getAll('.banner-wrap .paging li');

  class Gallery {
    constructor() {
      this.current = 0;
      this.old = 0;
      this.size = 600;
      this.length = $bannerLi.length;
    }
    init() {
      $next.addEventListener('click', e => {
        this.nextMove()
      })
      $prev.addEventListener('click', e => {
        this.prevMove()
      })
      $pagingLi.forEach( item => {
        item.addEventListener('click', e => {
          this.pagingMove()
        })
      })
    }// end init

    nextMove() {
      this.current++;
      if (this.current == this.length - 1) {
        this.current = 0;
      }
      $banner.style.transform = `translateX(${-this.size * this.current}px)`;
      $pagingLi[this.old].classList.remove('on');
      $pagingLi[this.current].classList.add('on');
      this.old = this.current;
    }
    prevMove() {
      this.current--;
      if (this.current < 0) {
        this.current = this.length - 1;
      }
      $banner.style.transform = `translateX(${-this.size * this.current}px)`;
      $pagingLi[this.old].classList.remove('on');
      $pagingLi[this.current].classList.add('on');
      this.old = this.current;
    }
    pagingMove() {
      
    }
  } // end Gallery

  const gallery = new Gallery();
  gallery.init();

})()