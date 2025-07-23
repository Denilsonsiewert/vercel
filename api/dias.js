export default function handler(req, res) {
  const dataInicio = new Date('2023-02-20');
  const hoje = new Date();

  dataInicio.setHours(0,0,0,0);
  hoje.setHours(0,0,0,0);

  const diffTime = hoje - dataInicio;
  const dias = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const svg = `
  <svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="300" fill="#fff" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-size="90" font-family="Arial" fill="#2e7d32" font-weight="bold">${dias}</text>
    <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle"
          font-size="28" font-family="Arial" fill="#333">dias sem acidentes</text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
