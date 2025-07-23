import { createCanvas } from 'canvas';

export default function handler(req, res) {
  const canvas = createCanvas(600, 300);
  const ctx = canvas.getContext('2d');

  const inicio = new Date('2023-02-20');
  const hoje = new Date();
  inicio.setHours(0,0,0,0);
  hoje.setHours(0,0,0,0);

  const dias = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));

  // Fundo
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 600, 300);

  // Número
  ctx.fillStyle = '#2e7d32';
  ctx.font = 'bold 90px Arial';
  ctx.fillText(`${dias}`, 230, 160);

  // Texto
  ctx.fillStyle = '#333';
  ctx.font = '28px Arial';
  ctx.fillText('dias sem acidentes', 160, 220);

  res.setHeader('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
}
