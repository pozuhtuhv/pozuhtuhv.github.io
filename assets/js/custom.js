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

// zoom-img effect
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".post img"); // 게시글 내 모든 이미지 선택
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");

  let isZoomed = false; // 확대 여부
  let scale = 2; // 확대 배율

  images.forEach(img => {
      img.classList.add("zoom-img"); // 마우스 커서를 돋보기 스타일로 설정
      img.addEventListener("click", function (e) {
          overlay.style.display = "flex";
          overlayImg.src = this.src;
          overlayImg.style.transform = `scale(1)`;
          overlayImg.style.cursor = "zoom-in";
      });
  });

  // 이미지 내부 클릭 시 확대 / 축소
  overlayImg.addEventListener("click", function (e) {
      if (!isZoomed) {
          const rect = overlayImg.getBoundingClientRect();
          const clickX = (e.clientX - rect.left) / rect.width;
          const clickY = (e.clientY - rect.top) / rect.height;

          // 클릭한 위치를 중심으로 확대
          overlayImg.style.transformOrigin = `${clickX * 100}% ${clickY * 100}%`;
          overlayImg.style.transform = `scale(${scale})`;
          overlayImg.style.cursor = "zoom-out";
          isZoomed = true;
      } else {
          // 원래 크기로 축소
          overlayImg.style.transformOrigin = "center center";
          overlayImg.style.transform = "scale(1)";
          overlayImg.style.cursor = "zoom-in";
          isZoomed = false;
      }
  });

  // 바깥 영역 클릭 시 닫기
  overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
          overlay.style.display = "none";
          overlayImg.style.transform = "scale(1)";
          overlayImg.style.cursor = "zoom-in";
          isZoomed = false;
      }
  });
});
// zoom-img effect end

// category order start
document.addEventListener("DOMContentLoaded", function () {
  const categoryList = document.getElementById("category-list");
  const categoryButtonsContainer = document.getElementById("category-buttons");

  if (!categoryList || !categoryButtonsContainer) return;

  const categories = Array.from(categoryList.getElementsByClassName("category-item"));
  const buttons = Array.from(categoryButtonsContainer.getElementsByClassName("category-btn"));

  // 게시글 개수를 기준으로 내림차순 정렬
  categories.sort((a, b) => {
      return parseInt(b.getAttribute("data-count")) - parseInt(a.getAttribute("data-count"));
  });

  // 기존 목록을 비우고 정렬된 항목을 다시 추가
  categoryList.innerHTML = "";
  categories.forEach(category => categoryList.appendChild(category));

  // 버튼 정렬 (카테고리 순서와 동일하게 맞추기)
  const sortedButtons = buttons.sort((a, b) => {
      const countA = parseInt(document.getElementById(a.dataset.target).getAttribute("data-count"));
      const countB = parseInt(document.getElementById(b.dataset.target).getAttribute("data-count"));
      return countB - countA;
  });

  categoryButtonsContainer.innerHTML = "";
  sortedButtons.forEach(button => categoryButtonsContainer.appendChild(button));

  // 버튼 클릭 시 해당 카테고리로 스크롤 이동
  buttons.forEach(button => {
      button.addEventListener("click", function () {
          const targetCategory = document.getElementById(this.dataset.target);
          if (targetCategory) {
              targetCategory.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});
// category order end