"use strict";
let mainWidth = document.documentElement.clientWidth;
let mainHeight = document.documentElement.clientHeight ;

window.addEventListener('resize', function() {
    mainWidth = document.documentElement.clientWidth;
   
});

console.log(mainWidth);
/*let wrpapperBlock = document.createElement('div'); 
wrpapperBlock.style.cssText=`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translate(-50%,0);
    width: 100%;
    height: 20px;
    overflow: scroll;

`;

let pageSections = document.querySelectorAll('.page__section') ;
let navTabs = null;

for(let i = 0; i < pageSections.length; i++){
    navTabs = document.createElement('span');
    console.log(pageSections[i]);
    navTabs.style.cssText=`
    position: relative;
    top: 0;
    left:0;
    width: 35px;
    height: 5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6) ;
    margin: 0 10px 0 0;
    transition: background-color 0.5s ease 0s;
    `;
    navTabs.classList.add('navtab');
    navTabs.classList.add(i === 0 ? "__active" : "navtab")
    wrpapperBlock.appendChild(navTabs);

};

document.addEventListener("click", function(e){
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;


    if(targetElement.closest('.navtab')){
        navTabs.forEach((navTab,index) =>{
            if(navTab.classList.contains('__active')){
                currentActiveIndex = index;
                tabNavElement.classList.remove('__active');
                    
            };
            if (navTab === targetElement){
                newActiveIndex = index;
                console.log(navTab === targetElement);
            }

            
        
        });
        targetElement.classList.add('__active');
        pageSections[currentActiveIndex].classList.remove('__active');
        pageSections[newActiveIndex].classList.add('__active');
    };
});*/





if (mainWidth > 768 ){
    const pageSlider = new Swiper('.page', {
        // Optional parameters
        wrapperClass: "page__wrapper",
        slideClass: "page__section",
        
    
        direction: 'vertical',
        //loop: true,
        
        // slides for preview
        slidesPerView: 'auto',
        // turn on parallax
        parallax: true,
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
    
        mousewheel: {
            sensitivity: 1,
        },
    
        watchOverflow: true,
        speed: 750,
    
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        //pagination
        pagination: {
            el: ".page__pagination",
            type: "bullets",
            clickable: true,
            bulletClass: "page__bullet",
            bulletActiveClass: "page__bullet_active",
            //dynamicBullets: true,
            //dynamicMainBullets: 4,
            
        },
        //scrollbar
        scrollbar: {
            el: ".page__scroll",
            dragClass: "page__drag-scroll",
            draggable: true,
        },
        
        
        
    });

}








 
//let bullets = document.querySelectorAll()
