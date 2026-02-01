// Figma frames: Desktop 467-716 (1440px), Mobile 467-786 (375px)
const DESIGN_WIDTH = 1440;   // Figma desktop frame width
const MAX_SCALED_WIDTH = 3600;
const MOBILE_BREAKPOINT = 767;   // Switch to mobile frame layout
const TABLET_BREAKPOINT = 1439;  // Switch to tablet / desktop scale

// State
let rafId = null;
let currentMode = null; // 'mobile', 'tablet', or 'desktop'

// Main update function
function updateLayout() {
    const viewportWidth = window.innerWidth;
    const container = document.querySelector('.container');
    const stage = document.querySelector('.scale-stage');
    
    if (!container || !stage) return;
    
    // Determine current mode based on breakpoints
    let newMode;
    if (viewportWidth <= MOBILE_BREAKPOINT) {
        newMode = 'mobile';
    } else if (viewportWidth <= TABLET_BREAKPOINT) {
        newMode = 'tablet';
    } else {
        newMode = 'desktop';
    }
    
    // Handle mobile and tablet modes
    if (newMode === 'mobile' || newMode === 'tablet') {
        // Reset all transforms and let CSS handle layout
        container.style.transform = '';
        container.style.marginLeft = '';
        stage.style.height = '';
        stage.style.width = '';
        currentMode = newMode;
    } else {
        // Desktop: scale layout mode (1440px and above)
        currentMode = 'desktop';
        
        // Calculate scale with min 1.0 and max based on MAX_SCALED_WIDTH
        const maxScale = MAX_SCALED_WIDTH / DESIGN_WIDTH;
        const scale = Math.min(Math.max(viewportWidth / DESIGN_WIDTH, 1), maxScale);
        
        // Calculate scaled width
        const scaledWidth = DESIGN_WIDTH * scale;
        
        // Calculate left offset to center the container
        const leftOffset = Math.max(0, (viewportWidth - scaledWidth) / 2);
        
        // Apply transform and centering
        container.style.transform = `scale(${scale})`;
        container.style.marginLeft = `${leftOffset}px`;
        
        // Measure actual rendered dimensions
        const rect = container.getBoundingClientRect();
        
        // Set stage dimensions to match scaled content
        stage.style.height = `${rect.height}px`;
        stage.style.width = '100%';
    }
}

// Debounced resize handler using RAF
function handleResize() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(updateLayout);
}

// Initialize
function init() {
    // Initial layout update
    updateLayout();
    
    // Handle resize events
    window.addEventListener('resize', handleResize);
    
    // Re-measure after fonts load to fix any height shifts
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            updateLayout();
            // Update again after a brief delay to ensure everything is rendered
            setTimeout(updateLayout, 100);
        });
    }
    
    // Smooth scroll to top
    const goUpLink = document.querySelector('.go-up');
    if (goUpLink) {
        goUpLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
