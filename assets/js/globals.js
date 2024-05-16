
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;

    var outlet_arr = [
        ['Khatib', '846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846 <br/><br/>郑娟老师👩‍🏫 华文热线咨询<br/><strong>Phone:</strong> 91669059 （每日）9am-9pm<br/><br/><strong>Tel:</strong> 6530 3063<br/><strong>WhatsApp:</strong> +65 8151 5668<br/><strong>Email:</strong> daydayupls21@gmail.com','assets/attachment/daydayup1.jpg']
    ];

    var timestamp = new Date().getTime();
    var cssUrl = "assets/css/style.css?v=" + timestamp;
    var jsUrl2 = "assets/js/class_detl.js?v=" + timestamp;
    var jsUrl3 = "assets/js/holiday_class_detl.js?v=" + timestamp;
    document.write('<link rel="stylesheet" href="' + cssUrl + '">');
    document.write('<script src="' + jsUrl2 + '"></script>');
    document.write('<script src="' + jsUrl3 + '"></script>');


    let page = 'Home';

    if (app_url.includes('about.html')) {
        page = 'About';
    }else if (app_url.includes('timetable.html')) {
        page = 'Calendar';
    } else if (app_url.includes('classes.html')) {
        page = 'Classes';
        load_max_ppl_msg();
    } else if (app_url.includes('class-details.html')) {
        page = 'Class Details';
    } else if (app_url.includes('classes-holiday.html')) {
        page = 'Holiday Classes';
    } else if (app_url.includes('class-holiday-details.html')) {
        page = 'Holiday Class Details';
    } else if (app_url.includes('teachers.html')) {
        page = 'Teachers';
    } else if (app_url.includes('parent-word.html')) {
        page = 'Parents & Students Words';
        load_parent_words(1, 16); //xsjz | xsjzv
    } else if (app_url.includes('student-works.html')) {
        page = 'Student Works';
        load_student_work(12, 4);//xx | xxv
    } else if (app_url.includes('contact.html')) {
        page = 'Contact';
    } else if (app_url.includes('achievements.html')) {
        page = 'Achievements';
        load_achievements(14); //cj
    } else if (app_url.includes('gathering.html')) {
        page = 'Gathering';
        load_gathering(1, 15, 12, 33);//jhsp | jh | jhs | jhv
    }

    updateAppName(page);

    $(window).resize(function() {
        updateAppName(page);  // Update on window resize
    });

    //header tab title
    $('.app_home').text('Home');
    $('.app_about').text('About');
    $('.app_timetable').text('Calendar');
    $('.app_programmes').text('Programmes');
    $('.app_class').text('Classes');
    $('.app_class_holiday').text('Holiday Classes');
    $('.app_teacher').text('Teachers');
    $('.app_reviews').text('Reviews');
    $('.app_student_work').text('Student Works');
    $('.app_parent_word').text('Parents & Students Words');
    $('.app_contact').text('Contact');
    $('.get-started-btn').text('Get Started');


    var copyright = 'All images on this website are copyrighted by their respective owners. We respect the copyrights of others and do not knowingly infringe on them. If you believe that any of the images on this website infringes on your copyright, please contact us and we will remove it immediately.';

    
    if(app_url.includes('contact.html')){
        var html = '';
        outlet_arr.forEach((outlet, key) => {
            html += '<div class="footer-top"><div class="container"><div class="row"><div class="col-lg-4 footer-contact"><h3 class="app_name_'+key+'">'+app_name+' ('+outlet[0]+')'+'</h3></div><div class="col-lg-4 footer-contact"><p class="app_address_'+key+'">'+outlet[1]+'</p></div><div class="col-lg-4 footer-contact"><img src="'+outlet[2]+'" class="img-fluid app_img_'+key+'"></div></div></div></div>';
        });
        html += '<div class="footer-top"><div class="container"><div class="copyright-msg">'+copyright+'</div></div></div>';
        $('#footer').html(html);
    }else{
        $('.app_address').html(outlet_arr[0][1]);
    }
    

    $('.copyright-msg').html(copyright);

    
}


function load_student_work(max_photo_xx = 10, max_photo_xxv = 10) {

    for(i=max_photo_xx; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xx'+i+'.jpg" alt="..." width="640" height="360"></div></div></div>');
    }

    for(i=max_photo_xxv; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xxv'+i+'.jpg" alt="..." width="640" height="1100"></div></div></div>');
    }
}


function load_achievements(max_photo = 10) {

    for(i=max_photo; i >= 1; i--){
        $('.achievements').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/achievements/cj'+i+'.jpg" alt="..." width="640" height="850"></div></div></div>');
    }
}


