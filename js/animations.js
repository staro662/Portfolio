/**
 * ANIMATIONS.JS - 滚动动画脚本（完整版）
 * 功能: 滚动触发动画、Intersection Observer、性能优化
 * 作者: UX Designer
 * 更新: 2025-09-29
 */

document.addEventListener('DOMContentLoaded', function () {

    // 动画配置
    const animationConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // 初始化滚动动画
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) {
            console.warn('浏览器不支持 Intersection Observer');
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, animationConfig);

        const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // 自动添加动画类
    function addScrollAnimationClasses() {
        document.querySelectorAll('.card').forEach(function (card) {
            if (!card.classList.contains('scroll-animate')) {
                card.classList.add('scroll-animate');
            }
        });
    }

    // 检查动画偏好
    function checkMotionPreference() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            document.querySelectorAll('[class*="animate"]').forEach(function (el) {
                el.style.animation = 'none';
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        }
    }

    // 初始化所有功能
    checkMotionPreference();
    initScrollAnimations();
    addScrollAnimationClasses();

    console.log('✅ Animations.js loaded');
});