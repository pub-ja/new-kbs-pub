# KBS 재난현황판 퍼블리싱 가이드

## 📁 프로젝트 구조

```
new-kbs-pub/
├── index.html                   # 메인 인덱스 (페이지 관리 목록)
├── viewer-index.html            # 페이지 뷰어
├── legend-index.html            # 범례 모음
├── assets/
│   ├── images/
│   │   ├── common/              # 공통 아이콘, 로고
│   │   ├── legend/              # 범례 아이콘
│   │   ├── disaster/            # 재난별 이미지
│   │   └── temp/                # 임시 샘플 이미지 (실제 맵 연동 후 삭제 예정)
│   └── sample.mp4               # CCTV 샘플 영상
├── css/
│   ├── style.css                # 메인 스타일시트
│   ├── slick.css                # Slick 슬라이더 기본 스타일
│   ├── slick-theme.css          # Slick 슬라이더 테마
│   ├── slick_custom.css         # Slick 커스텀 스타일
│   ├── legend.css               # 범례 스타일
│   └── fonts.css                # 폰트 정의
├── js/
│   ├── jquery-3.6.0.min.js      # jQuery 3.6.0
│   ├── slick.min.js             # Slick 슬라이더
│   ├── chart.js                 # Chart.js 라이브러리
│   ├── chartjs-plugin-annotation.min.js
│   ├── common.js                # 공통 기능 (화면 스케일 등)
│   ├── script_slick.js          # Slick 초기화
│   ├── settings.js              # 환경설정 페이지 기능
│   ├── temperature-chart-init.js # 온도 차트 초기화
│   ├── dust-chart-init.js       # 미세먼지 차트 초기화
│   └── text-scroll.js           # 뉴스 텍스트 스크롤
└── html/
    ├── 00-환경설정.html
    ├── 01-태풍.html
    ├── 02-지진.html
    ├── 03-호우.html
    ├── 04-홍수.html
    ├── 05-산불.html
    ├── 06-미세먼지.html
    ├── 07-대설.html
    ├── 08-한파.html
    ├── 09-폭염.html
    ├── 10-01_기본특보판_all.html
    ├── 10-02_기본특보판_region.html
    ├── 11-01-popup-강풍알림-half.html
    ├── 11-02-popup-지진알림-half.html
    ├── 11-03-popup-지진알림-full.html
    ├── 11-04-popup-폭염알림-half.html
    └── 11-05-popup-호우알림-half.html
```

---

### 퍼블리싱 페이지

1. **index.html** - 메인 인덱스 페이지 (모든 페이지 목록 및 링크)
2. **viewer-index.html** - 페이지 뷰어 (모든 페이지를 한 화면에서 확인)
3. **legend-index.html** - 범례 모음 (모든 범례 스타일 확인)

---

## 페이지 구성

### 메인 페이지

- **10-01\_기본특보판\_all.html** - 전국 기본특보판
- **10-02\_기본특보판\_region.html** - 지역 기본특보판

### 재난별 상세 페이지

- **01-태풍.html** - 태풍 정보 (Chart.js 차트 포함)
- **02-지진.html** - 지진 정보
- **03-호우.html** - 호우 정보
- **04-홍수.html** - 홍수 정보 (댐 정보 포함)
- **05-산불.html** - 산불 현황
- **06-미세먼지.html** - 미세먼지 정보 (Chart.js 차트 포함)
- **07-대설.html** - 대설 정보
- **08-한파.html** - 한파 정보
- **09-폭염.html** - 폭염 정보

### 팝업 페이지

- **11-01-popup-강풍알림-half.html** - 강풍 알림 (Half)
- **11-02-popup-지진알림-half.html** - 지진 알림 (Half)
- **11-03-popup-지진알림-full.html** - 지진 알림 (Full)
- **11-04-popup-폭염알림-half.html** - 폭염 알림 (Half)
- **11-05-popup-호우알림-half.html** - 호우 알림 (Half)

### 설정 페이지

- **00-환경설정.html** - 환경설정

---

### 필수 라이브러리

