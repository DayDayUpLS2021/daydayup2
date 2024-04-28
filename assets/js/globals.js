
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;
    let app_name = "天天向上语文学校\nDayDayUp Language School";
    var outlet_arr = [
        ['Khatib', '846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846 <br/><br/>郑娟老师👩‍🏫 华文热线咨询<br/><strong>Phone:</strong> 91669059 （每日）9am-9pm<br/><br/><strong>Tel:</strong> 6530 3063<br/><strong>WhatsApp:</strong> +65 8151 5668<br/><strong>Email:</strong> daydayupls21@gmail.com','assets/attachment/daydayup1.jpg']
    ];

    var timestamp = new Date().getTime();
    var cssUrl = "assets/css/style.css?v=" + timestamp;
    document.write('<link rel="stylesheet" href="' + cssUrl + '">');


    let page = 'Home';

    // $('.app_reviews').hide();
    // $('.app_reviews_chevron').hide();

    $('.app_celebrations_control').hide();

    if (app_url.includes('about.html')) {
        page = 'About';
    }else if (app_url.includes('timetable.html')) {
        page = 'Timetable';
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
        load_parent_words(5);
    } else if (app_url.includes('student-works.html')) {
        page = 'Student Works';
        load_student_work(12, 4);
    } else if (app_url.includes('contact.html')) {
        page = 'Contact';
    } else if (app_url.includes('achievements.html')) {
        page = 'Achievements';
        load_achievements(11);
    } else if (app_url.includes('celebrations.html')) {
        page = 'Gathering';
        load_celebrations(42);
    }

    const app_title = page + ' - ' + app_name;
    document.title = app_title;
    $('.app_name').text(app_name);

    //header tab title
    $('.app_home').text('Home');
    $('.app_about').text('About');
    $('.app_timetable').text('Timetable');
    $('.app_programmes').text('Programmes');
    $('.app_class').text('Classes');
    $('.app_class_holiday').text('Holiday Classes');
    $('.app_teacher').text('Teachers');
    $('.app_reviews').text('Reviews');
    $('.app_student_work').text('Student Works');
    $('.app_parent_word').text('Parents\' Words');
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


function load_student_work(max_photo = 10, max_photo_ver = 10) {

    for(i=max_photo; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xx'+i+'.jpg" alt="..." width="640" height="360"></div></div></div>');
    }

    for(i=max_photo_ver; i >= 1; i--){
        $('.student-works').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/studies/xxx'+i+'.jpg" alt="..." width="640" height="1100"></div></div></div>');
    }
}


function load_achievements(max_photo = 10) {

    for(i=max_photo; i >= 1; i--){
        $('.achievements').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/achievements/cj'+i+'.jpg" alt="..." width="640" height="850"></div></div></div>');
    }
}



function load_parent_words(max_photo = 10) {

    for(i=max_photo; i >= 1; i--){
        $('.parent-words').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/parents/jz'+i+'.jpg" alt="..." width="640" height="1370"></div></div></div>');
    }
}


function load_celebrations(max_photo = 10) {

    for(i=max_photo; i >= 1; i--){
        $('.celebrations').append('<div class="col-md-6 d-flex align-items-stretch"><div class="card"><div class="card-img"><img src="assets/img/celebrations/jq'+i+'.jpg" alt="..." width="640" height="360"></div></div></div>');
    }
}

function load_max_ppl_msg(){
    
    $('.max-ppl-msg').html('Max 9 Students/timeslot<br/>每堂至多9人');
    
}