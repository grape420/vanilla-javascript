;(function(){
    const get = ( target )  => document.querySelector( target );

    let $photoWrap =get('.wrap .photo-wrap');
    let $next = get('.wrap .btn-wrap .next');
    let $prev = get('.wrap .btn-wrap .prev');
    let $photo = get('.wrap .photo-wrap .photo');

    class PhotoGallery{
        constructor(rootElm , images){
            this.rootElm  = rootElm ;
            this.images  = images;
            this.current  = 0 ;
            this.timer  = null;
            this.interval  = 3000; 
            this.totalImage  = images.length;
        }
        init(){
            $next.addEventListener('click', (e) =>{
                this.nextMove();
            })
            $prev.addEventListener('click', (e) =>{
                this.prevMove();
            })
            this.banner();
            this.startTimer();
        }

        startTimer(){
            this.timer = setInterval( () => {
                this.nextMove();
            }, this.interval )
        }

        nextMove(){
            this.current++;
            if( this.current > this.totalImage -1 ) {
                this.current = 0;
            }
            this.banner();
            clearInterval( this.timer );
            this.startTimer();
        }

        prevMove(){
            this.current--;
            if( this.current < 0  ) {
                this.current = this.totalImage - 1;
            }
            this.banner();
            clearInterval( this.timer );
            this.startTimer();
        }


        banner(){
            const photoElm  = $photo;
            const image = arrImg[this.current];
            const imageIndex  =  this.current + 1;
        
            photoElm.innerHTML = `
                <div class="currentImage">
                    <p> ${imageIndex} 갤러리번호</p>
                    <img src="${image}" >
                </div>
            `
            const $pic  = get('.photo img');
            $pic.animate([
                {opacity:0},
                {opacity:1},
            ], 500) 
        } //end banner
    }


    let arrImg  =[
        'images/img0.jpg',
        'images/img1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
    ]

    const photogallery  = new PhotoGallery( $photoWrap , arrImg );
    photogallery.init();

})()