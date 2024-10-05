import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from './components/Form/ExpenseForm';
// import Table from './components/Table/Table';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExpenseForm />
    {/* {<Table />} */}
  </StrictMode>,
)
