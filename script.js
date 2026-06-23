(function() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    function setRotation(element, deg) {
        element.style.transform = `translateX(-50%) rotate(${deg}deg)`;
    }

    function updateClock() {
        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDeg = seconds * 6;
        const minuteDeg = minutes * 6 + seconds * 0.1;
        const hourDeg = (hours % 12) * 30 + minutes * 0.5;

        setRotation(secondHand, secondDeg);
        setRotation(minuteHand, minuteDeg);
        setRotation(hourHand, hourDeg);
    }

    updateClock();

    setInterval(updateClock, 1000);

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateClock();
        }
    });
})();