export const workDetailsProfile = (workValues, key) => {
  if (!key) {
    return;
  } else {
    const workData = workValues.get(parseInt(key));

    return (
      <>
        <div>Saved On: {workData.created_at}</div>
        <div>Date: {workData.date}</div>
        <div>
          {workData.is_outside ? 'Work will be outside' : 'Work will be inside'}
        </div>
        <div>
          {workData.is_welding
            ? 'This job requires welding'
            : 'No welding needed for this job'}
        </div>
        <div>
          {workData.is_scaffolding
            ? 'Scaffolding will be required for this job'
            : 'No scaffolding needed for this job'}
        </div>
        <br />
        <div>Details:</div>
        <div>{workData.work_details}</div>
      </>
    );
  }
};
