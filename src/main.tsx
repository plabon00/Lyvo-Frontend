import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { BrowserRouter} from 'react-router'
import AppRouter from './config/routes';
import { Toaster } from 'react-hot-toast';

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter/>
      <Toaster position='top-center'/>
    </BrowserRouter>
  </StrictMode>,
)
