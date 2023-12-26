let hamburger = document.querySelector('.hamburger');
let loadingPopups = document.querySelectorAll('.loading-pop-up');
let scrollPopups = document.querySelectorAll('.scroll-pop-up');
let home = document.querySelector('.home'); 
let homeMain = document.querySelector('.home main'); 
let iPhone1 = document.querySelector('.home main .iPhone-1'); 
let iPhoneCalling = document.querySelector('.home main .iPhone-1 .iPhone-1-calling-part'); 
let iPhone1RespondBtn = document.querySelector('.home main .iPhone-1 .iPhone-1-respond-btn');
let instantlyConnect = document.querySelector('.instantly-connect'); 
let turnApp = document.querySelector('.turn-app'); 
let steps = document.querySelector('.steps'); 
let careerPage = document.querySelector('.career'); 
let joinUsBtns = document.querySelectorAll('.join-us-btn'); 
let joinUsModal = document.querySelector('.join-us-modal'); 
let joinUsModalForm = document.querySelector('.join-us-modal form'); 
let joinUsModalSubmitBtn = document.querySelector('.join-us-modal form .submit-btn'); 
let cloaseJoinUsModalBtn = document.querySelector('.join-us-modal .close-btn'); 
let calendlyModal = document.querySelector('.calendly-modal'); 
let cloasecalendlyModalBtn = document.querySelector('.calendly-modal .close-btn'); 




if (home) {
    let headerBottom = document.querySelector('header').getBoundingClientRect().bottom
    let iPhone1CallingPartTop = document.querySelector('.iPhone-1-calling-part').getBoundingClientRect().top
    if (headerBottom > iPhone1CallingPartTop) {
        homeMain.classList.add('add-padding-top')
    }
}




loadingPopups.forEach(popup => popup.classList.add('animat-popup'))
scrollPopups.forEach(popup => { 
        
    let triggerPopUpTop = popup.getBoundingClientRect().top - window.innerHeight - 100

    if (triggerPopUpTop < 0) {
        popup.classList.add('animat-popup')
    }

})








// the Main of the home page height is 2400 which the last animation trigger end there and 300 to stay a bit before leave main section 
// let homeMainHeight = 2400 + window.innerHeight + 300
// homeMain.style.height = `${homeMainHeight}px`

// let instantlyConnectHeight = 1800 + window.innerHeight
// instantlyConnect.style.height = `${instantlyConnectHeight}px`

// let turnAppHeight = 900 + window.innerHeight + 300
// turnApp.style.height = `${turnAppHeight}px`

// let stepsHeight = 3000 + window.innerHeight + 300
// steps.style.height = `${stepsHeight}px`

window.addEventListener('scroll', scrolled)

function scrolled(e) {
    popUpAnimations() 
    // mainPageParallax(e)
    mainToEndPoints()
    instantlyConnectToEndPoints()
    turnAppToEndPoints()
}  

function mainToEndPoints() {
    if (scrollY > 190) {
        document.querySelector('.iPhone-1-respond-btn').classList.add('iPhone-1-respond-btn-end-place-1')
        document.querySelector('.iPhone-1-calling-part').classList.add('iPhone-1-calling-part-place-1')
    }else {
        document.querySelector('.iPhone-1-respond-btn').classList.remove('iPhone-1-respond-btn-end-place-1')
        document.querySelector('.iPhone-1-calling-part').classList.remove('iPhone-1-calling-part-place-1')
    }
    if (scrollY > 700) {
        document.querySelector('.iPhone-1-calling-part').classList.remove('iPhone-1-calling-part-place-1')
    }
    if (scrollY > 890) {
        document.querySelector('header').classList.add('header-end-place-2')
        document.querySelector('.txt-block').classList.add('txt-block-end-place-2')
        document.querySelector('.iPhone-1').classList.add('iPhone-1-end-place-2')
        document.querySelector('.iPhone-1-respond-btns-with-bg').classList.add('iPhone-1-respond-btns-with-bg-end-place-2')
        document.querySelector('.iPhone-1-calling-part').classList.add('iPhone-1-calling-part-place-2')
        document.querySelector('.iPhone1-new-client-heading').classList.add('iPhone1-new-client-heading-place-2')
        document.querySelector('.iPhone-1-top-blue-gradient').classList.add('iPhone-1-top-blue-gradient-place-2')
        document.querySelector('.iPhone-1-bottom-green-gradient').classList.add('bottom-green-gradient-place-2')
        document.querySelector('.iPhone-1-bg-circles').classList.add('iPhone-1-bg-circles-place-2')
        document.querySelector('.iPhone-1-outside-gradients').classList.add('iPhone-1-outside-gradients-end-place-2')
        document.querySelector('.iPhone-1-delivering-quality-icons').classList.add('iPhone-1-delivering-quality-icons-end-place-2')
    }else {
        document.querySelector('header').classList.remove('header-end-place-2')
        document.querySelector('.txt-block').classList.remove('txt-block-end-place-2')
        document.querySelector('.iPhone-1').classList.remove('iPhone-1-end-place-2')
        document.querySelector('.iPhone-1-respond-btns-with-bg').classList.remove('iPhone-1-respond-btns-with-bg-end-place-2')
        document.querySelector('.iPhone-1-calling-part').classList.remove('iPhone-1-calling-part-place-2')
        document.querySelector('.iPhone1-new-client-heading').classList.remove('iPhone1-new-client-heading-place-2')
        document.querySelector('.iPhone-1-top-blue-gradient').classList.remove('iPhone-1-top-blue-gradient-place-2')
        document.querySelector('.iPhone-1-bottom-green-gradient').classList.remove('bottom-green-gradient-place-2')
        document.querySelector('.iPhone-1-bg-circles').classList.remove('iPhone-1-bg-circles-place-2')
        document.querySelector('.iPhone-1-outside-gradients').classList.remove('iPhone-1-outside-gradients-end-place-2')
        document.querySelector('.iPhone-1-delivering-quality-icons').classList.remove('iPhone-1-delivering-quality-icons-end-place-2')
    }
    if (scrollY > 990) {
        DVQITl.play()
        
    } else {
        DVQITl.progress(0)
        DVQITl.pause()
    } 
}



