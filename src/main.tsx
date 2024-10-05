import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from './components/Form/ExpenseForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExpenseForm />
  </StrictMode>,
)
