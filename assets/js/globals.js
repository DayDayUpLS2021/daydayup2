
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;
    const app_name = 'DayDayUp Language School';
    var outlet_arr = [
        ['Khatib', '846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846 <br/><br/><strong>Phone:</strong> 6530 3063<br/><strong>Email:</strong> daydayupls21@gmail.com','assets/attachment/daydayup1.jpg']
    ];


    var timestamp = new Date().getTime();
    var cssUrl = "styles.css?v=" + timestamp;
    document.write('<link rel="stylesheet" href="' + cssUrl + '">');



    let page = 'Home';

    if (app_url.includes('about.html')) {
        page = 'About';
    } else if (app_url.includes('classes.html')) {
        page = 'Classes';
    } else if (app_url.includes('class-details.html')) {
        page = 'Class Details';
    } else if (app_url.includes('classes-holiday.html')) {
        page = 'Holiday Classes';
    } else if (app_url.includes('class-holiday-details.html')) {
        page = 'Holiday Class Details';
    } else if (app_url.includes('teachers.html')) {
        page = 'Teachers';
    } else if (app_url.includes('parent-word.html')) {
        page = 'Parent\'s Words';
    } else if (app_url.includes('student-works.html')) {
        page = 'Student Works';
    } else if (app_url.includes('contact.html')) {
        page = 'Contact';
    }

    const app_title = page + ' - ' + app_name;
    document.title = app_title;
    $('.app_name').text(app_name);

    //header tab title
    $('.app_home').text('Home');
    $('.app_about').text('About');
    $('.app_programmes').text('Programmes');
    $('.app_class').text('Classes');
    $('.app_class_holiday').text('Holiday Classes');
    $('.app_teacher').text('Teachers');
    $('.app_reviews').text('Reviews');
    $('.app_student_work').text('Student Works');
    $('.app_parent_word').text('Parents\' Words');
    $('.app_contact').text('Contact');
    $('.get-started-btn').text('Get Started');

    
    if(app_url.includes('contact.html')){
        var html = '';
        outlet_arr.forEach((outlet, key) => {
            html += '<div class="footer-top"><div class="container"><div class="row"><div class="col-lg-4 footer-contact"><h3 class="app_name_'+key+'">'+app_name+' ('+outlet[0]+')'+'</h3></div><div class="col-lg-4 footer-contact"><p class="app_address_'+key+'">'+outlet[1]+'</p></div><div class="col-lg-4 footer-contact"><img src="'+outlet[2]+'"   class="img-fluid app_img_'+key+'"></div></div></div></div>';
        });
        $('#footer').html(html);
    }else{
        $('.app_address').html("846 YiShun Ring Road #01-3631（level 2）<br/>Singapore 760846 <br/><br/><strong>Phone:</strong> 6530 3063<br/><strong>Email:</strong> daydayupls21@gmail.com");
    }
    

    
}