gsap.registerPlugin(ScrollTrigger);


let mainTl = gsap.timeline()

mainTl.to('.iPhone-1-respond-btn', {x: 200})
      .to('.scroll-bottom-arrow', {opacity: 0}, '<')
      .to('.iPhone-1-calling-part', {rotation: 10}, '<')
      //
      .to('header', {xPercent: -50, y: '-10vw'})
      .to('main .txt-block', {x: '-200vw', opacity: 0}, '<') //edit
      .to('.iPhone-1', {x: '-22.5vw', scale: 1.26}, '<')
      .to('.iPhone-1-calling-part', {rotation: 0}, '<') //add
      .to('.iPhone1-new-client-heading', {x: -400, y: -500, scale: 2, opacity: 0}, '<') //add
      .to('.iPhone-1-top-blue-gradient', {opacity: 0.3}, '<') //add
      .to('.iPhone-1-respond-btns-with-bg', {y: 50, opacity: 0}, '<') //add
      .to('.iPhone-1-bottom-green-gradient', {opacity: 0}, '<') //add + edit
      .to('.iPhone-1-inside-gradients', {opacity: 0}, '<')
      .to('.iPhone-1-bg-circles', {opacity: 1, scale: 1.25}, '<')
      .to('.iPhone-1-outside-gradients', {rotation: -150}, '<')
      .to('.iPhone-1-delivering-quality-icons', {opacity: 1}, '<')
      //
      .to('.delivering-quality-heading', {x: '-7vw',opacity: 1}, '<') //edit

      ScrollTrigger.create({
        animation: mainTl,
        trigger: '.main-container',
        scrub: true,
        pin: true,
        start: '0s',
        end: '+=1400s'
    })


      gsap.defaults({
        duration: 2,
      });

      let DVQITl = gsap.timeline({repeat: -1}) 
      DVQITl.pause()     
      DVQITl.to('.iPhone-1-bg-circles', {scale: 0.68})
      .to('.iPhone-1-auto-insurance-big-icon', {x: 495, y: 180, rotation: 0, scale: 0.3}, '<')
      .to('.iPhone-1-life-insurance-big-icon ', {x: 41, y: 25, rotation: 0, scale: 1}, '<')
      .to('.delivering-quality-life-insurance-desc', {x: 0, y: '-3vw', opacity: 1}, '<')
      .to('.iPhone-1-delivering-quality-aca-health-big-icon', {y: 690}, '<')
      .to('.iPhone-1-medicaree-big-icon', {x: 420, y: 500}, '<')
      .to('.iPhone-1-delivering-quality-auto-insurance-secondary-icon', {x: 120, y: -100, opacity: 0}, '<')
      .to('.iPhone-1-delivering-quality-u65-health-big-icon', {x: 150, y: 585}, '<')
      //
      .to('.iPhone-1-auto-insurance-big-icon', {x: 160, y: -7, scale: 1})
      .to('.delivering-quality-life-insurance-desc', {x: '-26vw', y: '-16.5vw', scale: 0.5, opacity: 0.45, filter: 'blur(10px)'}, '<')
      .to('.delivering-quality-auto-insurance-desc', {x: 0, y: '-3vw', opacity: 1}, '<')
      .to('.iPhone-1-life-insurance-big-icon ', {x: 180, y: 220, scale: 0.25, filter: 'blur(20px)'}, '<')
      .to('.iPhone-1-delivering-quality-u65-health-big-icon', {x: 155, y: 505, scale: 0.25, filter: 'blur(25px)'}, '<')
      .to('.iPhone-1-medicaree-big-icon', {x: 460, y: 600, scale: 0.3, filter: 'blur(28px)'}, '<')
      .to('.iPhone-1-delivering-quality-aca-health-big-icon', {x: 350, y: 640, filter: 'blur(14px)'}, '<')
      //
      .to('.iPhone-1-auto-insurance-big-icon', {x: 495, y: 340, rotation: 0, scale: 0.3, filter: 'blur(24px)'})
      .to('.auto-insurance-big-icon-fill-it-black, .iPhone-1-life-insurance-big-icon-fill-it-black, .iPhone-1-medicaree-big-icon-fill-it-black', {fill: 'black'}, '<')
      .to('.iPhone-1-life-insurance-big-icon ', {x: 180, y: 230, scale: 0.25, filter: 'blur(25px)'}, '<')
      .to('.iPhone-1-delivering-quality-aca-health-big-icon', {x: 49, y: 20, scale: 1, rotation: 0, filter: 'none'}, '<')
      .to('.delivering-quality-auto-insurance-desc', {x: '-6.8vw', y: '-6.25vw', scale: 0.5, opacity: 0.45, filter: 'blur(10px)'}, '<')
      .to('.delivering-quality-life-insurance-desc', {x: '-25.75vw', y: '-16vw', scale: 0.5, opacity: 0.45, filter: 'blur(10px)'}, '<')
      .to('.delivering-quality-aca-health-desc', {x: 0, y: '-3vw', opacity: 1}, '<')
      .to('.iPhone-1-delivering-quality-u65-health-big-icon', {x: 245, y: 405}, '<')
      //
      .to('.iPhone-1-delivering-quality-aca-health-big-icon', {x: 200, y: 430, scale: 0.2, filter: 'blur(19px)'})  
      .to('.iPhone-1-delivering-quality-aca-health-big-icon-fill-it-black', {fill: 'black'}, '<')  
      .to('.iPhone-1-delivering-quality-u65-health-big-icon', {x: 160, y: 685}, '<')
      .to('.iPhone-1-delivering-quality-u65-health-big-icon-fill-it-black-seperate', {opacity: 1}, '<')
      .to('.iPhone-1-medicaree-big-icon', {x: 145, y: -10, scale: 1, filter: 'none'}, '<')
      .to('.delivering-quality-aca-health-desc', {x: '-25.75vw', y: '-4.8vw', scale: 0.5, opacity: 0.45, filter: 'blur(10px)'}, '<')
      .to('.delivering-quality-medicare-desc', {x: 0, y: '-3vw', opacity: 1}, '<')
      .to('.iPhone-1-medicaree-big-icon-fill-it-black', {fill: 'white'}, '<')
      //
      .to('.iPhone-1-delivering-quality-u65-health-big-icon', {x: 41, y: 23, scale: 1, filter: 'none'})
      .to('.delivering-quality-medicare-desc', {x: '-6.75vw', y: '4.1vw', scale: 0.5, opacity: 0.45, filter: 'blur(10px)'}, '<')
      .to('.delivering-quality-u65-health-desc', {x: 0, y: '-3vw', opacity: 1}, '<')
      .to('.iPhone-1-delivering-quality-u65-health-big-icon-fill-it-black-seperate', {opacity: 0, duration: 0.05}, '<')
      .to('.iPhone-1-medicaree-big-icon', {x: 460, y: 490, scale: 0.3, filter: 'blur(28px)'}, '<')
      .to('.iPhone-1-medicaree-big-icon-fill-it-black', {fill: 'black'}, '<')

    function instantlyConnectToEndPoints() {
        if (scrollY > 1400 + window.innerHeight + 190) {
            document.querySelector('.iPhone-2-block').classList.add('iPhone-2-block-end-place-1')
            document.querySelector('.iPhone-2-respond-call').classList.add('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-intern-circles').classList.add('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-out-circles').classList.add('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-after-responding-icons').classList.add('iPhone-2-after-responding-icons-end-place-1')
            document.querySelector('.iPhone-2-bottom-green-gradient').classList.add('iPhone-2-bottom-green-gradient-end-place-1')
            document.querySelector('.instantly-connect-main-heading').classList.add('instantly-connect-main-heading-end-place-1')
            document.querySelector('.instantly-avatars').classList.add('instantly-avatars-end-place-1')
        } else {
            document.querySelector('.iPhone-2-block').classList.remove('iPhone-2-block-end-place-1')
            document.querySelector('.iPhone-2-respond-call').classList.remove('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-intern-circles').classList.remove('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-out-circles').classList.remove('iPhone-2-hide-itm-end-place-1')
            document.querySelector('.iPhone-2-after-responding-icons').classList.remove('iPhone-2-after-responding-icons-end-place-1')
            document.querySelector('.iPhone-2-bottom-green-gradient').classList.remove('iPhone-2-bottom-green-gradient-end-place-1')
            document.querySelector('.instantly-connect-main-heading').classList.remove('instantly-connect-main-heading-end-place-1')
            document.querySelector('.instantly-avatars').classList.remove('instantly-avatars-end-place-1')
        }
        if (scrollY > 1400 + window.innerHeight + 700) {
            document.querySelector('.iPhone-2-after-responding-icons').classList.remove('iPhone-2-after-responding-icons-end-place-1')
            document.querySelector('.instantly-avatars').classList.remove('instantly-avatars-end-place-1') 
        }
        if (scrollY > 1400 + window.innerHeight + 890) {
            document.querySelector('.iPhone-2').classList.add('iPhone-2-end-place-2')
            document.querySelector('.instantly-connect-secondary-heading').classList.add('instantly-connect-secondary-heading-end-place-2')
            document.querySelector('.instantly-avatars').classList.add('instantly-avatars-end-place-1') 
            document.querySelector('.iPhone-2-after-responding-icons').classList.add('iPhone-2-after-responding-icons-end-place-1')
            document.querySelector('.iPhone-2-front-mask').classList.add('iPhone-2-front-mask-end-place-1')
        } else {
            document.querySelector('.iPhone-2').classList.remove('iPhone-2-end-place-2')
            document.querySelector('.instantly-connect-secondary-heading').classList.remove('instantly-connect-secondary-heading-end-place-2')
            document.querySelector('.instantly-avatars').classList.remove('instantly-avatars-end-place-1') 
            document.querySelector('.iPhone-2-after-responding-icons').classList.remove('iPhone-2-after-responding-icons-end-place-1')
            document.querySelector('.iPhone-2-front-mask').classList.remove('iPhone-2-front-mask-end-place-1')
        }
    }


