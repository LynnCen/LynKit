/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

interface HeroCanvasProps {
  title: string;
  subtitle: string;
}

// Canvas 绘制的 Hero 文字 - 带动画效果
export default function HeroCanvas({ title, subtitle }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let animationId: number;

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);
      time += 0.03;

      // 绘制标题
      const fontSize = Math.min(width * 0.08, 72);
      ctx.font = `900 ${fontSize}px "Inter", system-ui, -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 创建渐变文字
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(0.5, '#764ba2');
      gradient.addColorStop(1, '#f093fb');

      // 绘制标题文字（带发光效果）
      const titleY = height * 0.35;

      // 外发光
      ctx.shadowColor = 'rgba(102, 126, 234, 0.5)';
      ctx.shadowBlur = 30;
      ctx.fillStyle = gradient;
      ctx.fillText(title, width / 2, titleY);

      // 重置阴影
      ctx.shadowBlur = 0;

      // 绘制副标题
      const subtitleFontSize = Math.min(width * 0.022, 20);
      ctx.font = `400 ${subtitleFontSize}px "Inter", system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText(subtitle, width / 2, height * 0.55);

      // 绘制装饰粒子
      for (let i = 0; i < 12; i++) {
        const angle = (time + i * 0.5) * 0.5;
        const radius = 150 + Math.sin(time + i) * 30;
        const x = width / 2 + Math.cos(angle) * radius;
        const y = titleY + Math.sin(angle) * radius;
        const size = 2 + Math.sin(time * 2 + i) * 1;
        const opacity = (Math.sin(time + i) + 1) * 0.25;

        ctx.fillStyle = `rgba(102, 126, 234, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [title, subtitle]);

  return (
    <canvas ref={canvasRef} className="hero-canvas" style={{ width: '100%', height: '300px' }} />
  );
}
