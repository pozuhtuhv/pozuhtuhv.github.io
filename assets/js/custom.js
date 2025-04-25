document.addEventListener("DOMContentLoaded", function () {
// topButton
  var topButton = document.getElementById("topButton");

  if (topButton) {
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    });

    topButton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

// portfolio 페이지
  var projectsData = {
    project1: {
      title: "데이터 수집 자동화 시스템",
      period: "2021년 04월 - 2023년 11월 (2년 7개월)",
      description: "초기의 마케팅 팀원으로서 제품 데이터 정리에 참여하였고, <br> 팀 간 데이터 기준이 상의하였고, 일관성없는 자료에 대한 불편함을 인지하였음. <br> 데이터 수집으로 인한 시간적, 인적자원 소모가 많았기에 이를 개선하기 위해 데이터 수집 및 저장을 자동화 기획 및 개발.",
      tags: ["Python", "Selenium", "BeautifulSoup", "MySQL", "SpreadSheet", "Analytics", "TagMnanager", "API"],
      role: "스크립트 기획 및 개발 전담",
      goal: "데이터 수집 후 정제 및 저장 프로세스 구축 & 운영 <br> 이커머스 판매처별 대규모 데이터 수집 로직 구현 <br> 정기 수집 작업의 자동화 및 오류 감지 시스템 구축",
      solutions: "Python 기반 Selenium, BeautifulSoup 조합으로 웹 크롤러 개발 <br> MySQL 연동을 통해 수집 데이터의 정형화 및 정기 백업 구조 구현 <br> 에러 모니터링 및 로깅 시스템, 관리자용 Google Spreadsheet 인터페이스 제공",
      results: [
        "<strong>주당 50시간</strong> 이상의 마케팅팀 수작업 업무 제거 (약 45개 제품 대상)",
        "인력 소모 감소 및 데이터 수집 오류율 대폭 감소",
        "여러 부서에서 필요한 데이터에 대한 실시간 접근성 확보",
        "마케팅 보고 및 의사 결정 속도 개선 및 KPI 기반 전략 강화",
      ],
      imageUrls: [
        "/assets/img/portfolio/portfolio-project-1.png"
    ]},
    project2: {
      title: "BI 대시보드 구축 및 운영",
      period: "2021년 04월 - 2023년 11월 (2년 7개월)",
      description: "수집된 데이터를 기반으로 BI 대시보드를 구축 & 팀원들이 분석할 수 있도록 지원했습니다. <br> 데이터 통합, 실시간 분석, 부서 간 공유를 목표로 대시보드 설계 및 구현을 담당했습니다. <br> BI 대시보드의 주요 기능은 데이터 시각화, 실시간 데이터 업데이트, 사용자 맞춤형 대시보드 제공입니다.",
      tags: ["Python", "MySQL", "Looker Studio", "Streamlit", "Tableau"],
      role: "BI 대시보드 기획 및 개발",
      goal: "다양한 데이터 소스 통합 <br> 로컬 환경에서 개발 및 배포 간소화 <br> 대시보드 UX 최적화 및 비개발자에 대한 직관성 확보 ",
      solutions: "MySQL을 활용한 주요지표 데이터 구성 <br> Streamlit 내부 웹 인터페이스 개발 및 테스트 환경 확보 <br> Looker Studio를 활용한 데이터 시각화 ",
      results: [
        "수동화 리포트 작성 시간 <strong>80% 단축 (주당 5시간 절감)</strong>",
        "다양한 부서의 요구에 맞는 맞춤형 데이터 시각화 제공",
        "API를 통한 다양한 내부 시스템과의 연동 가능성 확보"
      ],
      imageUrls: [
        "/assets/img/portfolio/portfolio-project-2.png",
        "/assets/img/portfolio/portfolio-project-3.png"
    ]},
    project3: {
      title: "Slack 데이터 자동 알림 시스템",
      period: "2022년 07월 - 2023년 11월 (1년 4개월)",
      description: "Slack API를 활용 일일 핵심 데이터 지표를 정해진 시간 팀 채널 알림 시스템 구축 <br> DAU, MAU, Turnover 등 중요 지표를 시각화하여 전달.",
      tags: ["Python", "MySQL", "Slack API"],
      role: "시스템 기획 및 개발",
      goal: "특정시간 스케쥴진행 <br> 데이터 수집 및 주요지표의 직관성 확보",
      solutions: "스케줄러 예약 시스템 <br> MySQL 핵심 지표 추출 및 분석 <br> 직관적으로 이해할 수 있도록 메시지 구성",
      results: [
        "팀 전체의 데이터 인식 및 이해도 향상",
        "실시간 비즈니스 지표 모니터링으로 빠른 대응 가능",
        "이슈 발생 시 즉각적인 알림으로 조기 대응 체계 마련",
        "데이터 기반 논의 활성화"
      ],
      imageUrls: [
        "/assets/img/portfolio/portfolio-project-4.png"
    ]},
    project4: {
      title: "검색어 순위 추적 GUI 프로그램",
      period: "2022년 04월 - 2023년 11월 (1년 7개월)",
      description: "검색 포털에서의 키워드 순위를 실시간으로 추적 및 API를 통해 데이터를 수집할 수 있는 사용자 친화적 GUI 프로그램을 개발.",
      tags: ["Python", "Tkinter", "BeautifulSoup", "API"],
      role: "프로그램 기획 및 개발",
      goal: "비개발자 사용자를 위한 직관적인 인터페이스 설계 <br> API 수집 후 시간별 데이터 기록 <br> 검색 포털의 구조 변경에 대응 운영",
      solutions: "Tkinter를 활용한 GUI 개발 <br> 결과 데이터 정제 시간별 MySQL 저장 <br> ",
      results: [
        "마케팅팀의 키워드 분석 시간 검색과정 단순화",
        "경쟁사 키워드 전략 실시간 모니터링으로 마케팅 효율성 증대",
        "데이터 기반 SEO 전략 수립, 월 CPC 50% 절감 및 안정화",
        "비개발자도 쉽게 사용할 수 있는 도구 제공으로 팀 역량 강화"
      ],
      imageUrls: [
        "/assets/img/portfolio/portfolio-project-5.png"
    ]}
  };

  // 모달 관련 요소
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeButton = document.querySelector('.close-button');


  // 프로젝트 카드 클릭 이벤트 리스너 등록
  var projectCards = document.querySelectorAll('.project-card');
  for (var i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener('click', function(event) {
      var projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  }

  // 모달 닫기 버튼 이벤트 리스너
  closeButton.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // 모달 외부 클릭 시 & Esc 키 누를 시 모달 닫기
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
  });

  // 프로젝트 모달 열기 함수
  function openProjectModal(projectId) {
    var project = projectsData[projectId];
    
    if (!project) return;
    
    modalTitle.textContent = project.title;
    
    // 모달 내용 구성
    var tagsHtml = '';
    for (var i = 0; i < project.tags.length; i++) {
      tagsHtml += '<span class="badge">' + project.tags[i] + '</span>';
    }
    
    var resultsHtml = '';
    for (var i = 0; i < project.results.length; i++) {
      resultsHtml += '<li>' + project.results[i] + '</li>';
    }

    var imagesHtml = '';
    if (project.imageUrls && project.imageUrls.length > 0) {
      var imageCountClass = '';
      if (project.imageUrls.length === 1) imageCountClass = 'one';
      else if (project.imageUrls.length === 2) imageCountClass = 'two';
      else imageCountClass = 'three';
    
      imagesHtml += `<div class="project-detail-section"><h4>스크린샷</h4><div class="screenshot-gallery ${imageCountClass}">`;
      for (var i = 0; i < project.imageUrls.length; i++) {
        imagesHtml += `<img src="${project.imageUrls[i]}" alt="${project.title} 스크린샷 ${i + 1}" class="screenshot-gallery-img">`;
      }
      imagesHtml += '</div></div>';
    }

    modalBody.innerHTML = `
      <div class="project-detail-section">
        <h4>프로젝트 기간</h4>
        <p>${project.period}</p>
      </div>
      <div class="project-detail-section">
        <h4>프로젝트 설명</h4>
        <p>${project.description}</p>
      </div>
      <div class="project-detail-section">
        <h4>주요 기술 스택</h4>
        <div class="project-tags">${tagsHtml}</div>
      </div>
      <div class="project-detail-section">
        <h4>역할</h4>
        <p>${project.role}</p>
      </div>
      <div class="project-detail-section">
        <h4>목표</h4>
        <p>${project.goal}</p>
      </div>
      <div class="project-detail-section">
        <h4>해결 방안</h4>
        <p>${project.solutions}</p>
      </div>
      <div class="project-detail-section">
        <h4>결과</h4>
        <ul>${resultsHtml}</ul>
      </div>
      ${imagesHtml}
    `;
    modal.style.display = "block";
  }  
});
