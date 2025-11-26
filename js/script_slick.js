/**
 * KBS 재난현황판 2025 - Slick Slider 스크립트
 * 기본특보판 전용 슬라이더
 *
 * React 마이그레이션 시: https://react-slick.neostack.com/
 */

/**
 * Slick Weather Slider (날씨 슬라이더)
 *
 * 기본특보판 전용
 * 현재 날씨와 단기예보 아이템 개수 차이가 많이 난다고 해서 n배수로 동작하게 하려고 했는데
 * autoplaySpeed 로는 동기화가 되지 않고 각각 안맞게 돌아서
 * 동기화를 위해 autoplay 를 제거하고 수동 제어해서 한번에 적용하도록 수정했습니다.
 * 동기화 없이 autoplaySpeed로 배수 초를 적용했는데 문제가 없다면 기존대로 autoplay: true, autoplaySpeed 로 각각 초를 주어서 동기화 해주셔도 됩니다.
 * ex) 현재 날씨 4000, 단기예보 (4000 * 2) 8000 >> 8초에 동시에 변경 되도록
 *
 */
class SlickWeatherSlider {
  constructor() {
    this.slider = null;
    this.init();
  }

  init() {
    if ($(".slick-weather-slider").length) {
      this.slider = $(".slick-weather-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // 수동 제어
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
    }
  }

  destroy() {
    if (this.slider && this.slider.slick) {
      this.slider.slick("unslick");
      this.slider = null;
    }
  }

  getSlider() {
    return this.slider;
  }
}

/**
 * Slick Short Term Slider (단기예보 슬라이더)
 *
 * 기본특보판 전용
 */
class SlickShortTermSlider {
  constructor() {
    this.slider = null;
    this.init();
  }

  init() {
    if ($(".slick-short-term-slider").length) {
      this.slider = $(".slick-short-term-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // 수동 제어
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
    }
  }

  destroy() {
    if (this.slider && this.slider.slick) {
      this.slider.slick("unslick");
      this.slider = null;
    }
  }

  getSlider() {
    return this.slider;
  }
}

/**
 * Slick Video Slider (비디오 CCTV 슬라이더)
 *
 * 기본특보판 전용
 */
class SlickVideoSlider {
  constructor() {
    this.slider = null;
    this.init();
  }

  init() {
    if ($(".slick-video-slider").length) {
      this.slider = $(".slick-video-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true, // fade 효과
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
      console.log("Slick Video Slider initialized");
    }
  }

  destroy() {
    if (this.slider && this.slider.slick) {
      this.slider.slick("unslick");
      this.slider = null;
    }
  }
}

/**
 * Slick Disaster Slider (재난 슬라이더)
 *
 * 기본특보판 전용
 */
class SlickDisasterSlider {
  constructor() {
    this.slider = null;
    this.init();
  }

  init() {
    if ($(".slick-disaster-slider").length) {
      this.slider = $(".slick-disaster-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true, // fade 효과
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
      console.log("Slick Disaster Slider initialized");
    }
  }

  destroy() {
    if (this.slider && this.slider.slick) {
      this.slider.slick("unslick");
      this.slider = null;
    }
  }
}

/**
 * Slick Disaster Tickers (재난 내부 세로형 티커들)
 *
 * 기본특보판 전용 - 재난 카드 내부의 여러 세로형 ticker들
 */
class SlickDisasterTickers {
  constructor() {
    this.tickers = {};
    this.init();
  }

  init() {
    // 세로형 ticker 공통 설정 (3개씩 표시)
    const tickerSettings = {
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 800,
      cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      pauseOnHover: false,
      pauseOnFocus: false,
    };

    // 각 재난 타입별 ticker 초기화
    const tickerTypes = [
      "cold",
      "snow",
      "wind",
      "dry",
      "dust",
      "heat",
      "rain",
      "storm",
      "tsunami",
      "typoon",
    ];

    tickerTypes.forEach((type) => {
      const selector = `.slick-disaster-${type} .slick-ticker-list`;
      if ($(selector).length) {
        this.tickers[type] = $(selector).slick(tickerSettings);
      }
    });

    console.log(
      "Slick Disaster Tickers 초기화 완료:",
      Object.keys(this.tickers)
    );
  }

