
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;
    const app_name = 'DayDayUp Language School';
    let page = '';

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
    } else if (app_url.includes('case-study.html')) {
        page = 'Case Study';
    } else if (app_url.includes('pricing.html')) {
        page = 'Pricing';
    } else if (app_url.includes('contact.html')) {
        page = 'Contact';
    } else {
        page = 'Home';
    }

    const app_title = page + ' - ' + app_name;
    document.title = app_title;
    $('.app_name').text(app_name);


    $('.app_address').html("846 YiShun Ring Road #01-3631（level 2）\nSingapore 760846 <br/><br/><strong>Phone:</strong> 6530 3063<br/><strong>Email:</strong> daydayupls21@gmail.com");
}
