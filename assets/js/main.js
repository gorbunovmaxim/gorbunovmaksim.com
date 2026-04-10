(function initBelgradeClock() {
    const timeNode = document.getElementById('belgrade-time');
    if (!timeNode) {
        return;
    }

    const timeZone = 'Europe/Belgrade';
    const formatters = {
        hour24: new Intl.DateTimeFormat('en-GB', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }),
        hour12: new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }),
    };

    let is24Hour = true;

    function renderTime() {
        const now = new Date();
        const currentTime = is24Hour
            ? formatters.hour24.format(now)
            : formatters.hour12.format(now);

        timeNode.textContent = currentTime;
        timeNode.setAttribute('aria-label', is24Hour
            ? 'Belgrade time. Click to switch to 12-hour format.'
            : 'Belgrade time. Click to switch to 24-hour format.');
    }

    timeNode.addEventListener('click', () => {
        is24Hour = !is24Hour;
        renderTime();
    });

    renderTime();
    window.setInterval(renderTime, 1000);
})();