  destroy() {
    Object.values(this.tickers).forEach((ticker) => {
      if (ticker && ticker.slick) {
        ticker.slick("unslick");
      }
    });
    this.tickers = {};
  }
}

/**
 * 초기화
 *
 * DOMContentLoaded 이벤트에서 Slick 슬라이더를 초기화합니다.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 기본특보판 슬라이더 초기화
  const weatherSlider = new SlickWeatherSlider();
  const shortTermSlider = new SlickShortTermSlider();

  // 날씨와 단기예보 슬라이더 동기화
  // 날씨: 4초마다, 단기예보: 8초마다 (날씨 2번 = 단기예보 1번)
  if (weatherSlider.getSlider()) {
    let weatherCount = 0;

    setInterval(() => {
      weatherSlider.getSlider().slick("slickNext");
      weatherCount++;

      // 8초마다 단기예보 슬라이더도 함께 전환 (있는 경우에만)
      if (weatherCount % 2 === 0 && shortTermSlider.getSlider()) {
        shortTermSlider.getSlider().slick("slickNext");
      }
    }, 4000);
  }

  new SlickVideoSlider();
  new SlickDisasterSlider();
  new SlickDisasterTickers();

  /* ============================================
     개별 판 공통 로직 (data 속성 기반)
     React Slick 마이그레이션 대비

     사용 예시:
     <div data-slick-vertical="true"
          data-slick-slides="3"
          data-slick-speed="2000"
          data-slick-fade="false">
       <div>slide 1</div>
       <div>slide 2</div>
     </div>

     data 속성:
     - data-slick-vertical: vertical 모드 (기본 true)
     - data-slick-slides: slidesToShow 개수 (기본 1)
     - data-slick-speed: autoplaySpeed 속도 (기본 2000)
     - data-slick-fade: fade 효과 (기본 false, fade면 vertical 무시)
     ============================================ */
  $("[data-slick-vertical]")
    .not(".slick-initialized")
    .each(function () {
      const $slider = $(this);

      // data 속성 읽기 (기본값 설정)
      const isVertical = $slider.data("slick-vertical") !== false;
      const slidesToShow = $slider.data("slick-slides") || 1;
      const autoplaySpeed = $slider.data("slick-speed") || 2000;
      const useFade = $slider.data("slick-fade") === true;
      const sliderType = $slider.data("slick-type");

      // Dam 슬라이더 특수 처리
      if (sliderType === "dam") {
        initDamSlider($slider);
        return; // 일반 슬라이더 초기화 건너뛰기
      }

      // Flood Level 슬라이더 특수 처리 (수위-댐 연동)
      if (sliderType === "flood-level") {
        initFloodLevelSlider($slider);
        return; // 일반 슬라이더 초기화 건너뛰기
      }

      // slick 초기화
      $slider.slick({
        vertical: useFade ? false : isVertical, // fade면 vertical 안 됨
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplaySpeed,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: useFade,
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });

      console.log(
        `데이터 기반 슬라이더 초기화: 세로=${isVertical}, 슬라이드수=${slidesToShow}, 속도=${autoplaySpeed}, 페이드=${useFade}`
      );
    });
});

/**
 * 댐 슬라이더 로직
 *
 * ============================================================================
 * 【핵심 로직】
 * ============================================================================
 * 각 댐에서 "데이터 화면"과 "CCTV 화면"을 타이머로 번갈아 표시합니다.
 *
 * 1. CCTV가 있는 댐:
 *    - 데이터 화면 3초 → CCTV 화면 3초 → 다음 댐
 *
 * 2. CCTV가 없는 댐:
 *    - 데이터 화면 3초 → 다음 댐
 *
 * ============================================================================
 * 【동작 모드】
 * ============================================================================
 * - **독립 모드**: 타이머 종료 시 자동으로 다음 댐으로 이동
 * - **제어 모드**: 수위 슬라이더가 외부에서 이동 명령 (setupFloodDamSync)
 *
 * ============================================================================
 * 【상태 관리】
 * ============================================================================
 * - damItems: 각 댐의 CCTV 보유 여부 배열
 * - isControlled: 제어 모드 여부
 * - currentTimeout: 실행 중인 타이머 (정리 필요)
 * - isTransitioning: 화면 전환 중 플래그 (중복 실행 방지)
 */
function initDamSlider($slider) {
  const dataTime = $slider.data("dam-data-time") || 3000;
  const cctvTime = $slider.data("dam-cctv-time") || 3000;
  const dataOnlyTime = $slider.data("dam-data-only-time") || 3000;

  // 제어 모드 판단: 수위 슬라이더 존재 여부
  const $floodSlider = $(".flood-level-slider[data-slick-type='flood-level']");
  const isControlled = $floodSlider.length > 0;

  let currentTimeout = null;
  let isTransitioning = false;

  // 댐 데이터 수집 (CCTV 보유 여부)
  const damItems = [];
  $slider.find(".dam-item").each(function () {
    const $item = $(this);
    damItems.push({
      hasCCTV: $item.attr("data-has-cctv") === "true",
      title: $item.find(".dam-title").text(),
    });
  });

  $slider.slick({
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // 타이머로 수동 제어
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    draggable: false,
  });

  /**
   * 댐 화면 전환 로직
   *
   * 1. 데이터 화면 표시 (초기 상태)
   * 2. CCTV가 있으면:
   *    - dataTime 후 → CCTV 화면으로 교체
   *    - cctvTime 후 → 전환 완료
   * 3. CCTV가 없으면:
   *    - dataOnlyTime 후 → 전환 완료
   * 4. 독립 모드면 다음 댐으로 자동 이동
   */
  function handleDamSlide(currentIndex) {
    if (isTransitioning) return;
    isTransitioning = true;

    const damInfo = damItems[currentIndex];
    const $currentSlide = $slider.find(".slick-current");
    const $dataWrap = $currentSlide.find(".dam-data-wrap");
    const $cctvWrap = $currentSlide.find(".dam-img-wrap");

    if (damInfo.hasCCTV && $cctvWrap.length > 0) {
      // CCTV 있음: 데이터 → CCTV
      currentTimeout = setTimeout(() => {
        $dataWrap.addClass("hide");
        $cctvWrap.addClass("active");

        currentTimeout = setTimeout(() => {
          isTransitioning = false;
          if (!isControlled) {
            $slider.slick("slickNext");
          }
        }, cctvTime);
      }, dataTime);
    } else {
      // CCTV 없음: 데이터만
      currentTimeout = setTimeout(() => {
        isTransitioning = false;
        if (!isControlled) {
          $slider.slick("slickNext");
        }
      }, dataOnlyTime);
    }
  }

  // 슬라이드 전환 전: 타이머 정리 + 다음 슬라이드 초기화
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (currentTimeout) {
      clearTimeout(currentTimeout);
      currentTimeout = null;
    }

    const $nextSlide = $(slick.$slides[nextSlide]).filter(
      ":not(.slick-cloned)"
    );
    if ($nextSlide.length) {
      const $dataWrap = $nextSlide.find(".dam-data-wrap");
      const $cctvWrap = $nextSlide.find(".dam-img-wrap");
      $dataWrap.removeClass("hide");
      $cctvWrap.removeClass("active");
    }
  });

