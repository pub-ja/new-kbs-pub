/**
 * KBS 재난현황판 2025 - 텍스트 스크롤 애니메이션
 * 텍스트가 끊김 없이 무한 루프로 흐름
 */
(function () {
  "use strict";

  // 설정
  const PIXELS_PER_SECOND = 80; // 초당 픽셀 속도
  const START_DELAY = 1; // 시작 딜레이 (초) - 테스트용 1

  function initTextScroll() {
    const containers = document.querySelectorAll(".st-text-move");

    if (containers.length === 0) {
      console.log("Text scroll: No .st-text-move found");
      return;
    }

    console.log("Text scroll: Found " + containers.length + " containers");

    containers.forEach(function (container, index) {
      try {
        const textElement = container.querySelector("p");
        if (!textElement) return;

        // 이미 처리되었는지 확인
        if (textElement.getAttribute("data-scroll-initialized") === "true") {
          return;
        }

        // 원본 텍스트 저장
        const originalText = textElement.innerHTML;

        // 임시로 복원하여 원본 너비 측정
        textElement.innerHTML = originalText;
        const originalWidth = textElement.scrollWidth;
        const containerWidth = container.offsetWidth;

        // 텍스트가 컨테이너보다 짧으면 스크롤 안 함
        if (originalWidth < containerWidth) {
          console.log(
            "Text scroll " + index + ": 텍스트가 짧아서 스크롤 안 함",
            originalWidth + "px < " + containerWidth + "px"
          );
          textElement.setAttribute("data-scroll-initialized", "true");
          return;
        }

        // 텍스트 2개 복제 (끊김 없는 무한 루프를 위해)
        textElement.innerHTML = originalText + " &nbsp; " + originalText;

        // 초기화 완료 표시
        textElement.setAttribute("data-scroll-initialized", "true");

        // 실제 너비 측정 (복제 후)
        const textWidth = textElement.scrollWidth / 2; // 2개 중 1개의 너비

        // 시간 계산 (거리 / 속도)
        const duration = textWidth / PIXELS_PER_SECOND;

        // 애니메이션 적용 (딜레이 후 시작)
        textElement.style.animation =
          "textLoopInfinite " +
          duration +
          "s linear " +
          START_DELAY +
          "s infinite";

        console.log(
          "Text scroll " + index + ":",
          duration.toFixed(2) + "s",
          textWidth + "px",
          "(" + START_DELAY + "초 후 시작)"
        );
      } catch (error) {
        console.error("Text scroll " + index + " failed:", error);
      }
    });
  }

  // 화면 크기 변경 시 재계산
  function handleResize() {
    clearTimeout(window.textScrollResizeTimer);
    window.textScrollResizeTimer = setTimeout(function () {
      // 초기화 표시 제거하고 다시 초기화
      const textElements = document.querySelectorAll(".st-text-move p");
      textElements.forEach(function (el) {
        el.removeAttribute("data-scroll-initialized");
        el.style.animation = ""; // 애니메이션 초기화
      });
      initTextScroll();
    }, 500);
  }

  // DOM 로드 후 초기화
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTextScroll);
  } else {
    initTextScroll();
  }

  // 리사이즈 감지
  window.addEventListener("resize", handleResize);

  // 전역 함수로 export
  window.initTextScroll = initTextScroll;
})();