- **jQuery 3.6.0** - DOM 조작 및 이벤트 처리
- **Slick Carousel 1.8.1** - 슬라이더/티커 컴포넌트
- **Chart.js** - 차트 라이브러리
- **Chart.js Annotation Plugin** - 차트 주석 플러그인

### 폰트

- **Spoqa Han Sans Neo** - 메인 폰트

### 최적화 화면

- **1920 x 1080** 해상도 기준

## CSS 클래스 가이드

### 1. 페이지별 메인 클래스

main 태그에 재난별 modifier 클래스 추가:

```html
<main class="main active -storm"></main>
<!-- 태풍 -->
<main class="main active -earthquake"></main>
<!-- 지진 -->
<main class="main active -rain"></main>
<!-- 호우 -->
<main class="main active -flood"></main>
<!-- 홍수 -->
<main class="main active -fire"></main>
<!-- 산불 -->
<main class="main active -dust"></main>
<!-- 미세먼지 -->
<main class="main active -snow"></main>
<!-- 대설 -->
<main class="main active -cold"></main>
<!-- 한파 -->
<main class="main active -heat"></main>
<!-- 폭염 -->
<main class="main active -main-all"></main>
<!-- 전국 기본특보판 -->
<main class="main active -settings"></main>
<!-- 환경설정 -->
```

### 2. 로고 배지 클래스

```html
<span class="logo-badge -all">전국</span>
<!-- 전국판 -->
<span class="logo-badge -region">지역</span>
<!-- 지역판 -->
```

### 3. 날씨 아이콘 클래스

```html
<!-- 낮 -->
<div class="weather-icon -sunny"></div>
<!-- 맑음 -->
<div class="weather-icon -sunny-cloudy"></div>
<!-- 구름조금 -->
<div class="weather-icon -mostly-cloudy"></div>
<!-- 구름많음 -->

<!-- 밤 -->
<div class="weather-icon -moon"></div>
<!-- 맑음 -->
<div class="weather-icon -moon-cloudy"></div>
<!-- 구름조금 -->
<div class="weather-icon -moon-mostly-cloudy"></div>
<!-- 구름많음 -->

<!-- 공통 -->
<div class="weather-icon -cloudy"></div>
<!-- 흐림 -->
<div class="weather-icon -rainy"></div>
<!-- 비 -->
<div class="weather-icon -snow"></div>
<!-- 눈 -->
<div class="weather-icon -rain-snow"></div>
<!-- 비 또는 눈 -->
<div class="weather-icon -snow-rain"></div>
<!-- 눈 또는 비 -->
<div class="weather-icon -thunderstorm"></div>
<!-- 낙뢰 -->
<div class="weather-icon -shower"></div>
<!-- 소나기 -->
<div class="weather-icon -rain-heavy"></div>
<!-- 가끔 비, 한때 비 -->
<div class="weather-icon -snow-heavy"></div>
<!-- 가끔 눈, 한때 눈 -->
<div class="weather-icon -rain-drop"></div>
<!-- 빗방울 -->
<div class="weather-icon -snow-drop"></div>
<!-- 눈날림 -->
<div class="weather-icon -fog"></div>
<!-- 연무 -->
<div class="weather-icon -mist"></div>
<!-- 안개 -->
<div class="weather-icon -mist-heavy"></div>
<!-- 박무 -->
<div class="weather-icon -dust"></div>
<!-- 황사 -->
```

### 4. 미세먼지 상태 클래스

```html
<div class="weather-air-value -good"></div>
<!-- 좋음 -->
<div class="weather-air-value -moderate"></div>
<!-- 보통 -->
<div class="weather-air-value -bad"></div>
<!-- 나쁨 -->
<div class="weather-air-value -very-bad"></div>
<!-- 매우나쁨 -->
```

### 5. 특보 상태 클래스

```html
<div class="alert-count-number -alert"></div>
<!-- 경보 (빨강) -->
<div class="alert-count-number -warning"></div>
<!-- 주의보 (노랑) -->
<div class="alert-count-number -good"></div>
<!-- 정상 (초록) -->
```

### 6. 빈 데이터 상태 클래스

데이터가 없을 때는 `is-empty` 클래스를 사용합니다:

