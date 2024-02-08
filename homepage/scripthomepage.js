//scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const target = tag.getAttribute('data-target');
            const options = document.querySelectorAll('.options');

            options.forEach(option => {
                if (option.id === target) {
                    option.classList.toggle('active');
                } else {
                    option.classList.remove('active');
                }
            });

            // เรียกใช้งานฟังก์ชันเพื่อแสดงค่าที่เกี่ยวข้อง
            displayValue(target);
        });
    });

    // ปิดการแสดงผลเมื่อคลิกที่แท็กอีกครั้ง
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('tag')) {
            const options = document.querySelectorAll('.options');

            options.forEach(option => {
                option.classList.remove('active');
            });
        }
    });

    // ฟังก์ชันสำหรับแสดงค่าที่เกี่ยวข้อง
    function displayValue(target) {
        const option = document.getElementById(target);
        const value = option.innerText;
        console.log(value); // แสดงค่าใน console สำหรับการทดสอบ คุณสามารถเปลี่ยนแปลงการแสดงผลได้ตามที่ต้องการ
    }
});

let currentSlide = 0;

function slide(direction) {
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * slides[0].offsetWidth;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}px)`;
}


