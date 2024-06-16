(function() {

    window.announcements = [["11-06-2024", "Exciting news! Check out our latest updates!"],["13-06-2024", "New classes starting soon. Enroll today!"],["15-06-2024", "Don't miss our summer camp registration!"]];

    $('#announcement').hide();

    document.addEventListener("DOMContentLoaded", function() {
        let currentAnnouncement = 0;
        const totalAnnouncements = announcements.length;
        
        showNextAnnouncement();

        function showNextAnnouncement() {
            var html = '';
            html += '<span class="active"><i class="bi bi-megaphone"></i> ';
            html += announcements[currentAnnouncement][1];
            html += '</span>';
            $('#announcement-content').html(html);
            currentAnnouncement = (currentAnnouncement + 1) % totalAnnouncements;
        }
      
        setInterval(showNextAnnouncement, 10000); // Change announcement every 10 seconds to match animation duration
        
    });

})();


function closeAnnouncement() {
    document.getElementById('announcement').style.display = 'none';
}


function load_announcements(){
    const announce = window.announcements;

    var html = '';
    for(i=announce.length-1; i>=0; i--){
        html += '<div class="row announcing">';
        html += '<div class="col-3">'+announce[i][0]+' <i class="bi bi-megaphone"></i></div>';
        html += '<div class="col-9"><p class="fst-italic">'+announce[i][1]+'</p></div>';
        html += '</div><br/>';
    }

    $('#announce').html(html);
}

