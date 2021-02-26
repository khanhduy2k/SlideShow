const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const frames = $('.border_slide')
const slideShow = $('.slideShow');
const btnPrev = $('.btn.prev');
const btnNext = $('.btn.next');

const Slide = {
    handlerEvent: function () {
        const _this = this;
        btnPrev.onclick = function () {
            _this.prevEvent()
        }

        btnNext.onclick = function () {
            _this.nextEvent()
        }
    },
    nextEvent: function () {
        const leftSlide = slideShow.offsetLeft;
        const widthSlide = slideShow.offsetWidth;
        const withScreen = frames.offsetWidth; 
        if((widthSlide-Math.abs(leftSlide)*2)>0){
           slideShow.style.left = (leftSlide-withScreen)+'px';
        }
    }
    ,
    prevEvent: function () {
        const leftSlide = slideShow.offsetLeft;
        const withScreen = frames.offsetWidth; 
        if (leftSlide < 0) {
           slideShow.style.left = (leftSlide+withScreen)+'px'; 
        }
    }
    ,
    run: function(){
        this.handlerEvent()
    }
}

Slide.run()



