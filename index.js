const cursor = document.getElementById('cursor');
const cursorX = document.getElementById('cursorX');
const cursorY = document.getElementById('cursorY');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {fill: "forwards"});
    cursorX.textContent = clientX;
    cursorY.textContent = clientY;
});