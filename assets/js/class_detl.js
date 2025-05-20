
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

        $('#header_title').html('幼儿园 '+level_pos+'年级 | Kindergarten '+level_pos);

        $('.info-1').show();
        $('.info-1').find('.nav-link').addClass('active show');
        $('#tab-1').addClass('active show');
    }

    if(level_pre == 'P'){

        $('#header_title').html('小学 '+level_pos+'年级 | Primary '+level_pos);

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

        $('#header_title').html('中学 '+level_pos+'年级 | Secondary '+level_pos);

        $('.info-6').show();
        $('.info-6').find('.nav-link').addClass('active show');
        $('#tab-6').addClass('active show');
    }


    $('.info-t').show();
    getTimeTable(level)
}


function getTimeTable(level){
    var timeTable = '';
    outlet_arr.forEach((outlet, key) => {
        schedule = [];
        timeTable += '<h3>'+outlet[0].toUpperCase()+'</h3>';
        switch(outlet[0]){
            case 'Khatib':
                switch(level){
                    case 'K1':
                    break;
                    case 'K2':
                        schedule.push(['Wednesday （星期三）: 7.30PM - 8.30PM']);                        
                    break;
                    case 'P1':
                        schedule.push(['Saturday （星期六）: 9.00AM - 11.00AM']);
                    break;
                    case 'P2':
                        schedule.push(['Friday （星期五）: 4.00PM - 6.30PM']);
                        schedule.push(['Saturday （星期六）: 4.30PM - 7.00PM']);
                    break;
                    case 'P3':
                        schedule.push(['Saturday （星期六）: 11.30AM - 2.00PM']);
                    break;
                    case 'P4':
                        schedule.push(['Wednesday （星期三）: 3.00PM - 5.30PM']);
                        schedule.push(['Friday （星期五）: 6.30PM - 9.00PM']);
                    break;
                    case 'P5':
                        schedule.push(['Wednesday （星期三）: 6.00PM - 9.00PM']);
                        schedule.push(['Friday （星期五）: 4.00PM - 7.00PM']);
                    break;
                    case 'P6':
                        schedule.push(['Wednesday （星期三）: 3.00PM - 6.00PM']);
                        schedule.push(['Sunday （星期日）: 9.00AM - 12.00PM']);
                    break;
                    case 'S1':
                        schedule.push(['Sunday （星期日）: 9.00AM - 11.30AM']);
                    break;
                    case 'S2':
                        schedule.push(['Saturday （星期六）: 11.30AM - 2.00PM']);
                        schedule.push(['Saturday （星期六）: 2.00PM - 4.00PM']);
                    break;
                    case 'S3':
                        schedule.push(['Saturday （星期六）: 9.00AM - 11.30AM']);
                    break;
                    case 'S4':
                    break;
                }
            break;
            case 'Bukit Timah Shopping Centre':
                switch(level){
                    case 'K1':
                        schedule.push(['Saturday （星期六）: 10.30AM - 11.30AM']);
                    break;
                    case 'K2':
                        schedule.push(['Thursday （星期四）: 6.00PM - 7.30PM']);                        
                    break;
                    case 'P1':
                        schedule.push(['Wednesday （星期三）: 3.00PM - 5.00PM']);
                    break;
                    case 'P2':
                        schedule.push(['Saturday （星期六）: 2.00PM - 4.00PM']);
                    break;
                    case 'P3':
                        schedule.push(['Tuesday （星期二）: 3.30PM - 6.00PM']);
                        schedule.push(['Thursday （星期四）: 3.00PM - 5.30PM']); 
                        schedule.push(['Saturday（星期六）: 2.00PM - 4.00PM']);
                    break;
                    case 'P4':
                        schedule.push(['Saturday （星期六）: 11.30AM -1.30PM']);
                    break;
                    case 'P5':
                        schedule.push(['Friday （星期五）: 3.00PM - 5.30PM']);
                        schedule.push(['Saturday（星期六）: 9.00AM - 11.30AM']);
                    break;
                    case 'P6':
                        schedule.push(['Thursday （星期四）: 6.00PM - 9.00PM']);
                        schedule.push(['Saturday （星期六）: 11.30AM - 2.00PM']);
                        schedule.push(['Sunday （星期日）: 9.00AM - 11.30AM']);
                    break;
                    case 'S1':
                        schedule.push(['Friday （星期五）:6.30PM - 9.00PM']);
                    break;
                    case 'S2':
                    break;
                    case 'S3':
                        schedule.push(['Sunday （星期日）: 4.30PM - 7.00PM']);
                    break;
                    case 'S4':
                    break;
                }
            break;
            case 'NeWest Mall<br/>Formerly Hong Leong Garden':
                switch(level){
                    case 'K1':
                    break;
                    case 'K2':
                    break;
                    case 'P1':
                    break;
                    case 'P2':
                    break;
                    case 'P3':
                    break;
                    case 'P4':
                        schedule.push(['Friday （星期五）: 6.00PM -8.30PM']);
                    break;
                    case 'P5':
                        schedule.push(['Friday （星期五）: 3.00PM - 6.00PM']);
                    break;
                    case 'P6':
                    break;
                    case 'S1':
                        schedule.push(['Friday （星期五）:3.30PM - 6.00PM']);
                    break;
                    case 'S2':
                    break;
                    case 'S3':
                        schedule.push(['Sunday （星期日）: 1.30PM - 3.30PM']);
                    break;
                    case 'S4':
                    break;
                }
            break;
        }

        timeTable += generateTimeTable(schedule);

        $('.lesson_schedule').html(timeTable);
    });
}


function generateTimeTable(schedule){
    var timeSlot = '';

    schedule.forEach((slot, key) => {
        timeSlot += '<p class="fst-italic">'+slot[0]+'</p>';
    });

    return timeSlot;
}