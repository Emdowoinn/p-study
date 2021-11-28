jQuery(function () {
    jQuery('#submit').on('click', function () {
        jQuery.ajax({
            url: 'request.php',
            type: 'POST',
            data: {
                'username': jQuery('#username').val(),
                'password': jQuery('#password').val()
            }
        })
            .done(function (data) {
                jQuery('.result').html(data)
                console.log(data)
                console.log(jQuery('#username').val())

            })
            .fail(function (data) {
                jQuery('.result').html(data)
                console.log(data)
                console.log(jQuery('#username').val())
            })
    })
})