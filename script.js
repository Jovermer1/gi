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









