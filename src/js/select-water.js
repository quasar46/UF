$(document).ready(function () {
    const checkboxes = document.querySelectorAll('.check-water');
    const blocksInput = document.querySelectorAll('.change__inputs');
    const coefficient1 = [1, 2, 3, 4, 5];
    const coefficient2 = [6, 7, 8, 9, 10];
    const inputCoefficient1 = document.querySelector('.coefficient1');
    const inputCoefficient2 = document.querySelector('.coefficient2');
    const optionType1 = document.querySelectorAll('.options-type-1 option');
    const optionType2 = document.querySelectorAll('.options-type-2 option');
    const options = document.querySelectorAll('.type-water option');
    const lengthOptions = $('.type-water option').length;
    const typeWaters = document.querySelectorAll('.type-water');

    checkboxes[0].checked = true;
    inputCoefficient1.value = coefficient1[0];
    inputCoefficient2.value = coefficient2[0];

    checkboxes.forEach((check, i) => {
        check.addEventListener('change', () => {
            inputCoefficient1.value = coefficient1[0];
            inputCoefficient2.value = coefficient2[0];
            optionType1[0].selected = true;
            optionType2[0].selected = true;
            blocksInput.forEach(block => {
                block.classList.remove('active');
            })
            blocksInput[i].classList.add('active');
        })
    })

    typeWaters.forEach(item => {
        item.addEventListener('change', () => {
            for (let i = 0; i <= lengthOptions; i++) {
                if ($(item).val() == i) {
                    inputCoefficient1.value = coefficient1[i];
                }
            }
        })
    })
    typeWaters.forEach(item => {
        item.addEventListener('change', () => {
            for (let i = 0; i <= lengthOptions; i++) {
                if ($(item).val() == i) {
                    inputCoefficient2.value = coefficient2[i];
                }
            }
        })
    })


})