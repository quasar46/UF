$(document).ready(function () {
    let lengthOptions = $('#type-water option').length;
    $('#type-water').change(function () {
        for (let i = 0; i <= lengthOptions; i++) {
            if ($('#type-water').val() == i) {
                console.log('Значение' + i);
            }
        }
    })
})