import App from '../App';
import { Routes, Route } from 'react-router';
import ErrorPage from '../ErrorPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/chat' element={<h1>Chat Page</h1>} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  );
};

export default AppRouter;
