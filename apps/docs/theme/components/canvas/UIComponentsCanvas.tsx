/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

// UI 组件特效：3D 立方体旋转 + 粒子
export default function UIComponentsCanvas() {
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
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      time += 0.02;

      // 3D 立方体顶点
      const cubeSize = 40;
      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];

      // 旋转矩阵
      const rotateX = (v: number[], angle: number) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [v[0], v[1] * cos - v[2] * sin, v[1] * sin + v[2] * cos];
      };

      const rotateY = (v: number[], angle: number) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [v[0] * cos + v[2] * sin, v[1], -v[0] * sin + v[2] * cos];
      };

      // 投影到2D
      const project = (v: number[]) => {
        const scale = 150 / (150 + v[2] * cubeSize);
        return [centerX + v[0] * cubeSize * scale, centerY + v[1] * cubeSize * scale];
      };

      // 旋转并绘制立方体
      const rotated = vertices.map((v) => {
        let r = rotateX(v, time);
        r = rotateY(r, time * 0.7);
        return r;
      });

      const projected = rotated.map(project);

      // 绘制立方体边缘
      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = 'rgba(102, 126, 234, 0.6)';
      ctx.lineWidth = 2;

      edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(projected[start][0], projected[start][1]);
        ctx.lineTo(projected[end][0], projected[end][1]);
        ctx.stroke();
      });

      // 绘制顶点
      projected.forEach(([x, y]) => {
        ctx.fillStyle = 'rgba(102, 126, 234, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 周围粒子
      for (let i = 0; i < 20; i++) {
        const angle = (time + i * 0.3) * 0.5;
        const radius = 70 + Math.sin(time * 2 + i) * 10;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const size = 1 + Math.sin(time * 3 + i) * 0.5;

        ctx.fillStyle = `rgba(102, 126, 234, ${0.4 + Math.sin(time + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="module-canvas" />;
}
