
var outlet_arr = [
    ['Khatib', '846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846','assets/attachment/daydayup5.jpg', 1.418493624867837, 103.83487635665111],
    ['Bukit Timah Shopping Centre', '170 Upper Bukit Timah Road #B2-18 <br/>Singapore 588179', 'assets/attachment/daydayup5.jpg', 1.34311, 103.77607],
    ['NeWest Mall<br/>Formerly Hong Leong Garden', '1 West Coast Drive #01-02 <br/>Singapore 128020', 'assets/attachment/daydayup5.jpg', 1.31648, 103.75739]
];


(function() {

    const app_url = window.location.href;

    set_page(app_url);

    //if id exist get teachers info
    if($('#teachers_field').length){
        get_teachers();
    }

})();



function set_page(app_url) {    
    
    loadScripts(app_url);

    get_nav_bar();

    let page = 'Home';
    var footer_outl = false;
    if (app_url.includes('about.html')) {

        page = 'About';
        show_active('app_about');

        footer_outl = true;

    }else if (app_url.includes('timetable.html')) {

        page = 'Calendar';
        show_active('app_timetable');

        footer_outl = true;

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
        load_parent_words(1, 20); //xsjz | xsjzv

        footer_outl = true;

    } else if (app_url.includes('student-works.html')) {

        page = 'Student Works';
        show_active('app_reviews');
        show_active('app_student_work');
        load_student_work(13, 4);//xx | xxv

        footer_outl = true;

    } else if (app_url.includes('contact.html')) {

        page = 'Contact';
        show_active('app_contact');
        

    } else if (app_url.includes('achievements.html')) {

        page = 'Achievements';
        show_active('app_reviews');
        show_active('app_achievements');
        load_special_achievements(0, 1);
        load_achievements(19); //cj

        footer_outl = true;

    } else if (app_url.includes('rewards.html')) {

        page = 'Rewards';
        show_active('app_reviews');
        show_active('app_rewards');
        var yr_arr = {'2024': [3,1]}
        load_rewards(yr_arr);

        footer_outl = true;

    } else if (app_url.includes('gathering.html')) {

        page = 'Gathering & Events';
        show_active('app_reviews');
        show_active('app_gathering');
        load_gathering(1, 15, 12, 38);//jhsp | jh | jhs | jhv

        footer_outl = true;

    } else if (app_url.includes('meeting.html')) {

        page = 'Meetings';
        show_active('app_meeting');
        load_meeting();

    } else if (app_url.includes('announcements.html')) {

        page = 'Announcements';
        show_active('app_announcements');
        load_announcements();

    } else if (app_url.includes('sg60.html')) {

        page = 'SG60';
        show_active('app_sg60');

        load_mother_day(98);
        // load_ppt();
        load_composition(0);
        load_sg60(0);

    }else{
        show_active('app_home');
    }

    let app_name = "天天向上语文学校<br/>DayDayUp Language School";
    let app_name2 = "天天向上语文学校 DayDayUp Language School";
    updateAppName(page, app_name, app_name2);

    $(window).resize(function() {
        updateAppName(page, app_name, app_name2);  // Update on window resize
    });
    
    var contact = '郑娟老师👩‍🏫 华文热线咨询<br/><strong>Phone:</strong> 91669059 （每日）9am-9pm<br/><br/><strong>Tel:</strong> 6530 3063<br/><strong>WhatsApp:</strong> <a  onclick="window.open(\'https://api.whatsapp.com/send?phone=6581515668\', \'_blank\')">+65 8151 5668</a><br/><strong>Email:</strong> daydayupls21@gmail.com';

    var copyright = 'All images on this website are copyrighted by their respective owners. We respect the copyrights of others and do not knowingly infringe on them. If you believe that any of the images on this website infringes on your copyright, please contact us and we will remove it immediately.';


    $('.contact_list').html('<br/>'+contact);

    if(app_url.includes('contact.html')){

        get_outlets(app_name, outlet_arr, copyright, 'map');

    }else{

        if(footer_outl){
            footer_outlet(outlet_arr, contact);
        }else{
            $('.app_address').html('<i class="bi bi-pin-map"></i>'+outlet_arr[0][1]+'<br/><br/>'+contact);
        }
        
    }
    

    $('.copyright-msg').html(copyright);

    
}


