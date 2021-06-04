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

    const showPreviewDesktop = function () {
        const wrapperMiniDesktop = document.querySelector('#deviceMiniDesktop');
        const wrapperNormaDesktop = document.querySelector('#deviceNormaDesktop');
        const wrapperPromDesktop = document.querySelector('#devicePromDesktop');

        const tabsPreviewMiniDesktop = wrapperMiniDesktop.querySelectorAll('.device__review-tab ul li');
        const previewsMiniDesktop = wrapperMiniDesktop.querySelectorAll('.tabs__content');
        const tabsPreviewNormaDesktop = wrapperNormaDesktop.querySelectorAll('.device__review-tab ul li');
        const previewsNormaDesktop = wrapperNormaDesktop.querySelectorAll('.tabs__content');
        const tabsPreviewPromDesktop = wrapperPromDesktop.querySelectorAll('.device__review-tab ul li');
        const previewsPromDesktop = wrapperPromDesktop.querySelectorAll('.tabs__content');

        tabsPreviewMiniDesktop.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewMiniDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsMiniDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                previewsMiniDesktop[i].classList.add('active');
            })
        })
        tabsPreviewNormaDesktop.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewNormaDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsNormaDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                previewsNormaDesktop[i].classList.add('active');
            })
        })
        tabsPreviewPromDesktop.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewPromDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsPromDesktop.forEach(item => {
                    item.classList.remove('active');
                })
                previewsPromDesktop[i].classList.add('active');
            })
        })
    }
    showPreviewDesktop();

    const showPreviewMobile = function () {
        const wrapperMiniMobile = document.querySelector('#deviceMiniMobile');
        const wrapperNormaMobile = document.querySelector('#deviceNormaMobile');
        const wrapperPromMobile = document.querySelector('#devicePromMobile');

        const tabsPreviewMiniMobile = wrapperMiniMobile.querySelectorAll('.device__review-tab ul li');
        const previewsMiniMobile = wrapperMiniMobile.querySelectorAll('.tabs__content');
        const tabsPreviewNormaMobile = wrapperNormaMobile.querySelectorAll('.device__review-tab ul li');
        const previewsNormaMobile = wrapperNormaMobile.querySelectorAll('.tabs__content');
        const tabsPreviewPromMobile = wrapperPromMobile.querySelectorAll('.device__review-tab ul li');
        const previewsPromMobile = wrapperPromMobile.querySelectorAll('.tabs__content');

        tabsPreviewMiniMobile.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewMiniMobile.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsMiniMobile.forEach(item => {
                    item.classList.remove('active');
                })
                previewsMiniMobile[i].classList.add('active');
            })
        })
        tabsPreviewNormaMobile.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewNormaMobile.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsNormaMobile.forEach(item => {
                    item.classList.remove('active');
                })
                previewsNormaMobile[i].classList.add('active');
            })
        })
        tabsPreviewPromMobile.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabsPreviewPromMobile.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');
                previewsPromMobile.forEach(item => {
                    item.classList.remove('active');
                })
                previewsPromMobile[i].classList.add('active');
            })
        })
    }
    showPreviewMobile();
})