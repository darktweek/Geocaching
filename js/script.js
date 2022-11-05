

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":960},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-second","displayName":"Second","link":{"linkType":"LinkTypePage","href":"#!page-second"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-third","displayName":"Third","link":{"linkType":"LinkTypePage","href":"#!page-third"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-four","displayName":"Four","link":{"linkType":"LinkTypePage","href":"#!page-four"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-final","displayName":"Final","link":{"linkType":"LinkTypePage","href":"#!page-final"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})