document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const savedTheme = localStorage.getItem('theme');

    // Проверяем сохраненную тему при загрузке
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.textContent = 'Тёмная тема';
    }

    // Логика клика
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeBtn.textContent = isLight ? 'Тёмная тема' : 'Светлая тема';
        });
    }
});

window.calculatePack = function() {
    const select = document.getElementById('daysSelect');
    const resultDiv = document.getElementById('calcResult');
    
    if (select && resultDiv) {
        const days = select.value;
        let text = "";
        let imgUrl = "";

        if (days == "1") {
            text = "Твой выбор: Городской рюкзак (15-25 л)";
            imgUrl = "imgs/3510190d138611f192d56ab47642f0cd (копия).jpeg";
        } else if (days == "3") {
            text = "Твой выбор: Штурмовой рюкзак (30-45 л)";
            imgUrl = "imgs/f1b23ef8138511f1843d3e3650b2b7f8.jpeg";
        } else {
            text = "Твой выбор: Экспедиционный рюкзак (от 60 л)";
            imgUrl = "data:image/jpeg;base64,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";
        }
        
        // Вставляем результат
        resultDiv.innerHTML = `
            <p style="margin-bottom: 20px;">${text}</p>
            <img src="${imgUrl}" class="result-img" alt="Рюкзак">
        `;
    }
};


    // Эффект появления при скролле
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Применяем ко всем карточкам
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // След от курсора
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX - 20 + 'px';
        follower.style.top = e.clientY - 20 + 'px';
    });




