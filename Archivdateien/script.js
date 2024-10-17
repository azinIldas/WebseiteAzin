window.onload = () => {
    const Slider = function(pages, pagination) {
        let slides = Array.from(pages.children),
            btns = [],
            count = slides.length,
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            slides.forEach((slide, index) => {
                let btn = document.createElement('li');
                btn.dataset.slide = index;
                btn.addEventListener('click', () => gotoNum(index));
                btns.push(btn);
                pagination.appendChild(btn);
            });
            btns[0].classList.add('active');
            updateTransform();
        }
        const updateTransform = () => {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateY(${(index - current) * 100}%)`;
            });
        };
        const gotoNum = (index) => {
            if((index != current) && !animation_state) {
                animation_state = true;
                setTimeout(() => animation_state = false, 500);
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                updateTransform();
                slides.forEach((slide, i) => {
                    slide.style.bottom = (current - i) * 100 + '%';
                })
            }
        }

        const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;

        pagesContainer.addEventListener('wheel', (e) => {
            e.deltaY > 0 ? gotoNext() : gotoPrev();
        });
        let touchStartY = 0;
        pagesContainer.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        pagesContainer.addEventListener('touchend', (e) => {
            touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        });
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

        init();
    }

    let pages = document.querySelector('.pages');
    let pagination = document.querySelector('.pagination');
    let slider = new Slider(pages, pagination)
}