```html
<!-- 데이터 있을 때 -->
<div class="alert-box">
  <div class="alert-count-number -alert">
    <span>6</span>
  </div>
  <p class="disaster-none-text">특보 없음</p>
  <!-- display: none -->
</div>

<!-- 데이터 없을 때 -->
<div class="alert-box is-empty">
  <div class="alert-count-number -alert">
    <span>6</span>
    <!-- display: none -->
  </div>
  <p class="disaster-none-text">특보 없음</p>
  <!-- display: block -->
</div>
```

**적용 가능한 요소:**

- `alert-box is-empty`
- `alert-dust-row is-empty`
- `disaster-content is-empty`
- `weather-air-value is-empty`

### 7. 팝업 알림 클래스

```html
<!-- Half 팝업 (화면 하단 절반) -->
<div class="alert-popup -half -wind occur">
  <!-- occur 클래스로 표시 -->
  <p class="alert-popup-label">강풍 주의 필요</p>
  <div class="alert-popup-box">
    <p class="alert-popup-title">순간 풍속 45m/s</p>
  </div>
</div>

<!-- Full 팝업 (전체 화면) -->
<div class="alert-popup -full occur">...</div>

<!-- 재난별 색상 클래스 -->
-wind
<!-- 강풍 (파랑) -->
-heat
<!-- 폭염 (빨강) -->
-rain
<!-- 호우 (파랑) -->
-low
<!-- 지진 낮은 강도 (노랑) -->
-high
<!-- 지진 높은 강도 (빨강) -->
```

---

## 🔄 Slick 슬라이더 설정

### React Slick 대응을 위한 구조

슬라이더는 `ul/li` 대신 **`div` 구조**로 작성되었습니다.

**이유:**

- React Slick 사용 시 `<Slider>` 컴포넌트가 `div`로 렌더링됨
- Slick이 자동으로 `.slick-list`, `.slick-track` 등의 래퍼 div를 생성
- 퍼블 단계에서 미리 div 구조로 만들어두면 React 전환 시 구조가 일치하여 CSS 수정 없이 적용 가능

```html
<!-- div 구조 (현재 사용) -->
<div class="slick-ticker-list" data-slick-vertical="true">
  <div class="ticker-item">...</div>
  <div class="ticker-item">...</div>
</div>
```

#### React Slick 렌더링 구조 차이 및 CSS 보정

**퍼블리싱 HTML (Slick 초기화 후):**

```html
<div class="slick-ticker-list">
  <!-- ticker-item과 slick-slide가 같은 요소 -->
  <div class="ticker-item -warning slick-slide slick-active">
    <div class="value">영덕</div>
  </div>
</div>
```

**React Slick 렌더링 결과:**

```html
<div class="slick-slider slick-ticker-list">
  <div class="slick-list" style="height: 0px">
    <!-- ⚠️ 높이 문제 -->
    <div class="slick-track">
      <div class="slick-slide slick-active">
        <!-- slick-slide -->
        <div>
          <!-- React Slick이 자동 생성하는 래퍼 div -->
          <div class="ticker-item -warning">
            <!-- ticker-item이 분리됨 -->
            <div class="value">영덕</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**문제점:**

1. React Slick이 자동으로 래퍼 div를 추가하면서 `slick-slide`와 `ticker-item`이 분리됨
2. flex 구조가 깨짐
3. 초기화 순서 문제로 `.slick-list`의 height가 0으로 계산됨

**CSS 보정 (slick_custom.css):**

```css
/* React Slick 높이 보정 */
.slick-list {
  height: auto !important; /* 또는 명시적인 높이값 */
}
```

이러한 구조 차이 때문에 퍼블리싱에서 미리 div 구조를 사용하고, CSS에서 `!important`로 높이를 보정했습니다.

### 1. data 속성으로 제어

```html
<!-- 세로 슬라이더 -->
<ul
  class="slick-ticker-list -center"
  data-slick-vertical="true"
  <!--
  세로
  방향
  --
>
  data-slick-slides="3"
  <!-- 보이는 개수 -->
  data-slick-speed="2000">
  <!-- 전환 속도(ms) -->
  <li class="ticker-item">...</li>
