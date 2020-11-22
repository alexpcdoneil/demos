
document.addEventListener('DOMContentLoaded', () => {
    const linkNodes = document.querySelectorAll('a');

    linkNodes.forEach((item, i) => {
        item.addEventListener('click', function linkHandle(e) {
            e.preventDefault();

            const response = prompt('Продолжить переход по ссылке (да/нет)?', 'да');
            if (response && response.toLowerCase() === 'да') {
                window.open(this.href);
            }
        });
    });
});




