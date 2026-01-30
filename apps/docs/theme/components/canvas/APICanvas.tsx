/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

// API 工具特效：雷达扫描 + 数据波纹
export default function APICanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size * 0.4;

    let radarAngle = 0;
    const waves: { radius: number; opacity: number }[] = [];
    const dataPoints: { angle: number; distance: number; size: number }[] = [];

    // 生成随机数据点
    for (let i = 0; i < 12; i++) {
      dataPoints.push({
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * maxRadius * 0.8 + maxRadius * 0.2,
        size: Math.random() * 3 + 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // 绘制同心圆
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * (i / 3), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(79, 172, 254, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 绘制雷达扫描线
      radarAngle += 0.03;
      const sweepGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        maxRadius
      );
      sweepGradient.addColorStop(0, 'rgba(79, 172, 254, 0.4)');
      sweepGradient.addColorStop(1, 'rgba(79, 172, 254, 0)');

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(radarAngle);
      ctx.fillStyle = sweepGradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, Math.PI * 0.25);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 绘制数据点
      dataPoints.forEach((point) => {
        const x = centerX + Math.cos(point.angle) * point.distance;
        const y = centerY + Math.sin(point.angle) * point.distance;

        // 检测是否被雷达扫过
        const angleDiff =
          (((point.angle - radarAngle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const isScanned = angleDiff < Math.PI * 0.25;

        if (isScanned && Math.random() < 0.02) {
          waves.push({ radius: point.distance, opacity: 1 });
        }

        // 绘制点
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, point.size * 3);
        gradient.addColorStop(0, `rgba(79, 172, 254, ${isScanned ? 1 : 0.4})`);
        gradient.addColorStop(1, 'rgba(79, 172, 254, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, point.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 绘制波纹
      waves.forEach((wave, index) => {
        wave.radius += 2;
        wave.opacity -= 0.015;

        if (wave.opacity <= 0) {
          waves.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(centerX, centerY, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79, 172, 254, ${wave.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // 中心发光点
      const pulseSize = 8 + Math.sin(radarAngle * 5) * 2;
      const centerGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        pulseSize
      );
      centerGradient.addColorStop(0, 'rgba(79, 172, 254, 1)');
      centerGradient.addColorStop(1, 'rgba(79, 172, 254, 0)');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="module-canvas" />;
}
