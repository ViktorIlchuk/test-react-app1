import './App.css';
import Expenses from './components/Expenses';
import ExpensesForm from './components/ExpensesForm';

function App() {
  return (
    <div className="App">
      <ExpensesForm />
      <Expenses />
    </div>
  );
}

export default App;