</ul>

<!-- 가로 슬라이더 -->
<div
  class="data-table-slider"
  data-slick-vertical="false"
  data-slick-slides="1"
  data-slick-speed="2000"
>
  ...
</div>

<!-- Fade 효과 -->
<ul data-slick-fade="true" data-slick-type="flood-level">
  ...
</ul>
```

### 2. 댐 슬라이더 특수 설정 (04-홍수.html)

#### 기본 구조

```html
<ul
  class="dam-slider"
  data-slick-vertical="false"
  data-slick-slides="1"
  data-slick-type="dam"
  data-dam-data-time="3000"
  data-dam-cctv-time="3000"
  data-dam-data-only-time="3000"
>
  <li class="dam-item" data-region-code="naju" data-has-cctv="true">
    <!-- CCTV가 있는 댐 -->
  </li>
  <li class="dam-item" data-region-code="naju" data-has-cctv="false">
    <!-- CCTV가 없는 댐 -->
  </li>
  <li class="dam-item" data-region-code="cheorwon" data-has-cctv="true">
    <!-- 다른 지역의 댐 -->
  </li>
</ul>
```

#### 데이터 속성 설명

**슬라이더 설정:**

- `data-slick-type="dam"` - 댐 슬라이더 타입 지정 (필수)
- `data-dam-data-time="3000"` - 데이터 화면 표시 시간 (ms)
- `data-dam-cctv-time="3000"` - CCTV 화면 표시 시간 (ms)
- `data-dam-data-only-time="3000"` - CCTV 없을 때 데이터 표시 시간 (ms)

**댐 아이템 설정:**

- `data-region-code="지역코드"` - 댐이 속한 지역 코드 (예: naju, cheorwon)
- `data-has-cctv="true/false"` - CCTV 유무

#### CCTV 유무에 따른 구조

**CCTV가 있는 경우 (data-has-cctv="true"):**

```html
<li class="dam-item" data-region-code="naju" data-has-cctv="true">
  <p class="dam-title">담양댐</p>
  <div class="dam-content-area">
    <!-- 왼쪽: 데이터 테이블 -->
    <div class="dam-data-wrap">
      <table class="data-table table-flood">
        <!-- 수위, 저수율, 방류량 등 데이터 -->
      </table>
      <table class="data-table table-dam">
        <!-- 총방류량, 유입량 등 -->
      </table>
    </div>
    <!-- 오른쪽: CCTV 이미지 -->
    <div class="dam-img-wrap">
      <img
        class="dam-img-cctv"
        src="../assets/images/temp/img_cctv_sample.jpg"
        alt="댐 CCTV"
      />
    </div>
  </div>
</li>
```

**CCTV가 없는 경우 (data-has-cctv="false"):**

```html
<li class="dam-item" data-region-code="naju" data-has-cctv="false">
  <p class="dam-title">장성댐</p>
  <div class="dam-content-area">
    <!-- 데이터만 전체 너비로 표시 -->
    <div class="dam-data-wrap">
      <table class="data-table table-flood">
        <!-- 수위, 저수율, 방류량 등 데이터 -->
      </table>
      <table class="data-table table-dam">
        <!-- 총방류량, 유입량 등 -->
      </table>
    </div>
  </div>
</li>
```

#### 동작 방식

1. **지역별 필터링**: 현재 선택된 지역의 `data-region-code`와 일치하는 댐만 표시
2. **자동 전환**:
   - CCTV가 있는 댐: 데이터 화면 → CCTV 화면 자동 전환
   - CCTV가 없는 댐: 데이터 화면만 표시
3. **전환 시간**: data 속성으로 각 화면의 표시 시간 제어

#### 데이터 연동 예시

```javascript
// 댐 데이터 업데이트
const damData = {
  regionCode: "naju",
  damName: "담양댐",
  hasCCTV: true,
  currentLevel: 4.74,
  restrictLevel: 5.6,
  normalLevel: 6.0,
  // ... 기타 데이터
};

