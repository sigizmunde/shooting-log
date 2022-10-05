import { checkHashColorLightness } from 'utils/colorFunctions';

const stripSettings = {
  fullLength: 150,
  mediumLength: 75,
  minLength: 15,
};

const GraphStrip = ({
  x,
  y,
  width,
  height,
  fill = '#008080',
  rx = 4,
  deviceName = '',
  name,
  startCaption,
  stopCaption,
}) => {
  const { fullLength, mediumLength, minLength } = stripSettings;
  const base = height > 50 ? 10 : height / 5;
  const topLine = y + 2.5 * base;
  const bottomLine = y + height - 1.5 * base;
  const underLine = y + height + 2.5 * base;
  const left = x + 1.5 * base;
  const right = x + width - 1.5 * base;
  const fontSize = 1.6 * base;
  const captionColor = checkHashColorLightness(fill, 127) ? '#050505' : '#fff';

  return (
    <g style={{ fontSize: fontSize }}>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={rx} />
      {width >= stripSettings.fullLength && (
        <text
          x={left}
          y={topLine}
          fill={captionColor}
          style={{ fontWeight: 700 }}
        >
          {deviceName}
        </text>
      )}
      {width >= stripSettings.mediumLength && (
        <text x={left} y={bottomLine} fill={captionColor}>
          {name}
        </text>
      )}
      {width >= minLength && width < mediumLength && (
        <text
          x={right}
          y={bottomLine}
          fill={captionColor}
          transform={`rotate(-90, ${right + 1.0 * base}, ${bottomLine})`}
        >
          {name}
        </text>
      )}
      {width >= mediumLength && (
        <text x={x} y={underLine}>
          {startCaption}
        </text>
      )}
      {width >= minLength && width < mediumLength && (
        <text x={x} y={underLine}>
          {startCaption.slice(-3)}
        </text>
      )}
      {width >= fullLength && (
        <text x={x + width - 5 * base} y={underLine}>
          {stopCaption}
        </text>
      )}
    </g>
  );
};

export default GraphStrip;
