import ChatIcon from "../assets/images/chat-icon.svg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="chat-btn" onClick={() => navigate("/chat")}>
        <img src={ChatIcon} alt="chat" />
      </div>
    </div>
  );
};

export default Index;