function load_max_ppl_msg(){
    
    $('.max-ppl-msg').html('最大班额9人<br/>Max 9 Students/timeslot');
    $('.k-label').html('幼儿园<br/>Kindergarten');
    $('.p-label').html('小学<br/>Primary');
    $('.s-label').html('中学<br/>Secondary');

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
        
        ['王晓松', 'Wang XiaoSong', 'wangxiaosong2.jpg', '校长', '2003年毕业于西北工业大学工商管理专业，学士学位.曾先后在中国政府及私立学校任教。期间获得中国教师资格证书.普通话一级乙等.2012年至今担任樱花国际日语大连.青岛深圳等校区校长职务，负责校区的整体运营管理工作。拥有较强的组织和沟通能力，敢于面对挑战。'],

        ['郑源元', 'Zheng YuanYuan', 'zhengyuanyuan2.jpg', '副校长', '2020毕业于新加坡SMU，拥有管理硕士学位。是一位经验丰富的华语老师，在华语教学领域有丰富经验，深受学生和家长的喜爱与尊重。郑老师擅长针对不同年龄段和语言水平的学生制定个性化的学习计划，帮助他们在听、说、读、写各方面取得全面进步。他的教学方法灵活多样，既注重传统的语法和词汇教学，也善于利用现代科技和多媒体资源，使课堂生动有趣。郑老师注重培养学生的语言兴趣和自信心，常常通过有趣的故事和游戏来激发他们的学习热情。他还特别重视与学生的互动和沟通，善于发现每个学生的优势和潜力，并给予及时的鼓励和指导。他的教学理念是“因材施教，寓教于乐”，致力于为每一个学生提供最优质的华语学习体验。'],

        ['郑娟', 'Zheng Juan', 'zhengjuan2.jpg', '课程总监', '就读于上海华东师范大学教育管理专业，研究生。89年毕业后，曾先后在中国和新加坡两地的政府及私立学校一线任教35年。期间获得中国高级教师证书，辽宁省一等优质课教师，大连市骨干教师。<br/>坚持：教育必须以学生为中心，没有教不会的学生。'],

        ['王爽', 'Wang Shuang', 'wangshuang2.jpg', '网课总负责人', '1992年毕业于辽宁师范大学教育管理专业，从事小学教育工作20多年，期间获得中国颁发的高级教师资格证，还获得“大连市优秀教育工作者”称号。多年的教育教学经验，使她深刻地认识到，“家庭教育”是教育的关键，于是她开始关注家庭教育，并通过学习，获得了国家人力资源和社会保障部颁发的“家庭教育师”资格证书，并希望能帮到更多的家庭，更多的孩子！'],       
        
        ['郭辉', 'Guo Hui', 'guohui2.jpg', '网课中学部负责人', '1999年毕业于沈阳师范大学，普通话一级乙，英语六级，现任职于大连新闻传媒集团。一直从事文字编辑及配音工作，具备良好的汉语语言学知识和语音校准能力，对学生的教学更侧重识字能力、阅读理解能力的培养。二级心理咨询师，“家长课堂”主讲人，了解孩子成长规律。教学方法以赞赏教学为主，愿意与孩子们成为朋友，分享他们的学习及成长快乐。'],

        ['陈宏民', 'Chen HongMin', 'chenhongmin2.jpg', '网课小学部负责人', '1990年毕业于大连大学机械工程学院机械设计与制造专业，具有本科学历工学学士学位。自1990年大学毕业以来，从事中等职业教育教学一线工作15年，从事教育教学管理工作20年，期间获得中华人民共和国国家教育委员会颁发的中等职业学校教师资格证书和高级讲师职称。30多年来致力于教育教学工作，满腔热忱，相信学校教育能够改变学生的一生。'],
        
        ['李琦（琦琦老师）', 'Li Qi', 'liqi2.jpg', '教师', '2003年毕业于大连轻工业学院（现大连工业大学），从事教培行业十年，爱心丰盈，耐心充沛，善于沟通，教学风格多面有趣，深受孩子和家长认可。'],
        
        //李凌飞=李师谊
        ['李凌飞', 'Li LingFei', 'lilingfei2.jpg', '教师', '拥有三十余年媒体从业经历，为中国最早一批普通话一级甲等获得者。她曾于2006年参与美国密苏里新闻学院高级研修营并顺利结业，从业期间荣获东北三省好新闻奖五次，辽宁省好新闻奖二十余次。作为一名媒体从业者，她致力于教育战线，拥有丰富的写作教育经验，为青少年和成年人开展专业写作课程百余次。从事汉语言教学后，她深入研究国际学生学习汉语的规律，从学生的角度出发，深入浅出，激发学生的学习兴趣。她关爱孩子，充满活力，深受孩子们的喜爱。'],

        ['尹晓红', 'Yin XiaoHong', 'yinxiaohong2.jpg', '教师', '1998年毕业于西安工程大学，纺织品加工与贸易专业 ，全日制大学本科学历。于新闻媒体单位从事十多年文字工作及8年人力资源管理工作。教学理念：秉持以“学生为中心”的教学理念，深知因材施教的重要性，根据学生的特点和需求制定个性化教学计划。'],

        ['陈晶珏', 'Chen JingJue', 'chenjingjue2.jpg', '教师', '1994年毕业与南京理工大学机械工程专业，2000年来新加坡，2005学习完成ACCA课程。陈晶珏老师，性格开朗，有耐心，喜欢和孩子打交道，热爱教师工作。爱好广泛，擅长教具制作工作。'],

        ['郑晓雯', 'Zheng XiaoWen', 'zhengxiaowen2.jpg', '教师', '2013年毕业于中国大连交通大学工业设计专业，文学学士学位。中国书法等级认定中级，硬笔书法作品曾入选辽宁省硬笔书法家作品集，从事教培工作3年，用爱与耐心陪伴孩子们成长！'],

        ['张丽春', 'Zhang LiChun', 'zhanglichun2.jpg', '教师', '本人毕业于中国辽宁大学汉语言文学，89年毕业后，一直从事一线教育教学工作。期间获得中国高级教师资格证书，辽宁省一等优秀论文，多次被评为大连市优秀班主任，瓦房店市优秀班主任，瓦房店市骨干教师，大连市优秀辅导员等荣誉称号。<br/>教学理念：一切为了学生，为了学生的一切！'],

        
        ['阮建军', 'Ruan JianJun', 'ruanjianjun2.jpg', '技术顾问', '目前就读于新加坡国立大学（National University of Singapore, NUS），主修软件编程（Software Computing）。于2018年毕业于新加坡理工学院（Singapore Polytechnic）。目前在Zetta Solution担任软件编程师（Software Developer），主要负责开发和维护软件应用程序，与团队合作进行软件设计和实现，解决软件问题并提供技术支持，并编写和维护技术文档。']        

    ]

    /**历史老师*/
    const hist_teacher_arr = [

        ['白春琴', 'Bai ChunQin', 'baichunqin2.jpg', '教师', '1988年毕业于义安理工学院商业研究，曾担任学后托管中心的老师并拿到应急响应与危机管理和儿童及青少年支援服务课程的证书。喜爱孩子，相信每个孩子都有极大的潜能能够被栽培起来。'],

        ['郑建一', 'Zheng JianYi', 'zhengjianyi2.jpg', '教材编写负责人', '2010毕业于中国大连外国语大学，文学学士学位。他热爱教育事业，熟悉国内外中小学生生活及学生特点，在教学的过程中不断学习和研究良好的教学方法，为人专业严谨、幽默负责、亲和力强，善于根据学生特点，及时调整教学策略，因材施教，制定个性化教学方案，用有效的方法解决语文问题。他认为正视孩子的问题，理解孩子的需要，肯定孩子的进步，欣赏孩子的优点。'],

        ['刘文博', 'Liu WenBo', 'liuwenbo2.jpg', '教师', '1997年毕业于辽宁师范大学小学教育专业，担任小学班主任工作25年，获得大连市骨干教师称号，多次获得过大连市一等优质课，获得国家级教育论文，能把握学生的年龄特点及身心发展规律，遵循教育教学规律，有效地开展教学工作。'],

        ['曲世君', 'Qu ShiJun', 'qushijun2.jpg', '教师', '1983年毕业于大连大学中文系（前大连师专）先后担任中学，中专语文老师。后考入国家公务员。'],

        ['冷静', 'Leng Jing', 'lengjing2.jpg', '实体课小学部负责人', '2005年毕业于北华大学师范学院中文系，本科毕业，学士学位，拥有中国教师资格证，普通话一级乙等。曾先后在天下和致诚担任过华文教师和编辑教材的工作。冷静老师，性格开朗，有耐心，喜欢和孩子打交道，热爱教师工作。爱好广泛，擅长教具制作工作。'],

        ['卓睿庆', 'Zhuo RuiQing', 'zhuoruiqing2.jpg', '教师', ''],

        ['冯婌清', 'Adeline Pang SooCheng', 'fengshuqing2.jpg', '教师', ''],

        ['陈洁如', 'Chen JieRu', 'chenjieru2.jpg', '顾问', '天磊创办人'],

        ['曲家乾', 'Qu JiaQian', 'qujiaqian2.jpg', '顾问', '中国硬笔书法家协会楷书教育专业委员会主任委员，辽宁省书法家协会会员。其硬笔书法作品曾入选全国硬笔书法展，书法作品曾获全国教师书法展金奖。作品被中国民族画院、钓鱼台宾馆收藏。']
    ]

    var teacher_html = '';
    var name_ch = '';
    var name_en = '';
    var photo = '';

    teacher_html += '<div style="padding-top:10px;padding-bottom:10px;"><div class="teacher-section"><h1 style="margin-top:8px;">现任老师 | Current Teachers</h1></div></div>';

    teacher_arr.forEach((teacher, key) => {

        name_ch = teacher[0];
        name_en = teacher[1];
        photo = teacher[2];
        role = teacher[3];
        description = teacher[4];

        teacher_html += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member">';
        teacher_html += '<img src="assets/img/teachers/'+photo+'" class="img-fluid" alt="">';
        teacher_html += '<div class="member-content"><h4>'+name_ch+'</h4><span>'+name_en+'</span>';
        teacher_html += '<span class="role">'+role+'</span><p>'+description+'</p>';
        teacher_html += '</div></div></div>';
    });

    teacher_html += '<div style="padding-top:10px;padding-bottom:30px;"><div class="teacher-section"><h1 style="margin-top:8px;">历史老师 | Past Techers</h1></div></div>';

    hist_teacher_arr.forEach((teacher, key) => {

        name_ch = teacher[0];
        name_en = teacher[1];
        photo = teacher[2];
        role = teacher[3];
        description = teacher[4];

        teacher_html += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member">';
        teacher_html += '<img src="assets/img/teachers/'+photo+'" class="img-fluid" alt="">';
        teacher_html += '<div class="member-content"><h4>'+name_ch+'</h4><span>'+name_en+'</span>';
        teacher_html += '<span class="role">'+role+'</span><p>'+description+'</p>';
        teacher_html += '</div></div></div>';
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


function footer_outlet(outlet_arr, contact) {

    footer_outl_html = '';
    
    outlet_arr.forEach((outlet, key) => {
        footer_outl_html += '<div class="col-lg-6 footer-contact text-center"><i class="bi bi-pin-map"></i>'+outlet[1]+'</div>';
    });
    
    $('.app_address').html(contact);
    $('.footer_address').html(footer_outl_html);
}   


function get_nav_bar(){

    var html = '';
    html += '<li><a href="index.html" class="app_home">主页<br/>Home</a></li>';

    html += '<li><a href="about.html" class="app_about">关于<br/>About</a></li>';

    html += '<li><a href="timetable.html" class="app_timetable">学年历<br/>Calendar</a></li>';

    // html += '<li><a href="announcements.html" class="app_announcements">Announcements</a></li>';

    html += '<li class="dropdown">';
    html += '<a href="#"><span class="app_programmes">课程项目<br/>Programmes</span> <i class="bi bi-chevron-down"></i></a>';
    html += '<ul><li><a href="classes.html" class="app_class">课程<br/>Classes</a></li></ul>';
    html += '</li>';

    html += '<li><a class="app_teacher" href="teachers.html">教师<br/>Teachers</a></li>';

    html += '<li><a class="app_sg60" href="sg60.html" title="Celebrate SG60!"><img src="assets/img/logo/sg60.png" alt="SG60" style="height:50px; vertical-align:middle;"></a></li>';

    html += '<li class="dropdown"><a href="#"><span class="app_reviews">反馈<br/>Reviews</span><i class="bi bi-chevron-down app_reviews_chevron"></i></a>';
    html += '<ul>';
    html += '<li class="app_student_work_control"><a class="app_student_work" href="student-works.html">学习<br/>Student Works</a></li>';
    html += '<li class="app_achievements_control"><a class="app_achievements" href="achievements.html">芳草地<br/>Achievements</a></li>';
    html += '<li class="app_rewards_control"><a class="app_rewards" href="rewards.html">进步奖<br/>Rewards</a></li>';
    html += '<li class="app_parent_word_control" ><a class="app_parent_word" href="parent-word.html" >家长与学生的话语<br/>Parents & Students Words</a></li>';
    html += '<li class="app_gathering_control"><a class="app_gathering" href="gathering.html" >精彩时光<br/>Gathering & Events</a></li>';
    html += '</ul></li>';

    // html += '<li><a href="meeting.html" class="app_meeting">Meetings</a></li>';

    html += '<li><a href="contact.html" class="app_contact">联系我们<br/>Contact</a></li>';

    $('#navbar_ul').html(html);


    //header tab title
    // $('.app_class_holiday').text('Holiday Classes');
    $('.get-started-btn').html('立即体验<br/>Get Started');
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
    }else if(app_url.includes('achievements.html') || app_url.includes('awards.html') || app_url.includes('parent-word.html') || app_url.includes('student-works.html')){
        jsUrl.push("assets/js/gallery.js?v=" + timestamp);
    }else if(app_url.includes('contact.html')){
        jsUrl.push("assets/js/map.js?v=" + timestamp);
    }else if(app_url.includes('meeting.html')){
        jsUrl.push("assets/js/video.js?v=" + timestamp);
    }else if(app_url.includes('gathering.html')){
        jsUrl.push("assets/js/gallery.js?v=" + timestamp);
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

