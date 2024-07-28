import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import MonthNavigatorAndInfo from "./MonthNavigatorAndInfo";

export default function BudgetAndExpensesControls() {
  return (
    <div>
      <Button>
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </Button>
      <MonthNavigatorAndInfo />
    </div>
  );
}
