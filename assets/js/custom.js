document.addEventListener("DOMContentLoaded", function() {
  // 현재 페이지의 경로 가져오기
  var currentPath = window.location.pathname;

  // 경로가 "/" 또는 비어 있는 경우에만 실행
  if (currentPath === '/' || currentPath === '') {
      var now = new Date();
      var dDayDate = new Date('2023-05-01');
      var timeDiff = now.getTime() - dDayDate.getTime();
      var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      // #dDay 요소에 텍스트 설정 및 스타일 적용
      var dDayElement = document.getElementById('dDay');
      if (dDayElement) {
          dDayElement.textContent = 'D+' + daysRemaining;
          dDayElement.style.textAlign = 'center';
          dDayElement.style.paddingTop = '6px';
      } else {
          console.warn("id='dDay' 요소가 존재하지 않습니다.");
      }
  }
});
