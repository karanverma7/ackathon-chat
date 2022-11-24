import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Close from "../../assets/images/close.svg";
import Back from "../../assets/images/back.svg";
import Grp from "../../assets/images/grp.png";
import Send from "../../assets/images/send.svg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-space">
      <div className="top-nav">
        <img onClick={() => navigate("/chat")} src={Back} alt="chat" />
        <img onClick={() => navigate("/")} src={Logo} alt="chat" />
        <img onClick={() => navigate("/")} src={Close} alt="close" />
      </div>
      <img
        style={{ height: "50px", marginLeft: "35%" }}
        onClick={() => navigate("/")}
        src={Grp}
        alt="close"
      />
      <div className="chat-head">
        Get an instant reply for our customer care
      </div>
      <div className="send-container">
        <div>Select or type the message</div>
        <img onClick={() => navigate("/")} src={Send} alt="send" />
      </div>
    </div>
  );
};

export default Index;
