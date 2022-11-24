import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components";
import Chat from "../components/chat";
import ChatSpace from "../components/chat-space";
import "../assets/styles.scss";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat-space" element={<ChatSpace />} />
      </Routes>
    </Router>
  );
};

export default Index;
