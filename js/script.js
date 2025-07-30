const tabList = document.querySelectorAll('.nav-list li');
const contentList = document.querySelectorAll('.content_list li');

function init(index) {
    tabList[index].classList.add('on');
    contentList[index].classList.add('active');
}

function reset() {
    tabList.forEach((el) => el.classList.remove('on'));
    contentList.forEach((el) => el.classList.remove('active'));
}

// 초기화
init(0);

// 클릭 이벤트 연결
tabList.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        reset();
        init(index);
    });
});