  // 슬라이드 전환 후: 화면 전환 시작
  $slider.on("afterChange", function (event, slick, currentSlide) {
    handleDamSlide(currentSlide);
  });

  // 첫 댐 초기 상태 설정 및 시작
  const $firstSlide = $slider.find(".slick-current");
  const $firstDataWrap = $firstSlide.find(".dam-data-wrap");
  const $firstCctvWrap = $firstSlide.find(".dam-img-wrap");
  $firstDataWrap.removeClass("hide");
  $firstCctvWrap.removeClass("active");
  handleDamSlide(0);

  console.log(
    `댐 슬라이더 초기화 완료: 데이터시간=${dataTime}ms, CCTV시간=${cctvTime}ms, 데이터전용시간=${dataOnlyTime}ms, 제어모드=${isControlled}`
  );
}

/**
 * Flood Level Slider 초기화 함수 (수위-댐 연동)
 *
 * 각 수위 지점이 표시되는 동안, 해당 지역의 댐들을 순차 표시
 * - 수위 지점과 댐이 data-region-code로 연결됨
 * - 수위 1개 → N개의 댐 순차 재생 → 다음 수위
 */
function initFloodLevelSlider($floodSlider) {
  const $damSlider = $(".dam-slider[data-slick-type='dam']");

  // 댐 슬라이더가 없으면 일반 슬라이더로 동작
  if (!$damSlider.length) {
    console.warn(
      "댐 슬라이더를 찾을 수 없습니다. 수위 슬라이더를 독립 모드로 실행합니다."
    );
    $floodSlider.slick({
      vertical: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: $floodSlider.data("slick-speed") || 6000,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 800,
      cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      pauseOnHover: false,
      pauseOnFocus: false,
    });
    return;
  }

  // Slick 초기화 전에 원본 데이터 수집
  const floodItems = [];
  $floodSlider.find(".flood-level-item").each(function (index) {
    floodItems.push({
      index: index,
      regionCode: $(this).attr("data-region-code") || "",
      $element: $(this),
    });
  });

  const damItems = [];
  $damSlider.find(".dam-item").each(function (index) {
    damItems.push({
      index: index,
      regionCode: $(this).attr("data-region-code") || "",
      hasCCTV: $(this).attr("data-has-cctv") === "true",
      $element: $(this),
    });
  });

  console.log(
    `슬라이더 초기화 전 데이터 수집: 수위 ${floodItems.length}개, 댐 ${damItems.length}개`
  );

  // 수위 슬라이더 초기화 (수동 제어)
  $floodSlider.slick({
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    draggable: false,
  });

  // 댐 슬라이더가 초기화될 때까지 대기
  let checkCount = 0;
  const maxChecks = 50; // 최대 5초 대기

  const checkDamSlider = setInterval(() => {
    checkCount++;
    console.log(`댐 슬라이더 초기화 대기 중... (${checkCount}/${maxChecks})`);

    if ($damSlider.hasClass("slick-initialized")) {
      clearInterval(checkDamSlider);
      console.log("댐 슬라이더 준비 완료, 동기화 설정 중...");
      setupFloodDamSync($floodSlider, $damSlider, floodItems, damItems);
    } else if (checkCount >= maxChecks) {
      clearInterval(checkDamSlider);
      console.error("댐 슬라이더 초기화 시간 초과!");
    }
  }, 100);

  console.log("수위 슬라이더 초기화 완료 (동기화 모드)");
}

