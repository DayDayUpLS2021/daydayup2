
(function() {

    const app_url = window.location.href;

    set_page(app_url);

    //if id exist get teachers info
    if($('#teachers_field').length){
        get_teachers();
    }

})();



function set_page(app_url) {

    var outlet_arr = [
        ['Khatib', '846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846','assets/attachment/daydayup5.jpg', 1.418493624867837, 103.83487635665111],
        ['Bukit Timah Shopping Centre', '170 Upper Bukit Timah Rd #B2-18 <br/>Singapore 588179', 'assets/attachment/daydayup5.jpg', 1.34311, 103.77607],
        ['NeWest Mall<br/>Formerly Hong Leing Garden', '1 West Coast Drive #01-02 <br/>Singapore 128020', 'assets/attachment/daydayup5.jpg', 1.31648, 103.75739]
    ];    
    
    loadScripts(app_url);

    get_nav_bar();

    let page = 'Home';
    
    if (app_url.includes('about.html')) {

        page = 'About';
        show_active('app_about');

    }else if (app_url.includes('timetable.html')) {

        page = 'Calendar';
        show_active('app_timetable');

    } else if (app_url.includes('classes.html')) {

        page = 'Classes';
        show_active('app_programmes');
        show_active('app_class');
        load_max_ppl_msg();

    } else if (app_url.includes('class-details.html')) {

        page = 'Class Details';
        show_active('app_programmes');
        show_active('app_class');

    } else if (app_url.includes('classes-holiday.html')) {

        page = 'Holiday Classes';
        show_active('app_programmes');
        show_active('app_class_holiday');

    } else if (app_url.includes('class-holiday-details.html')) {

        page = 'Holiday Class Details';
        show_active('app_programmes');
        show_active('app_class_holiday');

    } else if (app_url.includes('teachers.html')) {

        page = 'Teachers';
        show_active('app_teacher');

    } else if (app_url.includes('parent-word.html')) {

        page = 'Parents & Students Words';
        show_active('app_reviews');
        show_active('app_parent_word');
        load_parent_words(1, 17); //xsjz | xsjzv

    } else if (app_url.includes('student-works.html')) {

        page = 'Student Works';
        show_active('app_reviews');
        show_active('app_student_work');
        load_student_work(12, 4);//xx | xxv

    } else if (app_url.includes('contact.html')) {

        page = 'Contact';
        show_active('app_contact');
        

    } else if (app_url.includes('achievements.html')) {

        page = 'Achievements';
        show_active('app_reviews');
        show_active('app_achievements');
        load_achievements(14); //cj

    } else if (app_url.includes('gathering.html')) {

        page = 'Gathering';
        show_active('app_reviews');
        show_active('app_gathering');
        load_gathering(1, 15, 12, 33);//jhsp | jh | jhs | jhv

    } else if (app_url.includes('meeting.html')) {

        page = 'Meetings';
        show_active('app_meeting');
        load_meeting();

    } else if (app_url.includes('announcements.html')) {

        page = 'Announcements';
        show_active('app_announcements');
        load_announcements();

    }else{
        show_active('app_home');
    }

    let app_name = "天天向上语文学校<br/>DayDayUp Language School";
    let app_name2 = "天天向上语文学校 DayDayUp Language School";
    updateAppName(page, app_name, app_name2);

    $(window).resize(function() {
        updateAppName(page, app_name, app_name2);  // Update on window resize
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


    var contact = '<br/>郑娟老师👩‍🏫 华文热线咨询<br/><strong>Phone:</strong> 91669059 （每日）9am-9pm<br/><br/><strong>Tel:</strong> 6530 3063<br/><strong>WhatsApp:</strong> <a  onclick="window.open(\'https://api.whatsapp.com/send?phone=6581515668\', \'_blank\')">+65 8151 5668</a><br/><strong>Email:</strong> daydayupls21@gmail.com';

    var copyright = 'All images on this website are copyrighted by their respective owners. We respect the copyrights of others and do not knowingly infringe on them. If you believe that any of the images on this website infringes on your copyright, please contact us and we will remove it immediately.';


    $('.contact_list').html(contact);

    if(app_url.includes('contact.html')){

        get_outlets(app_name, outlet_arr, copyright, 'map');

    }else{
        $('.app_address').html(outlet_arr[0][1]+'<br/>'+contact);
    }
    

    $('.copyright-msg').html(copyright);

    
}


function load_max_ppl_msg(){
    
    $('.max-ppl-msg').html('Max 9 Students/timeslot<br/>最大班额9人');

}

function updateAppName(page, app_name, app_name2) {

    const window_width = $(window).width();    
    var app_name_size = 25;
    
    $('.app_name').html(app_name);  // Update all elements with class 'app_name'
    $('.app_name').css('font-size', app_name_size + 'px');  // Update font size
    $('.index_title').css('font-size', app_name_size + 'px');  // Update font size
    $('.index_content').css('font-size', app_name_size + 'px');  // Update font size
    document.title = page + ' - ' + app_name2;  // Update the page title if needed
}


function get_teachers() {

    const teacher_arr = [
        ['郑娟', 'Zheng Juan', 'zhengjuan2.jpg'],
        ['王爽', 'Wang Shuang', 'wangshuang2.jpg'],
        ['郑源元', 'Zheng YuanYuan', 'zhengyuanyuan2.jpg'],
        ['陈宏民', 'Chen HongMin', 'chenhongmin2.jpg'],
        ['郭辉', 'Guo Hui', 'guohui2.jpg'],
        ['卓睿庆', 'Zhuo RuiQing', 'zhuoruiqing2.jpg'],
        ['冯婌清', 'Adeline Pang SooCheng', 'fengshuqing2.jpg'],
        ['李凌飞', 'Li LingFei', 'lilingfei2.jpg'],
    ]

    var teacher_html = '';
    var name_ch = '';
    var name_en = '';
    var photo = '';

    teacher_arr.forEach((teacher, key) => {

        name_ch = teacher[0];
        name_en = teacher[1];
        photo = teacher[2];

        teacher_html += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member">';
        teacher_html += '<img src="assets/img/teachers/'+photo+'" class="img-fluid" alt="">';
        teacher_html += '<div class="member-content"><h4>'+name_ch+'</h4><span>'+name_en+'</span></div></div></div>';
    });
    
    $('#teachers_field').html(teacher_html);
}


function get_outlets(app_name, outlet_arr, copyright, type = 'footer'){


    var html = '';
    var html_logo = '';
    var html_outlet = '';
    var html_footer = '';

    var area = '';
    var address = '';
    var img = 'assets/attachment/daydayup5.jpg';

    html += '<div class="footer-top">';
    html += '<div class="container">';
    html += '<div class="row">';
    html += '<div class="col-lg-6 text-center text-middle">';
    html += '<div class="col-lg-12 footer-contact"><a href="javascript:void(0)" class="app_name_0" style="font-size:1.75rem;" onclick="resetMap()" >'+app_name+' <i class="bi bi-pin-map-fill"></i></a></div>';
    html += '<div class="col-lg-12 footer-contact">';
    html_logo += '<img src="'+img+'" class="img-fluid app_img_0" onclick="resetMap()">';
    html += '</div>';
    html += html_logo;
    html += '</div>';//close col-lg-6
    html += '<div class="col-lg-6 text-center">';

    outlet_arr.forEach((outlet, key) => {

        area = '<a href="javascript:void(0)" onclick="pointToLocation(' + outlet[3] + ', ' + outlet[4] + ')">'+outlet[0].toUpperCase()+' <i class="bi bi-pin-map"></i></a><br/>';
        address = outlet[1];
        img = outlet[2];

        // html += '<div class="footer-top"><div class="container"><div class="row"><div class="col-lg-4 footer-contact"><h3 class="app_name_'+key+'">'+app_name+area+'</h3></div><div class="col-lg-4 footer-contact"><p class="app_address_'+key+'">'+address+'</p></div><div class="col-lg-4 footer-contact"><img src="'+img+'" class="img-fluid app_img_'+key+'"></div></div></div></div>';


        html_outlet += '<div class="col-lg-12 footer-contact">'+area+'<p class="app_address_'+key+'">'+address+'</p></div>';

    });

    html += html_outlet;
    html += '</div>';//close col-lg-6
    html += '</div>';//close row
    html += '</div>';//close container
    html += '</div>';//close footer-top

    html_footer += '<div class="footer-top"><div class="container"><div class="copyright-msg">'+copyright+'</div></div></div>';
    html += html_footer;
    
    if(type == 'footer'){
        $('#footer').html(html);
    }else{

        var logo_text = '<div><a href="javascript:void(0)" class="app_name_0" style="font-size:1.75rem;" onclick="resetMap()" >中心一览 All Outlet <i class="bi bi-pin-map-fill"></i></a></div>';
        html_logo = logo_text + html_logo
        $('#daydayup_logo').html(html_logo);
        $('.app_address').html(html_outlet);
        $('#footer').html(html_footer);
    }

}


function get_nav_bar(){

    var html = '';
    html += '<li><a href="index.html" class="app_home">Home</a></li>';

    html += '<li><a href="about.html" class="app_about">About</a></li>';

    html += '<li><a href="timetable.html" class="app_timetable">Calendar</a></li>';

    // html += '<li><a href="announcements.html" class="app_announcements">Announcements</a></li>';

    html += '<li class="dropdown">';
    html += '<a href="#"><span class="app_programmes">Programmes</span> <i class="bi bi-chevron-down"></i></a>';
    html += '<ul><li><a href="classes.html" class="app_class">Classes</a></li></ul>';
    html += '</li>';

    html += '<li><a class="app_teacher" href="teachers.html">Teachers</a></li>';

    html += '<li class="dropdown"><a href="#"><span class="app_reviews">Reviews</span><i class="bi bi-chevron-down app_reviews_chevron"></i></a>';
    html += '<ul>';
    html += '<li class="app_student_work_control"><a class="app_student_work" href="student-works.html">Student Works</a></li>';
    html += '<li class="app_achievements_control"><a class="app_achievements" href="achievements.html">Achievements</a></li>';
    html += '<li class="app_parent_word_control" ><a class="app_parent_word" href="parent-word.html" >Parents & Students Words</a></li>';
    html += '<li class="app_gathering_control"><a class="app_gathering" href="gathering.html" >Gathering</a></li>';
    html += '</ul></li>';

    // html += '<li><a href="meeting.html" class="app_meeting">Meetings</a></li>';

    html += '<li><a href="contact.html" class="app_contact">Contact</a></li>';
          
    $('#navbar_ul').html(html);
}


function show_active(app_class = 'app_home'){
    $('.'+app_class).addClass('active');
}


function stripQueryParams(url) {
    return url.split('?')[0];
}

function removeScripts(jsUrl) {
    return new Promise((resolve) => {
        jsUrl.forEach(function(partialUrl) {
            var cleanPartialUrl = stripQueryParams(partialUrl);
            var oldScripts = document.querySelectorAll('script');
            oldScripts.forEach(function(script) {
                var scriptSrc = stripQueryParams(script.src);
                if (scriptSrc.includes(cleanPartialUrl)) {
                    script.parentNode.removeChild(script);
                }
            });
        });
        resolve();
    });
}


function addScripts(jsUrl) {
    return new Promise((resolve) => {
        jsUrl.forEach(function(url) {
            var script = document.createElement('script');
            script.src = url;
            script.setAttribute('data-dynamic', 'true');
            document.head.appendChild(script);
        });
        resolve();
    });
}


function loadScripts(app_url) {

    var timestamp = new Date().getTime();
    var cssUrl = "assets/css/style.css?v=" + timestamp;

    document.write('<link rel="stylesheet" href="' + cssUrl + '">');

    var jsUrl = [];

    jsUrl.push("assets/js/announcement.js?v=" + timestamp);
    if(app_url.includes('class-details.html')){
        jsUrl.push("assets/js/class_detl.js?v=" + timestamp);
    }else if(app_url.includes('class-holiday-details.html')){
        jsUrl.push("assets/js/holiday_class_detl.js?v=" + timestamp);
    }else if(app_url.includes('class-holiday-details.html')){
        jsUrl.push("assets/js/holiday_class_detl.js?v=" + timestamp);
    }else if(app_url.includes('achievements.html') || app_url.includes('gathering.html') || app_url.includes('parent-word.html') || app_url.includes('student-works.html')){
        jsUrl.push("assets/js/gallery.js?v=" + timestamp);
    }else if(app_url.includes('contact.html')){
        jsUrl.push("assets/js/map.js?v=" + timestamp);
    }else if(app_url.includes('gathering.html') || app_url.includes('meeting.html')){
        jsUrl.push("assets/js/video.js?v=" + timestamp);
    }


    removeScripts(jsUrl)
        .then(() => {
            return addScripts(jsUrl);
        })
        .catch((error) => {
            console.error('Error in script management:', error);
        });
}