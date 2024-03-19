let tils = [];

// 초기화 함수
function initializedTil() {
    // 로컬 스토리지에서 TIL 데이터 불러오기
    tils = JSON.parse(localStorage.getItem('tils')) || [];

    // TIL 리스트를 순회하며 HTML에 추가
    let tilList = document.getElementById('til-list');
    tils.forEach(til => {
        const newTil = createTilElement(til);
        tilList.appendChild(newTil);
    })
}

// TIL 요소 생성 함수
function createTilElement(til) {
    const newTil = document.createElement('li');
    newTil.classList.add('til-list-item');
    newTil.innerHTML = `
        <div>
            <p>오늘 배운 내용</p>
            <p>${til.learned || '없음'}</p>
        </div>
        <div>
            <p>어려웠던 내용</p>
            <p>${til.difficult || '없음'}</p>
        </div>
        <div>
            <p>보충할 내용</p>
            <p>${til.supplement || '없음'}</p>
        </div>
        <p class="til-date">${til.date}</p>
    `;

    return newTil
}

// TIL 추가 함수
function addTil() {
    // 현재 날짜 정보 가져오기
    const date = new Date();
    const dateString = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    
    // 새로운 TIL 객체 생성
    const til = {
        learned: '',
        difficult: '',
        supplement: '',
        date: dateString,
    }
    
    // 입력값 가져오기
    const values = document.getElementById('til-input').children;
    til.learned = values[0].value;
    til.difficult = values[1].value;
    til.supplement = values[2].value;
    
    // TIL 배열 0번째에 추가
    tils.unshift(til);
    
    
    // HTML에 추가된 TIL 요소 생성
    let newTil = createTilElement(til);
    
    // HTML에 추가된 TIL 요소 삽입
    const tilList = document.getElementById('til-list');
    tilList.insertBefore(newTil, tilList.firstChild);
    
    // 입력값 초기화
    for (const value of values) {
        value.value = null;
    }

    // gpt
    // Array.from(values).forEach(value => value.value = null);
    
    // 알림 표시
    alert("TIL이 작성되었습니다.");
    
    // 로컬 스토리지에 TIL 데이터 저장
    localStorage.setItem('tils', JSON.stringify(tils));
}

// 초기화 함수 호출
initializedTil();
// 작성 완료 버튼 이벤트 리스너 등록
document.getElementById('til-btn').addEventListener('click', addTil)