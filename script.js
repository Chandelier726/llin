// 1. 折叠面板交互
const collapseHeaders = document.querySelectorAll('.collapse-header');
collapseHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const collapse = document.getElementById(targetId);
        collapse.classList.toggle('active');
        header.classList.toggle('active');
    });
});

// 2. 导航平滑滚动（自动匹配链接与section的id）
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. 回到顶部按钮
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { // 滚动超过500px时显示
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
});
backTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
