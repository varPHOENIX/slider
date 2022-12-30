document.querySelectorAll('.slider').forEach((n, i) => {
    //Создание класса, конкадинация элемента window, интерполяция,так как классы начинаются с 1 то +1, n - текущий элемент
    window[`slider${i+1}`] = new Swiper(n, {
        //Переключение на свободном виде
        freeMode: true,
        //Центрирование слайдеров
        centeredSlides: true,
        direction: 'vertical',
        //Прокрутка
        mousewheel: true,
        //Сколько слайдов показывается
        slidesPerView: 1.75,

        slidesOffsetBefore: -125
    })
})
bindSwipers(slider1, slider2, slider3, slider4)
