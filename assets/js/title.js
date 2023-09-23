
(function() {

    set_title();

})()



function set_title(){
    const app_url = window.location.href;
    console.log(app_url);
    if(app_url.includes('index.html')){
        document.title = 'Home - DayDayUp Language School';
    }else if(app_url.includes('teachers.html')){
        document.title = 'Teachers - DayDayUp Language School';
    }
}