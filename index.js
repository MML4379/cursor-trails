const cursor = document.getElementById('cursor');
const cursorX = document.getElementById('cursorX');
const cursorY = document.getElementById('cursorY');
const emojis = document.getElementById('emojis');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {fill: "forwards"});
    cursorX.textContent = clientX;
    cursorY.textContent = clientY;
    emojis.textContent = makeid(15);
    emojis.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration=1200, fill="forwards"});
});

function makeid(length) {
    let result = '';
    const characters = '😁😀😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚☺🙂🤩🤗🤔🤨😐😑😶🙄😣😏😥😮';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}