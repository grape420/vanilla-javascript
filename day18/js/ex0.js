;(function(){
    const get  = (target) => {
        return document.querySelector(target);
    }

    const $startBtn = get('.start');
    const $stopBtn = get('.stop');
    const $view = get('.view');
    const $output = get('.output');

    //클래스 생성
    class StopTimer {
        constructor(obj = {}) {
            this.options  = obj; 
            this.timer  = null; 
        }
        //init
        init(){
            let { color , backgroundColor } = this.options;
            color  = color || 'hotpink';
            backgroundColor  = backgroundColor || 'green';
            $view.style.color  = color;
            $view.style.backgroundColor  = backgroundColor;
            //시작
            $startBtn.addEventListener('click' , e => {
                this.start();
            })
            //중지
            $stopBtn.addEventListener('click' , e => {
                this.stop();
            })
        } //end init

        start(){
            if( this.timer == null ) {
                let count  = 0;
                $view.innerHTML = count ; 
                this.timer = setInterval( () => {
                    count++;
                    $view.innerHTML = count ; 
                }, 1000 )
            }
            this.make('시작');
        }

        stop(){
            if( this.timer != null ) {
                clearInterval( this.timer );
                this.timer = null ;
            }
            this.make('중지');
        }

       make(message){
        const div  = document.createElement('div');
        const now  = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
    
        div.innerText = `${h}시 ${m}분 ${s}초 ${message}`;
        div.classList.add('msg');
        $output.append( div );
       } 
    }//end class 


    const obj  = {
        color :'tomato' ,
        backgroundColor :'yellow'
    }
    const stoptimer  = new StopTimer( obj );
    stoptimer.init();

})()