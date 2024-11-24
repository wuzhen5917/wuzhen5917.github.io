document.addEventListener('DOMContentLoaded', function() {
    // 粘性头部和导航高亮
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const backToTop = document.getElementById('back-to-top');
    const colorBlockDark = document.querySelector('.color-block.dark');
    const colorBlockLight = document.querySelector('.color-block.light');
    const sectionContent = document.querySelector('#about .section-content');

    function updateNav() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.classList.add('scrolled');
            backToTop.classList.remove('hidden');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.add('hidden');
        }

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');

                // 显示色块
                // 注意：当滚动到索引为1的部分（即"关于我"部分）时，触发色块的显示
                if (index === 1) {
                    colorBlockDark.style.left = '0';
                    colorBlockLight.style.left = '0';
                    sectionContent.style.marginLeft = '16.67%';
                } else {
                    colorBlockDark.style.left = '-16.67%';
                    colorBlockLight.style.left = '-16.67%';
                    sectionContent.style.marginLeft = '0';
                }
            }
        });
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // 初始化状态

    // 图片轮播
    const imageCarousel = document.querySelector('.image-carousel');
    const images = [
        'https://picsum.photos/id/1018/1000/600',
        'https://picsum.photos/id/1015/1000/600',
        'https://picsum.photos/id/1019/1000/600'
    ];
    let currentImageIndex = 0;

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.toggle('active', index === 0);
        imageCarousel.appendChild(img);
    });

    setInterval(() => {
        const imgs = imageCarousel.querySelectorAll('img');
        imgs[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgs[currentImageIndex].classList.add('active');
    }, 5000);

    // 文本轮播
    const textCarousel = document.querySelector('.text-carousel');
    const texts = [
        '我是一名热爱游戏开发的程序员',
        '我擅长使用Unreal Engine进行游戏开发',
        '我热衷于创造令人惊叹的视觉效果'
    ];
    let currentTextIndex = 0;

    function updateText() {
        textCarousel.textContent = texts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    updateText();
    setInterval(updateText, 3000);

    // 联系方式图标
    const contactWrapper = document.querySelector('.contact-wrapper');
    const contactLabel = document.querySelector('.contact-label');
    const contactIcons = document.querySelector('.contact-icons');

    contactWrapper.addEventListener('mouseenter', function() {
        contactIcons.style.display = 'block';
    });

    contactWrapper.addEventListener('mouseleave', function() {
        contactIcons.style.display = 'none';
    });

    // 添加平滑滚动到导航链接对应的部分
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // 初始化Lucide图标
    lucide.createIcons();
    
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab_btn');
    const all_content = document.querySelectorAll('.content');
    const line = document.querySelector('.line');
    
    // 初始化，设置第一个标签按钮和内容为激活状态
    tabs[0].classList.add('active');
    all_content[0].classList.add('active');
    line.style.left = `${tabs[0].offsetLeft}px`;
    line.style.width = `${tabs[0].offsetWidth}px`;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            // 移除所有按钮的 active 类
            tabs.forEach(tab => tab.classList.remove('active'));
            // 为被点击的按钮添加 active 类
            tab.classList.add('active');

            // 计算并设置 line 的位置和宽度
            line.style.left = `${tab.offsetLeft}px`;
            line.style.width = `${tab.offsetWidth}px`;

            // 移除所有内容的 active 类，然后为对应的内容添加 active 类
            all_content.forEach(content => content.classList.remove('active'));
            all_content[index+1].classList.add('active');
        });
    });

    // 添加平滑滚动到导航链接对应的部分
    const navLinks = document.querySelectorAll('.nav-link');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});


