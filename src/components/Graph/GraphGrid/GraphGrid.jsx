import { showTime } from 'utils/dateTimeFunctions';

const GraphGrid = ({ min, max, density = 100, width, height, x, y }) => {
  const range = max - min;
  const count = Math.floor(width / density);
  const step = Math.round(range / count / 1000) * 1000 || 1;
  const multiplier = width / range;
  const grid = [];
  for (let i = 0; i <= range; i += step) {
    const lineX = i * multiplier + x;
    const elem = (
      <g key={i}>
        <line
          x1={lineX}
          y1={y}
          x2={lineX}
          y2={y + height - 50}
          stroke="black"
        />
        <text x={lineX} y={y + height - 25}>
          {showTime(min + i)}
        </text>
      </g>
    );
    grid.push(elem);
  }
  return <g className="graph_grid">{grid}</g>;
};

export default GraphGrid;
