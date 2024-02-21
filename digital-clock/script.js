document.getElementById('mode-clock').addEventListener('click', modeClock);
document.getElementById('mode-timer').addEventListener('click', modeTimer);
document.getElementById('mode-stopwatch').addEventListener('click', modeStopWatch);
document.getElementById('mode-alram').addEventListener('click', modeAlram);

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// 실시간 디지털 시계: 0.5초마다 반복
let ticktock;
function modeClock() {
    console.log('시계 모드');
    hideButtons();

    ticktock = setInterval(() => {
        // 현재 시간 구하기
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
    
        // 00:00:00 포맷팅
        formatClock(hours, minutes, seconds);
    
        // 현재 요일 구하기
        let week = today.toString().slice(0, 3);
    
        // 현재 요일 선택하여 켜짐 스타일 적용
        let weekEl = document.getElementsByClassName('week');
        for (element of weekEl) {
            if (element.getAttribute('id') == week) {
                element.classList.add('selected');
            }
        }
    }, 100);
}

// 타이머
function modeTimer() {

}

// 스톱워치
function modeStopWatch() {

}

// 알람
function modeAlram() {

}



// 00:00:00 포맷팅
function formatClock(hours, minutes, seconds) {
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    hour.value = hours;
    min.value = minutes;
    sec.value = seconds;
}

// 모드에 따라 버튼 숨기기 또는 보이기
function hideButtons(mode) {
    let buttonsContainer = document.getElementsByClassName('buttons-container');
    for (section of buttonsContainer) {
        if (section.classList[0] == 'mode') {
            continue;
        } else if (section.classList[0] == mode) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}

modeClock();