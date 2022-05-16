;(function(){
    const get = ( target ) => {
        return document.querySelector( target )
    }
    const getAll = ( target ) => {
        return document.querySelectorAll( target )
    }

    const $prev = get('.banner-wrap .btn-wrap .prev');
    const $next = get('.banner-wrap .btn-wrap .next');
    const $banner = get('.banner-wrap .banner');
    const $bannerli = getAll('.banner-wrap .banner li');
    const $pagingli = getAll('.banner-wrap .paging li');

    class Gallery{
        constructor(){
            this.current  = 0 ;
            this.old  = 0 ;
            this.size = 600 ;
            this.len = $bannerli.length;            
        }
        init(){
            $next.addEventListener('click', (e) => {
                this.nextMove();
            })
            $prev.addEventListener('click', (e) => {
                this.prevMove();
            })
            $pagingli.forEach( item => {
                item.addEventListener('click', (e) => {
                    this.pagingMove(e);
                })
            })   
        }//end init

        nextMove(){
            this.current++;
            if( this.current > this.len  - 1 ) {
                this.current  = 0;
            }
            $banner.style.transform = `translateX(${ -this.size * this.current}px)`;
            $pagingli[this.old].classList.remove('on');
            $pagingli[this.current].classList.add('on');
            this.old = this.current;
        } //end nextMove

        prevMove(){
            this.current--;
            if( this.current < 0  ) {
                this.current  = this.len  - 1;
            }
            $banner.style.transform = `translateX(${ -this.size * this.current}px)`;
            $pagingli[this.old].classList.remove('on');
            $pagingli[this.current].classList.add('on');
            this.old = this.current;
        }//end prevMove

        pagingMove(e){
            let el  = e.currentTarget;
            this.current = el.dataset.num ;
            $pagingli[this.old].classList.remove('on');
            $pagingli[this.current].classList.add('on');            
            $banner.style.transform = `translateX(${ -this.size * this.current}px)`;        
            this.old = this.current;
        }//end pagingMove
    }

    const gallery  = new Gallery();
    gallery.init();
})()