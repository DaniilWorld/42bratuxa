function createFloatingNumbers() {
    for (let i = 0; i < 20; i++) {
        const number = document.createElement('div');
        number.className = 'floating-number';
        number.textContent = '42';
        number.style.left = Math.random() * 100 + 'vw';
        number.style.top = Math.random() * 100 + 'vh';
        number.style.animationDuration = (Math.random() * 10 + 10) + 's';
        document.body.appendChild(number);
    }
}

document.querySelector('.main-number').addEventListener('click', function() {
    const text = document.querySelector('.floating-text');
    text.classList.add('show');
    
    setTimeout(() => {
        text.classList.remove('show');
    }, 1000);
});

window.onload = createFloatingNumbers; 