import WorkForm from '../components/WorkInput/WorkForm';
import WorkTable from '../components/Tables/WorkTable';
import SaveWorkButton from '../components/WorkInput/SaveWorkButton';
import WorkChart from '../components/Charts/WorkChart';
import WorkWarningModal from '../components/Modals/WorkWarningModal';
import ResetWarningModal from '../components/Modals/ResetWarningModal';
import SaveWorkModal from '../components/Modals/SaveWorkModal';

const Work = () => {
  return (
    <>
      <WorkForm />
      <WorkTable />
      <SaveWorkButton />
      <WorkChart />
      <WorkWarningModal />
      <ResetWarningModal />
      <SaveWorkModal />
    </>
  );
};

export default Work;
