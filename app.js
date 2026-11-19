export const BARRIER_TYPES = [
  { id: 'sem-rampa', label: 'Calçada sem rampa ou guia rebaixada', severity: 'ALTA' },
  { id: 'buraco', label: 'Buraco, degrau ou piso irregular', severity: 'ALTA' },
  { id: 'poste-obstaculo', label: 'Poste, lixeira ou placa bloqueando faixa livre', severity: 'MÉDIA' },
  { id: 'sem-piso-tatil', label: 'Ausência de piso tátil direcional/alerta', severity: 'MÉDIA' }
];

export function scoreSegmentAccessibility(barriers = []) {
  const high = barriers.filter((b) => b.severity === 'ALTA').length;
  const med = barriers.filter((b) => b.severity === 'MÉDIA').length;
  const score = Math.max(0, 100 - high * 35 - med * 15);
  return {
    score,
    passableWheelchair: high === 0,
    classification: score >= 80 ? 'ACESSÍVEL' : score >= 50 ? 'PARCIAL' : 'BLOQUEADO'
  };
}
