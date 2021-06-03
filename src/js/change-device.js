document.addEventListener('DOMContentLoaded', function () {
    const showDeviceDesktop = function () {
        const deviceWrapperDesktop = document.querySelector('#selectionDesktop');

        const tabsMini = deviceWrapperDesktop.querySelectorAll('button[data-for="deviceMini"]');
        const tabsNorma = deviceWrapperDesktop.querySelectorAll('button[data-for="deviceNorma"]');
        const tabsProm = deviceWrapperDesktop.querySelectorAll('button[data-for="deviceProm"]');
        const contentDevice = deviceWrapperDesktop.querySelectorAll('.selection__wrapper');

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
    showDeviceDesktop();


    const showDeviceMobile = function () {
        const deviceWrapperMobile = document.querySelector('#selectionMobile');

        const tabsMini = deviceWrapperMobile.querySelectorAll('button[data-for="deviceMini"]');
        const tabsNorma = deviceWrapperMobile.querySelectorAll('button[data-for="deviceNorma"]');
        const tabsProm = deviceWrapperMobile.querySelectorAll('button[data-for="deviceProm"]');
        const contentDevice = deviceWrapperMobile.querySelectorAll('.selection__wrapper');

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
    showDeviceMobile();
})