
(function() {




})();



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

function set_video_control() {
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



function load_meeting() {

    $('.meeting').append('<div style="margin-bottom:50px;"><h1 class="text-center">2024年第三学段启动会</h1></div>');

    var i = 1;
    $('.meeting').append('<div class="col-md-12 d-flex align-items-stretch video-container"><div class="card"><div class="card-img"><h2 class="text-center">6月9日 校长发言</h2><video loading="lazy" id="mt_video_'+i+'" onplay="updateButtonIcon(\'mt_video_'+i+'\', \'pause\')" onpause="updateButtonIcon(\'mt_video_'+i+'\', \'play\')" onended="updateButtonIcon(\'mt_video_'+i+'\', \'play\')"><source src="assets/img/meeting/09062024.mp4" type="video/mp4" preload="metadata"></video><div class="controls"><button class="btn btn-success bi bi-play-fill" id="btn_mt_video_'+i+'" onclick="togglePlay(\'mt_video_'+i+'\')"></button><div class="progress-bar" onclick="setVideoProgress(event, \'progress_mt_video_'+i+'\')"><div class="progress" id="progress_mt_video_'+i+'"></div></div></div></div></div>');

    // i++;
    // $('.meeting').append('<div class="col-md-12 d-flex align-items-stretch video-container"><div class="card"><div class="card-img"><h2 class="text-center">自我介绍</h2><video loading="lazy" id="mt_video_'+i+'" onplay="updateButtonIcon(\'mt_video_'+i+'\', \'pause\')" onpause="updateButtonIcon(\'mt_video_'+i+'\', \'play\')" onended="updateButtonIcon(\'mt_video_'+i+'\', \'play\')"><source src="assets/img/meeting/self_intro.mp4" type="video/mp4" preload="metadata"></video><div class="controls"><button class="btn btn-success bi bi-play-fill" id="btn_mt_video_'+i+'" onclick="togglePlay(\'mt_video_'+i+'\')"></button><div class="progress-bar" onclick="setVideoProgress(event, \'progress_mt_video_'+i+'\')"><div class="progress" id="progress_mt_video_'+i+'"></div></div></div></div></div>');

    // i++;
    // $('.meeting').append('<div class="col-md-12 d-flex align-items-stretch video-container"><div class="card"><div class="card-img"><h2 class="text-center">代表发言与发展目标</h2><video loading="lazy" id="mt_video_'+i+'" onplay="updateButtonIcon(\'mt_video_'+i+'\', \'pause\')" onpause="updateButtonIcon(\'mt_video_'+i+'\', \'play\')" onended="updateButtonIcon(\'mt_video_'+i+'\', \'play\')"><source src="assets/img/meeting/development.mp4" type="video/mp4" preload="metadata"></video><div class="controls"><button class="btn btn-success bi bi-play-fill" id="btn_mt_video_'+i+'" onclick="togglePlay(\'mt_video_'+i+'\')"></button><div class="progress-bar" onclick="setVideoProgress(event, \'progress_mt_video_'+i+'\')"><div class="progress" id="progress_mt_video_'+i+'"></div></div></div></div></div>');

    set_video_control();
}