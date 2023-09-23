
(function() {

    set_title();

})()



function set_title(){

    const app_url = window.location.href;
    const title = ' - DayDayUp Language School';

    if(app_url.includes('about.html')){
        document.title = 'About' + title;
    }else if(app_url.includes('courses.html')){
        document.title = 'Courses' + title;
    }else if(app_url.includes('courses-details.html')){
        document.title = 'Courses Details' + title;
    }else if(app_url.includes('teachers.html')){
        document.title = 'Teachers' + title;
    }else if(app_url.includes('events.html')){
        document.title = 'Events' + title;
    }else if(app_url.includes('pricing.html')){
        document.title = 'Pricing' + title;
    }else if(app_url.includes('contact.html')){
        document.title = 'Contact' + title;
    }else{
        document.title = 'Home' + title;
    }
}