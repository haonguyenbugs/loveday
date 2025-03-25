const yourDate = new Date("2024-06-26T18:53:20"),

// list các tên âm thanh có trong thư mục
music = ['nguoiamphu', 'noinaycoanh'];

document.addEventListener('DOMContentLoaded', function (){
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()} - ${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1 ) : "0" + (yourDate.getMonth() + 1)} - ${(yourDate.getFullYear())}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000)/ 60 /60 / 24) + "DAYS"; 

    function olock() {
        var today = new Date(),
        hrs = (Math.floor(Math.floor((today - yourDate)/1000)/60/60))%24,
        min = (Math.floor(Math.floor((today - yourDate)/1000)/60))%60,
        sec = Math.floor((today - yourDate)/1000) %60;
        rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs }: ${(min > 9) ? min : "0" + min} :  ${(sec > 9) ? sec : "0" + sec} `;
    }olock();
    var timer = setInterval(function () { olock()}, 1000);

// Lấy phần tử audio và nút
const audio = document.getElementById('audio');
const musicBtn = document.getElementById('music-btn');

// Biến trạng thái phát nhạc
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = '🎶'; // Icon khi dừng
    } else {
        audio.play();
        musicBtn.textContent = '⏸'; // Icon khi đang phát
    }
    isPlaying = !isPlaying;
});

document.getElementById('love-btn').addEventListener('click', function() {
    window.location.href = 'https://haonguyenbugs.github.io/letterlove/'; // Link đích
});


}, false);