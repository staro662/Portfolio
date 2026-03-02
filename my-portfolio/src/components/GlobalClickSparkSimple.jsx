import { useRef, useEffect, useCallback } from 'react';

const GlobalClickSpark = ({
    sparkColor = '#3eeabf',
    sparkSize = 18,
    sparkRadius = 50,
    sparkCount = 8,
    duration = 500,
    easing = 'ease-out',
    extraScale = 1.2,
    glowEffect = false,
    glowIntensity = 0.5,
    className = '',
    children
}) => {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);
    const animationFrameRef = useRef(null);

    // 设置全屏画布 - 添加错误处理
    useEffect(() => {
        try {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const updateCanvasSize = () => {
                try {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                } catch (error) {
                    console.warn('Canvas resize error:', error);
                }
            };

            updateCanvasSize();
            window.addEventListener('resize', updateCanvasSize);

            return () => {
                window.removeEventListener('resize', updateCanvasSize);
            };
        } catch (error) {
            console.warn('Canvas setup error:', error);
        }
    }, []);

    const easeFunc = useCallback(
        t => {
            switch (easing) {
                case 'linear':
                    return t;
                case 'ease-in':
                    return t * t;
                case 'ease-in-out':
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t * (2 - t);
            }
        },
        [easing]
    );

    // 动画渲染
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;

        const draw = timestamp => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current = sparksRef.current.filter(spark => {
                const elapsed = timestamp - spark.startTime;
                if (elapsed >= duration) {
                    return false;
                }

                const progress = elapsed / duration;
                const eased = easeFunc(progress);

                const distance = eased * sparkRadius * extraScale;
                const lineLength = sparkSize * (1 - eased);
                const opacity = 1 - eased;

                const x1 = spark.x + distance * Math.cos(spark.angle);
                const y1 = spark.y + distance * Math.sin(spark.angle);
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                // 绘制发光效果
                if (glowEffect) {
                    // 外层发光
                    ctx.shadowColor = sparkColor;
                    ctx.shadowBlur = 15 * glowIntensity * opacity;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    // 绘制发光的外圈
                    ctx.strokeStyle = sparkColor;
                    ctx.globalAlpha = opacity * 0.6;
                    ctx.lineWidth = 4;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }

                // 绘制主体火花
                ctx.shadowColor = glowEffect ? sparkColor : 'transparent';
                ctx.shadowBlur = glowEffect ? 8 * glowIntensity * opacity : 0;
                ctx.strokeStyle = sparkColor;
                ctx.globalAlpha = opacity;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                // 重置阴影
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;

                return true;
            });

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale, glowEffect, glowIntensity]);

    // 全局点击监听
    useEffect(() => {
        const handleClick = e => {
            const now = performance.now();
            const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
                x: e.clientX,
                y: e.clientY,
                angle: (2 * Math.PI * i) / sparkCount,
                startTime: now
            }));

            sparksRef.current.push(...newSparks);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [sparkCount]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className={`click-spark-canvas ${className}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
            />
            {children}
        </>
    );
};

export default GlobalClickSpark;