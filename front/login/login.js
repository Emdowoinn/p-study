jQuery(function () {
    jQuery('#submit').on('click', function (e) {
        e.preventDefault();
        jQuery.ajax({
            url: 'request.php',
            type: 'POST',
            data: {
                'username': jQuery('#username-22e3').val(),
                'password': jQuery('#password-22e3').val()
            }
        })
            .done(function (data) {
                jQuery('.result').html(data)
                console.log(data)
                console.log(jQuery('#username-22e3').val())

            })
            .fail(function (data) {
                jQuery('.result').html(data)
                console.log(data)
                console.log(jQuery('#username-22e3').val())
            })
    })
})