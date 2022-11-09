import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import { RectBackground, RectField } from './Graph.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { showTime, UTCStringToMillisecs } from 'utils/dateTimeFunctions';
import GraphGrid from './GraphGrid/GraphGrid';
import GraphStrip from './GraphStrip/GraphStrip';

const graphSettings = {
  height: 1000,
  width: 2000,
  paddingV: 100,
  paddingH: 100,
  stripHeight: 0.6,
};

const placePointCoord = (value, minValue, maxValue, coordRange) => {
  const relativeCoord = (value - minValue) / (maxValue - minValue);
  const coord = relativeCoord * coordRange;
  return coord;
};

const Graph = ({ scale, onReady }) => {
  const devices = useSelector(selectors.getDevices);
  const timeGap = 3000;
  const [timeBoundaries, setTimeBoundries] = useState({
    min: 0,
    max: 0,
  });

  // set time boundaries
  useEffect(() => {
    const now = new Date().getTime();
    const tempTime = {
      min: now - timeGap,
      max: 0,
    };
    devices.forEach(device => {
      device.log.forEach(record => {
        const start = UTCStringToMillisecs(record.start);
        const stop = UTCStringToMillisecs(record.stop);
        if (tempTime.min > start) {
          tempTime.min = start;
        }
        if (stop && tempTime.max < stop) {
          tempTime.max = stop;
        }
        if (!stop && tempTime.max < start + timeGap) {
          tempTime.max = start + timeGap;
        }
      });
    });
    setTimeBoundries(tempTime);
  }, [devices]);

  const { width, height, paddingV, paddingH, stripHeight } = graphSettings;
  const scaledWidth = (width * scale) / 100;

  return (
    <>
      <svg
        viewBox={`0 0 ${scaledWidth + paddingH * 2} ${height + paddingV * 2}`}
        preserveAspectRatio="none"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="graph_body">
          <RectBackground
            width={scaledWidth + paddingH * 2}
            height={height + paddingV * 2}
          />
          <RectField
            x={paddingH}
            y={paddingV}
            width={scaledWidth}
            height={height}
          />
          {timeBoundaries.max &&
            devices.map((device, index, arr) => {
              const rowHeight = height / arr.length;
              const rowY = rowHeight * index;
              const rowRectArr = device.log.map(record => {
                const start = UTCStringToMillisecs(record.start);
                const stop =
                  record.stop !== ''
                    ? UTCStringToMillisecs(record.stop)
                    : timeBoundaries.max;
                const startX = placePointCoord(
                  start,
                  timeBoundaries.min,
                  timeBoundaries.max,
                  scaledWidth
                );
                const stopX = placePointCoord(
                  stop,
                  timeBoundaries.min,
                  timeBoundaries.max,
                  scaledWidth
                );
                return (
                  <GraphStrip
                    key={record.rec_id}
                    x={startX + paddingV}
                    y={rowY + paddingH}
                    width={stopX - startX}
                    height={rowHeight * stripHeight}
                    fill={device.color}
                    rx={4}
                    deviceName={device.name}
                    name={record.file?.name || 'no name'}
                    startCaption={showTime(record.start)}
                    stopCaption={showTime(record.stop)}
                  />
                );
              });
              return rowRectArr;
            })}
        </g>
        {timeBoundaries.max && (
          <GraphGrid
            min={timeBoundaries.min}
            max={timeBoundaries.max}
            x={paddingH}
            y={paddingV}
            width={scaledWidth}
            height={height}
            density={100}
          />
        )}
      </svg>
    </>
  );
};

export default Graph;
