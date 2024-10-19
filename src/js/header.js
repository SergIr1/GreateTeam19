let lastScrollY = 0;

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var currentScrollY = window.scrollY;
    
    // Если прокручиваем вниз и прокрутили больше, чем на 100px — скрываем хедер
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden');
    } 
    // Если прокручиваем вверх — показываем хедер
    else if (currentScrollY < lastScrollY) {
        header.classList.remove('hidden');
    }

    // Если прокрутка выше 100px, делаем хедер непрозрачным
    if (currentScrollY = 100) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }

    // Обновляем позицию скролла
    lastScrollY = currentScrollY;
});