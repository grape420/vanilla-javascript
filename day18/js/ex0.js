// const startBtn = document.querySelector('.start');
// const stopBtn = document.querySelector('.stop');
// const view = document.querySelector('.view');
// const output = document.querySelector('.output');

// let timer = null, count = 1, interval = 1000;

// const obj = {
//   color : 'tomato',
//   backgroundColor : 'yellow'
// }

// // 비구조할당, 구조분해(const color, const backgroundColor)
// const {color, backgroundColor} = obj;

// view.style.color = color;
// view.style.backgroundColor = backgroundColor;

// startBtn.addEventListener('click', e => {
//   if (timer == null) {
//     view.innerHTML = count;
//     timer = setInterval(() => {
//       count++;
//       view.innerHTML = count;
//     }, interval);
//   }
//   make('시작')
// })

// stopBtn.addEventListener('click', e => {
//   if (timer != null) {
//     clearInterval(timer);
//     timer = null;
//   }
//   make('중지')
// })

// function make(msg) {
//   const div = document.createElement('div');
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   div.innerHTML = `${h}시 ${m}분 ${s}초 ${msg}`;
//   div.classList.add('msg');
//   output.append(div);

// }

;(function() {
  const get = target => {
    return document.querySelector(target)
  }

  const $startBtn = get('.start');
  const $stopBtn =get('.stop');
  const $view = get('.view');
  const $output = get('.output');
  let count = 0;
  
  // 클래스 생성
  class StopTimer {
    // 초기값을 넣어줄 수 도 있음
    constructor(obj = {}) {
      this.options = obj
      this.timer = null
    }
    // init
    init() {
      let {color, backgroundColor} = this.options
      color = color || 'red';
      backgroundColor = backgroundColor || 'green';
      $view.style.color = color;
      $view.style.backgroundColor = backgroundColor;

      // 시작
      $startBtn.addEventListener('click',e => {
        this.start();
      })
      // 중지
      $stopBtn.addEventListener('click',e => {
        this.stop();
      })
    } // end init

    start() {
      
      if (this.timer == null) {
            $view.innerHTML = count;
            this.timer = setInterval(() => {
              count++;
              $view.innerHTML = count;
            },1000);
      }
    }
    stop() {
      if (this.timer != null) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
    
  }// end class

  const obj = {
  color : 'tomato',
  backgroundColor : 'yellow'
}

  const stoptimer = new StopTimer(obj);
  stoptimer.init();

}())