let ICTl = gsap.timeline()

    ICTl.to('.iPhone-2-block', {x: '25vw'}, '<')
    ICTl.to('.iPhone-2-respond-call, .iPhone-2-intern-circles, .iPhone-2-out-circles', {opacity: 0}, '<')
    ICTl.to('.iPhone-2-after-responding-icons', {opacity: 1}, '<')
    ICTl.to('.iPhone-2-bottom-green-gradient', {x: -980, y: 690, scale: 2,rotation: -80, filter: 'blur(40px)'}, '<')
    ICTl.to('.instantly-connect-main-heading', {x: '40vw', scale: 0.4, opacity: 0}, '<')
    ICTl.to('.instantly-avatars', {left: 0}, '<')
    ICTl.to('.instantly-avatar-1', {x: '25vw', y: '-16.5vw', scale: '2.21'}, '<')
    ICTl.to('.instantly-avatar-2', {x: '21.2vw',y: '13.4vw', scale: '2.41', rotation: 0}, '<')
    ICTl.to('.instantly-avatar-3', {x: '23.75vw', y: '-6.1vw', scale: 2.88}, '<')
    ICTl.to('.instantly-avatar-4', {x: '-5.5vw', y: '3vw', scale: '4.5', rotation: 0}, '<')
    ICTl.to('.instantly-avatar-5', {x: '1.7vw', y: '-17.7vw', scale: '3.23', rotation: 0}, '<')
    ICTl.to('.instantly-avatar-6', {x: '28vw', y: '3vw', scale: '2.42'}, '<')
    ICTl.to('.instantly-avatar-7', {x: '3.3vw', y: '15.8vw', scale: '4.02'}, '<')
    ICTl.to('.instantly-avatar-8', {x: '33vw', y: '-4.6vw', scale: '2.28'}, '<')
    ICTl.to('.instantly-avatar-9', {x: '-3.5vw', y: '-12vw', scale: '2.34'}, '<')
    ICTl.to('.instantly-avatar-10', {x: '3.25vw',y: '0.8vw', scale: 4.27, rotation: -15}, '<')
    ICTl.to('.instantly-avatar-11', {x: '27vw', y: '8vw', scale: '0.69'}, '<')
    // animation 12
  
    // animation 13
    ICTl.to('.iPhone-2', {x: '1vw',y: '1vh', scale: 1.72})
    ICTl.to('.instantly-connect-secondary-heading', {xPercent: -50, y: '-2vh', opacity: 1}, '<0.5')
    ICTl.to('.instantly-avatars, .iPhone-2-after-responding-icons, .iPhone-2-front-mask', {opacity: 0, duration: 0.4}, '<')
    ICTl.to('.new-clients-layers', {x: '2.15vw',y: '7.5vw', opacity: 1}, '<0.2')
    ICTl.to('.new-clients-layers .load-more', {opacity: 1, y: '-.75vw'}, '<')
    // animation 14
    // ICTl.to('.new-clients-layers .layer:first-of-type', {x: '4.26vw'})
    // ICTl.to('.new-clients-layers .layer:nth-of-type(2)', {x: '15.08vw', y: '-0.5vw', rotation: -1.3}, '<')
    // ICTl.to('.new-clients-layers .layer:nth-of-type(3)', {x: '8.84vw', y: '-0.95vw'}, '<')
    // ICTl.to('.new-clients-layers .layer:nth-of-type(4)', {x: '5.46vw', y: '-1.44vw'}, '<')
    // ICTl.to('.new-clients-layers .layer:nth-of-type(5)', {x: '1.71vw', y: '-1.9vw'}, '<')
    


