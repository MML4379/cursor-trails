const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {fill: "forwards"});
})