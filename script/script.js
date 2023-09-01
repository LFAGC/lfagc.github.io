$(document).on('click', '.nav-selector-button', function() {
    $('.nav-selector-button').fadeOut(100, function() {
        $('.nav-selector-close').fadeIn(100)
        $('.nav-button').css({'display':'block'})
        $('.nav-selector-title ').fadeIn(100)
        $('.current-page').css({'display':'none'})
    })

    $('.nav-container').animate({
        'height': '32%',
    }, 100)

    $('.nav-container').css({
        'background-color': 'rgba(0, 0, 0, 0.483)',
    })
})

$(document).on('click', '.nav-selector-close', function() {
    $('.nav-container').animate({
        'height': '8vh',
    }, 100, function() {
        $('.nav-container').css({
            'background-color': 'rgb(13, 23, 34)',
        })

        $('.nav-selector-button').fadeIn(100)
        $('.nav-selector-close').fadeOut(100)
        $('.nav-selector-title ').fadeOut(100)
        $('.nav-button').css({'display':'none'})
        $('.current-page').css({'display':'block'})
    })
})