ScrollTrigger.create({
    animation: ICTl,
    trigger: '.instantly-connect-container',
    scrub: true,
    pin: true,
    start: '0s',
    end: '+=1400s'
})

function turnAppToEndPoints() {
    if (scrollY > 2800 + window.innerHeight * 2 + 190) {
        document.querySelector('.turn-app-main-heading').classList.add('turn-app-main-heading-end-place-1')
        document.querySelector('.iPhone-3-block').classList.add('iPhone-3-block-end-place-1')
        document.querySelector('.iPhone-3-check-box rect').classList.add('iPhone-3-check-box-rect-end-place-1')
        document.querySelector('.iPhone-3-check-box circle').classList.add('iPhone-3-check-box-circle-end-place-1')
        document.querySelector('.iPhone-3-inside-pattren').classList.add('iPhone-3-inside-pattren-end-place-1')
        document.querySelector('.iPhone-3-outside-pattren').classList.add('iPhone-3-outside-pattren-end-place-1')
    } else {
        document.querySelector('.turn-app-main-heading').classList.remove('turn-app-main-heading-end-place-1')
        document.querySelector('.iPhone-3-block').classList.remove('iPhone-3-block-end-place-1')
        document.querySelector('.iPhone-3-check-box rect').classList.remove('iPhone-3-check-box-rect-end-place-1')
        document.querySelector('.iPhone-3-check-box circle').classList.remove('iPhone-3-check-box-circle-end-place-1')
        document.querySelector('.iPhone-3-inside-pattren').classList.remove('iPhone-3-inside-pattren-end-place-1')
        document.querySelector('.iPhone-3-outside-pattren').classList.remove('iPhone-3-outside-pattren-end-place-1')
    }
    if (scrollY > 2800 + window.innerHeight * 2 + 700) {
        document.querySelector('.iPhone-3-block').classList.remove('iPhone-3-block-end-place-1')
    }
    if (scrollY > 2800 + window.innerHeight * 2 + 890) {
        document.querySelector('.turn-app-main-heading').classList.add('turn-app-main-heading-end-place-2')
        document.querySelector('.iPhone-3-block').classList.add('iPhone-3-block-end-place-2')
        document.querySelector('.iPhone-3-check-box rect').classList.add('iPhone-3-check-box-rect-end-place-2')
        document.querySelector('.iPhone-3-check-box circle').classList.add('iPhone-3-check-box-circle-end-place-2')
        document.querySelector('.iPhone-3-inside-pattren').classList.add('iPhone-3-inside-pattren-end-place-2')
        document.querySelector('.iPhone-3-outside-pattren').classList.add('iPhone-3-outside-pattren-end-place-2')
    } else {
        document.querySelector('.turn-app-main-heading').classList.remove('turn-app-main-heading-end-place-2')
        document.querySelector('.iPhone-3-block').classList.remove('iPhone-3-block-end-place-2')
        document.querySelector('.iPhone-3-check-box rect').classList.remove('iPhone-3-check-box-rect-end-place-2')
        document.querySelector('.iPhone-3-check-box circle').classList.remove('iPhone-3-check-box-circle-end-place-2')
        document.querySelector('.iPhone-3-inside-pattren').classList.remove('iPhone-3-inside-pattren-end-place-2')
        document.querySelector('.iPhone-3-outside-pattren').classList.remove('iPhone-3-outside-pattren-end-place-2')
    }
    
}

