document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');
  
    codeBlocks.forEach(block => {
      const button = document.createElement('button');
      button.innerText = 'Copy';
      button.className = 'copy-button';
  
      button.addEventListener('click', () => {
        const code = block.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => {
            button.innerText = 'Copy';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
  
      block.appendChild(button);
    });
  });

// 버튼 요소 가져오기
var topButton = document.getElementById("topButton");

// 스크롤 시 버튼 표시/숨김 처리
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// 버튼 클릭 시 상단으로 이동
topButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};