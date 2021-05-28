$(document).ready(function () {
    const coefficient = [1, 2, 3, 4, 5];
    const inputCoefficient = document.querySelector('#coefficient');
    const lengthOptions = $('#type-water option').length;

    inputCoefficient.value = coefficient[0];

    $('#type-water').change(function () {
        for (let i = 0; i <= lengthOptions; i++) {
            if ($('#type-water').val() == i) {
                inputCoefficient.value = coefficient[i];
            }
        }
    })
})