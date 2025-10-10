import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { BrowserRouter} from 'react-router-dom'
import AppRouter from './config/routes';
import { Toaster } from 'react-hot-toast';
import {ChatProvider} from './context/ChatContext'

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  
    <BrowserRouter>
      <ChatProvider>
        <Toaster position='top-center'/>
        <AppRouter/>
      </ChatProvider>
    </BrowserRouter>,
)
