document.addEventListener("DOMContentLoaded", function() {

    let myFunction = function() { // Тело функции
        let integriruemtext = document.getElementById('integriruemtext');

        integriruemtext.textContent = "Hi student!"; // Добавили текст в див

        integriruemtext.style.fontFamily = 'CarlaSansLight'; // добавили стили к тексту 
        integriruemtext.style.fontSize = "35px"; // добавили стили к тексту 
    }; 
    
    myFunction(); // Вызов функции


    document.addEventListener('scroll', function() {
        let images = ['wow.gif', 'homer.gif',  'pika.gif',  'kuki.gif'];
        let windowHeight = window.innerHeight;
        let scrollTop = window.scrollY;
    
        // Вычисляем индекс изображения на основе прокрутки
        let index = Math.floor(scrollTop / (windowHeight / images.length));
        if (index < images.length) {
            let image = document.querySelector('.image');
            image.src = './images/' + images[index]; // Путь к изображению
        }
    });
    
    
    
    
    
});

