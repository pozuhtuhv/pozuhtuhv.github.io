document.addEventListener("DOMContentLoaded", function () {
  var topButton = document.getElementById("topButton");

  // 버튼이 존재할 때만 이벤트 연결
  if (topButton) {
    // 스크롤 시 버튼 표시/숨김 처리
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    });

    // 버튼 클릭 시 상단으로 이동
    topButton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
});
