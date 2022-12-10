import WorkForm from '../components/WorkInput/WorkForm';
import WorkTable from '../components/Tables/WorkTable';
import SaveWorkButton from '../components/WorkInput/SaveWorkButton';
import WorkChart from '../components/Charts/WorkChart';
import WorkWarningModal from '../components/Modals/WorkWarningModal';
import ResetWarningModal from '../components/Modals/ResetWarningModal';
import SaveWorkModal from '../components/Modals/SaveWorkModal';
import ConflictMessage from '../components/ConflictMessage/ConflictMessage';

const Work = () => {
  return (
    <>
      <WorkForm />
      <ConflictMessage />
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
