import {
  BrowserRouter as Router,
  Route,
  Routes as RoutingTable,
} from 'react-router-dom';
import Home from './pages/Home';
import BudgetAndExpenses from './pages/BudgetAndExpenses';

export default function Routes() {
  return (
    <Router>
      <RoutingTable>
        <Route path="/" element={<Home />} />
        <Route path="/budget-and-expenses" element={<BudgetAndExpenses />} />
      </RoutingTable>
    </Router>
  );
}
