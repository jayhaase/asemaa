// Handle iframe resizing
function setupIframeResizing() {
    const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            const height = entry.contentRect.height;
            // Send message to parent window
            window.parent.postMessage({
                type: 'resize',
                height: height
            }, '*');
        }
    });

    // Observe the main content element
    const content = document.querySelector('.content');
    if (content) {
        resizeObserver.observe(content);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', setupIframeResizing); 