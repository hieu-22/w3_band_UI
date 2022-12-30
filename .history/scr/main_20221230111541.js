window.addEventListener('DOMContentLoaded', () => {
    banner.classList.add('banner-picture1')
})
const banner = document.querySelector('.banner')
let currentBanner = 'banner1'

function changeBanner() {
    if(currentBanner == 'banner1') {
        banner.classList[banner.classList.length - 1].remove()
        banner.classList.add('banner-picture2')
        currentBanner = 'banner2'
    } else if(currentBanner == 'banner2') {
        banner.classList[banner.classList.length - 1].remove()
        banner.classList.add('banner-picture3')
        currentBanner = 'banner3'
    } else {
        banner.classList[banner.classList.length - 1].remove()
        banner.classList.add('banner-picture1')
        currentBanner = 'banner1'
    }
}

setInterval(changeBanner(), 1000)