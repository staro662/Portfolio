/**
 * NAVIGATION.JS - 导航功能脚本
 * 功能: 滚动效果、移动端菜单、平滑滚动、表单处理
 * 作者: UX Designer
 * 更新: 2025-09-29
 */

// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function () {

    /* ========================================
       导航栏滚动效果 / Navbar Scroll Effect
       ======================================== */

    /**
     * 初始化导航栏滚动效果
     * 当页面滚动超过50px时，导航栏添加背景和阴影
     */
    function initNavbarScroll() {
        // 获取导航栏元素
        const navbar = document.getElementById('navbar');

        // 如果导航栏不存在，退出函数
        if (!navbar) return;

        /**
         * 处理滚动事件
         * 根据滚动位置添加或移除样式类
         */
        function handleScroll() {
            // 获取当前滚动位置
            const scrollPosition = window.scrollY || window.pageYOffset;

            // 如果滚动超过50px
            if (scrollPosition > 50) {
                // 添加滚动后的样式
                navbar.classList.add('scrolled', 'bg-white', 'shadow-md');
                navbar.classList.remove('bg-transparent');
            } else {
                // 移除滚动后的样式，恢复透明
                navbar.classList.remove('scrolled', 'bg-white', 'shadow-md');
                navbar.classList.add('bg-transparent');
            }
        }

        // 监听滚动事件
        window.addEventListener('scroll', handleScroll);

        // 页面加载时执行一次，以设置初始状态
        handleScroll();
    }

    /* ========================================
       移动端菜单切换 / Mobile Menu Toggle
       ======================================== */

    /**
     * 初始化移动端菜单功能
     * 点击汉堡按钮显示/隐藏菜单
     */
    function initMobileMenu() {
        // 获取菜单切换按钮
        const menuToggle = document.getElementById('menu-toggle');
        // 获取移动端菜单容器
        const mobileMenu = document.getElementById('mobile-menu');

        // 如果元素不存在，退出函数
        if (!menuToggle || !mobileMenu) return;

        /**
         * 切换菜单显示/隐藏
         */
        function toggleMenu() {
            // 检查菜单当前是否隐藏
            const isHidden = mobileMenu.classList.contains('opacity-0');

            if (isHidden) {
                // 显示菜单
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto', 'active');
                // 切换按钮图标为关闭图标
                menuToggle.innerHTML = '<i class="fas fa-times text-xl"></i>';
            } else {
                // 隐藏菜单
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'active');
                // 切换按钮图标为汉堡图标
                menuToggle.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        }

        // 点击按钮时切换菜单
        menuToggle.addEventListener('click', toggleMenu);

        /**
         * 点击菜单外部时关闭菜单
         */
        document.addEventListener('click', function (event) {
            // 检查点击是否在菜单或按钮外部
            const isClickInside = mobileMenu.contains(event.target) || menuToggle.contains(event.target);

            // 如果点击在外部且菜单是打开的
            if (!isClickInside && !mobileMenu.classList.contains('opacity-0')) {
                toggleMenu(); // 关闭菜单
            }
        });
    }

    /* ========================================
       平滑滚动 / Smooth Scroll
       ======================================== */

    /**
     * 初始化平滑滚动功能
     * 点击锚点链接时平滑滚动到目标位置
     */
    function initSmoothScroll() {
        // 获取所有以#开头的链接（锚点链接）
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        // 遍历所有锚点链接
        anchorLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                // 获取链接的href属性值
                const targetId = this.getAttribute('href');

                // 如果是单独的#，不处理
                if (targetId === '#') return;

                // 阻止默认的跳转行为
                e.preventDefault();

                // 获取目标元素
                const targetElement = document.querySelector(targetId);

                // 如果目标元素不存在，退出
                if (!targetElement) return;

                // 关闭移动端菜单（如果打开）
                const mobileMenu = document.getElementById('mobile-menu');
                const menuToggle = document.getElementById('menu-toggle');

                if (mobileMenu && !mobileMenu.classList.contains('opacity-0')) {
                    mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                    mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'active');
                    if (menuToggle) {
                        menuToggle.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                    }
                }

                // 计算目标位置（减去导航栏高度80px）
                const offsetTop = targetElement.offsetTop - 80;

                // 平滑滚动到目标位置
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // 平滑滚动
                });
            });
        });
    }

    /* ========================================
       活动导航链接 / Active Navigation Link
       ======================================== */

    /**
     * 高亮当前页面区域对应的导航链接
     */
    function initActiveNavLink() {
        // 获取所有章节元素
        const sections = document.querySelectorAll('section[id]');
        // 获取所有导航链接
        const navLinks = document.querySelectorAll('.nav-link');

        // 如果没有章节或链接，退出
        if (sections.length === 0 || navLinks.length === 0) return;

        /**
         * 检查并更新活动链接
         */
        function updateActiveLink() {
            // 获取当前滚动位置
            let currentSection = '';
            const scrollPosition = window.scrollY + 100; // 增加100px偏移

            // 遍历所有章节，找到当前可见的章节
            sections.forEach(function (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // 如果当前滚动位置在该章节范围内
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            // 更新导航链接的活动状态
            navLinks.forEach(function (link) {
                // 移除所有链接的active类
                link.classList.remove('active');

                // 如果链接指向当前章节，添加active类
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        }

        // 监听滚动事件
        window.addEventListener('scroll', updateActiveLink);

        // 页面加载时执行一次
        updateActiveLink();
    }

    /* ========================================
       表单处理 / Form Handling
       ======================================== */

    /**
     * 初始化联系表单功能
     */
    function initContactForm() {
        // 获取联系表单
        const contactForm = document.querySelector('#contact form');

        // 如果表单不存在，退出
        if (!contactForm) return;

        /**
         * 处理表单提交
         */
        contactForm.addEventListener('submit', function (e) {
            // 阻止默认提交行为
            e.preventDefault();

            // 获取表单数据
            const formData = {
                name: document.getElementById('name')?.value || '',
                email: document.getElementById('email')?.value || '',
                subject: document.getElementById('subject')?.value || '',
                message: document.getElementById('message')?.value || ''
            };

            // 简单的客户端验证
            if (!formData.name || !formData.email || !formData.message) {
                alert('请填写所有必填字段。');
                return;
            }

            // 邮箱格式验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('请输入有效的邮箱地址。');
                return;
            }

            // 这里应该发送数据到服务器
            // 目前只是显示确认消息
            console.log('表单数据:', formData);

            // 显示成功消息
            alert('感谢您的留言！我会尽快回复您。');

            // 重置表单
            contactForm.reset();
        });

        /**
         * 实时表单验证
         */
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function () {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (this.value && !emailRegex.test(this.value)) {
                    this.classList.add('error');
                    // 可以添加错误提示
                } else {
                    this.classList.remove('error');
                }
            });
        }
    }

    /* ========================================
       返回顶部按钮 / Back to Top Button
       ======================================== */

    /**
     * 初始化返回顶部按钮（可选功能）
     */
    function initBackToTop() {
        // 创建返回顶部按钮
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full shadow-lg opacity-0 pointer-events-none transition z-50 flex items-center justify-center hover:bg-accent/90';
        backToTopBtn.id = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', '返回顶部');

        // 添加到页面
        document.body.appendChild(backToTopBtn);

        /**
         * 根据滚动位置显示/隐藏按钮
         */
        function toggleBackToTop() {
            const scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition > 500) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }

        // 监听滚动事件
        window.addEventListener('scroll', toggleBackToTop);

        // 点击按钮返回顶部
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ========================================
       初始化所有功能 / Initialize All Functions
       ======================================== */

    // 调用所有初始化函数
    initNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLink();
    initContactForm();
    initBackToTop();

    // 在控制台输出加载成功消息
    console.log('✅ Navigation.js loaded successfully');

}); // DOMContentLoaded 结束