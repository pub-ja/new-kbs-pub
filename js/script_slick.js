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
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true, // fade 효과
        cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
      console.log("Slick Weather Slider initialized");
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
      "dust", // 한파 관련
      "heat",
      "rain",
      "storm",
      "tsunami",
      "typoon", // 폭염 관련
    ];

    tickerTypes.forEach((type) => {
      const selector = `.slick-disaster-${type} .slick-ticker-list`;
      if ($(selector).length) {
        this.tickers[type] = $(selector).slick(tickerSettings);
      }
    });

    console.log(
      "Slick Disaster Tickers initialized:",
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
 * DOMContentLoaded 이벤트에서 기본특보판 Slick 슬라이더를 초기화합니다.
 * window 객체에 인스턴스를 저장하여 전역에서 접근 가능하도록 합니다.
 *
 * 사용 예시:
 * - window.slickWeather.destroy() // 날씨 slider 제거
 * - window.slickVideo.destroy() // 비디오 slider 제거
 * - window.slickDisaster.destroy() // 재난 slider 제거
 * - window.slickDisasterTickers.destroy() // 재난 ticker 제거
 */
document.addEventListener("DOMContentLoaded", () => {
  // 기본특보판 슬라이더 초기화
  window.slickWeather = new SlickWeatherSlider();
  window.slickVideo = new SlickVideoSlider();
  window.slickDisaster = new SlickDisasterSlider();
  window.slickDisasterTickers = new SlickDisasterTickers();
});
