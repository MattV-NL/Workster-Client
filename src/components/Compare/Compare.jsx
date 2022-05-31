import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './compare.scss';

const Compare = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);
  const [isConflict, setIsConflict] = useState(null);

  useEffect(() => {
    const nextConflict = [
      ...new Set([...weatherValues.keys(), ...workValues.keys()]),
    ].some((date) => {
      const { precip, wind } = weatherValues.get(date) || {};
      const { isOutside, isWelding, isScaffolding } =
        workValues.get(date) || {};

      return !!(
        (precip > 20 || wind > 40) &&
        (isOutside || isWelding || isScaffolding)
      );
    });
    setIsConflict(nextConflict);
  }, [workValues, weatherValues, setIsConflict]);

  return (
    <div className={isConflict ? 'alert' : 'no-alert'}>
      {isConflict === false && 'No'} Conflict
    </div>
  );
};

export default Compare;