/**
 * 수위-댐 동기화 로직
 *
 * ============================================================================
 * 【핵심 로직】
 * ============================================================================
 * 각 수위 지점이 표시되는 동안, 해당 지역의 모든 댐을 순차적으로 보여줍니다.
 *
 * 예시:
 * 1. 수위 "나주" 표시
 *    → 나주 댐1 (데이터 3초 + CCTV 3초)
 *    → 나주 댐2 (데이터 3초 + CCTV 3초)
 *    → 나주 댐3 (데이터 3초 + CCTV 3초)
 * 2. 모든 나주 댐 표시 완료 → 다음 수위 "광주"로 이동
 * 3. 반복...
 *
 * ============================================================================
 * 【매칭 알고리즘】
 * ============================================================================
 * 수위와 댐은 `data-region-code`로 연결:
 * - region-code 있음: 같은 코드의 댐들 모두 매칭 (1:N)
 * - region-code 없음: 순서대로 1:1 매칭
 *
 * ============================================================================
 * 【이동 규칙】
 * ============================================================================
 * 슬라이더는 항상 "앞으로만" 이동 (역방향 금지):
 * - 목표가 뒤에 있어도 끝까지 돌아서 앞으로 이동
 * - 예: 현재 3 → 목표 1 (총 5개) = 3→4→0→1 (3단계)
 * - 이유: 일관된 애니메이션 방향
 *
 * ============================================================================
 * 【재귀 구조】
 * ============================================================================
 * startDamCycle → showCurrentDam (재귀) → moveToNextFlood → startDamCycle
 *
 * ============================================================================
 * 【상태 관리】
 * ============================================================================
 * - currentFloodIndex: 현재 수위 지점 인덱스
 * - isProcessing: 댐 사이클 실행 중 플래그
 */
