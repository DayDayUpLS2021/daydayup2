
(function() {

    get_detl();

})();



function get_detl() {
    const app_url = new URLSearchParams(window.location.search);
    const level = app_url.get('level');

    var level_pre = '';
    var level_pos = '';
    if(level != null && level != undefined){
        level_pre = level[0];
        level_pos = level[1];
    }

    $('.nav-item').hide();

    if(level_pre == 'K'){

        $('#header_title').text('Kindergarten '+level_pos);

        $('.info-1').show();
        $('.info-1').find('.nav-link').addClass('active show');
        $('#tab-1').addClass('active show');
    }

    if(level_pre == 'P'){

        $('#header_title').text('Primary '+level_pos);

        $('.info-2, .info-3').show();

        $('.info-2').find('.nav-link').addClass('active show');
        $('#tab-2').addClass('active show');

        if(level_pos >= 2){
            $('.info-4').show();
        }

        if(level_pos >= 3){
            $('.info-5').show();
        }
    }

    if(level_pre == 'S'){

        $('#header_title').text('Secondary '+level_pos);

        $('.info-6').show();
        $('.info-6').find('.nav-link').addClass('active show');
        $('#tab-6').addClass('active show');
    }
    
}
