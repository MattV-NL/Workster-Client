import { useContext, useEffect, useState, useMemo } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './compare.scss';

const Compare = () => {
  const { weatherChartValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);
  const [isConflict, setIsConflict] = useState(null);
  const workCompareValues = useMemo(() => new Map(workValues), [workValues]);

  useEffect(() => {
    const nextConflict = [
      ...new Set([...weatherChartValues.keys(), ...workCompareValues.keys()]),
    ].some((date) => {
      const { precip, wind } = weatherChartValues.get(date) || {};
      const { isOutside, isWelding, isScaffolding } =
        workCompareValues.get(date) || {};

      return !!(
        (precip > 20 || wind > 30) &&
        (isOutside || isWelding || isScaffolding)
      );
    });
    setIsConflict(nextConflict);
  }, [workCompareValues, weatherChartValues, setIsConflict]);

  return (
    <div className={isConflict ? 'alert' : 'no-alert'}>
      {isConflict === false && 'No'} Conflict
    </div>
  );
};

export default Compare;