//students & parents
function load_parent_words(max_photo_xsjz = 10, max_photo_xsjzv = 10) {

    for(i=max_photo_xsjzv; i >= 1; i--){
        $('.parent-words').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/parents/xsjzv'+i+'.jpg" alt="..." width="640" height="1370"></div></div></div>');
    }


    for(i=max_photo_xsjz; i >= 1; i--){
        $('.parent-words').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/parents/xsjz'+i+'.jpg" alt="..." width="640" height="360"></div></div></div>');
    }
}


function load_gathering(max_jhsp_video = 10, max_jh_photo = 10, max_jhs_photo = 10, max_jhv_photo = 10) {

    for(i=max_jhsp_video; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-12 d-flex align-items-stretch video-container"><div class="card"><div class="card-img"><video id="jh_video' + i + '" onplay="updateButtonIcon(\'jh_video'+i+'\', \'pause\')" onpause="updateButtonIcon(\'jh_video'+i+'\', \'play\')" onended="updateButtonIcon(\'jh_video'+i+'\', \'play\')"><source src="assets/img/gathering/jhsp/jhsp' + i + '.mp4" type="video/mp4" preload="metadata"></video><div class="controls"><button class="btn btn-success bi bi-play-fill" id="btn_jh_video'+i+'" onclick="togglePlay(\'jh_video' + i + '\')"></button><div class="progress-bar" onclick="setVideoProgress(event, \'progress_jh_video'+i+'\')"><div class="progress" id="progress_jh_video'+i+'"></div></div></div></div></div>');
    }

    for(i=max_jh_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jh/jh'+i+'.jpg" alt="..." width="640" height="360"></div></div></div>');
    }

    for(i=max_jhs_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jhs/jhs'+i+'.jpg" alt="..." width="640" height="850"></div></div></div>');
    }

    for(i=max_jhv_photo; i >= 1; i--){
        $('.gatherings').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/gathering/jhv/jhv'+i+'.jpg" alt="..." width="640" height="1370"></div></div></div>');
    }

    // Attach event listeners after elements have been added
    $('video').each(function() {
        this.onplay = () => updateButtonIcon(this.id, 'pause');
        this.onpause = () => updateButtonIcon(this.id, 'play');
        this.onended = () => updateButtonIcon(this.id, 'play');
        this.ontimeupdate = () => updateProgress(this.id);
    });

    // Prevent right-click on all video elements
    $('video').on('contextmenu', function(e) {
        e.preventDefault();
    });
}

function load_max_ppl_msg(){
    
    $('.max-ppl-msg').html('Max 9 Students/timeslot<br/>最大班额9人');

}

function updateAppName(page) {

    const window_width = $(window).width();
    let app_name = "天天向上语文学校\nDayDayUp Language School";
    var app_name_size = 25;
    var index_title_size = 48;
    var index_content_size = 24;

    // if (window_width < 1200 && window_width > 990) {  // Assumes 768px is your breakpoint for mobile devices
    //     // app_name = "天天向上语文学校";  // Shorter name for mobile
    //     app_name_size = 20;
    //     index_title_size = 20;
    // } else 
    if (window_width < 768) {  // Assumes 768px is your breakpoint for mobile devices
        // app_name = "天天向上语文学校";  // Shorter name for mobile
        app_name_size = 20;
        index_title_size = 20;
        index_content_size = 18;
    } 
    
    $('.app_name').text(app_name);  // Update all elements with class 'app_name'
    $('.app_name').css('font-size', app_name_size + 'px');  // Update font size
    $('.index_title').css('font-size', app_name_size + 'px');  // Update font size
    $('.index_content').css('font-size', app_name_size + 'px');  // Update font size
    document.title = page + ' - ' + app_name;  // Update the page title if needed
}



function togglePlay(videoId) {
    const video = document.getElementById(videoId);
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}


function updateButtonIcon(videoId, state) {
    const buttonIcon = document.querySelector('#btn_'+videoId);
    if (state === 'play') {
        buttonIcon.className = 'btn btn-success bi bi-play-fill';
    } else {
        buttonIcon.className = 'btn btn-success bi bi-pause-fill';
    }
}


function updateProgress(videoId) {
    const video = document.getElementById(videoId);
    const progress = document.getElementById('progress_' + videoId);
    const value = (video.currentTime / video.duration) * 100;
    progress.style.width = `${value}%`;
}

function setVideoProgress(e, videoId) {
    const video = document.getElementById(videoId);
    const progressBar = e.currentTarget;
    const clickPosition = (e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
    video.currentTime = clickPosition * video.duration;
}