let TATL = gsap.timeline()

    // animation 16
    TATL.to('.turn-app-main-heading', {opacity: 1})
    TATL.to('.iPhone-3-block', {x: '-3.5vw', y: '2vw', scale: 0.83} , '<')
    TATL.to('.iPhone-3-check-box rect', {fill: '#38BD61', fillOpacity: 1} , '<')
    TATL.to('.iPhone-3-check-box circle', {x: 59} , '<')
    TATL.to('.iPhone-3-inside-pattren', {x: '-11vw', y: '-3vw', rotation: -180, scale: 1.3} , '<')
    TATL.to('.iPhone-3-outside-pattren', {rotation: 0} , '<')
    // animation 17
    TATL.to('.turn-app-main-heading', {x: '-18.5vw', y: '6vw', scale: 0.63,opacity: 0})
    TATL.to('.iPhone-3-block', {x: '-22.75vw',y: '-9vw', scale: 1.44} , '<')
    TATL.to('.iPhone-3-check-box rect', {fill: '#5A5A5A', fillOpacity: 0.47} , '<')
    TATL.to('.iPhone-3-check-box circle', {x: 0} , '<')
    TATL.to('.iPhone-3-inside-pattren', {x: '-15vw', y: '-5.5vw', rotation: 0, scale: 0.75} , '<')
    TATL.to('.iPhone-3-outside-pattren', {scale: 0.78, rotation: 90} , '<')
    // animation 18
    TATL.to('.iPhone-3-block', {x: '-22.5vw', y: '5vw', scale: 2.28, transformOrigin: '50% 0'})
    TATL.to('.iPhone-3-logo', {scale: 0.6}, '<')
    TATL.to('.iPhone-3-check-box', {opacity: 0}, '<')
    TATL.to('.iPhone-3-inside-pattren', {x: '-14vw', y: '-14vw', rotation: 163, scale: 0.65, filter: 'blur(4.5px)'} , '<')
    TATL.to('.iPhone-3-outside-pattren', {y: '-7.5vw', scale: 0.525, rotation: 180} , '<')
    TATL.to('.turn-app-secondary-heading', {opacity: 1} , '<')



