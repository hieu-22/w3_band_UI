// change banner starts
const banner = document.querySelector('.banner')
let currentBanner = 'banner1'

function changeBanner() {
    if(currentBanner == 'banner1') {
        banner.classList.remove('banner-picture1')
        banner.classList.add('banner-picture2')
        banner.innerHTML = '<div class="banner__greetings"><h2 class="banner__greetings-place">Tanjiro & Nezuko</h2><p class="banner__greetings-script">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>'
        currentBanner = 'banner2'
    } else if(currentBanner == 'banner2') {
        banner.classList.remove('banner-picture2')
        banner.classList.add('banner-picture3')
        banner.innerHTML = '<div class="banner__greetings"><h2 class="banner__greetings-place">Ram & Rem</h2><p class="banner__greetings-script">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>'
        currentBanner = 'banner3'
    } else {
        banner.classList.remove('banner-picture3')
        banner.innerHTML = '<div class="banner__greetings"><h2 class="banner__greetings-place">Ichigo & ZeroTwo</h2><p class="banner__greetings-script">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>'
        currentBanner = 'banner1'
    }
}

setInterval(changeBanner, 1500)
// change banner ends

// tour status
const soldLabelButton = document.querySelectorAll('.soldout-btn')
const soldNotification = document.querySelectorAll('.count-circle')
for(let i = 0; i < soldLabelButton.length; i++) {
    let isSoldOut = Boolean(soldLabelButton[i].dataset.isSoldOut)
    if(isSoldOut) {
        soldLabelButton[i].classList.add('show-soldout-btn')
        soldNotification[i].classList.remove('show-count-circle')
    } else {
        soldLabelButton[i].classList.remove('show-soldout-btn')
        soldNotification[i].classList.add('show-count-circle')
    }
}

// tour status - ends