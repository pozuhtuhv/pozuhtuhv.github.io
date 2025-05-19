document.addEventListener("DOMContentLoaded", function () {
  // topButton - 모든 페이지에서 작동
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

  // portfolio 관련 기능 - portfolio 페이지에서만 작동
  if (window.location.pathname.includes('/portfolio/')) {
    var projectsData = {
      project1: {
        title: "데이터 수집 자동화 시스템",
        period: "2021년 04월 - 2023년 11월 (2년 7개월)",
        description: "초기의 마케팅 팀원으로서 제품 데이터 정리에 참여하며 부서간 데이터 표준 불일치 문제를 발견했습니다. <br> 수동 데이터 수집 과정에서 발생하는 시간 낭비(주 25시간 이상)와 인적 오류를 최소화하기 위해 <b>자동화 파이프라인</b>을 설계했습니다. <br> 웹 스크래핑 기술과 API 통합을 활용하여 이커머스 플랫폼에서 판매 데이터, 소비자 리뷰, 경쟁사 가격 정보 등을 자동으로 수집하고 정형화된 데이터베이스에 저장하는 파이프라인을 구축했습니다.",
        tags: ["Python", "Selenium", "BeautifulSoup", "MySQL", "SpreadSheet", "Analytics", "TagMnanager", "API"],
        role: "스크립트 기획 및 개발 전담",
        goal: "데이터 수집 후 정제 및 저장 프로세스 구축 & 운영 <br> 이커머스 판매처별 대규모 데이터 수집 로직 구현 <br> <b>마케팅 의사결정 속도 개선</b>",
        solutions: "Python 기반 Selenium, BeautifulSoup 조합으로 웹 크롤러 개발 <br> MySQL 연동을 통해 수집 데이터의 정형화 및 정기 백업 구조 구현 <br> <b>효율성 최적화</b>를 위한 자동 알림 시스템 통합",
        results: [
          "<b>주당 25시간</b> 이상의 마케팅팀 수작업 데이터 수집 업무 제거 (약 50개 제품 대상)",
          "인력 소모 감소 및 <b>데이터 수집 오류율 90% 감소</b>",
          "여러 부서에서 필요한 데이터에 대한 <b>실시간 접근성 확보</b>",
          "<b>마케팅 의사결정 속도 60% 향상</b> 및 KPI 기반 전략 강화",
        ],
        imageUrls: [
          "/assets/portfolio/portfolio-project-1.webp"
      ]},
      project2: {
        title: "BI 대시보드 구축 및 운영",
        period: "2021년 04월 - 2023년 11월 (2년 7개월)",
        description: "자동화된 데이터 수집 시스템을 통해 확보된 대량의 비즈니스 데이터를 효과적으로 분석하고 시각화하기 위한 BI 솔루션을 기획했습니다. <br> <b>매출, 전환율, 마케팅 ROAS, 고객 행동</b> 등 핵심 비즈니스 지표를 직관적으로 파악할 수 있는 대시보드를 설계했습니다. <br> 쉽게 이해하고 활용할 수 있도록 사용자 친화적인 인터페이스를 구현했으며, <b>실시간 모니터링</b>이 가능한 데이터 파이프라인을 구축했습니다. <br> 특히 부서별 맞춤형 대시보드를 제공하여 각 팀이 필요로 하는 특정 인사이트를 효율적으로 얻을 수 있도록 지원했습니다.",
        tags: ["Python", "MySQL", "Looker Studio", "Streamlit", "Tableau"],
        role: "BI 대시보드 기획 및 개발(2인)",
        goal: "다양한 데이터 소스 통합 <br> 로컬 환경에서 개발 및 배포 간소화 <br> 대시보드 UX 최적화 및 <b>데이터 인식의 직관성 확보</b> <br> 부서별 맞춤형 KPI 모니터링 뷰 제공 <br> <b>데이터 기반 의사결정 문화</b> 정착 지원",
        solutions: "MySQL을 활용한 주요지표 데이터 구성 및 파이프라인 구축 <br> Streamlit 내부 웹 인터페이스 개발 및 테스트 환경 확보 <br> Looker Studio를 활용한 <b>데이터 시각화</b> <br> 사용자 활동 로그 분석을 통한 대시보드 지속적 개선",
        results: [
          "수동화 리포트 작성 시간 <b>80% 단축 (주당 5시간 절감)</b>",
          "다양한 부서의 요구에 맞는 맞춤형 데이터 시각화 제공",
          "API를 통한 내부 시스템과의 연동으로 데이터 혼동 해소",
          "<b>ROAS 250% 유지</b> 및 예산 최적화"
        ],
        imageUrls: [
          "/assets/portfolio/portfolio-project-2.webp",
          "/assets/portfolio/portfolio-project-3.webp"
      ]},
      project3: {
        title: "Slack 데이터 자동 알림 시스템",
        period: "2022년 07월 - 2023년 11월 (1년 4개월)",
        description: "팀원들의 데이터 접근성을 높이고 <b>데이터 기반 문화</b>를 강화하기 위해 Slack API를 활용한 자동 알림 시스템을 구축했습니다. <br>일일 핵심 비즈니스 지표(DAU, MAU, Turnover, 매출 등)를 정해진 시간에 팀 채널에 자동으로 게시하고, <b>전일 대비 변화율</b>과 함께 시각화 자료를 제공했습니다. <br> 사용자 피드백을 반영한 지속적인 개선을 통해 알림의 정보 밀도와 가독성을 최적화했으며, <b>이상치 감지</b> 및 데이터 해석을 돕는 컨텍스트 정보를 함께 제공했습니다.",
        tags: ["Python", "MySQL", "Slack API"],
        role: "시스템 기획 및 개발",
        goal: "특정시간 스케쥴진행 및 자동화 <br> 데이터 수집 및 주요지표의 직관성 확보 <br> <b>부서간 데이터 공유 및 협업 촉진</b> <br> 비기술 인력도 쉽게 이해할 수 있는 데이터 표현",
        solutions: "Schedule 기반 스케줄러 예약 시스템 구현<br> MySQL 핵심 지표 추출 및 분석 <br> <b>직관적으로 이해할 수 있도록 메시지 구성</b>",
        results: [
          "팀 전체의 데이터 인식 및 이해도 향상",
          "<b>실시간 보고서 모니터링</b>으로 마케팅 대응 속도 40% 향상",
          "이슈 발생 시 즉각적인 알림으로 <b>리스크 대응 시간 65% 단축</b>",
          "데이터 기반 논의 활성화 및 <b>팀 커뮤니케이션 효율성 증대</b>"
        ],
        imageUrls: [
          "/assets/portfolio/portfolio-project-4.webp"
      ]},
      project4: {
        title: "검색어 순위 추적 GUI 프로그램",
        period: "2022년 04월 - 2023년 11월 (1년 7개월)",
        description: "<b>SEO 및 키워드 마케팅 전략</b>의 효율성을 높이기 위해 주요 검색 포털에서의 키워드 순위를 실시간으로 추적하는 GUI 프로그램을 개발했습니다. <br> 마케팅팀이 기술적 지식 없이도 쉽게 사용할 수 있는 직관적인 인터페이스를 설계하였으며, 주요 검색 포털(네이버, 구글, 다음 등)에서 특정 키워드의 <b>순위 변화를 모니터링</b>할 수 있습니다. <br> 수집된 데이터는 시간별, 일별, 주간으로 시각화되어 분석할 수 있습니다. <br>이를 통해 마케팅팀은 <b>데이터에 기반한 키워드 전략</b>을 수립하고 <b>광고 예산을 최적화</b>할 수 있게 되었습니다.",
        tags: ["Python", "Tkinter", "BeautifulSoup", "API"],
        role: "프로그램 기획 및 개발",
        goal: "비개발자 사용자를 위한 직관적인 인터페이스 설계 <br> API 수집 후 시간별 데이터 기록 및 이력 추적 <br> <b>키워드 성과 분석</b>을 위한 다양한 시각화 도구 제공 <br> <b>검색 가시성 최적화</b> 전략 지원",
        solutions: "Tkinter를 활용한 GUI 개발 <br> 결과 데이터 정제 및 시간별 MySQL 저장 시스템 구축 <br> 키워드 성과 분석을 위한 시각화 기능 연결 <br> <b>경쟁사 키워드 분석</b> 기능 통합",
        results: [
          "마케팅팀의 키워드 분석 시간 <b>65% 단축</b> 및 검색 과정 단순화",
          "<b>경쟁사 키워드 전략 실시간 모니터링</b>으로 마케팅 효율성 증대",
          "데이터 기반 SEO 전략 수립, <b>월 CPC 50% 절감 및 안정화</b>",
          "키워드 검색 노출 순위 <b>1위 유지</b>"
        ],
        imageUrls: [
          "/assets/portfolio/portfolio-project-5.webp"
      ]}
    };

    // 모달 관련 요소
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
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        modal.style.display = "none";
      });
    }

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
  }
});