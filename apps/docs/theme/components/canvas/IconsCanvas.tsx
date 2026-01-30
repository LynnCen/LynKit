/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

// 图标库特效：图标矩阵 + 高亮扫描
export default function IconsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const gridSize = 6;
    const cellSize = size / gridSize;
    const icons: { x: number; y: number; rotation: number; scale: number; opacity: number }[] = [];

    // 创建图标网格
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        icons.push({
          x: i * cellSize + cellSize / 2,
          y: j * cellSize + cellSize / 2,
          rotation: Math.random() * Math.PI * 2,
          scale: 0.6 + Math.random() * 0.4,
          opacity: 0.3 + Math.random() * 0.3,
        });
      }
    }

    let time = 0;
    let scanLine = 0;

    const drawIcon = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // 绘制简化的图标形状（星形）
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const radius = i % 2 === 0 ? size : size * 0.5;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      time += 0.02;
      scanLine = (scanLine + 1) % size;

      icons.forEach((icon, index) => {
        // 计算到扫描线的距离
        const distToScan = Math.abs(icon.y - scanLine);
        const isNearScan = distToScan < 30;
        const scanInfluence = isNearScan ? (1 - distToScan / 30) * 0.5 : 0;

        // 动态调整图标
        const animatedOpacity = icon.opacity + Math.sin(time + index * 0.5) * 0.2 + scanInfluence;
        const animatedScale =
          icon.scale + Math.sin(time * 1.5 + index * 0.3) * 0.1 + scanInfluence * 0.3;
        const animatedRotation = icon.rotation + time * 0.3;

        // 绘制图标
        ctx.fillStyle = `rgba(250, 165, 97, ${Math.max(0, Math.min(1, animatedOpacity))})`;
        drawIcon(icon.x, icon.y, cellSize * 0.25 * animatedScale, animatedRotation);

        // 高亮扫描效果
        if (isNearScan) {
          ctx.fillStyle = `rgba(250, 165, 97, ${scanInfluence * 0.5})`;
          ctx.beginPath();
          ctx.arc(icon.x, icon.y, cellSize * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 绘制扫描线
      const gradient = ctx.createLinearGradient(0, scanLine - 15, 0, scanLine + 15);
      gradient.addColorStop(0, 'rgba(250, 165, 97, 0)');
      gradient.addColorStop(0.5, 'rgba(250, 165, 97, 0.3)');
      gradient.addColorStop(1, 'rgba(250, 165, 97, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLine - 15, size, 30);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="module-canvas" />;
}
