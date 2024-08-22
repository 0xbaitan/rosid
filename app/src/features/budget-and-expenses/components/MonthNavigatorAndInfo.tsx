import Button from 'react-bootstrap/Button';
import {
  useCurrentMonthThreeLetterCode,
  useCurrentYear,
  useMoveToNextMonth,
  useMoveToPrevMonth,
} from '../hooks/monthNavigatorAndInfoHooks';
import '../styles/MonthNavigatorAndInfo.scss';

export default function MonthNavigatorAndInfo() {
  const currentMonthCode = useCurrentMonthThreeLetterCode();
  const currentYear = useCurrentYear();
  const moveToNextMonth = useMoveToNextMonth();
  const moveToPrevMonth = useMoveToPrevMonth();
  return (
    <div>
      <Button onClick={moveToPrevMonth}>Prev</Button>
      <div>
        {currentMonthCode} {currentYear}
      </div>
      <Button onClick={moveToNextMonth}>Next</Button>
    </div>
  );
}
