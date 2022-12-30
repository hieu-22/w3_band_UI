window.addEventListener('DOMContentLoaded', () => {
    banner.classList.add('banner-picture1')
})
const banner = document.querySelector('.banner')
let currentBanner = 'banner1'

function changeBanner() {
    if(currentBanner == 'banner1') {
        banner.classList.remove('banner-picture1')
        banner.classList.add('banner-picture2')
        currentBanner = 'banner2'
    } else if(currentBanner == 'banner2') {
        banner.classList.remove('banner-picture2')
        banner.classList.add('banner-picture3')
        currentBanner = 'banner3'
    } else {
        banner.classList.remove('banner-picture3')
        banner.classList.add('banner-picture1')
        currentBanner = 'banner1'
    }
}

setInterval(changeBanner, 1000)