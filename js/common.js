/**
 * KBS 재난현황판 2025 공통 스크립트
 * Transform Scale 방식 구현
 */

// Transform Scale 설정
const ScaleManager = {
    baseWidth: 1920,
    baseHeight: 1080,
    container: null,

    init() {
        this.container = document.querySelector('.scale-container');
        if (!this.container) {
            console.warn('scale-container not found');
            return;
        }

        this.updateScale();
        window.addEventListener('resize', () => this.updateScale());
        window.addEventListener('orientationchange', () => this.updateScale());
        window.addEventListener('fullscreenchange', () => this.updateScale());
    },

    updateScale() {
        const scaleX = window.innerWidth / this.baseWidth;
        const scaleY = window.innerHeight / this.baseHeight;
        const isVertical = scaleY < scaleX;

        const scale = isVertical ? scaleY : scaleX;

        this.container.style.transform = `scale(${scale})`;
        this.container.style.transformOrigin = isVertical ? 'top center' : 'top left';
        this.container.style.margin = isVertical ? '0 auto' : '0';
    },

    cleanup() {
        window.removeEventListener('resize', () => this.updateScale());
    }
};

// DOMContentLoaded 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    ScaleManager.init();
});

// Side Menu 기능
const SideMenu = {
    menuContainer: null,
    menuDim: null,
    openBtn: null,
    closeBtn: null,

    init() {
        this.menuContainer = document.querySelector('.side-menu-container');
        this.menuDim = document.querySelector('.side-menu-dim');
        this.openBtn = document.querySelector('.btn-header-menu');
        this.closeBtn = document.querySelector('.btn-side-menu-close');

        if (!this.menuContainer || !this.menuDim || !this.openBtn || !this.closeBtn) {
            console.warn('Side menu elements not found');
            return;
        }

        this.attachEvents();
    },

    attachEvents() {
        // 메뉴 열기
        this.openBtn.addEventListener('click', () => this.open());

        // 메뉴 닫기
        this.closeBtn.addEventListener('click', () => this.close());

        // 딤 클릭 시 닫기
        this.menuDim.addEventListener('click', () => this.close());

        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    },

    open() {
        this.menuContainer.classList.add('active');
        this.menuDim.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    },

    close() {
        this.menuContainer.classList.remove('active');
        this.menuDim.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
};

// DOMContentLoaded 시 Side Menu 초기화
document.addEventListener('DOMContentLoaded', () => {
    SideMenu.init();
});
