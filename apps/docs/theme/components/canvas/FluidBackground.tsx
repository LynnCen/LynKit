/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

// 淡雅背景 - 柔和渐变，不突兀
export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 柔和的渐变色块
    const blobs = [
      { x: 0.2, y: 0.3, radius: 0.4, color: 'rgba(120, 140, 200, 0.08)' },
      { x: 0.8, y: 0.2, radius: 0.35, color: 'rgba(160, 140, 180, 0.06)' },
      { x: 0.5, y: 0.7, radius: 0.45, color: 'rgba(140, 160, 200, 0.05)' },
      { x: 0.1, y: 0.8, radius: 0.3, color: 'rgba(180, 160, 200, 0.04)' },
    ];

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      // 绘制柔和的渐变色块
      blobs.forEach((blob, index) => {
        const offsetX = Math.sin(time + index * 1.5) * 50;
        const offsetY = Math.cos(time + index * 1.2) * 30;

        const x = blob.x * canvas.width + offsetX;
        const y = blob.y * canvas.height + offsetY;
        const radius = blob.radius * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 添加细微的噪点纹理效果（通过少量小点）
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time * 0.5 + i * 0.8) + 1) * canvas.width * 0.5;
        const y = (Math.cos(time * 0.4 + i * 0.6) + 1) * canvas.height * 0.5;
        const size = 1 + Math.sin(time + i) * 0.5;

        ctx.fillStyle = `rgba(120, 140, 180, ${0.1 + Math.sin(time + i) * 0.05})`;
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
  }, []);

  return <canvas ref={canvasRef} className="fluid-bg-canvas" />;
}
