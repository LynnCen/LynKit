/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

// Hooks 特效：动态连接网络 + 数据流
export default function HooksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const nodes = [
      { x: size * 0.5, y: size * 0.25, vx: 0, vy: 0 },
      { x: size * 0.3, y: size * 0.6, vx: 0, vy: 0 },
      { x: size * 0.7, y: size * 0.6, vx: 0, vy: 0 },
      { x: size * 0.5, y: size * 0.75, vx: 0, vy: 0 },
    ];

    const connections = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [1, 2],
    ];
    const dataFlows: { from: number; to: number; progress: number }[] = [];

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      time += 0.03;

      // 更新节点位置（轻微抖动）
      nodes.forEach((node, i) => {
        const targetX = node.x + Math.sin(time + i) * 2;
        const targetY = node.y + Math.cos(time + i * 1.5) * 2;
        node.vx += (targetX - node.x) * 0.1;
        node.vy += (targetY - node.y) * 0.1;
        node.vx *= 0.9;
        node.vy *= 0.9;
      });

      // 绘制连接线
      connections.forEach(([from, to]) => {
        const fromNode = nodes[from];
        const toNode = nodes[to];

        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        gradient.addColorStop(0, 'rgba(240, 147, 251, 0.6)');
        gradient.addColorStop(1, 'rgba(240, 147, 251, 0.2)');

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // 创建数据流
      if (Math.random() < 0.05 && dataFlows.length < 3) {
        const connection = connections[Math.floor(Math.random() * connections.length)];
        dataFlows.push({ from: connection[0], to: connection[1], progress: 0 });
      }

      // 绘制数据流
      dataFlows.forEach((flow, index) => {
        flow.progress += 0.02;
        if (flow.progress > 1) {
          dataFlows.splice(index, 1);
          return;
        }

        const fromNode = nodes[flow.from];
        const toNode = nodes[flow.to];
        const x = fromNode.x + (toNode.x - fromNode.x) * flow.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * flow.progress;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, 'rgba(240, 147, 251, 0.9)');
        gradient.addColorStop(1, 'rgba(240, 147, 251, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // 绘制节点
      nodes.forEach((node, i) => {
        const radius = 8 + Math.sin(time * 2 + i) * 2;

        // 外发光
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 2);
        gradient.addColorStop(0, 'rgba(240, 147, 251, 0.6)');
        gradient.addColorStop(1, 'rgba(240, 147, 251, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // 内核
        ctx.fillStyle = 'rgba(240, 147, 251, 0.9)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="module-canvas" />;
}