// CCTV 이미지 URL 업데이트
if (damData.hasCCTV) {
  $(".dam-img-cctv").attr("src", damData.cctvImageUrl);
}
```

---

## ⚙️ JavaScript 초기화 순서

**HTML 하단 스크립트 로드 순서 (반드시 이 순서 유지):**

```html
<!-- 1. jQuery (Slick 의존성) -->
<script src="../js/jquery-3.6.0.min.js"></script>

<!-- 2. Slick Carousel -->
<script src="../js/slick.min.js"></script>

<!-- 3. Common JS (화면 스케일 관리) -->
<script src="../js/common.js"></script>

<!-- 4. Slick 초기화 -->
<script src="../js/script_slick.js"></script>

<!-- 5. Settings JS -->
<script src="../js/settings.js"></script>

<!-- 6. Chart 초기화 (필요한 페이지만) -->
<script src="../js/temperature-chart-init.js"></script>
<script src="../js/dust-chart-init.js"></script>

<!-- 7. Text Scroll Animation -->
<script src="../js/text-scroll.js"></script>
```

---

## 📱 화면 크기 조정 기능

### scale-container 클래스

전체 레이아웃을 감싸는 `all-wrap` 요소에 `scale-container` 클래스 추가 필수:

```html
<div class="all-wrap scale-container">
  <!-- 화면 스케일 자동 조정됨 -->
</div>
```

이 기능은 `common.js`에서 관리되며, 1920x1080 기준으로 자동 스케일 조정됩니다.

---

## 🗺️ 지도 범례 클래스

### 범례 타입별 클래스

```html
<!-- 태풍 범례 -->
<div class="map-legend -typoon">...</div>

<!-- 지진 범례 -->
<div class="map-legend -earthquake">...</div>

<!-- 호우/대설/폭염 등 그라데이션 범례 -->
<div class="map-legend -gradient -rain">...</div>
<div class="map-legend -gradient -snow">...</div>
<div class="map-legend -gradient -cold">...</div>
<div class="map-legend -gradient -heat">...</div>

<!-- 강수 레이더 -->
<div class="map-legend -gradient -radar">...</div>

<!-- 산불 범례 -->
<div class="map-legend -fire">...</div>

<!-- 미세먼지 범례 -->
<div class="map-legend -dust">...</div>

<!-- 홍수 범례 -->
<div class="map-legend -flood">...</div>
```

---

## 🎬 애니메이션 클래스

### 텍스트 깜빡임 애니메이션

```html
<span class="text-animate -flash">6</span>
<!-- 기본 -->
<span class="text-animate -flash -s20">18호</span>
<!-- 큰 사이즈 -->
```

### 팝업 애니메이션 속도 조정

```html
<!-- 인라인 스타일로 애니메이션 속도 조정 가능 -->
<div class="alert-popup -half -wind occur" style="animation-duration: 1s;">
  ...
</div>
```

---

## 🔍 개발 팁

### 1. 뉴스 스크롤

`text-scroll.js`에서 관리되며, 무한 스크롤 복제 방식입니다.

```html
<!-- news-container에 active 클래스로 표시/숨김 -->
<div class="news-container active">
  <div class="st-text-move">
    <p>
      <span class="news-label"> < 이 시각 주요 뉴스 > </span>
      <span class="news-text">...</span>
    </p>
  </div>
</div>
```

### 2. 사이드 메뉴 활성화

현재 페이지에 해당하는 메뉴 아이템에 `active` 클래스 추가:

```html
<li class="side-menu-item">
  <span class="side-menu-link active">특보</span>
  <!-- 현재 페이지 -->
</li>
```

### 3. Chart.js 데이터 업데이트

01-태풍.html의 인라인 스크립트 (330-563줄) 참고:

```javascript
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["20일 00시", ...],  // X축 라벨
    datasets: [{
      label: "최대풍속",
      data: [20, 20, 25, ...],    // Y축 데이터
      yAxisID: "y",                // 왼쪽 Y축
    }]
  },
  options: {
    scales: {
      y: { min: 0, max: 75 },      // 왼쪽 Y축 범위
      y1: { min: 870, max: 1020 }  // 오른쪽 Y축 범위
    }
  }
});
```

### 4. 미세먼지 차트 데이터

06-미세먼지.html에서 data 속성으로 제공:

```html
<!-- 초미세먼지(PM2.5) 차트 -->
<canvas
  id="dustChart"
  data-chart-values="[12,10,8,10,12,15,18,22,28,32,38,42,48,52,57,55,52,48,42,38,32,28,22,18]"
