let $photoWrap = document.querySelector('.wrap .photo-wrap');
let $next = document.querySelector('.wrap .btn-wrap .next');
let $prev = document.querySelector('.wrap .btn-wrap .prev');
let $photo = document.querySelector('.wrap .photo-wrap .photo');
let arrImg  =[
    'images/img0.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
]
let totalImage = arrImg.length , current = 0, timer = null , interval = 3000; 

banner();

timer  = setInterval( make , interval);
function make(){
    current++;
    if( current > totalImage -1 ) {
        current = 0;
    }
    banner();
}

$next.addEventListener('click', (e) =>{
    current++;
    if( current > totalImage -1 ) {
        current = 0;
    }
    banner();
    clearInterval( timer );
    timer  = setInterval( make , interval);
})
$prev.addEventListener('click', (e) =>{
    current--;
    if( current < 0  ) {
        current = totalImage - 1;
    }
    banner();
    clearInterval( timer );
    timer  = setInterval( make , interval);
})

function banner(){
    const photoElm  = $photo;
    const image = arrImg[current];
    const imageIndex  =  current + 1;

    photoElm.innerHTML = `
        <div class="currentImage">
            <p> ${imageIndex} 갤러리번호</p>
            <img src="${image}" >
        </div>
    `
    const $pic  = document.querySelector('.photo img');
    $pic.animate([
        {opacity:0},
        {opacity:1},
    ], 500) 
}