ScrollTrigger.create({
    animation: TATL,
    trigger: '.turn-app-container',
    scrub: true,
    pin: true,
    start: '0s',
    end: '+=2100s'
})

let STTl = gsap.timeline()

    //animation 19
    STTl.to('.steps-form .sign-up-btn .bg', {scaleX: 0.55})
    STTl.to('.steps-form .sign-up-btn .btn-txt ', {scale: 1.7}, '<')
    STTl.to('.steps-form .sign-up-btn .cursor', {scale: 0.5}, '<')
    //animation 20
    STTl.to('.steps-form .sign-up-btn .bg', {scaleX: 1})
    STTl.to('.steps-form .sign-up-btn .btn-txt ', {scale: 1}, '<')
    STTl.to('.steps-form .sign-up-btn .cursor', {scale: 1}, '<')
    //animation 21
    STTl.to('.steps-container .txt h3:nth-of-type(2)', {opacity: 1})
    STTl.to('.iPhone-4', {rotationY: 20}, '<')
    STTl.to('.iPhone-4-gradient-mask', {opacity: 0}, '<')
    STTl.to('.iPhone-4-white-mask', {opacity: 1}, '<')
    STTl.to('.steps-form', {opacity: 0}, '<')
    //animation 22
    STTl.to('.iPhone-4-white-icons', {opacity: 1})
    STTl.to('.iPhone-4-white-icon-1, .iPhone-4-white-icon-2, .iPhone-4-white-icon-3', {x: 0, y: 0})
    //animation 23
    STTl.to('.iPhone-4-white-icons', {opacity: 1})
    STTl.to('.iPhone-4-white-icon-4', {x: -186, y: 31, rotation: -10}, '<')
    STTl.to('.iPhone-4-white-icon-1 .its-bg', {x: -18, y: -32, rotation: -12}, '<')
    STTl.to('.iPhone-4-white-icon-2 .its-bg', {x: -90, y: 70, rotation: -12}, '<')
    STTl.to('.iPhone-4-white-icon-3 .its-bg', {x: 77, y: -25, rotation: 16.3}, '<')
    STTl.to('.iPhone-4-white-icon-5 .its-bg', {x: -275, y: 75, rotation: -25}, '<')
    STTl.to('.iPhone-4-white-icon-1 .its-graphics', {x: -99, y: 35, rotation: -17}, '<')
    STTl.to('.iPhone-4-white-icon-2 .its-graphics', {x: 10, y: -120, rotation: 10}, '<')
    STTl.to('.iPhone-4-white-icon-3 .its-graphics', {x: 65, y: 169, scale: 0.6}, '<')
    STTl.to('.iPhone-4-white-icon-5 .its-graphics', {x: -448, y: 3, scale: 1.4, rotation: -25}, '<')
    //animation 24
    STTl.to('.steps-container .txt h3:nth-of-type(3)', {opacity: 1}, '<')
    STTl.to('.steps .iphone-4-frame', {opacity: 0}, '<')
    STTl.to('.laptop-iPhone .iPhone', {rotationY: 0, opacity: 1}, '<')
    //animation 25
    STTl.to('.laptop-iPhone .iPhone-4-respond', {opacity: 1})
    STTl.to('.laptop-iPhone .iPhone-4-responded', {opacity: 0}, '<')
    STTl.to('.laptop-iPhone .iPhone-4-bottom-green-gradient', {x: -760, y: 490, scale: 2,rotation: -80, filter: 'blur(40px)', duration: 1.2}, '<')
     //animation 26
     STTl.to('.laptop-iPhone .laptop', {scale:1, opacity: 1})
     STTl.to('.laptop-iPhone .iPhone', {scale: 1, rotation: -5, transformOrigin: '140% 58%'}, '<')
     //animation 27
     STTl.to('.steps .txt', {x: '-100vw'})
     STTl.to('.laptop-iPhone', {x: 0}, '<')
     STTl.to('.laptop-iPhone .laptop', {scale: 0.75, transformOrigin: '50%'}, '<')
     STTl.to('.laptop-iPhone .iPhone', {y: -170, rotation: 0}, '<')
     STTl.to('.laptop-block .absolute-layer', {opacity: 1}, '<')
     STTl.to('.laptop-block .accept-icon', {x: '2.8vw', y: '4.1vw', rotation: '15deg'}, '<')
     STTl.to('.laptop-block .testem-layer-2', {x: '3.4vw', y: '0.25vw'}, '<')
     STTl.to('.laptop-block .testem-layer-3', {x: '-7.8vw', y: '1.3vw'}, '<')
     STTl.to('.laptop-block .testem-layer-1', {x: '1.2vw', y: '1.3vw'}, '<')
     STTl.to('.laptop-block .testem-layer-4', {x: '-10.75vw', y: '1.4vw'}, '<')
      //animation 28
     STTl.to('.laptop-iPhone .laptop', {scale: 1, y: 10})
     STTl.to('.laptop-iPhone .iPhone', {y: -170, rotation: 0}, '<')
     STTl.to('.laptop-block .absolute-layer', {x: 0, y: 10, scale:1, rotation: 0}, '<')
     //animation 29
    STTl.to('.laptop-iPhone .laptop', {scale: 11})
    STTl.to('.laptop-block .laptop-iPhone .laptop-gradient', {x: 750, y: 200,scale: 0.5,  rotation: 119 }, '<')
    STTl.to('.laptop-iPhone .iPhone, .laptop-block .testem-layer-2, .laptop-block .testem-layer-3, .laptop-block .accept-icon', {x: '-100vw'}, '<')
    STTl.to('.steps-sound-icon, .laptop-block .testem-layer-4, .laptop-block .testem-layer-1', {x: '100vw'}, '<')
    STTl.to('.laptop-iPhone .laptop-respond', {opacity: 0}, '<')
    STTl.to('.steps .start-now', {scale: 1, opacity: 1, pointerEvents: 'all'})





