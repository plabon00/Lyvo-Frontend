import App from "../App";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import ChatPage from "../components/ChatPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
