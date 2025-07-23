import { createCanvas } from 'canvas';

export default async function handler(req, res) {
  const largura = 600;
  const altura = 300;
  const canvas = createCanvas(largura, altura);
  const ctx = canvas.getContext('2d');

  // Cálculo dos dias
  const dataInicial = new Date('2023-02-20');
  const hoje = new Date();
  dataInicial.setHours(0, 0, 0, 0);
  hoje.setHours(0, 0, 0, 0);
  const dias = Math.floor((hoje - dataInicial) / (1000 * 60 * 60 * 24));

  // Fundo
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, largura, altura);

  // Título
  ctx.fillStyle = '#2e7d32';
  ctx.font = 'bold 80px Arial';
  ctx.fillText(`${dias}`, 230, 150);

  // Subtítulo
  ctx.fillStyle = '#444';
  ctx.font = '30px Arial';
  ctx.fillText('dias sem acidentes', 160, 210);

  // Resposta
  res.setHeader('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
}
