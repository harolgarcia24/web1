const button = document.getElementById('magicButton');
const container = document.getElementById('container');
const message = document.getElementById('winMessage');

function moveButton() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const maxX = containerWidth - btnWidth;
    const maxY = containerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

container.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const rect = button.getBoundingClientRect();

    const distanceX = Math.abs(mouseX - (rect.left + rect.width / 2));
    const distanceY = Math.abs(mouseY - (rect.top + rect.height / 2));

    const threshold = 70; 

    const shouldMove = Math.random() < 0.6;

    if (distanceX < threshold && distanceY < threshold && shouldMove) {
        moveButton();
    }
});

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
});

moveButton();