ScrollTrigger.create({
    animation: STTl,
    trigger: '.steps-container',
    scrub: true,
    pin: true,
    start: '0s',
    end: '+=8000s'
})




















function mainPageParallax(e) {

    if (scrollY > 0) {
        home.classList.add('animat-1')
    } else {
        home.classList.remove('animat-1')
    }

    if (scrollY > 300) {
        home.classList.add('animat-2')
    } else {
        home.classList.remove('animat-2')
    }

    if (scrollY > 600) {
        home.classList.add('animat-3')
    } else {
        home.classList.remove('animat-3')
    }

    if (scrollY > 900) {
        home.classList.add('animat-4')
    } else {
        home.classList.remove('animat-4')
    }

    if (scrollY > 1200) {
        home.classList.add('animat-5')
    } else {
        home.classList.remove('animat-5')
    }

    if (scrollY > 1500) {
        home.classList.add('animat-6')
    } else {
        home.classList.remove('animat-6')
    }

    if (scrollY > 1800) {
        home.classList.add('animat-7')
    } else {
        home.classList.remove('animat-7')
    }

    if (scrollY > 2100) {
        home.classList.add('animat-8')
    } else {
        home.classList.remove('animat-8')
    }

    if (scrollY > 2400) {
        home.classList.add('animat-9')
    } else {
        home.classList.remove('animat-9')
    }


    if (scrollY > homeMainHeight + 300) {
        home.classList.add('animat-10')
    } else {
        home.classList.remove('animat-10')
    }

    if (scrollY > homeMainHeight + 600) {
        home.classList.add('animat-11')
    } else {
        home.classList.remove('animat-11')
    }

    if (scrollY > homeMainHeight + 900) {
        home.classList.add('animat-12')
    } else {
        home.classList.remove('animat-12')
    }

    if (scrollY > homeMainHeight + 1200) {
        home.classList.add('animat-13')
    } else {
        home.classList.remove('animat-13')
    }

    if (scrollY > homeMainHeight + 1500) {
        home.classList.add('animat-14')
    } else {
        home.classList.remove('animat-14')
    }

    // if (scrollY > homeMainHeight + 1800) {
    //     home.classList.add('animat-15')
    // } else {
    //     home.classList.remove('animat-15')
    // }
    
    if (scrollY > homeMainHeight + instantlyConnectHeight + 300) {
        home.classList.add('animat-16')
    } else {
        home.classList.remove('animat-16')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + 600) {
        home.classList.add('animat-17')
    } else {
        home.classList.remove('animat-17')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + 900) {
        home.classList.add('animat-18')
    } else {
        home.classList.remove('animat-18')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight) {
        home.classList.add('animat-19')
    } else {
        home.classList.remove('animat-19')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 300) {
        home.classList.add('animat-20')
    } else {
        home.classList.remove('animat-20')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 600) {
        home.classList.add('animat-21')
    } else {
        home.classList.remove('animat-21')
    }
    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 900) {
        home.classList.add('animat-22')
    } else {
        home.classList.remove('animat-22')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 1200) {
        home.classList.add('animat-23')
    } else {
        home.classList.remove('animat-23')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 1500) {
        home.classList.add('animat-24')
    } else {
        home.classList.remove('animat-24')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 1800) {
        home.classList.add('animat-25')
    } else {
        home.classList.remove('animat-25')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 2100) {
        home.classList.add('animat-26')
    } else {
        home.classList.remove('animat-26')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 2400) {
        home.classList.add('animat-27')
    } else {
        home.classList.remove('animat-27')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 2700) {
        home.classList.add('animat-28')
    } else {
        home.classList.remove('animat-28')
    }

    if (scrollY > homeMainHeight + instantlyConnectHeight + turnAppHeight + 3000) {
        home.classList.add('animat-29')
    } else {
        home.classList.remove('animat-29')
    }

}

















function popUpAnimations() {
    
        scrollPopups.forEach(popup => { 
            let triggerPopUpTop = popup.getBoundingClientRect().top - window.innerHeight /1.1
            if (triggerPopUpTop < 0) {
                popup.classList.add('animat-popup')
            }
        })

}

hamburger.addEventListener('click', hamburgerClicked)

function hamburgerClicked() {
    document.body.classList.toggle('hamburger-Clicked')
}

if (careerPage) {
    joinUsBtns.forEach(btn => btn.addEventListener('click', () => {
        joinUsModal.classList.add('exist')
    }))
    
    cloaseJoinUsModalBtn.addEventListener('click', () => {
        joinUsModal.classList.remove('exist')
    })
    joinUsModalSubmitBtn.addEventListener('click', () => {
        joinUsModal.classList.remove('exist')
        calendlyModal.classList.add('exist')
        document.querySelector('.calendly-inline-widget').scrollTo(0, 900)
    })
    joinUsModalForm.addEventListener("submit",function(e)
    {e.preventDefault();
        
    })
    
    cloasecalendlyModalBtn.addEventListener('click', () => {
        calendlyModal.classList.remove('exist')
    })
}



