/*

class Scroller {
    constructor(id) {
        this.id = document.getElementById(id);
        this.buttonType = this.id.className;
        this.t = this.ScrollerInit();
    }
    BeginScroll() {
        console.log("SCROLLER");
        this.isScrolling = true;
        this.RunScroller();
    }
    EndScroll() {
        this.isScrolling = false;
    }
    SingleScrollEvent() {
        if (this.buttonType === "l-button") {
            this.id.parentNode.getElementsByClassName("scroller")[0].scrollLeft -= 100;
        }
        else {
            this.id.parentNode.getElementsByClassName("scroller")[0].scrollLeft += 100;
        }
    }
    async RunScroller() {
        console.log("RunScroller called")
        while (this.isScrolling == true)
        {
            this.SingleScrollEvent();
            await this.Sleep(100);
        }
    }
    Sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    ScrollerInit() {
        console.log("INIT");
        this.id.addEventListener("click", this.BeginScroll());
        this.id.addEventListener("mouseup", this.EndScroll());
        this.id.addEventListener("mouseout", this.EndScroll());
    }
}

let recentNavButtonL = new Scroller("recent-nav-button-l");
let recentNavButtonR = new Scroller("recent-nav-button-r");

let ingNavButtonL = new Scroller("ingredients-nav-button-l");
let ingNavButtonR = new Scroller("ingredients-nav-button-r");

let recNavButtonL = new Scroller("recipes-nav-button-l");
let recNavButtonR = new Scroller("recipes-nav-button-r");



function ScrollerFunctionEvent(id) {
    var element = document.getElementById(id);
    var buttonType = element.className;
    console.log(buttonType);
    if (buttonType === "l-button") {
        console.log(element.parentNode.getElementsByClassName("scroller")[0]);
        element.parentNode.getElementsByClassName("scroller")[0].scrollLeft -= 100;
    }
    else {
        console.log(element.parentNode.getElementsByClassName("scroller")[0]);
        element.parentNode.getElementsByClassName("scroller")[0].scrollLeft += 100;
    }
}



$('recent-nav-button-l').on('mousedown', function() {
    console.log('Start Animate');
    (function smoothSrcroll() {
        console.log(Math.max($('html').scrollTop(), $('body').scrollTop()));
        $('html, body').stop().animate({
            scrollTop: Math.max($('html').scrollTop(), $('body').scrollTop()) + 100
        }, 1000, 'linear', function() {
            window.timeout = setTimeout(smoothSrcroll(), 0);
        });
    })();
}).on('mouseup', function() {
    console.log('Stop Animate');
    $('html, body').stop();
    clearTimeout(window.timeout);
});

*/