></canvas>

<!-- 미세먼지(PM10) 차트 -->
<canvas
  id="dustChart2"
  data-chart-values="[15,20,28,35,45,60,75,88,105,125,145,165,175,170,160,150,135,110,90,70,55,42,32,25]"
></canvas>
```

**데이터 형식:**

- 24개 값 = 0시~23시 (24시간)
- JSON 배열 형식으로 입력

---

## 📝 환경설정 페이지 (00-환경설정.html)

### 탭 전환

```html
<button type="button" class="tab-btn active" data-tab="screen">화면설정</button>
<button type="button" class="tab-btn" data-tab="data">데이터 정보</button>

<div class="tab-content active" id="tab-screen">...</div>
<div class="tab-content" id="tab-data">...</div>
```

### 토글 버튼

```html
<div class="toggle-radio-group">
  <button type="button" class="toggle-radio-btn active" data-value="on">
    ON
  </button>
  <button type="button" class="toggle-radio-btn" data-value="off">OFF</button>
</div>
```

### 지역 체크박스

```html
<label class="check-grid-button">
  <input type="checkbox" checked />
  <!-- 기본 선택 -->
  <span class="check-grid-button-label">강원특별자치도</span>
</label>
```

---

## 🚀 배포 전 체크리스트

- [ ] 모든 샘플 이미지 경로 확인 (`assets/images/temp/` 내 파일)
- [ ] 지도 API 연동 완료 후 인라인 style 속성 제거
- [ ] 슬라이더 동작 확인 (세로/가로)
- [ ] 팝업 알림 동작 확인

---

### HTML 파일

- `00-환경설정.html` - 설정 페이지
- `01~09-재난명.html` - 재난별 상세 페이지
- `10-01_기본특보판_all.html` - 전국 특보판
- `10-02_기본특보판_region.html` - 지역 특보판
- `11-XX-popup-재난명알림-half/full.html` - 팝업

### CSS 클래스

- `.class-name` - 일반 클래스
- `.-modifier` - modifier 클래스 (BEM 방식)
- `.is-state` / `.-state` - 상태 클래스
- `data-*` - 데이터 속성 (JavaScript에서 사용)

---

## 🐛 알려진 이슈 및 해결방법

### 1. Slick 슬라이더가 작동하지 않을 때

- jQuery가 먼저 로드되었는지 확인
- `script_slick.js`가 `slick.min.js` 이후에 로드되었는지 확인

### 2. 화면 스케일이 적용되지 않을 때

- `all-wrap` 요소에 `scale-container` 클래스가 있는지 확인
- `common.js`가 로드되었는지 확인

### 3. 뉴스 스크롤이 이상하게 동작할 때

- `text-scroll.js` 확인
- CSS에서 복제 스크롤 문제 발생 시 CSS 수정 필요

---

## 📌 업데이트 내역

### 2025-11-19

- 대설 페이지 가로 슬라이더 수정 및 맵박스 로고 삭제
- 슬라이더 div로 변경 (태풍, 지진, 호우, 홍수, 산불, 대설, 한파, 폭염)
- 로고 포인터 추가
- 지진 이미지 컨테이너 왼쪽 하단 추가
- 미세먼지 x 범례 label 하드코딩 수정
- slick 리액 보정 수정

### 2025-11-18

- 오류페이지 업데이트

### 2025-11-12

- 태풍 범례 아이콘 사이 간격 조정
- 범례 index에 규모 아이콘 modifier 클래스 하이픈 추가
- viewer-index.html 버튼 텍스트를 재난명으로 변경
- viewer-index.html에 환경설정 페이지 추가
- index.html 상단에 빠른 링크 추가 (페이지 뷰어, 범례 모음)
- 모든 HTML 파일 링크 연결 및 활성화
- README.md 최신 상태로 업데이트
