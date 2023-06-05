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
    
    window.addEventListener('keydown', (e) => {
    if (e.keyCode === "space") {
        clientX = 690;
        clientY = 690;
        cursor.style.left = 690;
        cursor.style.top = 690;    
    }
})
});

