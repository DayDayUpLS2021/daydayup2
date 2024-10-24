
(function() {




})();

function load_student_work(max_photo_xx = 10, max_photo_xxv = 10) {

    for(i=max_photo_xx; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xx'+i+'.jpg" alt="..." width="640" height="360" loading="lazy"></div></div></div>');
    }

    for(i=max_photo_xxv; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xxv'+i+'.jpg" alt="..." width="640" height="1100" loading="lazy"></div></div></div>');
    }
}

function load_special_achievements(max_hscj = 10, max_vscj = 10){
    var sAchievement = '<div class="text-center"><h3><i class="bi bi-journal-text"></i> 文章发表</h3></div>';
    sAchievement += '<div class="col-md-6 d-flex "><h4 style="width:100%;" class="text-center"><a href="https://www.zaobao.com.sg/forum/talk/story20240821-4514855" target="_blank"><i class="bi bi-hand-index-thumb"></i> S3H温凯畯（华中）《联合早报》<span style="font-size:8pt;">点击查看</span></a></h4></div>';

    $('.special_achievements').html(sAchievement);


    $('.special_achievement_img').append('<div class="text-center"><h3><i class="bi bi-award"></i> 特别成就</h3></div>');
    for(i=max_hscj; i >= 1; i--){
        $('.special_achievement_img').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/achievements/hscj'+i+'.jpg" alt="..." width="640" height="1370" loading="lazy"></div></div></div>');
    }


    for(i=max_vscj; i >= 1; i--){
        $('.special_achievement_img').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/achievements/vscj'+i+'.jpg" alt="..." width="640" height="360" loading="lazy"></div></div></div>');
    }
}

function load_achievements(max_photo = 10) {

    $('.achievements').html('');
    $('.achievements').append('<div class="text-center"><h3><i class="bi bi-clipboard2-check"></i> 成绩成就</h3></div>');
    for(i=max_photo; i >= 1; i--){
        $('.achievements').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/achievements/cj'+i+'.jpg" alt="..." width="640" height="850" loading="lazy"></div></div></div>');
    }
}


function load_rewards(yr_arr = {'2024': [10]}, max_photo = 10) {

    $('.rewards').html('');

    // Iterate over the array of years and their max_photo limits
    for (let year in yr_arr) {
        if (yr_arr.hasOwnProperty(year)) {
            let max_photo = yr_arr[year];

            $('.rewards').append(`<div class="text-center"><h3><i class="bi bi-award"></i>${year} 年突出学习奖获得者！</h3></div></div>`);

            for (i=max_photo[0]; i >= 1; i--) {
                $('.rewards').append(`<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/rewards/${year}/${year}_xxj_${i}.jpg" alt="..." width="640" height="850" loading="lazy"></div></div></div>`);
            }
        }
    }
   
}


//students & parents
function load_parent_words(max_photo_xsjz = 10, max_photo_xsjzv = 10) {

    for(i=max_photo_xsjzv; i >= 1; i--){
        $('.parent-words').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/parents/xsjzv'+i+'.jpg" alt="..." width="640" height="1370" loading="lazy"></div></div></div>');
    }


    for(i=max_photo_xsjz; i >= 1; i--){
        $('.parent-words').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/parents/xsjz'+i+'.jpg" alt="..." width="640" height="360" loading="lazy"></div></div></div>');
    }
}


function load_gathering(max_jhsp_video = 10, max_jh_photo = 10, max_jhs_photo = 10, max_jhv_photo = 10) {

    for(i=max_jhsp_video; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-12 d-flex align-items-stretch video-container"><div class="card"><div class="card-img"><video loading="lazy" id="jh_video' + i + '" onplay="updateButtonIcon(\'jh_video'+i+'\', \'pause\')" onpause="updateButtonIcon(\'jh_video'+i+'\', \'play\')" onended="updateButtonIcon(\'jh_video'+i+'\', \'play\')"><source src="assets/img/gathering/jhsp/jhsp' + i + '.mp4" type="video/mp4" preload="metadata"></video><div class="controls"><button class="btn btn-success bi bi-play-fill" id="btn_jh_video'+i+'" onclick="togglePlay(\'jh_video' + i + '\')"></button><div class="progress-bar" onclick="setVideoProgress(event, \'progress_jh_video'+i+'\')"><div class="progress" id="progress_jh_video'+i+'"></div></div></div></div></div>');
    }

    for(i=max_jh_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jh/jh'+i+'.jpg" alt="..." width="640" height="360" loading="lazy"></div></div></div>');
    }

    for(i=max_jhs_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jhs/jhs'+i+'.jpg" alt="..." width="640" height="850" loading="lazy"></div></div></div>');
    }

    for(i=max_jhv_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jhv/jhv'+i+'.jpg" alt="..." width="640" height="1370" loading="lazy"></div></div></div>');
    }

    set_video_control();
}

