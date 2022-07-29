import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './compare.scss';

const Compare = () => {
  const { weatherChartValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);
  const [isConflict, setIsConflict] = useState(null);

  useEffect(() => {
    const nextConflict = [
      ...new Set([...weatherChartValues.keys(), ...workValues.keys()]),
    ].some((date) => {
      const { precip, wind } = weatherChartValues.get(date) || {};
      const { isOutside, isWelding, isScaffolding } =
        workValues.get(date) || {};

      return !!(
        (precip > 20 || wind > 30) &&
        (isOutside || isWelding || isScaffolding)
      );
    });
    setIsConflict(nextConflict);
  }, [workValues, weatherChartValues, setIsConflict]);

  return (
    <div className={isConflict ? 'alert' : 'no-alert'}>
      {isConflict === false && 'No'} Conflict
    </div>
  );
};

export default Compare;
