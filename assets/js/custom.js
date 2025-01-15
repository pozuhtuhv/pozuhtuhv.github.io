// D-day 계산 및 텍스트 적용
document.addEventListener("DOMContentLoaded", function() {
    var now = new Date();
    var dDayDate = new Date('2023-05-01');
    var timeDiff = now.getTime() - dDayDate.getTime();
    var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // #dDay 요소에 텍스트 설정 및 스타일 적용
    var dDayElement = document.getElementById('dDay');
    dDayElement.textContent = 'D+' + daysRemaining;
    dDayElement.style.textAlign = 'center';
    dDayElement.style.paddingTop = '6px';
  });