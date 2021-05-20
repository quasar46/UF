document.addEventListener('DOMContentLoaded', function () {
    let showDevice = function () {
        let deviceWrapper = document.querySelector('.selection');
        let tabsMini = deviceWrapper.querySelectorAll('button[data-for="deviceMini"]');
        let tabsNorma = deviceWrapper.querySelectorAll('button[data-for="deviceNorma"]');
        let tabsProm = deviceWrapper.querySelectorAll('button[data-for="deviceProm"]');
        let contentDevice = deviceWrapper.querySelectorAll('.selection__wrapper');

        tabsMini.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[0].classList.add('active');
            }
        })
        tabsNorma.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[1].classList.add('active');
            }
        })
        tabsProm.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[2].classList.add('active');
            }
        })
    }
    showDevice();
})
