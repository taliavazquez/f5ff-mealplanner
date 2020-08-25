document.addEventListener('DOMContentLoaded', function () {
    var elems = $('[data-target="dropdown1"]')[0];
    var instances = M.Dropdown.init(elems);
});

$(document).ready(function () {

    $('#nameInput').val('');
    $('#emailInput').val('');
    $('#messageInput').val('')
    $('#satisfactionInput').val('')

    let submitOne = false;
    let mood = null;

    $('.mood').click(function (event) {
        event.stopPropagation();

        // Hey Zach and Talia!! This sets sets whatever button is clicked to have a class of 'selected' so please use that for indicating which button is selected through CSS thank u love u so much
        $('.mood').each(function(index) {
            console.log($($('.mood')[index]))
            $($('.mood')[index]).removeClass('selected')
        })
        $(this).addClass('selected')
        mood = $(this).data('mood');
        console.log(mood);
        $('#satisfactionInput').val(mood)
    })

    $('#popup').dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        draggable: false,
        buttons: [
            {
                text: 'Submit your feedback',
                type: 'submit',
                'data-component': 'button',
                'data-content': '',
                id: 'finalSubmitButton',
                class: 'btn green white-text form-submit-button submit-button jf-form-buttons jsTest-submitField',
                click: function () {
                    submitOne = true;
                    $('form').submit();
                }
            }
        ]
    })

    $('form').submit(function (event) {

        if (submitOne === false) {
            event.preventDefault()
            let name = $('#nameInput').val().trim()
            let email = $('#emailInput').val().trim()
            let message = $('#messageInput').val().trim()
            $('#nameSpan').text(name)
            $('#emailSpan').text(email)
            $('#messageSpan').text(message)
            $('#popup').dialog('open')
        }

    })

});