function setupFloodDamSync($floodSlider, $damSlider, floodItems, damItems) {
  const dataTime = $damSlider.data("dam-data-time") || 3000;
  const cctvTime = $damSlider.data("dam-cctv-time") || 3000;
  const dataOnlyTime = $damSlider.data("dam-data-only-time") || 3000;

  let currentFloodIndex = 0;
  let isProcessing = false;

  console.log(
    `동기화 설정: 수위 ${floodItems.length}개, 댐 ${damItems.length}개`
  );

  /**
   * 수위-댐 매칭 함수
   *
   * 【알고리즘】
   * 1. region-code로 매칭 (우선순위)
   *    예: "naju" 수위 → "naju" 댐들 모두 반환 (3개 가능)
   * 2. 순서로 매칭 (대체)
   *    예: 수위[0] → 댐[0] (1개만)
   * 3. 매칭 실패 → 빈 배열
   */
  function getDamsForFloodIndex(floodIndex) {
    const floodItem = floodItems[floodIndex];

    if (floodItem.regionCode) {
      const matchedDams = damItems.filter(
        (dam) => dam.regionCode === floodItem.regionCode
      );
      if (matchedDams.length > 0) {
        return matchedDams;
      }
    }

    if (damItems[floodIndex]) {
      return [damItems[floodIndex]];
    }

    return [];
  }

  /**
   * 댐 이동 함수 (앞으로만)
   *
   * 【알고리즘】
   * - 목표 인덱스까지 "앞으로만" 이동
   * - 뒤로 가야 할 때도 끝까지 돌아서 전진
   * - 순환: (total - current + target) 단계
   */
  function moveToTargetDam(targetIndex, callback) {
    const currentIndex = $damSlider.slick("slickCurrentSlide");
    const totalSlides = damItems.length;

    if (currentIndex === targetIndex) {
      if (callback) callback();
      return;
    }

    let stepsForward;
    if (targetIndex > currentIndex) {
      stepsForward = targetIndex - currentIndex;
    } else {
      stepsForward = totalSlides - currentIndex + targetIndex;
    }

    console.log(
      `인덱스 ${currentIndex}에서 ${targetIndex}로 이동 (${stepsForward}단계 전진)`
    );

    let step = 0;
    function moveNext() {
      if (step >= stepsForward) {
        if (callback) callback();
        return;
      }
      $damSlider.slick("slickNext");
      step++;
      setTimeout(moveNext, 900); // 애니메이션 대기
    }

    moveNext();
  }

  /**
   * 댐 사이클 실행
   *
   * 【알고리즘】
   * 1. 현재 수위의 댐들 찾기
   * 2. 댐 없음 → 6초 대기 → 다음 수위
   * 3. 댐 있음 → showCurrentDam() 재귀로 순차 표시
   */
  function startDamCycle(floodIndex) {
    if (isProcessing) return;
    isProcessing = true;

    const dams = getDamsForFloodIndex(floodIndex);
    const regionCode = floodItems[floodIndex].regionCode;

    console.log(
      `수위 인덱스 ${floodIndex} (지역: ${regionCode}): ${dams.length}개 댐 발견`
    );

    if (dams.length === 0) {
      setTimeout(() => {
        isProcessing = false;
        moveToNextFlood();
      }, 6000);
      return;
    }

    let currentDamIndex = 0;

    /**
     * 재귀 함수: 댐 순차 표시
     *
     * 【알고리즘】
     * 1. 댐으로 이동
     * 2. 표시 시간 대기 (CCTV 유무 따라)
     * 3. 다음 댐으로 (재귀)
     * 4. 모든 댐 완료 → 다음 수위
     */
    function showCurrentDam() {
      if (currentDamIndex >= dams.length) {
        isProcessing = false;
        moveToNextFlood();
        return;
      }

      const dam = dams[currentDamIndex];
      const damTime = dam.hasCCTV ? dataTime + cctvTime : dataOnlyTime;

      console.log(
        `댐 표시 중 ${currentDamIndex + 1}/${dams.length} (인덱스: ${
          dam.index
        }) ${damTime}ms 동안`
      );

      moveToTargetDam(dam.index, () => {
        setTimeout(() => {
          currentDamIndex++;
          showCurrentDam();
        }, damTime);
      });
    }

    showCurrentDam();
  }

  /**
   * 다음 수위로 이동
   *
   * 【알고리즘】
   * 1. 인덱스 증가 (순환)
   * 2. 수위 슬라이더 이동
   * 3. 새 수위의 댐 사이클 시작
   */
  function moveToNextFlood() {
    currentFloodIndex = (currentFloodIndex + 1) % floodItems.length;
    $floodSlider.slick("slickNext");
    startDamCycle(currentFloodIndex);
  }

  // 첫 수위부터 시작
  startDamCycle(currentFloodIndex);

  console.log(
    `수위-댐 동기화 설정 완료: 수위 ${floodItems.length}개, 댐 ${damItems.length}개`
  );
}
