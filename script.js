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

// 2. 导航激活态（滚动时自动高亮）
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 1.5) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}
window.addEventListener('scroll', setActiveNav);

// 3. 回到顶部按钮
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
});
backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. 平滑滚动（适配侧边栏链接）
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
