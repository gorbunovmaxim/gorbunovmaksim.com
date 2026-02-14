const DESIGN_WIDTH = 1440;
const MAX_SCALED_WIDTH = 3600;
const MOBILE_BREAKPOINT = 767;
const TABLET_BREAKPOINT = 1439;

let rafId = null;

function updateLayout() {
    const viewportWidth = window.innerWidth;
    const container = document.querySelector('.container');
    const stage = document.querySelector('.scale-stage');
    
    if (!container || !stage) return;
    
    const isMobileOrTablet = viewportWidth <= MOBILE_BREAKPOINT || viewportWidth <= TABLET_BREAKPOINT;
    
    if (isMobileOrTablet) {
        container.style.transform = '';
        container.style.marginLeft = '';
        stage.style.height = '';
        stage.style.width = '';
    } else {
        const maxScale = MAX_SCALED_WIDTH / DESIGN_WIDTH;
        const scale = Math.min(Math.max(viewportWidth / DESIGN_WIDTH, 1), maxScale);
        const scaledWidth = DESIGN_WIDTH * scale;
        const leftOffset = Math.max(0, (viewportWidth - scaledWidth) / 2);
        container.style.transform = `scale(${scale})`;
        container.style.marginLeft = `${leftOffset}px`;
        const rect = container.getBoundingClientRect();
        stage.style.height = `${rect.height}px`;
        stage.style.width = '100%';
    }
}

function handleResize() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(updateLayout);
}

function init() {
    updateLayout();
    window.addEventListener('resize', handleResize);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            updateLayout();
            setTimeout(updateLayout, 100);
        });
    }
    const goUpLink = document.querySelector('.go-up');
    if (goUpLink) {
        goUpLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    const projectImagesWrapper = document.querySelector('.project-images-wrapper');
    if (projectImagesWrapper) {
        let scrollTimeout;
        projectImagesWrapper.addEventListener('scroll', function() {
            projectImagesWrapper.classList.add('is-scrolling');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                projectImagesWrapper.classList.remove('is-scrolling');
            }, 500);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
