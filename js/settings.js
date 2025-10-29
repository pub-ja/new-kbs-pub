(function () {
  'use strict';

  // DOM Elements
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const regionCheckboxes = document.querySelectorAll(
    '.check-grid-button input[type="checkbox"]'
  );

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const tabName = this.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(`tab-${tabName}`).classList.add('active');
    });
  });

  // Toggle Radio Group 범용 처리 - 모든 toggle-radio-group을 독립적으로 처리
  const toggleRadioGroups = document.querySelectorAll('.toggle-radio-group');
  toggleRadioGroups.forEach(group => {
    const btnsInGroup = group.querySelectorAll('.toggle-radio-btn');
    btnsInGroup.forEach(btn => {
      btn.addEventListener('click', function () {
        // 같은 그룹 내의 다른 버튼들의 active 클래스 제거
        btnsInGroup.forEach(b => b.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        this.classList.add('active');

        // 전국/지역 버튼인 경우 체크박스 영역 제어
        if (
          this.dataset.value === 'national' ||
          this.dataset.value === 'local'
        ) {
          const checkWrap = document.querySelector('.check-grid-button-wrap');
          if (checkWrap) {
            if (this.dataset.value === 'national') {
              checkWrap.style.display = 'none';
            } else {
              checkWrap.style.display = 'grid';
            }
          }
        }
      });
    });
  });
})();
