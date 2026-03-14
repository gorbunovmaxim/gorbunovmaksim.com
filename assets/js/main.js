const DESIGN_WIDTH = 1440;
let rafId = null;
let scrollAnimationId = null;

function smoothScrollToTop(duration = 650) {
    const startY = window.scrollY || window.pageYOffset;
    if (startY <= 0) {
        return;
    }

    if (scrollAnimationId) {
        cancelAnimationFrame(scrollAnimationId);
    }

    const startTime = performance.now();

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress =
            progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const nextY = Math.round(startY * (1 - easedProgress));
        window.scrollTo(0, nextY);

        if (progress < 1 && nextY > 0) {
            scrollAnimationId = requestAnimationFrame(animate);
        } else {
            window.scrollTo(0, 0);
            scrollAnimationId = null;
        }
    };

    scrollAnimationId = requestAnimationFrame(animate);
}

function updateScale() {
    const stage = document.querySelector('.scale-stage');
    const site = document.querySelector('.site');

    if (!stage || !site) {
        return;
    }

    const viewportWidth = window.innerWidth;

    if (viewportWidth <= DESIGN_WIDTH) {
        site.style.transform = '';
        site.style.marginLeft = '';
        stage.style.height = '';
        return;
    }

    const scale = viewportWidth / DESIGN_WIDTH;

    site.style.transform = `scale(${scale})`;
    site.style.marginLeft = '0';
    stage.style.height = `${site.offsetHeight * scale}px`;
}

function scheduleUpdate() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
        updateScale();
    });
}

function init() {
    const site = document.querySelector('.site');
    const goUpLink = document.querySelector('.go-up-link');
    if (!site) {
        return;
    }

    updateScale();
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            scheduleUpdate();
            setTimeout(scheduleUpdate, 100);
        });
    }

    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(() => {
            scheduleUpdate();
        });
        observer.observe(site);
    }

    if (goUpLink) {
        goUpLink.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollToTop();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
